/**
 * Pregunta si la empresa ya tiene un ERP.
 *
 * Va en los dos formularios del sitio. Es la forma de saber, con datos y no
 * por intuición, cuántos de los que escriben ya pasaron por una
 * implementación: de ahí depende si conviene crear una página propia para ese
 * segmento o si basta con lo que el sitio ya dice.
 *
 * Vive en un componente compartido para que las opciones sean idénticas en
 * ambos formularios; si se escriben dos veces, tarde o temprano se separan.
 */

export const OPCIONES_TIENE_ERP = [
  "No, estamos evaluando",
  "No, todavía no lo pensamos",
  "Sí, ya tenemos uno",
] as const;

export default function CampoTieneErp({
  idPrefijo = "",
  etiquetaClase,
}: {
  /** Distingue los ids cuando hay más de un formulario en la misma página. */
  idPrefijo?: string;
  etiquetaClase: string;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className={etiquetaClase}>¿Tu empresa ya usa un ERP?</legend>
      <div className="flex flex-wrap gap-x-7 gap-y-3">
        {OPCIONES_TIENE_ERP.map((opcion) => {
          const id = `${idPrefijo}tiene-erp-${opcion.slice(0, 6).toLowerCase().replace(/[^a-z]/g, "")}`;
          return (
            <span key={opcion} className="flex items-center gap-2.5">
              <input
                id={id}
                type="radio"
                name="tiene_erp"
                value={opcion}
                required
                className="h-[18px] w-[18px] flex-none accent-acento"
              />
              <label htmlFor={id} className="text-[17px] leading-snug">
                {opcion}
              </label>
            </span>
          );
        })}
      </div>
    </fieldset>
  );
}
