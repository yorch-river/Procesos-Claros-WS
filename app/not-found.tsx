import Link from "next/link";
import { FiguraCaminoRoto } from "@/components/Figuras";
import { navigation } from "@/lib/site";
import { contenedor, rotulo, tituloPagina } from "@/lib/estilos";

export const metadata = {
  title: "Página no encontrada",
  // Una 404 nunca debe indexarse, pero sí conviene que el rastreador siga
  // sus enlaces para volver al sitio.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={`${contenedor} py-20 lg:py-32`}>
      <FiguraCaminoRoto className="mb-10 h-28 w-28" />
      <p className={`${rotulo} mb-6`}>[ Error 404 ]</p>
      <h1 className={`${tituloPagina} mb-8`}>Esta página no existe.</h1>
      <p className="mb-10 max-w-[640px] border-t-2 border-tinta pt-7 text-xl text-tinta-suave">
        Puede que el enlace esté mal escrito o que la página haya cambiado de
        dirección. Estas sí existen:
      </p>
      <ul className="flex flex-wrap gap-3">
        {navigation.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="inline-flex min-h-[48px] items-center border-[1.5px] border-[#C9CBCF] px-5 font-semibold transition-colors hover:border-tinta hover:text-acento"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
