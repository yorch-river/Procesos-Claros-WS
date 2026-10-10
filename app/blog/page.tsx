import Link from "next/link";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import FiguraCategoria from "@/components/FiguraCategoria";
import { FiguraSobre } from "@/components/Figuras";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
import { contenedor, rotulo, tituloSeccion } from "@/lib/estilos";
import { posts, formatDate } from "@/content/posts";

export const metadata = pageMetadata({
  title: "Blog: procesos, ERP y gestión de pymes",
  description:
    "Ideas claras para mejorar la gestión de tu negocio, sin complicaciones técnicas. Artículos sobre procesos, madurez operativa y qué hacer antes de comprar un ERP.",
  path: "/blog",
});

/** Declara el blog como colección, con sus artículos enlazados. */
function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog"),
    name: `Blog de ${site.name}`,
    description:
      "Artículos sobre sistematización de procesos, madurez operativa y digitalización de pymes.",
    inLanguage: site.lang,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.datePublished,
    })),
  };
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema()} />

      <EncabezadoPagina
        migas={[{ name: "Blog", path: "/blog" }]}
        rotulo="Blog"
        titulo="Recursos y artículos"
        bajada={
          <p>
            Ideas claras para mejorar la gestión de tu negocio, sin
            complicaciones técnicas.
          </p>
        }
      />

      {/* Índice editorial: una fila por artículo, sin tarjetas */}
      <div className={`${contenedor} pb-20 pt-14 lg:pb-28`}>
        <ul className="border-t-2 border-tinta">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-linea">
              <article className="group relative flex flex-wrap items-start gap-x-10 gap-y-5 py-10">
                <FiguraCategoria
                  categoria={post.category}
                  className="h-16 w-16 flex-none"
                />
                <div className="min-w-0 flex-[1_1_480px]">
                  <p className={`${rotulo} mb-3 flex flex-wrap gap-x-3`}>
                    <span className="text-ocre">{post.category}</span>
                    <span aria-hidden="true">/</span>
                    <time dateTime={post.datePublished}>
                      {formatDate(post.datePublished)}
                    </time>
                    <span aria-hidden="true">/</span>
                    <span>{post.readingMinutes} min</span>
                  </p>
                  {/* H2 porque cuelga del H1 de la página de listado. */}
                  <h2 className="mb-3 text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-tight tracking-[-0.025em] transition-colors group-hover:text-ocre">
                    {/* El enlace cubre toda la fila con un pseudo-elemento,
                        sin anidar el resto del contenido dentro del <a>. */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="max-w-[680px] text-lg leading-relaxed text-gris-medio">
                    {post.excerpt}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden self-center text-2xl text-ocre transition-transform group-hover:translate-x-1 md:block"
                >
                  →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <section className="bg-tinta text-white">
        <div
          className={`${contenedor} flex flex-wrap items-center gap-x-16 gap-y-10 py-16 lg:py-24`}
        >
          <FiguraSobre
            className="h-24 w-24 flex-none"
            trazo="#D8DADD"
            acento="#F2A65A"
          />
          <div className="min-w-0 flex-[999_1_480px]">
            <p className="mb-4 font-mono text-[13px] text-[#A6AAB1]">
              Newsletter quincenal
            </p>
            <h2 className={`${tituloSeccion} mb-5`}>
              ¿Quieres profundizar más?
            </h2>
            <p className="max-w-[560px] text-lg text-[#C9CCD2]">
              Suscríbete para recibir mi newsletter quincenal: “Operaciones con
              Sentido Común” para dueños de pymes.
            </p>
          </div>
          {/* Enlace a contacto en vez del formulario sin backend que tenía la
              versión anterior: al enviarlo no ocurría nada. */}
          <Link
            href="/contacto"
            className="inline-flex min-h-[56px] flex-none items-center gap-3 bg-white px-7 font-semibold text-tinta transition-colors hover:bg-ocre-claro"
          >
            Quiero suscribirme <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
