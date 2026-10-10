import Link from "next/link";
import CtaFinal from "@/components/CtaFinal";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Faqs from "@/components/Faqs";
import RecursoDestacado from "@/components/RecursoDestacado";
import {
  FiguraCabeza,
  FiguraCaminos,
  FiguraCascaraVacia,
  FiguraDepende,
  FiguraExcepcion,
  FiguraMadurez,
  FiguraMapaProcesos,
  FiguraPedidoPerdido,
  FiguraPlanillas,
  FiguraQueja,
  FiguraResistencia,
  FiguraSistemaAbandonado,
} from "@/components/Figuras";
import { pageMetadata } from "@/lib/seo";
import { contenedor, rotulo, tituloSeccion } from "@/lib/estilos";
import { posts } from "@/content/posts";

export const metadata = pageMetadata({
  title: "Qué hacer antes de implementar un ERP en tu pyme",
  description:
    "Casi la mitad de las implementaciones de ERP fallan o se exceden en presupuesto. Por qué ocurre y qué debes definir antes de comprar.",
  path: "/antes-del-erp",
});

const ACENTO_CLARO = "#7FC4CC";
const TRAZO_OSCURO = "#D8DADD";

/*
 * Las tres causas de fracaso ya estaban escritas como pregunta y respuesta en
 * la página original. Se estructuran como FAQ para que Google pueda mostrarlas
 * directamente en los resultados. El texto es el mismo que ve el visitante:
 * marcar preguntas que no están visibles es motivo de penalización.
 */
const causasFallo = [
  {
    question: "¿Por qué falla un ERP si no hay procesos definidos?",
    answer:
      "El software pregunta “cómo haces X”, y el dueño responde “bueno, depende de quién lo haga”. Eso es el fin del proyecto.",
    titulo: "Falta de definición de procesos",
    figura: FiguraDepende,
  },
  {
    question: "¿El software trae incorporadas las reglas de negocio?",
    answer:
      "Un ERP es una cáscara vacía. Si no tienes reglas de negocio claras, el software no las inventará por ti.",
    titulo: "Creer que el software trae las reglas",
    figura: FiguraCascaraVacia,
  },
  {
    question: "¿Qué pasa si el equipo se resiste al nuevo sistema?",
    answer:
      "Si tu equipo no entiende por qué el nuevo orden es mejor, encontrarán la forma de boicotear el sistema.",
    titulo: "Resistencia al cambio ignorada",
    figura: FiguraResistencia,
  },
];

// Cada señal tiene su propia figura: son síntomas distintos y se reconocen
// mejor si cada uno tiene una imagen.
const senales = [
  { texto: "Diferentes personas hacen la misma tarea de formas distintas.", figura: FiguraCaminos },
  { texto: "La información se duplica en varios Excel “personales”.", figura: FiguraPlanillas },
  { texto: "Nadie sabe exactamente dónde está un pedido en cada momento.", figura: FiguraPedidoPerdido },
  { texto: "Los errores se descubren cuando el cliente se queja.", figura: FiguraQueja },
  { texto: "Dependes de una persona clave que “lo tiene todo en la cabeza”.", figura: FiguraCabeza },
  { texto: "Tienes un sistema hoy pero nadie lo usa bien o está desactualizado.", figura: FiguraSistemaAbandonado },
];

const antesDeComprar = [
  {
    titulo: "Tu mapa de procesos",
    texto: "Cómo fluye el valor desde que entra un cliente hasta que cobras.",
    figura: FiguraMapaProcesos,
  },
  {
    titulo: "Tus reglas de excepción",
    texto: "Qué pasa cuando algo sale mal. El software necesita saberlo.",
    figura: FiguraExcepcion,
  },
  {
    titulo: "Tu nivel de madurez",
    texto: "¿Tu equipo está listo para la disciplina que exige un sistema?",
    figura: FiguraMadurez,
  },
];

export default function BeforeErpPage() {
  const lecturas = posts.slice(0, 3);

  return (
    <>
      <EncabezadoPagina
        migas={[{ name: "Antes del ERP", path: "/antes-del-erp" }]}
        rotulo="Antes del ERP"
        titulo="Antes de implementar un ERP: lo que nadie te dice."
        bajada={
          <p>
            El mercado del software de gestión está lleno de promesas. Te dicen
            que con su herramienta tendrás “control total”, “visibilidad 360” y
            “eficiencia máxima”. Pero la realidad es que casi la mitad de las
            implementaciones fallan o se exceden masivamente en presupuesto.
          </p>
        }
        aside={<FiguraCascaraVacia className="h-32 w-32 sm:h-40 sm:w-40" />}
      />

      {/* Por qué fallan: banda oscura, como las advertencias de la home */}
      <section className="mt-20 bg-tinta text-white lg:mt-28">
        <div className={`${contenedor} py-16 lg:py-28`}>
          <p className="mb-5 font-mono text-[13px] text-[#A6AAB1]">
            01 / Por qué fallan
          </p>
          <h2 className={`${tituloSeccion} mb-14 max-w-[820px]`}>
            ¿Por qué fallan las implementaciones?
          </h2>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3">
            {causasFallo.map(({ figura: Figura, ...causa }, i) => (
              <article
                key={causa.titulo}
                className={`border-t border-[#3A3D42] pt-8 md:px-8 ${
                  i === 0 ? "md:pl-0" : ""
                } ${i === causasFallo.length - 1 ? "md:pr-0" : "md:border-r"}`}
              >
                <Figura
                  className="mb-7 h-16 w-16"
                  trazo={TRAZO_OSCURO}
                  acento={ACENTO_CLARO}
                />
                <h3 className="mb-3 text-2xl font-bold leading-tight tracking-[-0.02em]">
                  {causa.titulo}
                </h3>
                <p className="text-lg leading-normal text-[#C9CCD2]">
                  {causa.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Señales */}
      <section className={`${contenedor} py-20 lg:py-32`}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
          <div>
            <p className={`${rotulo} mb-5`}>02 / Señales</p>
            <h2 className={`${tituloSeccion} max-w-[760px]`}>
              Señales de que el problema NO es el software
            </h2>
          </div>
        </div>
        <ul className="grid grid-cols-1 border-t-2 border-tinta sm:grid-cols-2 lg:grid-cols-3">
          {senales.map(({ figura: Figura, texto }) => (
            <li
              key={texto}
              className="flex gap-5 border-b border-linea py-8 sm:pr-8"
            >
              <Figura className="h-14 w-14 flex-none" />
              <span className="pt-1 text-lg leading-snug">{texto}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Antes de comprar */}
      <section className="bg-papel">
        <div className={`${contenedor} py-20 lg:py-28`}>
          <p className={`${rotulo} mb-5`}>03 / Antes de comprar</p>
          <h2 className={`${tituloSeccion} mb-14 max-w-[760px]`}>
            Qué debes tener claro antes de comprar
          </h2>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3">
            {antesDeComprar.map(({ figura: Figura, ...item }, i) => (
              <div
                key={item.titulo}
                className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${
                  i === antesDeComprar.length - 1
                    ? "md:pr-0"
                    : "md:border-r md:border-[#D5D7DA]"
                }`}
              >
                <Figura className="mb-7 h-[72px] w-[72px]" />
                <h3 className="mb-3 text-[26px] font-bold leading-tight tracking-[-0.02em]">
                  {item.titulo}
                </h3>
                <p className="text-lg text-gris-medio">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={contenedor}>
        <RecursoDestacado className="mt-20" />

        <div className="max-w-[880px]">
          <Faqs
            rotulo="04 / Preguntas"
            faqs={causasFallo.map(({ question, answer }) => ({ question, answer }))}
          />
        </div>

        <section className="mb-20 mt-20 lg:mb-28">
          <p className={`${rotulo} mb-5`}>05 / Lecturas</p>
          <h2 className={`${tituloSeccion} mb-10`}>Sigue leyendo</h2>
          <ul className="border-t-2 border-tinta">
            {lecturas.map((post) => (
              <li key={post.slug} className="border-b border-linea">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-wrap items-baseline gap-x-10 gap-y-2 py-7"
                >
                  <span className="flex-[1_1_320px] text-2xl font-bold leading-tight tracking-[-0.02em] group-hover:text-acento">
                    {post.title}
                  </span>
                  <span className="flex-[1.4_1_360px] text-gris-medio">
                    {post.excerpt}
                  </span>
                  <span aria-hidden="true" className="text-xl text-acento">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <CtaFinal
        title="¿No estás seguro de por dónde empezar?"
        description="Realiza mi diagnóstico de madurez operativa y obtén una hoja de ruta clara."
        primaryLabel="Quiero el diagnóstico gratuito"
      />
    </>
  );
}
