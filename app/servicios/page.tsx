import Link from "next/link";
import CtaFinal from "@/components/CtaFinal";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import JsonLd from "@/components/JsonLd";
import {
  FiguraDesenredo,
  FiguraDiagnostico,
  FiguraPreparacion,
  FiguraSistematizacion,
} from "@/components/Figuras";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { contenedor, enlaceSubrayado, rotulo } from "@/lib/estilos";
import { servicios } from "@/content/servicios";

export const metadata = pageMetadata({
  title: "Servicios de Consultoría de Procesos para Pymes",
  description:
    "Diagnóstico de madurez, sistematización de procesos y preparación para digitalizar. Consultoría independiente para pymes en Chile.",
  path: "/servicios",
});

/* La figura es decoración, no dato: por eso vive en la página y no en el
   contenido compartido con schema.org. Son las mismas de la home, para que
   cada servicio se reconozca igual en todo el sitio. */
const figuras = {
  diagnostico: FiguraDiagnostico,
  sistematizacion: FiguraSistematizacion,
  "preparacion-erp": FiguraPreparacion,
} as const;

export default function ServiciosPage() {
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

      <EncabezadoPagina
        migas={[{ name: "Servicios", path: "/servicios" }]}
        rotulo="Servicios"
        titulo="Servicios de consultoría estratégica"
        bajada={
          <p>
            Ayudo a pymes a pasar del caos operativo a la eficiencia
            sistematizada. Sin tecnicismos, con enfoque en tu rentabilidad.
          </p>
        }
        // Del caos a la línea recta: la bajada en una sola figura.
        aside={<FiguraDesenredo className="h-32 w-32 sm:h-40 sm:w-40" />}
      />

      {/* Índice: los tres servicios a la vista, cada uno por separado */}
      <nav aria-label="Servicios" className={`${contenedor} mt-14`}>
        <ul className="flex flex-wrap gap-3">
          {servicios.map((servicio) => (
            <li key={servicio.id}>
              <a
                href={`#${servicio.id}`}
                className="inline-flex min-h-[44px] items-center border-[1.5px] border-[#C9CBCF] px-4 text-[15px] font-semibold transition-colors hover:border-tinta"
              >
                {servicio.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`${contenedor} pb-20 pt-10 lg:pb-28`}>
        {servicios.map((servicio) => {
          const Figura = figuras[servicio.id as keyof typeof figuras];
          return (
            <article
              key={servicio.id}
              /* El id permite enlazar directo a un servicio desde la home o
                 desde un artículo, sin crear páginas duplicadas. */
              id={servicio.id}
              className="scroll-mt-28 border-t-2 border-tinta py-14 lg:py-20"
            >
              <div className="flex flex-wrap gap-x-16 gap-y-10">
                {/* Columna izquierda: qué es y para qué problema */}
                <div className="min-w-0 flex-[1_1_380px]">
                  <Figura className="mb-8 h-24 w-24" />
                  <h2 className="mb-8 text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.018em]">
                    {servicio.title}
                  </h2>
                  <p className={`${rotulo} mb-3`}>El problema</p>
                  <p className="max-w-[520px] text-[22px] leading-snug">
                    <span aria-hidden="true" className="text-acento">
                      “
                    </span>
                    {servicio.problem}
                    <span aria-hidden="true" className="text-acento">
                      ”
                    </span>
                  </p>
                </div>

                {/* Columna derecha: qué incluye y qué queda */}
                <div className="min-w-0 flex-[1.2_1_420px]">
                  <h3 className={`${rotulo} mb-4`}>Qué incluye</h3>
                  <ul className="mb-10 border-t border-linea">
                    {servicio.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 border-b border-linea py-4 text-lg"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] h-2 w-2 flex-none bg-acento"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-papel p-7">
                    <h3 className={`${rotulo} mb-3`}>Resultado esperado</h3>
                    <p className="mb-6 text-lg leading-relaxed">
                      {servicio.result}
                    </p>
                    <Link href="/contacto" className={enlaceSubrayado}>
                      Consultar sobre este servicio{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <CtaFinal
        title="Veamos qué necesita tu empresa."
        description="En el diagnóstico gratuito de 30 minutos revisamos tu operación y te digo con franqueza qué servicio te sirve, o si todavía no necesitas ninguno."
      />
    </>
  );
}
