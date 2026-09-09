import { Check } from "lucide-react";
import type { PostBlock, PostSection } from "@/content/types";

function Bloque({ bloque }: { bloque: PostBlock }) {
  switch (bloque.kind) {
    case "parrafo":
      return (
        <p className="mb-6 text-lg leading-relaxed text-slate-700">
          {bloque.texto}
        </p>
      );

    case "lista":
      return (
        <ul className="mb-8 space-y-3">
          {bloque.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg text-slate-700">
              <Check
                className="mt-1.5 h-5 w-5 flex-shrink-0 text-blue-500"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "lista-numerada":
      return (
        <ol className="mb-8 space-y-4">
          {bloque.items.map((item, index) => (
            <li key={item} className="flex gap-4 text-lg text-slate-700">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white"
              >
                {index + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "cita":
      return (
        <blockquote className="mb-8 border-l-4 border-blue-600 bg-blue-50 py-6 pl-6 pr-6">
          <p className="text-xl font-medium leading-relaxed text-slate-800">
            {bloque.texto}
          </p>
          {bloque.autor && (
            <footer className="mt-3 text-sm text-slate-500">
              — {bloque.autor}
            </footer>
          )}
        </blockquote>
      );

    case "destacado":
      return (
        <aside className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {/* H3: cuelga del H2 de la sección, sin saltarse niveles. */}
          <h3 className="mb-3 text-lg font-bold text-slate-900">
            {bloque.titulo}
          </h3>
          <p className="leading-relaxed text-slate-600">{bloque.texto}</p>
        </aside>
      );
  }
}

/**
 * Renderiza el cuerpo de un artículo a partir de sus bloques tipados.
 *
 * Cada sección se emite como H2 y los destacados como H3, de modo que la
 * jerarquía de encabezados sea correcta por construcción. Es lo que permite a
 * un buscador reconstruir el índice del artículo sin adivinar.
 */
export default function PostBody({ sections }: { sections: PostSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            {section.heading}
          </h2>
          {section.bloques.map((bloque, index) => (
            <Bloque key={index} bloque={bloque} />
          ))}
        </section>
      ))}
    </>
  );
}
