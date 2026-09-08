/**
 * Inyecta datos estructurados (schema.org) en la página.
 *
 * Es lo que permite a Google entender que esto es un servicio profesional, que
 * Jorge Rivera es la persona detrás, y qué preguntas responde cada página. Sin
 * esto, el buscador solo ve texto suelto.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro y estático, no viene de entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
