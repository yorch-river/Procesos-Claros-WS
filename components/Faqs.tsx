import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";
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
}: {
  faqs: Faq[];
  title?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-16 border-t border-slate-200 pt-12">
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-bold text-slate-900 marker:content-none">
              <span className="flex items-start justify-between gap-4">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="mt-1 flex-shrink-0 text-blue-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
