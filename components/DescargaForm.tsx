"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { solicitarDescarga, type DescargaState } from "@/app/recursos/actions";
import CampoTieneErp from "@/components/CampoTieneErp";
import { FiguraDesenredo } from "@/components/Figuras";
import type { Recurso } from "@/content/recursos";

const estadoInicial: DescargaState = { status: "idle" };

const claseEtiqueta = "mb-2 block font-mono text-[13px] text-gris";
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
      {pending ? "Preparando…" : "Descargar el test"}
      <span aria-hidden="true">↓</span>
    </button>
  );
}

const campos = [
  { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre", autoComplete: "name" },
  { name: "empresa", label: "Empresa", type: "text", placeholder: "Nombre de tu empresa", autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", placeholder: "tu@empresa.com", autoComplete: "email" },
] as const;

export default function DescargaForm({ recurso }: { recurso: Recurso }) {
  const [state, formAction] = useActionState(solicitarDescarga, estadoInicial);

  if (state.status === "success") {
    return (
      <div className="border-t-2 border-tinta bg-papel p-8 sm:p-10">
        <FiguraDesenredo className="mb-6 h-20 w-20" />
        <h2 className="mb-3 text-3xl font-bold tracking-[-0.022em]">
          Listo, aquí tienes tu test.
        </h2>
        <p className="mb-8 text-lg text-tinta-suave">
          Ábrelo en Excel o Google Sheets y empieza por la hoja «Cómo usar».
        </p>
        <a
          href={recurso.archivo}
          download={recurso.nombreArchivo}
          className="flex min-h-[60px] items-center justify-between gap-3 bg-tinta px-6 text-lg font-semibold text-white transition-colors hover:bg-acento"
        >
          Descargar {recurso.titulo.toLowerCase()}
          <span aria-hidden="true">↓</span>
        </a>
        <p className="mt-3 font-mono text-[13px] text-gris">{recurso.formato}</p>
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

        {campos.map((c) => (
          <div key={c.name}>
            <label htmlFor={`descarga-${c.name}`} className={claseEtiqueta}>
              {c.label}
            </label>
            <input
              id={`descarga-${c.name}`}
              name={c.name}
              type={c.type}
              required
              autoComplete={c.autoComplete}
              placeholder={c.placeholder}
              className={claseCampo}
            />
          </div>
        ))}

        <CampoTieneErp idPrefijo="descarga-" etiquetaClase={claseEtiqueta} />

        {/* Trampa para bots: invisible para personas, irresistible para spam. */}
        <div aria-hidden="true" className="absolute left-[-9999px]">
          <label htmlFor="descarga-sitio-web">No completar</label>
          <input id="descarga-sitio-web" name="sitio-web" type="text" tabIndex={-1} />
        </div>

        <BotonEnviar />

        <p className="text-[13px] text-gris">
          Te escribiré solo si tengo algo útil que contarte sobre tu resultado.
          Tus datos no se comparten con nadie.
        </p>
      </form>
    </div>
  );
}
