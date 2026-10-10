"use server";

import { campo, enviarAviso, esCorreoValido } from "@/lib/correo";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Recibe el formulario de diagnóstico y lo envía por correo.
 *
 * La versión anterior de este formulario solo mostraba el mensaje de gracias
 * sin enviar nada: cada solicitud de diagnóstico se perdía. Acá el mensaje de
 * éxito se muestra únicamente si el envío se completó de verdad. La
 * configuración de Resend está documentada en lib/correo.ts.
 */
export async function enviarContacto(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Campo trampa: los bots lo rellenan, las personas no lo ven.
  if (campo(formData, "sitio-web", 200)) {
    return { status: "success" };
  }

  const nombre = campo(formData, "nombre", 120);
  const empresa = campo(formData, "empresa", 160);
  const email = campo(formData, "email", 200);
  const mensaje = campo(formData, "mensaje", 4000);

  if (!nombre || !empresa || !email || !mensaje) {
    return {
      status: "error",
      message: "Faltan datos. Revisa que todos los campos estén completos.",
    };
  }

  if (!esCorreoValido(email)) {
    return {
      status: "error",
      message: "El correo no parece válido. ¿Puedes revisarlo?",
    };
  }

  const resultado = await enviarAviso({
    asunto: `Diagnóstico solicitado: ${empresa}`,
    responderA: email,
    texto: [
      `Nombre:  ${nombre}`,
      `Empresa: ${empresa}`,
      `Email:   ${email}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n"),
  });

  if (resultado === "sin-configurar") {
    // Sin credenciales no se finge un envío exitoso: se dice la verdad y se
    // ofrece el camino alternativo.
    return {
      status: "error",
      message: `El formulario aún no está conectado. Escríbeme directamente a ${site.email} y te respondo igual de rápido.`,
    };
  }

  if (resultado === "fallo") {
    return {
      status: "error",
      message: `No pude enviar tu mensaje. Escríbeme directamente a ${site.email} y lo resolvemos.`,
    };
  }

  return { status: "success" };
}
