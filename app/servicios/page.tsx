import Link from "next/link";
import { Search, FileText, Settings, ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CtaFinal from "@/components/CtaFinal";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { servicios } from "@/content/servicios";

export const metadata = pageMetadata({
  title: "Servicios de Consultoría de Procesos para Pymes",
  description:
    "Diagnóstico de madurez, sistematización de procesos y preparación para digitalizar. Consultoría independiente para pymes en Chile.",
  path: "/servicios",
});

/* El ícono es decoración, no dato: por eso vive en la página y no en el
   contenido compartido con schema.org. */
const iconos = {
  diagnostico: Search,
  sistematizacion: FileText,
  "preparacion-erp": Settings,
} as const;

export default function ServiciosPage() {
  return (
    /* `pt-20` y no `py-20`: el CTA de abajo es una banda a sangre completa y
       el padding inferior dejaba una franja clara entre esa banda y el pie. */
    <div className="bg-slate-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Servicios", path: "/servicios" }]} />

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

        <div className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-slate-900">
            Servicios de Consultoría Estratégica
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Ayudo a pymes a pasar del caos operativo a la eficiencia
            sistematizada. Sin tecnicismos, con enfoque en tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {servicios.map((servicio) => {
            const Icono = iconos[servicio.id as keyof typeof iconos];
            return (
              <article
                key={servicio.id}
                /* El id permite enlazar directo a un servicio desde la home o
                   desde un artículo, sin crear páginas duplicadas. */
                id={servicio.id}
                className="flex scroll-mt-28 flex-col rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 text-blue-600">
                  <Icono className="h-8 w-8" aria-hidden="true" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {servicio.title}
                </h2>
                <p className="mb-8 text-sm italic text-slate-500">
                  “{servicio.problem}”
                </p>

                <div className="flex-grow">
                  <h3 className="mb-4 font-semibold text-slate-800">
                    ¿Qué incluye?
                  </h3>
                  <ul className="mb-8 space-y-3">
                    {servicio.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-slate-600"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h3 className="mb-2 font-bold text-slate-900">
                    Resultado esperado:
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-slate-600">
                    {servicio.result}
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-4"
                  >
                    Consultar sobre este servicio
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <CtaFinal
          title="¿No sabes cuál de los tres necesitas?"
          description="Esa es exactamente la pregunta que responde el diagnóstico gratuito de 30 minutos."
          variant="oscuro"
        />
      </div>
    </div>
  );
}
