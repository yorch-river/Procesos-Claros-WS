/**
 * Clases que se repiten en todas las páginas.
 *
 * Viven acá para que el ancho de la columna, los rótulos y los botones sean
 * idénticos en todo el sitio: si cambia uno, cambia en todos lados.
 */

export const contenedor = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-[60px]";

/** Rótulo de sección en monoespaciada: "02 / Servicios". */
export const rotulo = "font-mono text-[13px] tracking-wide text-gris";

export const tituloPagina =
  "text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em]";

export const tituloSeccion =
  "text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em]";

export const botonPrimario =
  "inline-flex min-h-[54px] items-center gap-3 bg-tinta px-6 font-semibold text-white transition-colors hover:bg-ocre";

export const botonSecundario =
  "inline-flex min-h-[54px] items-center border-[1.5px] border-[#C9CBCF] px-6 font-semibold transition-colors hover:border-tinta";

export const enlaceSubrayado =
  "font-semibold underline underline-offset-4 hover:text-ocre";
