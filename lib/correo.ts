import { site } from "@/lib/site";

/**
 * Envío de avisos por correo con Resend.
 *
 * Lo usan las acciones de servidor del formulario de contacto y del de
 * descargas; lee la clave de API, así que no debe importarse desde un
 * componente de cliente. Variables de entorno
 * en Vercel:
 *   RESEND_API_KEY  — obligatoria. Clave de la cuenta de Resend (resend.com).
 *   CONTACT_TO      — opcional. Correo donde llegan los avisos; por defecto,
 *                     el correo público del sitio.
 *   CONTACT_FROM    — opcional. Remitente, en formato `Nombre <correo>`. Exige
 *                     un dominio verificado en Resend. Sin ella se usa el
 *                     remitente de pruebas, que solo entrega al correo de la
 *                     cuenta de Resend.
 */

export type ResultadoEnvio = "enviado" | "sin-configurar" | "fallo";

export async function enviarAviso({
  asunto,
  texto,
  responderA,
}: {
  asunto: string;
  texto: string;
  responderA?: string;
}): Promise<ResultadoEnvio> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "sin-configurar";

  // Resend solo despacha desde dominios verificados con registros DNS. Hasta
  // que procesosclaros.cl esté verificado, `onboarding@resend.dev` funciona
  // sin configuración —con la limitación de que solo entrega al correo de la
  // cuenta de Resend—. Una vez verificado el dominio, basta definir
  // CONTACT_FROM en Vercel.
  const remitente =
    process.env.CONTACT_FROM ?? "Procesos Claros <onboarding@resend.dev>";
  const destino = process.env.CONTACT_TO ?? site.email;

  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: remitente,
        to: [destino],
        ...(responderA ? { reply_to: responderA } : {}),
        subject: asunto,
        text: texto,
      }),
    });

    if (!respuesta.ok) {
      throw new Error(`Resend respondió ${respuesta.status}`);
    }
    return "enviado";
  } catch (error) {
    console.error(`Error al enviar el aviso "${asunto}":`, error);
    return "fallo";
  }
}

/** Valida y normaliza un campo de texto de un formulario. */
export function campo(formData: FormData, nombre: string, maxLength: number): string {
  const valor = formData.get(nombre);
  return typeof valor === "string" ? valor.trim().slice(0, maxLength) : "";
}

export function esCorreoValido(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
