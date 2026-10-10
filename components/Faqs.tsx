import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import { rotulo as claseRotulo, tituloSeccion } from "@/lib/estilos";
import type { Faq } from "@/content/types";

/**
 * Bloque de preguntas frecuentes, visible y estructurado a la vez.
 *
 * Google exige que el texto del schema FAQ esté también visible en la página:
 * marcar preguntas ocultas es motivo de penalización. Por eso ambos salen de
 * la misma fuente.
 */
export default function Faqs({
  faqs,
  title = "Preguntas frecuentes",
  rotulo,
}: {
  faqs: Faq[];
  title?: string;
  rotulo?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-20">
      <JsonLd data={faqSchema(faqs)} />
      {rotulo && <p className={`${claseRotulo} mb-5`}>{rotulo}</p>}
      <h2 className={`${tituloSeccion} mb-10`}>{title}</h2>
      <div className="border-b border-linea">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-t border-linea">
            <summary className="cursor-pointer list-none py-6 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-6 text-xl font-semibold leading-snug tracking-[-0.01em]">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex-none text-2xl leading-none text-ocre transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="max-w-[720px] pb-7 text-lg leading-relaxed text-gris-medio">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
