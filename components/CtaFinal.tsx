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
  variant = "acento",
}: {
  title?: string;
  description: string;
  primaryLabel?: string;
  variant?: "acento" | "oscuro";
}) {
  const isAcento = variant === "acento";

  return (
    <section className={isAcento ? "bg-ocre py-20" : "bg-tinta py-20"}>
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold tracking-[-0.03em]">{title}</h2>
        <p
          className={`mb-10 text-xl ${isAcento ? "text-white/90" : "text-[#C9CCD2]"}`}
        >
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className={`px-8 py-4 font-semibold transition-colors ${
              isAcento
                ? "bg-white text-tinta hover:bg-papel"
                : "bg-ocre text-white hover:bg-ocre-oscuro"
            }`}
          >
            {primaryLabel}
          </Link>
          <Link
            href="/antes-del-erp"
            className={`border-[1.5px] px-8 py-4 font-semibold transition-colors ${
              isAcento
                ? "border-white text-white hover:bg-ocre-oscuro"
                : "border-[#5B6068] text-white hover:border-white"
            }`}
          >
            ¿Por qué ordenar primero?
          </Link>
        </div>
      </div>
    </section>
  );
}
