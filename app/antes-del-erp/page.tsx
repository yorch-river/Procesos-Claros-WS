import Link from "next/link";
import { AlertCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faqs from "@/components/Faqs";
import { pageMetadata } from "@/lib/seo";
import { posts } from "@/content/posts";

export const metadata = pageMetadata({
  title: "Qué hacer antes de implementar un ERP en tu pyme",
  description:
    "El 70% de las implementaciones de ERP falla o se excede en presupuesto. Por qué ocurre en pymes y qué debes definir antes de comprar.",
  path: "/antes-del-erp",
});

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
  },
  {
    question: "¿El software trae incorporadas las reglas de negocio?",
    answer:
      "Un ERP es una cáscara vacía. Si no tienes reglas de negocio claras, el software no las inventará por ti.",
    titulo: "Creer que el software trae las reglas",
  },
  {
    question: "¿Qué pasa si el equipo se resiste al nuevo sistema?",
    answer:
      "Si tu equipo no entiende por qué el nuevo orden es mejor, encontrarán la forma de boicotear el sistema.",
    titulo: "Resistencia al cambio ignorada",
  },
];

const senales = [
  "Diferentes personas hacen la misma tarea de formas distintas.",
  "La información se duplica en varios Excel “personales”.",
  "Nadie sabe exactamente dónde está un pedido en cada momento.",
  "Los errores se descubren cuando el cliente se queja.",
  "Dependes de una persona clave que “lo tiene todo en la cabeza”.",
  "Tienes un sistema hoy pero nadie lo usa bien o está desactualizado.",
];

const antesDeComprar = [
  {
    titulo: "Tu Mapa de Procesos",
    texto: "Cómo fluye el valor desde que entra un cliente hasta que cobras.",
  },
  {
    titulo: "Tus Reglas de Excepción",
    texto: "Qué pasa cuando algo sale mal. El software necesita saberlo.",
  },
  {
    titulo: "Tu Nivel de Madurez",
    texto: "¿Tu equipo está listo para la disciplina que exige un sistema?",
  },
];

export default function BeforeErpPage() {
  const lecturas = posts.slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <Breadcrumbs items={[{ name: "Antes del ERP", path: "/antes-del-erp" }]} />

      <h1 className="mb-8 text-4xl font-extrabold text-slate-900">
        Antes de implementar un ERP: lo que nadie te dice.
      </h1>

      <p className="mb-12 text-xl leading-relaxed text-slate-600">
        El mercado del software de gestión está lleno de promesas. Te dicen que
        con su herramienta tendrás “control total”, “visibilidad 360” y
        “eficiencia máxima”. Pero la realidad es que el 70% de las
        implementaciones de ERP fallan o se exceden masivamente en presupuesto.
      </p>

      <section className="mb-16">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
          <AlertCircle className="text-amber-500" aria-hidden="true" />
          ¿Por qué fallan las implementaciones en pymes?
        </h2>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          {causasFallo.map((causa, index) => (
            <p key={causa.titulo} className="text-slate-700">
              <strong>
                {index + 1}. {causa.titulo}:
              </strong>{" "}
              {causa.answer}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
          <HelpCircle className="text-blue-500" aria-hidden="true" />
          Señales de que el problema NO es el software
        </h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {senales.map((senal) => (
            <li
              key={senal}
              className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <CheckCircle2
                className="h-5 w-5 flex-shrink-0 text-slate-300"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">{senal}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 rounded-3xl border-2 border-blue-100 bg-blue-50 p-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-900">
          Qué debes tener claro antes de comprar
        </h2>
        <div className="space-y-6">
          {antesDeComprar.map((item, index) => (
            <div key={item.titulo} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white"
              >
                {index + 1}
              </span>
              <p className="text-slate-700">
                <strong>{item.titulo}:</strong> {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Faqs faqs={causasFallo.map(({ question, answer }) => ({ question, answer }))} />

      <section className="mt-16 border-t border-slate-200 pt-12">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          Sigue leyendo
        </h2>
        <ul className="space-y-4">
          {lecturas.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
              >
                <h3 className="font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 rounded-3xl bg-slate-900 p-12 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">
          ¿No estás seguro de por dónde empezar?
        </h2>
        <p className="mb-8 text-slate-400">
          Realiza mi diagnóstico de madurez operativa y obtén una hoja de ruta
          clara.
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-xl bg-blue-600 px-10 py-4 font-bold text-white transition-all hover:bg-blue-700"
        >
          Quiero el Diagnóstico Gratuito
        </Link>
      </div>
    </div>
  );
}
