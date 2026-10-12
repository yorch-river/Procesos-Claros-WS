"use server";

import { campo, enviarAviso, esCorreoValido } from "@/lib/correo";
import { testMadurez } from "@/content/recursos";

export type DescargaState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Registra a quien pide el test y le entrega la descarga.
 *
 * El aviso llega por correo con sus datos para poder hacer seguimiento. Si el
 * aviso falla, la descarga se entrega igual: la persona cumplió su parte y no
 * tiene por qué pagar un problema de configuración. El fallo queda en los
 * registros de Vercel.
 */
export async function solicitarDescarga(
  _prevState: DescargaState,
  formData: FormData,
): Promise<DescargaState> {
  // Campo trampa: los bots lo rellenan, las personas no lo ven.
  if (campo(formData, "sitio-web", 200)) {
    return { status: "success" };
  }

  const nombre = campo(formData, "nombre", 120);
  const empresa = campo(formData, "empresa", 160);
  const email = campo(formData, "email", 200);
  // No bloquea la descarga si llega vacío: la persona ya cumplió su parte.
  const tieneErp = campo(formData, "tiene_erp", 60) || "(sin responder)";

  if (!nombre || !empresa || !email) {
    return {
      status: "error",
      message: "Faltan datos. Completa tu nombre, tu empresa y tu correo.",
    };
  }

  if (!esCorreoValido(email)) {
    return {
      status: "error",
      message: "El correo no parece válido. ¿Puedes revisarlo?",
    };
  }

  const resultado = await enviarAviso({
    asunto: `Descarga del ${testMadurez.titulo}: ${empresa}`,
    responderA: email,
    texto: [
      `Recurso: ${testMadurez.titulo}`,
      "",
      `Nombre:  ${nombre}`,
      `Empresa: ${empresa}`,
      `Email:   ${email}`,
      `¿Tiene ERP?: ${tieneErp}`,
    ].join("\n"),
  });

  if (resultado !== "enviado") {
    console.error(
      `Descarga entregada sin aviso (${resultado}): ${nombre} · ${empresa} · ${email}`,
    );
  }

  return { status: "success" };
}
