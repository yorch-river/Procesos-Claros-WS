import Link from "next/link";
import { navigation } from "@/lib/site";

export const metadata = {
  title: "Página no encontrada",
  // Una 404 nunca debe indexarse, pero sí conviene que el rastreador siga
  // sus enlaces para volver al sitio.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
        Error 404
      </p>
      <h1 className="mb-6 text-4xl font-extrabold text-slate-900">
        Esta página no existe.
      </h1>
      <p className="mb-10 text-xl text-slate-600">
        Puede que el enlace esté mal escrito o que la página haya cambiado de
        dirección. Estas sí existen:
      </p>
      <ul className="flex flex-wrap justify-center gap-3">
        {navigation.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="inline-block rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-600"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
