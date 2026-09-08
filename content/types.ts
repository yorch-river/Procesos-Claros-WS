/**
 * Tipos del contenido editorial.
 *
 * El cuerpo de cada artículo se guarda como bloques tipados en vez de HTML
 * suelto. Así la jerarquía de encabezados (un H1, luego H2, luego H3) queda
 * garantizada por construcción, que es justo lo que Google usa para entender
 * de qué trata el artículo.
 */

export type PostBlock =
  | { kind: "parrafo"; texto: string }
  | { kind: "lista"; items: string[] }
  | { kind: "lista-numerada"; items: string[] }
  | { kind: "cita"; texto: string; autor?: string }
  | { kind: "destacado"; titulo: string; texto: string };

export type PostSection = {
  /** Se renderiza como H2. Debe poder leerse como respuesta a una búsqueda. */
  heading: string;
  bloques: PostBlock[];
};

export type Faq = { question: string; answer: string };

export type Post = {
  slug: string;
  /** H1 del artículo. */
  title: string;
  /** Title de la pestaña y del resultado en Google. Puede ser más corto. */
  seoTitle: string;
  /** Meta description: 150-160 caracteres, escrita para dar ganas de hacer clic. */
  description: string;
  /** Bajada visible en el listado del blog. */
  excerpt: string;
  category: string;
  /** ISO 8601. Alimenta el sitemap y los datos estructurados. */
  datePublished: string;
  dateModified?: string;
  readingMinutes: number;
  /** Entrada del artículo, antes del primer H2. */
  intro: string;
  sections: PostSection[];
  /** Preguntas frecuentes del artículo. Generan el bloque FAQ en Google. */
  faqs?: Faq[];
  /** Slugs de artículos relacionados. Enlaces internos = mejor rastreo. */
  related?: string[];
};
