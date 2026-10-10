import Link from "next/link";
import { FiguraTestMadurez } from "./Figuras";
import { testMadurez } from "@/content/recursos";

/**
 * Invitación a descargar el test de madurez.
 *
 * Va en los artículos y en Antes del ERP: es donde llega quien ya se está
 * haciendo la pregunta que el test responde.
 */
export default function RecursoDestacado({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`flex flex-wrap items-center gap-x-10 gap-y-6 bg-papel p-7 sm:p-10 ${className}`}
    >
      <FiguraTestMadurez className="h-20 w-20 flex-none" />
      <div className="min-w-0 flex-[999_1_320px]">
        <p className="mb-2 font-mono text-[13px] text-gris">
          Recurso gratuito · Excel
        </p>
        <p className="mb-2 text-2xl font-bold leading-tight tracking-[-0.018em]">
          ¿Tu empresa está lista para un ERP?
        </p>
        <p className="text-lg text-gris-medio">{testMadurez.bajada}</p>
      </div>
      <Link
        href="/recursos"
        className="inline-flex min-h-[54px] flex-none items-center gap-3 bg-tinta px-6 font-semibold text-white transition-colors hover:bg-ocre"
      >
        Descargar el test <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
