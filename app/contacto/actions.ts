"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/** Valida y normaliza un campo de texto del formulario. */
function campo(formData: FormData, nombre: string, maxLength: number): string {
  const valor = formData.get(nombre);
  return typeof valor === "string" ? valor.trim().slice(0, maxLength) : "";
}

/**
 * Recibe el formulario de diagnóstico y lo envía por correo.
 *
 * La versión anterior de este formulario solo mostraba el mensaje de gracias
 * sin enviar nada: cada solicitud de diagnóstico se perdía. Acá el mensaje de
 * éxito se muestra únicamente si el envío se completó de verdad.
 *
 * Requiere dos variables de entorno en Vercel:
 *   RESEND_API_KEY  — clave de la cuenta de Resend (resend.com)
 *   CONTACT_TO      — correo donde llegan los mensajes (opcional; por defecto
 *                     el correo público del sitio)
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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "El correo no parece válido. ¿Puedes revisarlo?",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sin credenciales no se finge un envío exitoso: se dice la verdad y se
    // ofrece el camino alternativo.
    return {
      status: "error",
      message: `El formulario aún no está conectado. Escríbeme directamente a ${site.email} y te respondo igual de rápido.`,
    };
  }

  const destino = process.env.CONTACT_TO ?? site.email;

  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Procesos Claros <no-responder@procesosclaros.cl>`,
        to: [destino],
        reply_to: email,
        subject: `Diagnóstico solicitado: ${empresa}`,
        text: [
          `Nombre:  ${nombre}`,
          `Empresa: ${empresa}`,
          `Email:   ${email}`,
          "",
          "Mensaje:",
          mensaje,
        ].join("\n"),
      }),
    });

    if (!respuesta.ok) {
      throw new Error(`Resend respondió ${respuesta.status}`);
    }
  } catch (error) {
    console.error("Error al enviar el formulario de contacto:", error);
    return {
      status: "error",
      message: `No pude enviar tu mensaje. Escríbeme directamente a ${site.email} y lo resolvemos.`,
    };
  }

  return { status: "success" };
}
