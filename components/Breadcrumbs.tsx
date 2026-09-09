import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
      <nav aria-label="Ruta de navegación" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1">
                {isLast ? (
                  <span aria-current="page" className="font-medium text-slate-700">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="transition-colors hover:text-blue-600"
                    >
                      {crumb.name}
                    </Link>
                    <ChevronRight
                      className="h-4 w-4 text-slate-300"
                      aria-hidden="true"
                    />
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
