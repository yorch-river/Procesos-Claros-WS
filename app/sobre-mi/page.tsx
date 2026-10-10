import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  FiguraBalanza,
  FiguraDiana,
  FiguraDistribucion,
  FiguraIndustria,
  FiguraServiciosPersonas,
} from "@/components/Figuras";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  botonPrimario,
  botonSecundario,
  contenedor,
  rotulo,
  tituloPagina,
  tituloSeccion,
} from "@/lib/estilos";

export const metadata = pageMetadata({
  title: "Jorge Rivera, consultor de procesos independiente",
  description:
    "Más de 10 años acompañando digitalizaciones. No vendo licencias ni recibo comisiones de ningún ERP: mi único objetivo es que tu empresa sea rentable y ordenada.",
  path: "/sobre-mi",
  image: site.founder.image,
});

const filosofia = [
  {
    figura: FiguraBalanza,
    titulo: "Independencia total",
    texto:
      "No soy partner de ninguna marca. Te diré la verdad sobre lo que necesitas, aunque eso signifique no comprar nada todavía.",
  },
  {
    figura: FiguraDiana,
    titulo: "Enfoque en negocio",
    texto:
      "No me interesan los tecnicismos. Me interesa que tu equipo trabaje menos tiempo en tareas vacías y tú tengas datos fiables para decidir.",
  },
];

// Los tres sectores que ya nombraba el texto, cada uno con su figura.
const sectores = [
  { nombre: "Distribución", figura: FiguraDistribucion },
  { nombre: "Servicios", figura: FiguraServiciosPersonas },
  { nombre: "Pequeña industria", figura: FiguraIndustria },
];

export default function SobreMiPage() {
  return (
    <>
      <div className={`${contenedor} pt-10 sm:pt-14`}>
        <Breadcrumbs items={[{ name: "Sobre Mí", path: "/sobre-mi" }]} />

        {/* Hero: la persona primero */}
        <div className="mt-10 flex flex-wrap items-end gap-x-16 gap-y-10 sm:mt-14">
          <div className="min-w-0 flex-[999_1_520px]">
            <p className={`${rotulo} mb-6`}>[ Sobre mí ]</p>
            <h1 className={tituloPagina}>Ayudo a pymes a recuperar el control.</h1>
          </div>
          <figure className="w-full max-w-[300px] flex-[1_1_240px]">
            <Image
              src={site.founder.image}
              alt={`${site.founder.name}, ${site.founder.jobTitle.toLowerCase()}`}
              width={300}
              height={300}
              /* `priority` porque es el elemento más grande de la mitad
                 superior: es el LCP de esta página. */
              priority
              className="aspect-square w-full object-cover grayscale"
            />
            <figcaption className="mt-4 border-t border-tinta pt-3 text-[15px] leading-snug text-gris-medio">
              <strong className="block text-[17px] font-bold text-tinta">
                {site.founder.name}
              </strong>
              {site.founder.jobTitle}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Relato */}
      <section className={`${contenedor} mt-14 lg:mt-20`}>
        <div className="flex flex-wrap gap-x-16 gap-y-6 border-t-2 border-tinta pt-10">
          <p className={`${rotulo} flex-[1_1_200px]`}>01 / Por qué hago esto</p>
          <div className="max-w-[720px] flex-[999_1_480px] space-y-7 text-xl leading-relaxed text-tinta-suave">
            <p>
              Tras más de 10 años acompañando a empresas en proyectos de
              digitalización, me di cuenta de una verdad incómoda:{" "}
              <strong className="font-semibold text-tinta">
                el software nunca soluciona los problemas de fondo.
              </strong>
            </p>
            <p>
              Vi a dueños de negocios brillantes tirar millones de pesos en
              sistemas que nadie usaba, simplemente porque sus procesos
              internos eran un misterio para ellos mismos.
            </p>
            <p>
              Por eso decidí posicionarme del lado del cliente, no del
              software. Como consultor independiente, no vendo licencias ni
              recibo comisiones de ningún ERP. Mi único objetivo es que tu
              empresa sea rentable y ordenada.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="mt-20 bg-papel lg:mt-28">
        <div className={`${contenedor} py-16 lg:py-24`}>
          <p className={`${rotulo} mb-5`}>02 / Cómo trabajo</p>
          <h2 className={`${tituloSeccion} mb-14`}>Mi filosofía de trabajo</h2>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2">
            {filosofia.map(({ figura: Figura, ...item }, i) => (
              <div
                key={item.titulo}
                className={`flex gap-7 ${
                  i === 0 ? "md:border-r md:border-[#D5D7DA] md:pr-12" : "md:pl-12"
                }`}
              >
                <Figura className="h-[72px] w-[72px] flex-none" />
                <div>
                  <h3 className="mb-3 text-[26px] font-bold leading-tight tracking-[-0.02em]">
                    {item.titulo}
                  </h3>
                  <p className="text-lg text-gris-medio">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia por sector */}
      <section className={`${contenedor} py-20 lg:py-28`}>
        <p className={`${rotulo} mb-5`}>03 / Experiencia</p>
        <p className="mb-14 max-w-[820px] text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-snug tracking-[-0.02em]">
          He ayudado a decenas de pymes en sectores de distribución, servicios
          y pequeña industria a documentar su saber-hacer y prepararse para
          escalar.
        </p>
        <ul className="grid grid-cols-1 border-t-2 border-tinta sm:grid-cols-3">
          {sectores.map(({ figura: Figura, nombre }) => (
            <li
              key={nombre}
              className="flex items-center gap-5 border-b border-linea py-7 sm:border-b-0 sm:pr-6"
            >
              <Figura className="h-16 w-16 flex-none" />
              <span className="text-xl font-bold tracking-[-0.01em]">{nombre}</span>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-x-12 gap-y-8 border-t-2 border-tinta pt-10">
          <p className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-tight tracking-[-0.03em]">
            ¿Hablamos sobre cómo poner orden en tu casa?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className={botonPrimario}>
              Contactar conmigo <span aria-hidden="true">→</span>
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={botonSecundario}
            >
              Ver mi LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
