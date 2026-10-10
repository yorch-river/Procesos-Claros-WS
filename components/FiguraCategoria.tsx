import {
  FiguraBrujula,
  FiguraConversacion,
  FiguraGestion,
  FiguraNota,
  FiguraRuta,
  FiguraTecnologia,
} from "./Figuras";

/**
 * Figura de cada categoría del blog.
 *
 * Una categoría nueva sin figura asignada cae en la nota, así nunca queda un
 * hueco en el listado.
 */
const porCategoria: Record<string, typeof FiguraNota> = {
  Guía: FiguraBrujula,
  Opinión: FiguraConversacion,
  Estrategia: FiguraRuta,
  Tecnología: FiguraTecnologia,
  Gestión: FiguraGestion,
};

export default function FiguraCategoria({
  categoria,
  className,
}: {
  categoria: string;
  className?: string;
}) {
  const Figura = porCategoria[categoria] ?? FiguraNota;
  return <Figura className={className} />;
}
