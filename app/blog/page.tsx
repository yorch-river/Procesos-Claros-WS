import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
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
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JsonLd data={blogSchema()} />
        <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-slate-900">
            Recursos y Artículos
          </h1>
          <p className="text-xl text-slate-600">
            Ideas claras para mejorar la gestión de tu negocio, sin
            complicaciones técnicas.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-slate-100 p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-blue-600">
                <span>{post.category}</span>
                <span aria-hidden="true" className="text-slate-300">
                  •
                </span>
                <time
                  dateTime={post.datePublished}
                  className="font-normal normal-case tracking-normal text-slate-400"
                >
                  {formatDate(post.datePublished)}
                </time>
              </div>

              {/* H2 porque cuelga del H1 de la página de listado. */}
              <h2 className="mb-4 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mb-6 flex-grow leading-relaxed text-slate-600">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 border-b-2 border-blue-600 pb-1 font-bold text-slate-900">
                  Leer artículo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-400">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {post.readingMinutes} min
                </span>
              </div>
            </article>
          ))}
        </div>

        <section className="rounded-3xl bg-slate-900 p-12 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">¿Quieres profundizar más?</h2>
          <p className="mx-auto mb-10 max-w-xl text-slate-400">
            Suscríbete para recibir mi newsletter quincenal: “Operaciones con
            Sentido Común” para dueños de pymes.
          </p>
          {/* Enlace a contacto en vez del formulario sin backend que tenía la
              versión anterior: al enviarlo no ocurría nada. */}
          <Link
            href="/contacto"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold transition-colors hover:bg-blue-700"
          >
            Quiero suscribirme
          </Link>
        </section>
      </div>
    </div>
  );
}
