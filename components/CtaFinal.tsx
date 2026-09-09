import Link from "next/link";

/**
 * Llamado a la acción de cierre.
 *
 * Todos los botones son enlaces reales a `/contacto`. En la versión anterior
 * varios eran `<button>` sin acción: la persona hacía clic y no pasaba nada,
 * lo que además dejaba a los buscadores sin ninguna ruta que seguir.
 */
export default function CtaFinal({
  title = "¿Listo para poner orden en tu operación?",
  description,
  primaryLabel = "Solicitar Diagnóstico Gratuito",
  variant = "azul",
}: {
  title?: string;
  description: string;
  primaryLabel?: string;
  variant?: "azul" | "oscuro";
}) {
  const isAzul = variant === "azul";

  return (
    <section className={isAzul ? "bg-blue-600 py-20" : "bg-slate-900 py-20"}>
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">{title}</h2>
        <p
          className={`mb-10 text-xl ${isAzul ? "text-blue-100" : "text-slate-400"}`}
        >
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className={`rounded-xl px-8 py-4 font-bold transition-colors ${
              isAzul
                ? "bg-white text-blue-600 hover:bg-slate-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {primaryLabel}
          </Link>
          <Link
            href="/antes-del-erp"
            className={`rounded-xl border-2 px-8 py-4 font-bold transition-colors ${
              isAzul
                ? "border-white text-white hover:bg-blue-700"
                : "border-slate-600 text-white hover:bg-slate-800"
            }`}
          >
            ¿Por qué ordenar primero?
          </Link>
        </div>
      </div>
    </section>
  );
}
