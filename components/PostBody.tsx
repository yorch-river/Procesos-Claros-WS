import { FiguraNota } from "./Figuras";
import type { PostBlock, PostSection } from "@/content/types";

function Bloque({ bloque }: { bloque: PostBlock }) {
  switch (bloque.kind) {
    case "parrafo":
      return (
        <p className="mb-6 text-lg leading-relaxed text-tinta-suave">
          {bloque.texto}
        </p>
      );

    case "lista":
      return (
        <ul className="mb-8 border-t border-linea">
          {bloque.items.map((item) => (
            <li
              key={item}
              className="flex gap-4 border-b border-linea py-3.5 text-lg text-tinta-suave"
            >
              <span
                aria-hidden="true"
                className="mt-[0.65em] h-2 w-2 flex-none bg-acento"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "lista-numerada":
      return (
        <ol className="mb-8 border-t border-linea">
          {bloque.items.map((item, index) => (
            <li
              key={item}
              className="flex gap-5 border-b border-linea py-4 text-lg text-tinta-suave"
            >
              <span
                aria-hidden="true"
                className="w-7 flex-none text-[26px] font-bold leading-none tracking-[-0.03em] text-acento"
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "cita":
      return (
        <blockquote className="my-12 border-y-2 border-tinta py-8">
          <span
            aria-hidden="true"
            className="mb-2 block text-6xl font-bold leading-[0.6] text-acento"
          >
            “
          </span>
          <p className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-snug tracking-[-0.015em]">
            {bloque.texto}
          </p>
          {bloque.autor && (
            <footer className="mt-4 font-mono text-[13px] text-gris">
              — {bloque.autor}
            </footer>
          )}
        </blockquote>
      );

    case "destacado":
      return (
        <aside className="mb-8 flex gap-6 bg-papel p-7 sm:p-8">
          <FiguraNota className="h-12 w-12 flex-none" />
          <div>
            {/* H3: cuelga del H2 de la sección, sin saltarse niveles. */}
            <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">
              {bloque.titulo}
            </h3>
            <p className="text-lg leading-relaxed text-gris-medio">
              {bloque.texto}
            </p>
          </div>
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
        <section key={section.heading} className="mb-14">
          <h2 className="mb-6 text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight tracking-[-0.025em]">
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
