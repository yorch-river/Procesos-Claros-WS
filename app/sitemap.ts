import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { posts } from "@/content/posts";

/**
 * Sitemap generado en el build.
 *
 * Se arma desde las mismas fuentes que el sitio (navegación y artículos), así
 * que no puede quedar desactualizado: si se publica un artículo nuevo, aparece
 * acá solo. Queda disponible en /sitemap.xml para Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const rutas: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/antes-del-erp"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/servicios"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/productos"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/sobre-mi"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/contacto"), changeFrequency: "yearly", priority: 0.7 },
  ];

  const paginas: MetadataRoute.Sitemap = rutas.map((pagina) => ({
    ...pagina,
    lastModified: ahora,
  }));

  const articulos: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...paginas, ...articulos];
}
