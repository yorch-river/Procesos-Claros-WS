import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Pie de página.
 *
 * Además de su rol visual, es una capa de enlazado interno: le da a los
 * buscadores un camino directo a las páginas de fondo desde cualquier punto
 * del sitio, incluidos los artículos del blog.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <span className="mb-6 block text-2xl font-bold tracking-tight text-white">
              PROCESOS<span className="text-blue-400">CLAROS</span>
            </span>
            <p className="mb-6 max-w-sm text-slate-400">
              Consultoría independiente enfocada en ordenar y sistematizar pymes
              antes de su transformación digital. Ayudamos a dueños de negocio a
              recuperar el control.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-semibold">Enlaces</h2>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/antes-del-erp"
                  className="transition-colors hover:text-blue-400"
                >
                  Antes del ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="transition-colors hover:text-blue-400"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="transition-colors hover:text-blue-400"
                >
                  Productos Digitales
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-blue-400"
                >
                  Recursos / Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="transition-colors hover:text-blue-400"
                >
                  Sobre Mí
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-semibold">Contacto</h2>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-blue-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-400"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="underline transition-colors hover:text-blue-400"
                >
                  Solicitar Diagnóstico
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © {year} {site.name}. Consultoría Independiente para Pymes.
          </p>
        </div>
      </div>
    </footer>
  );
}
