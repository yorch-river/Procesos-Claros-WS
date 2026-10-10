import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * robots.txt generado en el build.
 *
 * Permite el rastreo completo del sitio y, sobre todo, declara dónde está el
 * sitemap: es la forma más directa de que un buscador descubra las páginas
 * nuevas sin esperar a encontrarlas por enlaces.
 *
 * Las descargas quedan fuera: el test se entrega a cambio del correo en
 * /recursos, y no conviene que Google lo ofrezca directo en los resultados.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/descargas/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
