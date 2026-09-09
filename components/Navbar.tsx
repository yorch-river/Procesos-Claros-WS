"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";

/**
 * Navegación principal.
 *
 * Usa `next/link` con rutas reales (`/servicios`), no fragmentos (`/#/servicios`).
 * Es el cambio que convierte cada sección en una página indexable por separado:
 * los buscadores descartan todo lo que va después del `#`.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav aria-label="Navegación principal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex flex-shrink-0 items-center">
                <span className="text-xl font-bold tracking-tight text-slate-800">
                  PROCESOS<span className="text-blue-600">CLAROS</span>
                </span>
                <span className="sr-only">
                  Procesos Claros, inicio
                </span>
              </Link>
            </div>

            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              {navigation.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`${
                    isActive(link.path)
                      ? "border-blue-600 text-slate-900"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
                  } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Diagnóstico Gratuito
              </Link>
            </div>

            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="menu-movil"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            id="menu-movil"
            className="border-b border-slate-100 bg-white shadow-lg md:hidden"
          >
            <ul className="space-y-1 pb-3 pt-2">
              {navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={`${
                      isActive(link.path)
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-transparent text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
                    } block border-l-4 py-3 pl-3 pr-4 text-base font-medium`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
