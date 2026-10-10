import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { contenedor, rotulo as claseRotulo, tituloPagina } from "@/lib/estilos";

/**
 * Cabecera común de las páginas interiores: migas, rótulo, H1 y bajada.
 *
 * Repite la estructura del hero de la home (título grande sobre una línea
 * gruesa) para que todas las páginas se lean como parte del mismo documento.
 * `aside` recibe la figura o foto que acompaña a la bajada.
 */
export default function EncabezadoPagina({
  migas,
  rotulo,
  titulo,
  bajada,
  aside,
}: {
  migas: Crumb[];
  rotulo: string;
  titulo: React.ReactNode;
  bajada?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className={`${contenedor} pt-10 sm:pt-14`}>
      <Breadcrumbs items={migas} />
      <p className={`${claseRotulo} mb-6 mt-10 sm:mt-14`}>[ {rotulo} ]</p>
      <h1 className={`${tituloPagina} max-w-[1050px]`}>{titulo}</h1>
      {(bajada || aside) && (
        <div className="mt-10 flex flex-wrap items-end justify-between gap-x-12 gap-y-8 border-t-2 border-tinta pt-7 lg:mt-14">
          {bajada && (
            <div className="max-w-[640px] flex-[2_1_380px] text-xl leading-normal text-tinta-suave">
              {bajada}
            </div>
          )}
          {aside && <div className="flex-none">{aside}</div>}
        </div>
      )}
    </header>
  );
}
