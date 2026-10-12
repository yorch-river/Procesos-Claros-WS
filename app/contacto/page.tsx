import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import {
  FiguraCorreo,
  FiguraPerfil,
  FiguraTreintaMinutos,
} from "@/components/Figuras";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { contenedor, rotulo, tituloPagina } from "@/lib/estilos";

export const metadata = pageMetadata({
  title: "Contacto | Procesos Claros",
  description:
    "Envíame el resultado de tu test de madurez y agendamos 30 minutos para revisarlo, sin costo. O escríbeme directamente si tienes otra consulta.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <div className={`${contenedor} pb-20 pt-10 sm:pt-14 lg:pb-28`}>
      <Breadcrumbs items={[{ name: "Contacto", path: "/contacto" }]} />

      <div className="mt-10 flex flex-wrap gap-x-20 gap-y-14 sm:mt-14">
        <div className="min-w-0 flex-[1_1_420px]">
          <p className={`${rotulo} mb-6`}>[ Contacto ]</p>
          <h1 className={`${tituloPagina} mb-10`}>
            Empecemos a ordenar tu negocio.
          </h1>

          <div className="flex gap-6 border-t-2 border-tinta pt-7">
            <FiguraTreintaMinutos className="h-20 w-20 flex-none" />
            <p className="text-xl leading-normal text-tinta-suave">
              ¿Hiciste el test de madurez? Envíame el Excel completado y
              agendamos 30 minutos para revisar tu resultado, sin costo. Si
              tienes otra consulta, escríbeme igual por aquí.
            </p>
          </div>

          <ul className="mt-12 border-t border-linea">
            <li className="flex items-center gap-5 border-b border-linea py-6">
              <FiguraCorreo className="h-12 w-12 flex-none" />
              <div>
                <h2 className={`${rotulo} mb-1`}>Email directo</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg font-semibold underline-offset-4 hover:text-acento hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-5 border-b border-linea py-6">
              <FiguraPerfil className="h-12 w-12 flex-none" />
              <div>
                <h2 className={`${rotulo} mb-1`}>LinkedIn</h2>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold underline-offset-4 hover:text-acento hover:underline"
                >
                  linkedin.com/in/jriveradelvalle
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="min-w-0 flex-[1_1_480px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
