import Image from "next/image";
import Link from "next/link";
import { Shield, Zap } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Jorge Rivera, consultor de procesos independiente",
  description:
    "Más de 10 años acompañando digitalizaciones. No vendo licencias ni recibo comisiones de ningún ERP: mi único objetivo es que tu empresa sea rentable y ordenada.",
  path: "/sobre-mi",
  image: site.founder.image,
});

const filosofia = [
  {
    icon: Shield,
    titulo: "Independencia Total",
    texto:
      "No soy partner de ninguna marca. Te diré la verdad sobre lo que necesitas, aunque eso signifique no comprar nada todavía.",
  },
  {
    icon: Zap,
    titulo: "Enfoque en Negocio",
    texto:
      "No me interesan los tecnicismos. Me interesa que tu equipo trabaje menos tiempo en tareas vacías y tú tengas datos fiables para decidir.",
  },
];

export default function SobreMiPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <Breadcrumbs items={[{ name: "Sobre Mí", path: "/sobre-mi" }]} />

        <div className="mb-20 flex flex-col items-center gap-12 md:flex-row">
          <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src={site.founder.image}
              alt={`${site.founder.name}, ${site.founder.jobTitle.toLowerCase()}`}
              width={192}
              height={192}
              /* `priority` porque es el elemento más grande de la mitad
                 superior: es el LCP de esta página. */
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-extrabold text-slate-900">
              Ayudo a pymes a recuperar el control.
            </h1>
            <p className="text-xl font-medium text-blue-600">
              {site.founder.jobTitle}
            </p>
          </div>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Tras más de 10 años acompañando a empresas en proyectos de
            digitalización, me di cuenta de una verdad incómoda:{" "}
            <strong>
              el software nunca soluciona los problemas de fondo.
            </strong>
          </p>

          <p>
            Vi a dueños de negocios brillantes tirar millones de pesos en
            sistemas que nadie usaba, simplemente porque sus procesos internos
            eran un misterio para ellos mismos.
          </p>

          <p>
            Por eso decidí posicionarme del lado del cliente, no del software.
            Como consultor independiente, no vendo licencias ni recibo
            comisiones de ningún ERP. Mi único objetivo es que tu empresa sea
            rentable y ordenada.
          </p>

          <section className="my-12 rounded-3xl border border-slate-100 bg-slate-50 p-10">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Mi Filosofía de Trabajo
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filosofia.map((item) => (
                <div key={item.titulo} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.titulo}</h3>
                    <p className="text-sm text-slate-500">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <p>
            He ayudado a decenas de pymes en sectores de distribución,
            servicios y pequeña industria a documentar su saber-hacer y
            prepararse para escalar.
          </p>

          <p className="font-semibold text-slate-900">
            ¿Hablamos sobre cómo poner orden en tu casa?
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/contacto"
              className="rounded-xl bg-blue-600 px-10 py-4 font-bold text-white transition-all hover:bg-blue-700"
            >
              Contactar conmigo
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-10 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50"
            >
              Ver mi LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
