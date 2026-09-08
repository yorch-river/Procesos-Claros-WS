import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Ruta interna, ej. "/servicios". Define el canonical y la URL de Open Graph. */
  path: string;
  /** Imagen para redes. Si se omite, se usa la que genera app/opengraph-image.tsx. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Excluye la página del índice (páginas de gracias, borradores, etc.). */
  noIndex?: boolean;
};

/**
 * Construye la metadata de una página.
 *
 * Cada página necesita título y descripción propios: es la diferencia entre
 * siete resultados distintos en Google y siete copias del mismo. El canonical
 * evita que Google trate variantes de la misma URL como páginas separadas.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  // La imagen generada por app/opengraph-image.tsx solo se aplica sola al
  // segmento raíz: en cuanto una página declara su propio `openGraph`, deja de
  // heredarse. Por eso se referencia de forma explícita en todas.
  const images = [
    { url: absoluteUrl(image ?? "/opengraph-image"), width: 1200, height: 630, alt: title },
  ];

  return {
    // `absolute` evita que el template del layout sume la marca por detrás:
    // así el largo del title es exactamente el que se escribe acá, y se puede
    // mantener bajo los ~60 caracteres que muestra Google.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}
