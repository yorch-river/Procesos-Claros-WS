import Link from "next/link";
import { Check, X } from "lucide-react";
import CtaFinal from "@/components/CtaFinal";
import JsonLd from "@/components/JsonLd";
import {
  EsquemaDesorden,
  FiguraAutomatiza,
  FiguraDiagnostico,
  FiguraErpParalelo,
  FiguraEstructura,
  FiguraExcel,
  FiguraPreparacion,
  FiguraSistematizacion,
} from "@/components/Figuras";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { botonPrimario, botonSecundario, contenedor, rotulo, tituloSeccion } from "@/lib/estilos";
import { servicios } from "@/content/servicios";

export const metadata = pageMetadata({
  title: "Consultoría de Procesos para Pymes | Procesos Claros",
  description:
    "Antes de implementar un ERP, ordena tu negocio. Y si ya tienes uno, haz que rinda. Consultoría independiente en Chile para ordenar y sistematizar empresas.",
  path: "/",
});

// Cada advertencia lleva su propia figura: repetir el mismo ícono de alerta
// tres veces no decía nada distinto en cada punto.
const problemas = [
  {
    figura: FiguraAutomatiza,
    text: "Un ERP no soluciona procesos confusos; los automatiza. Automatizar el desorden solo amplifica los errores.",
  },
  {
    figura: FiguraEstructura,
    text: "La mayoría de las implementaciones de software fallan no por la tecnología, sino por la falta de estructura previa.",
  },
  {
    figura: FiguraExcel,
    text: "Si tu equipo hoy depende de Excel y la memoria de “el que sabe”, un software nuevo será una pesadilla de implementación.",
  },
  // Cuarto punto: nombra al que ya pasó por una implementación. Sin él, la
  // sección solo le habla a quien todavía no compró nada.
  {
    figura: FiguraErpParalelo,
    text: "Y si ya implementaste uno, el síntoma es otro: el sistema está instalado, pero la operación sigue viviendo en planillas paralelas.",
  },
];

// Se presentan como columnas independientes, no como pasos: cada servicio se
// puede contratar sin haber hecho el anterior.
const ayudas = [
  {
    figura: FiguraDiagnostico,
    title: "Diagnóstico de madurez",
    text: "Evaluamos objetivamente si tu empresa está lista para un sistema o, si ya tienes uno, por qué no está rindiendo.",
    href: "/servicios#diagnostico",
    cta: "Ver el diagnóstico",
  },
  {
    figura: FiguraSistematizacion,
    title: "Sistematización de procesos",
    text: "Definimos quién hace qué, cuándo y cómo. Creamos la base de reglas de negocio que el software deberá seguir después.",
    href: "/servicios#sistematizacion",
    cta: "Ver la sistematización",
  },
  {
    figura: FiguraPreparacion,
    title: "Preparación para digitalizar",
    text: "Te acompañamos a definir tus requerimientos reales para que no compres un software que te sobre (o te falte).",
    href: "/servicios#preparacion-erp",
    cta: "Ver la preparación",
  },
];

const paraTi = [
  "Eres dueño o gerente y sientes que pierdes el control de la operación.",
  "Tu empresa está creciendo y los métodos manuales ya no alcanzan.",
  "Estás evaluando comprar un ERP, o cambiar el que tienes, y no quieres tirar el dinero.",
  "Quieres que tu empresa funcione sin que tú tengas que supervisar cada detalle.",
  "Ya implementaste un ERP, pero la operación sigue dependiendo de Excel y de personas clave.",
  "Tu empresa creció y ya tienes jefaturas, pero las decisiones siguen pasando por ti.",
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

      {/* Hero */}
      <section className={`${contenedor} pt-14 sm:pt-20 lg:pt-28`}>
        <p className={`${rotulo} mb-7`}>
          [ Consultoría independiente · Pymes y empresas en crecimiento · Chile ]
        </p>
        {/* Único H1 de la página: contiene la promesa central y la
            palabra clave por la que queremos rankear. */}
        <h1 className="max-w-[900px] text-[clamp(2.25rem,4.8vw,4rem)] font-bold leading-[1.06] tracking-[-0.025em]">
          Antes de implementar un ERP,{" "}
          <span className="text-acento">ordena tu negocio.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-start gap-x-12 gap-y-7 border-t-2 border-tinta pt-7 lg:mt-16">
          {/* El titular habla a quien todavía no compra; la bajada abre la
              segunda puerta sin que el H1 pierda su filo. */}
          <p className="max-w-[560px] flex-[2_1_380px] text-xl leading-normal text-tinta-suave">
            Muchas pymes creen que necesitan un sistema. En realidad necesitan
            procesos claros.{" "}
            {/* En negrita y en tinta plena: es la única frase del hero que
                habla a quien ya compró un sistema, y en el gris del párrafo
                pasaba desapercibida. */}
            <strong className="font-semibold text-tinta">
              Y si ya tienes uno y no rinde, el problema rara vez es el
              software: son los procesos que nunca se definieron.
            </strong>
          </p>
          <div className="flex flex-[1_1_300px] flex-wrap gap-3">
            <Link
              href="/contacto"
              className={botonPrimario}
            >
              Haz el diagnóstico gratuito <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/antes-del-erp"
              className={botonSecundario}
            >
              ¿Por qué ordenar primero?
            </Link>
          </div>
        </div>
      </section>

      {/* Esquema: hoy vs con procesos claros */}
      <figure className={`${contenedor} mt-12 lg:mt-20`}>
        <div className="max-w-[980px] overflow-x-auto bg-papel px-4 py-4 sm:px-8 sm:py-7">
          <EsquemaDesorden className="block h-auto w-full min-w-[600px]" />
        </div>
        <figcaption className={`${rotulo} mt-3`}>
          Fig. 1 — El mismo negocio, antes y después de definir quién hace
          qué, cuándo y cómo.
        </figcaption>
      </figure>

      {/* Digitalizar no ordena */}
      <section className="mt-20 bg-tinta text-white lg:mt-32">
        <div
          className={`${contenedor} flex flex-wrap gap-x-20 gap-y-12 py-16 lg:py-28`}
        >
          <div className="flex-[1_1_340px]">
            <p className="mb-5 font-mono text-[13px] text-[#A6AAB1]">
              01 / El problema
            </p>
            <h2 className={`${tituloSeccion} mb-7`}>
              Digitalizar no ordena.
            </h2>
            <blockquote className="border-t border-[#3A3D42] pt-5 text-xl leading-snug text-[#D8DADD]">
              “Un ERP es una cáscara vacía. Si no tienes reglas de negocio
              claras, el software no las inventará por ti.”
            </blockquote>
            <Link
              href="/antes-del-erp"
              className="mt-5 inline-block py-2.5 text-acento-claro underline underline-offset-4 hover:text-white"
            >
              Leer por qué fallan las implementaciones →
            </Link>
          </div>
          <ul className="flex-[1.4_1_420px] border-b border-[#3A3D42]">
            {problemas.map(({ figura: Figura, text }) => (
              <li
                key={text}
                className="flex gap-7 border-t border-[#3A3D42] py-7"
              >
                <Figura className="mt-0.5 h-[52px] w-[52px] flex-none" />
                <p className="text-xl leading-normal text-[#E6E7E9]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Servicios */}
      <section className={`${contenedor} py-20 lg:py-32`}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
          <div>
            <p className={`${rotulo} mb-5`}>02 / Servicios</p>
            <h2 className={tituloSeccion}>
              Cómo ayudo a tu negocio
            </h2>
          </div>
          <p className="max-w-[360px] text-gris">
            Enfocado en resultados operativos, no en jerga técnica. Cada
            servicio se contrata por separado, según lo que tu empresa necesite
            hoy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 border-t-2 border-tinta pt-10 md:grid-cols-3">
          {ayudas.map(({ figura: Figura, ...ayuda }, i) => (
            <article
              key={ayuda.title}
              className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${
                i === ayudas.length - 1 ? "md:pr-0" : "md:border-r md:border-linea"
              }`}
            >
              <Figura className="h-[72px] w-[72px]" />
              <h3 className="mb-3.5 mt-7 text-[26px] font-bold leading-tight tracking-[-0.02em]">
                <Link href={ayuda.href} className="hover:text-acento">
                  {ayuda.title}
                </Link>
              </h3>
              <p className="mb-6 text-gris-medio">{ayuda.text}</p>
              <Link
                href={ayuda.href}
                className="font-semibold underline underline-offset-4 hover:text-acento"
              >
                {ayuda.cta} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Para quién */}
      <section className="flex flex-wrap border-t border-linea">
        <div className="flex flex-[1_1_420px] justify-end px-5 py-14 sm:px-8 lg:px-[72px] lg:py-24">
          <div className="w-full max-w-[520px]">
            <p className={`${rotulo} mb-5`}>03 / Para quién</p>
            <h2 className="mb-8 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.015em]">
              Esto es para ti si:
            </h2>
            <ul className="flex flex-col gap-5">
              {paraTi.map((item) => (
                <li key={item} className="flex gap-4">
                  <Check
                    className="mt-0.5 h-[22px] w-[22px] flex-none text-acento"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-[1_1_420px] bg-papel px-5 py-14 sm:px-8 lg:px-[72px] lg:py-24">
          <div className="max-w-[520px] lg:pt-[42px]">
            <h2 className="mb-8 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.015em] text-gris-medio">
              Esto NO es para ti si:
            </h2>
            <ul className="flex flex-col gap-5 text-gris-medio">
              {noParaTi.map((item) => (
                <li key={item} className="flex gap-4">
                  <X
                    className="mt-0.5 h-[22px] w-[22px] flex-none text-[#6B7078]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaFinal
        rotulo="04 / Diagnóstico gratuito · 30 min"
        description="Conversemos 30 minutos sobre tu operación y evaluemos, sin costo, si tu empresa está lista para dar el paso."
      />
    </>
  );
}
