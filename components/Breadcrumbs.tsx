import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

/**
 * Migas de pan visibles + su equivalente en datos estructurados.
 *
 * Google las usa para mostrar la ruta del sitio bajo el título en los
 * resultados, en vez de la URL cruda. Se emiten juntas para que lo que ve la
 * persona y lo que lee el buscador nunca se separen.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[13px] text-gris">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-tinta">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="underline-offset-4 transition-colors hover:text-acento hover:underline"
                    >
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true" className="text-[#B5B8BD]">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
