import { Mail, Linkedin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Diagnóstico gratuito para tu pyme | Contacto",
  description:
    "Agenda una sesión de diagnóstico gratuita de 30 minutos. Evaluamos tus procesos actuales y si tu empresa está lista para digitalizar. Sin compromiso.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contacto", path: "/contacto" }]} />

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-extrabold text-slate-900">
              Empecemos a ordenar tu negocio.
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-600">
              Responde estas breves preguntas y te contactaré para una sesión de
              diagnóstico gratuita de 30 minutos donde evaluaremos tus procesos
              actuales.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">Email Directo</h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-slate-600 hover:text-blue-600 hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Linkedin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">LinkedIn</h2>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 hover:underline"
                  >
                    linkedin.com/in/jriveradelvalle
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
