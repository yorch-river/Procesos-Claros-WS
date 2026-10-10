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
    <header className="sticky top-0 z-50 border-b border-linea bg-white">
      <nav aria-label="Navegación principal">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-[60px]">
          <div className="flex h-20 justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center gap-3 text-[19px] font-bold tracking-[-0.01em] text-tinta"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <rect x="1" y="1" width="20" height="20" fill="none" stroke="#1A1C1F" strokeWidth="2" />
                  <path d="M6 8h10M6 14h6" stroke="#B45309" strokeWidth="2" />
                </svg>
                Procesos Claros
                <span className="sr-only">, inicio</span>
              </Link>
            </div>

            <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-7">
              {navigation.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`${
                    isActive(link.path)
                      ? "border-ocre text-tinta"
                      : "border-transparent text-gris-medio hover:border-linea hover:text-tinta"
                  } inline-flex items-center border-b-2 px-1 pt-1 text-[15px] font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="inline-flex min-h-[44px] items-center border-[1.5px] border-tinta px-[18px] text-[15px] font-semibold text-tinta transition-colors hover:bg-tinta hover:text-white"
              >
                Diagnóstico gratuito
              </Link>
            </div>

            <div className="-mr-2 flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="menu-movil"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                className="inline-flex items-center justify-center p-2 text-tinta hover:bg-papel"
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
            className="border-b border-linea bg-white lg:hidden"
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
                        ? "border-ocre bg-papel text-tinta"
                        : "border-transparent text-gris-medio hover:border-linea hover:bg-papel hover:text-tinta"
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
