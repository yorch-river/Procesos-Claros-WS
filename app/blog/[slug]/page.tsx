import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostBody from "@/components/PostBody";
import Faqs from "@/components/Faqs";
import CtaFinal from "@/components/CtaFinal";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { posts, getPost, getRelatedPosts, formatDate } from "@/content/posts";

/**
 * Genera una página estática por artículo en el build.
 *
 * Es lo que hace que cada post exista como HTML completo en su propia URL, sin
 * depender de que el buscador ejecute JavaScript para verlo.
 */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return pageMetadata({
      title: "Artículo no encontrado",
      description: "El artículo que buscas no existe o cambió de dirección.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const relacionados = getRelatedPosts(post);

  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <JsonLd
          data={articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          })}
        />

        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-wider text-blue-600">
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
            <span className="flex items-center gap-1 font-normal normal-case tracking-normal text-slate-400">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readingMinutes} min de lectura
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900">
            {post.title}
          </h1>

          <p className="text-xl leading-relaxed text-slate-600">{post.intro}</p>

          <p className="mt-8 border-t border-slate-100 pt-6 text-sm text-slate-500">
            Por{" "}
            <Link href="/sobre-mi" className="font-medium text-slate-700 hover:text-blue-600">
              {site.founder.name}
            </Link>
            , {site.founder.jobTitle.toLowerCase()}.
          </p>
        </header>

        <PostBody sections={post.sections} />

        {post.faqs && <Faqs faqs={post.faqs} />}

        {relacionados.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Artículos relacionados
            </h2>
            <ul className="space-y-4">
              {relacionados.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
                  >
                    <h3 className="font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {related.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a todos los artículos
          </Link>
        </p>
      </div>

      <div className="mt-20">
        <CtaFinal
          title="¿Esto te suena a tu empresa?"
          description="Conversemos 30 minutos sobre tu operación. Sin costo y sin compromiso."
          variant="oscuro"
        />
      </div>
    </article>
  );
}
