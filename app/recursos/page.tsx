import DescargaForm from "@/components/DescargaForm";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import {
  FiguraMadurez,
  FiguraRuta,
  FiguraTestMadurez,
} from "@/components/Figuras";
import { pageMetadata } from "@/lib/seo";
import { contenedor, rotulo, tituloSeccion } from "@/lib/estilos";
import { testMadurez } from "@/content/recursos";

export const metadata = pageMetadata({
  title: "Test de madurez operativa gratuito (Excel)",
  description:
    "Descarga gratis el test de madurez operativa: 20 preguntas en Excel para saber si tu empresa está lista para implementar un ERP y por dónde empezar a ordenar.",
  path: "/recursos",
});

const incluye = [
  {
    figura: FiguraTestMadurez,
    titulo: "20 preguntas en 5 áreas",
    texto:
      "Flujo y responsables, datos, excepciones y control, costos y medición, documentación y equipo.",
  },
  {
    figura: FiguraMadurez,
    titulo: "Resultado automático",
    texto:
      "Puntaje por área, un gráfico y un veredicto: lista para un sistema, zona intermedia o todavía no.",
  },
  {
    figura: FiguraRuta,
    titulo: "Por dónde empezar",
    texto:
      "Las dos áreas más débiles de tu empresa, con la primera acción concreta para cada una.",
  },
];

export default function RecursosPage() {
  return (
    <>
      <EncabezadoPagina
        migas={[{ name: "Recursos", path: "/recursos" }]}
        rotulo="Recurso gratuito · Excel"
        titulo={testMadurez.titulo}
        bajada={<p>{testMadurez.bajada}</p>}
        aside={<FiguraTestMadurez className="h-32 w-32 sm:h-40 sm:w-40" />}
      />

      <div
        className={`${contenedor} flex flex-wrap gap-x-20 gap-y-14 pb-20 pt-16 lg:pb-28 lg:pt-20`}
      >
        <section className="min-w-0 flex-[1.2_1_420px]">
          <p className={`${rotulo} mb-5`}>Qué incluye</p>
          <h2 className={`${tituloSeccion} mb-10`}>
            Un diagnóstico que puedes hacer hoy, con tu equipo.
          </h2>
          <ul className="border-t-2 border-tinta">
            {incluye.map(({ figura: Figura, titulo, texto }) => (
              <li key={titulo} className="flex gap-6 border-b border-linea py-7">
                <Figura className="h-14 w-14 flex-none" />
                <div>
                  <h3 className="mb-1.5 text-xl font-bold tracking-[-0.01em]">
                    {titulo}
                  </h3>
                  <p className="text-lg text-gris-medio">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[560px] text-lg text-tinta-suave">
            Consejo: pide a dos o tres personas de tu operación que lo respondan
            por separado y comparen. Las diferencias entre respuestas son, en sí
            mismas, un hallazgo.
          </p>
        </section>

        <section aria-label="Descargar el test" className="min-w-0 flex-[1_1_380px]">
          <DescargaForm recurso={testMadurez} />
        </section>
      </div>
    </>
  );
}
