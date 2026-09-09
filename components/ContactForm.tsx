"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle, Send, AlertCircle } from "lucide-react";
import { enviarContacto, type ContactState } from "@/app/contacto/actions";

const estadoInicial: ContactState = { status: "idle" };

function BotonEnviar() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Enviando…" : "Solicitar Diagnóstico"}
      <Send className="h-5 w-5" aria-hidden="true" />
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
      <div className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-xl">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle className="h-10 w-10" aria-hidden="true" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-slate-900">
          ¡Gracias por tu mensaje!
        </h2>
        <p className="text-xl text-slate-600">
          He recibido tu información. Me pondré en contacto contigo en las
          próximas 24-48 horas para agendar tu diagnóstico gratuito.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-xl">
      <form action={formAction} className="space-y-6">
        {state.status === "error" && (
          <p
            role="alert"
            className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
            {state.message}
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {camposTexto.map((campo) => (
            <div key={campo.name}>
              <label
                htmlFor={campo.name}
                className="mb-2 block text-sm font-bold text-slate-700"
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
                className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none ring-blue-500 transition-all focus:ring-2"
              />
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-slate-700"
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
            className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none ring-blue-500 transition-all focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            ¿Qué está pasando hoy en tu negocio?
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            placeholder="Cuéntame brevemente tus retos operativos…"
            className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none ring-blue-500 transition-all focus:ring-2"
          />
        </div>

        {/* Trampa para bots: invisible para personas, irresistible para spam. */}
        <div aria-hidden="true" className="absolute left-[-9999px]">
          <label htmlFor="sitio-web">No completar</label>
          <input id="sitio-web" name="sitio-web" type="text" tabIndex={-1} />
        </div>

        <BotonEnviar />

        <p className="text-center text-xs text-slate-400">
          Tus datos están seguros y serán tratados con absoluta
          confidencialidad.
        </p>
      </form>
    </div>
  );
}
