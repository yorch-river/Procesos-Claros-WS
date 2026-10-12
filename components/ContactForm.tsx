"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import CampoTieneErp from "@/components/CampoTieneErp";
import { FiguraDesenredo } from "@/components/Figuras";
import { enviarContacto, type ContactState } from "@/app/contacto/actions";

const estadoInicial: ContactState = { status: "idle" };

const claseEtiqueta = "mb-2 block font-mono text-[13px] text-gris";
// Campo recto con borde grafito; el foco se marca en azul petróleo, igual que en el
// resto del sitio.
const claseCampo =
  "w-full border-[1.5px] border-[#C9CBCF] bg-white px-4 py-3 text-lg outline-none transition-colors placeholder:text-[#8C9097] focus:border-tinta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento";

function BotonEnviar() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex min-h-[60px] w-full items-center justify-between gap-3 bg-acento px-6 text-lg font-semibold text-white transition-colors hover:bg-acento-oscuro disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Enviando…" : "Solicitar diagnóstico"}
      <span aria-hidden="true">→</span>
    </button>
  );
}

const camposTexto = [
  {
    name: "nombre",
    label: "Nombre",
    type: "text",
    placeholder: "Tu nombre",
    autoComplete: "name",
  },
  {
    name: "empresa",
    label: "Empresa",
    type: "text",
    placeholder: "Nombre de tu empresa",
    autoComplete: "organization",
  },
] as const;

export default function ContactForm() {
  const [state, formAction] = useActionState(enviarContacto, estadoInicial);

  if (state.status === "success") {
    return (
      <div className="border-t-2 border-tinta bg-papel p-8 sm:p-10">
        {/* El enredo que termina en línea recta: lo que viene después. */}
        <FiguraDesenredo className="mb-8 h-24 w-24" />
        <h2 className="mb-4 text-3xl font-bold tracking-[-0.025em]">
          ¡Gracias por tu mensaje!
        </h2>
        <p className="text-xl text-tinta-suave">
          He recibido tu información. Me pondré en contacto contigo en las
          próximas 24-48 horas para agendar tu diagnóstico gratuito.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t-2 border-tinta bg-papel p-6 sm:p-10">
      <form action={formAction} className="space-y-6">
        {state.status === "error" && (
          <p
            role="alert"
            className="flex gap-3 border-[1.5px] border-acento bg-white p-4 text-[15px] text-acento-oscuro"
          >
            <span aria-hidden="true" className="font-bold">!</span>
            {state.message}
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {camposTexto.map((campo) => (
            <div key={campo.name}>
              <label
                htmlFor={campo.name}
                className={claseEtiqueta}
              >
                {campo.label}
              </label>
              <input
                id={campo.name}
                name={campo.name}
                type={campo.type}
                required
                autoComplete={campo.autoComplete}
                placeholder={campo.placeholder}
                className={claseCampo}
              />
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor="email"
            className={claseEtiqueta}
          >
            Email Profesional
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@empresa.com"
            className={claseCampo}
          />
        </div>

        <CampoTieneErp etiquetaClase={claseEtiqueta} />

        <div>
          <label
            htmlFor="mensaje"
            className={claseEtiqueta}
          >
            ¿Qué está pasando hoy en tu negocio?
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            placeholder="Cuéntame brevemente tus retos operativos…"
            className={claseCampo}
          />
        </div>

        {/* Trampa para bots: invisible para personas, irresistible para spam. */}
        <div aria-hidden="true" className="absolute left-[-9999px]">
          <label htmlFor="sitio-web">No completar</label>
          <input id="sitio-web" name="sitio-web" type="text" tabIndex={-1} />
        </div>

        <BotonEnviar />

        <p className="text-center text-[13px] text-gris">
          Tus datos están seguros y serán tratados con absoluta
          confidencialidad.
        </p>
      </form>
    </div>
  );
}
