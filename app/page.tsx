import Link from "next/link";
import { AlertTriangle, Check, X, Search, ClipboardCheck, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CtaFinal from "@/components/CtaFinal";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { servicios } from "@/content/servicios";

export const metadata = pageMetadata({
  title: "Consultoría de Procesos para Pymes | Procesos Claros",
  description:
    "Antes de implementar un ERP, ordena tu negocio. Consultoría independiente en Chile para sistematizar los procesos de tu pyme.",
  path: "/",
});

const problemas = [
  "Un ERP no soluciona procesos confusos; los automatiza. Automatizar el desorden solo amplifica los errores.",
  "La mayoría de las implementaciones de software fallan no por la tecnología, sino por la falta de estructura previa.",
  "Si tu equipo hoy depende de Excel y la memoria de “el que sabe”, un software nuevo será una pesadilla de implementación.",
];

const ayudas = [
  {
    icon: Search,
    title: "Diagnóstico de madurez",
    text: "Evaluamos objetivamente si tu empresa está lista para un sistema o si el caos operativo hará fracasar cualquier intento.",
    href: "/servicios#diagnostico",
  },
  {
    icon: ClipboardCheck,
    title: "Sistematización de procesos",
    text: "Definimos quién hace qué, cuándo y cómo. Creamos la base de reglas de negocio que el software deberá seguir después.",
    href: "/servicios#sistematizacion",
  },
  {
    icon: ShieldCheck,
    title: "Preparación para digitalizar",
    text: "Te acompañamos a definir tus requerimientos reales para que no compres un software que te sobre (o te falte).",
    href: "/servicios#preparacion-erp",
  },
];

const paraTi = [
  "Eres dueño o gerente y sientes que pierdes el control de la operación.",
  "Tu empresa está creciendo y los métodos manuales ya no alcanzan.",
  "Estás evaluando comprar un ERP pero tienes miedo de tirar el dinero.",
  "Quieres que tu empresa funcione sin que tú tengas que supervisar cada detalle.",
];

const noParaTi = [
  "Buscas un instalador de software o un partner de una marca específica.",
  "Crees que la tecnología sola resolverá los problemas de actitud del equipo.",
  "No estás dispuesto a cuestionar y cambiar la forma en que operas hoy.",
  "Quieres “la solución mágica” sin documentar cómo trabaja tu empresa.",
];

export default function HomePage() {
  return (
    <>
      {servicios.map((servicio) => (
        <JsonLd
          key={servicio.id}
          data={serviceSchema({
            name: servicio.title,
            description: servicio.summary,
            path: `/servicios#${servicio.id}`,
          })}
        />
      ))}

      <section className="relative overflow-hidden bg-white pb-32 pt-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Único H1 de la página: contiene la promesa central y la
                palabra clave por la que queremos rankear. */}
            <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Antes de implementar un ERP,{" "}
              <span className="text-blue-600">ordena tu negocio.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-600">
              Muchas pymes creen que necesitan un sistema. En realidad necesitan
              procesos claros. Evita que la tecnología solo acelere tu desorden
              actual.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700"
              >
                Haz el diagnóstico gratuito
              </Link>
              <Link
                href="/antes-del-erp"
                className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                ¿Por qué ordenar primero?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Digitalizar no ordena.
              </h2>
              <div className="space-y-6">
                {problemas.map((problema) => (
                  <div key={problema} className="flex gap-4">
                    <AlertTriangle
                      className="mt-1 h-6 w-6 flex-shrink-0 text-amber-500"
                      aria-hidden="true"
                    />
                    <p className="text-lg text-slate-600">{problema}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <blockquote className="flex h-full flex-col justify-center rounded-lg bg-slate-50 p-8">
                <p className="text-2xl font-semibold leading-snug text-slate-800">
                  “Un ERP es una cáscara vacía. Si no tienes reglas de negocio
                  claras, el software no las inventará por ti.”
                </p>
                <footer className="mt-6 text-sm font-medium text-slate-500">
                  <Link
                    href="/antes-del-erp"
                    className="text-blue-600 hover:underline"
                  >
                    Leer por qué fallan las implementaciones
                  </Link>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Cómo ayudo a tu negocio
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Enfocado en resultados operativos, no en jerga técnica.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ayudas.map((ayuda) => (
              <article
                key={ayuda.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <ayuda.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-xl font-bold">
                  <Link
                    href={ayuda.href}
                    className="transition-colors hover:text-blue-600"
                  >
                    {ayuda.title}
                  </Link>
                </h3>
                <p className="leading-relaxed text-slate-600">{ayuda.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-blue-600 bg-white p-10 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Esto es para ti si:
              </h2>
              <ul className="space-y-4">
                {paraTi.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-slate-400 bg-white p-10 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Esto NO es para ti si:
              </h2>
              <ul className="space-y-4">
                {noParaTi.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600 opacity-80">
                    <X
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal description="Conversemos 30 minutos sobre tu operación y evaluemos, sin costo, si tu empresa está lista para dar el paso." />
    </>
  );
}
