import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { botonSecundario, contenedor, rotulo as claseRotulo } from "@/lib/estilos";

/**
 * Llamado a la acción de cierre, el mismo en todas las páginas.
 *
 * Lleva la foto del consultor junto al botón: el diagnóstico es una
 * conversación con una persona, no un formulario a una empresa.
 *
 * Todos los botones son enlaces reales a `/contacto`. En la versión anterior
 * varios eran `<button>` sin acción: la persona hacía clic y no pasaba nada,
 * lo que además dejaba a los buscadores sin ninguna ruta que seguir.
 */
export default function CtaFinal({
  rotulo = "Diagnóstico gratuito · 30 min",
  title = "¿Listo para poner orden en tu operación?",
  description,
  primaryLabel = "Solicitar diagnóstico gratuito",
}: {
  rotulo?: string;
  title?: string;
  description: string;
  primaryLabel?: string;
}) {
  return (
    <section className="border-t-2 border-tinta">
      <div
        className={`${contenedor} flex flex-wrap items-end justify-between gap-x-16 gap-y-10 py-20 lg:py-32`}
      >
        <div className="min-w-0 flex-[999_1_560px]">
          <p className={`${claseRotulo} mb-5`}>{rotulo}</p>
          <h2 className="mb-6 text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.022em]">
            {title}
          </h2>
          <p className="max-w-[560px] text-[19px] text-gris-medio">
            {description}
          </p>
        </div>
        <div className="flex max-w-[360px] flex-[1_1_300px] flex-col gap-5">
          <figure className="flex items-center gap-4 border-b border-linea pb-5">
            <Image
              src={site.founder.image}
              alt={site.founder.name}
              width={88}
              height={88}
              className="h-[88px] w-[88px] flex-none object-cover grayscale"
            />
            <figcaption className="text-[15px] leading-snug text-gris-medio">
              <strong className="block text-[17px] font-bold text-tinta">
                {site.founder.name}
              </strong>
              Consultor independiente de procesos y operaciones
            </figcaption>
          </figure>
          <Link
            href="/contacto"
            className="inline-flex min-h-[60px] items-center justify-between gap-3 bg-ocre px-6 text-[17px] font-semibold text-white transition-colors hover:bg-ocre-oscuro"
          >
            {primaryLabel} <span aria-hidden="true">→</span>
          </Link>
          <Link href="/antes-del-erp" className={`${botonSecundario} min-h-[52px]`}>
            ¿Por qué ordenar primero?
          </Link>
        </div>
      </div>
    </section>
  );
}
