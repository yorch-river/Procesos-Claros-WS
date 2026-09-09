import Link from "next/link";
import { Check, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { productSchema } from "@/lib/schema";
import { productos, testimonioProductos } from "@/content/productos";

export const metadata = pageMetadata({
  title: "Productos Digitales para Ordenar tu Pyme",
  description:
    "Kit de autodiagnóstico y kit de sistematización: plantillas, guías y tests para ordenar tu pyme por tu cuenta antes de invertir en software.",
  path: "/productos",
});

export default function ProductosPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Productos", path: "/productos" }]} />

        {productos.map((producto) => (
          <JsonLd
            key={producto.id}
            data={productSchema({
              name: producto.name,
              description: producto.description,
              priceClp: producto.priceClp,
            })}
          />
        ))}

        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900">
            Productos Digitales
          </h1>
          <p className="text-xl text-slate-600">
            Herramientas accionables para que tú mismo empieces el cambio en tu
            empresa.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {productos.map((producto) => (
            <article
              key={producto.id}
              className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-slate-100 bg-white p-10 transition-colors hover:border-blue-200"
            >
              <p className="absolute right-0 top-0 rounded-bl-3xl bg-blue-600 px-6 py-2 font-bold text-white">
                {producto.priceLabel}
              </p>
              <h2 className="mb-2 pr-28 text-2xl font-bold text-slate-900">
                {producto.name}
              </h2>
              <p className="mb-6 font-medium text-blue-600">
                {producto.tagline}
              </p>
              <p className="mb-8 leading-relaxed text-slate-600">
                {producto.description}
              </p>

              <div className="mb-10 flex-grow space-y-4">
                {producto.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check
                      className="h-5 w-5 flex-shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Enlace real a contacto en vez del <button> sin acción que
                  tenía la versión anterior. Cuando exista pasarela de pago,
                  este href apunta al checkout. */}
              <Link
                href={`/contacto?producto=${producto.id}`}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 py-4 font-bold text-white transition-colors hover:bg-blue-600"
              >
                Quiero este kit
              </Link>
            </article>
          ))}
        </div>

        <figure className="mx-auto mt-20 max-w-4xl rounded-3xl border border-amber-100 bg-amber-50 p-10 text-center">
          <div
            className="mb-4 flex justify-center"
            role="img"
            aria-label={`Valoración: ${testimonioProductos.rating} de 5 estrellas`}
          >
            {Array.from({ length: testimonioProductos.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-amber-500 text-amber-500"
                aria-hidden="true"
              />
            ))}
          </div>
          <blockquote className="mb-6 text-lg italic text-slate-700">
            <p>“{testimonioProductos.texto}”</p>
          </blockquote>
          <figcaption className="font-bold text-slate-900">
            — {testimonioProductos.autor}, {testimonioProductos.cargo}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
