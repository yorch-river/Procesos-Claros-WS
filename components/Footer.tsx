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
    <footer className="bg-tinta pb-8 pt-16 text-white">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-[60px]">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <span className="mb-6 block text-2xl font-bold tracking-[-0.01em] text-white">
              Procesos Claros
            </span>
            <p className="mb-6 max-w-sm text-[#A6AAB1]">
              Consultoría independiente para ordenar y sistematizar empresas,
              antes y después de su transformación digital. Ayudamos a dueños y
              gerentes a recuperar el control.
            </p>
          </div>

          <div>
            <h2 className="mb-6 font-mono text-[13px] font-normal uppercase tracking-wide text-[#A6AAB1]">Enlaces</h2>
            <ul className="space-y-4 text-[#A6AAB1]">
              <li>
                <Link
                  href="/antes-del-erp"
                  className="transition-colors hover:text-acento-claro"
                >
                  Antes del ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="transition-colors hover:text-acento-claro"
                >
                  Servicios
                </Link>
              </li>
              {/* Productos está oculto mientras no exista el catálogo ni el
                  medio de pago. Ver la nota en lib/site.ts para reactivarlo. */}
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-acento-claro"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="transition-colors hover:text-acento-claro"
                >
                  Test de madurez (Excel)
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="transition-colors hover:text-acento-claro"
                >
                  Sobre Mí
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-mono text-[13px] font-normal uppercase tracking-wide text-[#A6AAB1]">Contacto</h2>
            <ul className="space-y-4 text-[#A6AAB1]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-acento-claro"
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
                  className="flex items-center gap-2 transition-colors hover:text-acento-claro"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="underline transition-colors hover:text-acento-claro"
                >
                  Solicitar Diagnóstico
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3A3D42] pt-8 text-center text-sm text-[#8C9097]">
          <p>
            © {year} {site.name}. Consultoría Independiente para Pymes.
          </p>
        </div>
      </div>
    </footer>
  );
}
