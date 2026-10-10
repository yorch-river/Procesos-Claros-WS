import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaFinal from "@/components/CtaFinal";
import Faqs from "@/components/Faqs";
import FiguraCategoria from "@/components/FiguraCategoria";
import JsonLd from "@/components/JsonLd";
import PostBody from "@/components/PostBody";
import RecursoDestacado from "@/components/RecursoDestacado";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { contenedor, rotulo, tituloSeccion } from "@/lib/estilos";
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
    <>
      <article className={`${contenedor} pb-20 pt-10 sm:pt-14 lg:pb-28`}>
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

        <header className="mb-14 mt-10 sm:mt-14">
          <div className="mb-8 flex items-center gap-5">
            <FiguraCategoria
              categoria={post.category}
              className="h-14 w-14 flex-none"
            />
            <p className={`${rotulo} flex flex-wrap gap-x-3`}>
              <span className="text-acento">{post.category}</span>
              <span aria-hidden="true">/</span>
              <time dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
              <span aria-hidden="true">/</span>
              <span>{post.readingMinutes} min de lectura</span>
            </p>
          </div>

          <h1 className="mb-10 max-w-[960px] text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.022em]">
            {post.title}
          </h1>

          <div className="max-w-[720px] border-t-2 border-tinta pt-7">
            <p className="text-[22px] leading-normal text-tinta-suave">
              {post.intro}
            </p>

            <p className="mt-8 flex items-center gap-4 text-[15px] text-gris-medio">
              <Image
                src={site.founder.image}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 flex-none object-cover grayscale"
              />
              <span>
                Por{" "}
                <Link
                  href="/sobre-mi"
                  className="font-semibold text-tinta underline-offset-4 hover:text-acento hover:underline"
                >
                  {site.founder.name}
                </Link>
                , {site.founder.jobTitle.toLowerCase()}.
              </span>
            </p>
          </div>
        </header>

        <div className="max-w-[720px]">
          <PostBody sections={post.sections} />

          {post.faqs && <Faqs faqs={post.faqs} />}
        </div>

        <RecursoDestacado className="mt-20" />

        {relacionados.length > 0 && (
          <section className="mt-20">
            <p className={`${rotulo} mb-5`}>Para seguir</p>
            <h2 className={`${tituloSeccion} mb-10`}>Artículos relacionados</h2>
            <ul className="border-t-2 border-tinta">
              {relacionados.map((related) => (
                <li key={related.slug} className="border-b border-linea">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group flex flex-wrap items-start gap-x-8 gap-y-3 py-7"
                  >
                    <FiguraCategoria
                      categoria={related.category}
                      className="h-12 w-12 flex-none"
                    />
                    <span className="min-w-0 flex-[1_1_420px]">
                      <span className="block text-2xl font-bold leading-tight tracking-[-0.02em] group-hover:text-acento">
                        {related.title}
                      </span>
                      <span className="mt-2 block text-gris-medio">
                        {related.excerpt}
                      </span>
                    </span>
                    <span aria-hidden="true" className="self-center text-xl text-acento">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-12">
          <Link
            href="/blog"
            className="inline-flex min-h-[44px] items-center gap-2 font-semibold hover:text-acento"
          >
            <span aria-hidden="true">←</span>
            Volver a todos los artículos
          </Link>
        </p>
      </article>

      <CtaFinal
        title="¿Esto te suena a tu empresa?"
        description="Conversemos 30 minutos sobre tu operación. Sin costo y sin compromiso."
      />
    </>
  );
}
