import type { Post } from "../types";

export const post: Post = {
  slug: "erp-o-procesos-que-va-primero",
  title: "ERP vs Procesos: ¿qué va primero?",
  seoTitle: "ERP o procesos: ¿cuál va primero?",
  description:
    "El huevo o la gallina de la gestión: ¿ordenas los procesos o compras el sistema? Por qué invertir la secuencia es la receta más común del desastre.",
  excerpt:
    "El huevo o la gallina de la gestión empresarial. Te explicamos por qué invertir el orden es una receta para el desastre.",
  category: "Opinión",
  datePublished: "2026-01-15",
  readingMinutes: 7,
  intro:
    "Es la objeción que más me hacen: “si ordeno primero, voy a definir procesos que después el sistema me va a obligar a cambiar igual. ¿No es mejor comprar el ERP y adaptarme a él?”. Es una objeción legítima y merece una respuesta seria, porque tiene una parte de razón.",
  sections: [
    {
      heading: "La parte en la que la objeción tiene razón",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Es cierto que un sistema impone su propia lógica. Si documentas tus procesos al detalle, hasta el último clic, y después implementas un ERP, buena parte de ese detalle se va a la basura. El sistema tendrá otra forma de numerar documentos, otra secuencia de aprobaciones, otro modelo de datos.",
        },
        {
          kind: "parrafo",
          texto:
            "Documentar a ese nivel antes de elegir herramienta sí es trabajo perdido. En eso, quien objeta tiene toda la razón.",
        },
      ],
    },
    {
      heading: "La parte que la objeción confunde",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "El error está en confundir dos cosas distintas: el procedimiento y la regla de negocio.",
        },
        {
          kind: "parrafo",
          texto:
            "El procedimiento es el cómo: en qué pantalla se ingresa, qué botón se aprieta, en qué orden. Eso sí lo define el sistema, y no vale la pena escribirlo antes.",
        },
        {
          kind: "parrafo",
          texto:
            "La regla de negocio es el qué y el quién: qué margen mínimo aceptas, quién autoriza un descuento sobre cierto monto, en qué orden se despacha cuando el stock no alcanza, cuándo se considera perdido un cliente. Eso no lo define ningún software. Es tuyo, y el sistema te lo va a preguntar el primer día.",
        },
        {
          kind: "destacado",
          titulo: "La distinción que ahorra meses",
          texto:
            "Antes de comprar, define reglas de negocio, no procedimientos. Las reglas sobreviven a cualquier cambio de sistema. Los procedimientos no, y por eso conviene escribirlos después, con la herramienta ya elegida.",
        },
      ],
    },
    {
      heading: "Qué pasa cuando se invierte el orden",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Comprar primero y ordenar después no evita el trabajo de ordenar. Solo cambia el contexto en que ocurre, y lo cambia para peor en tres dimensiones:",
        },
        {
          kind: "lista",
          items: [
            "Costo: las definiciones se toman en horas de proyecto, con consultores facturando y un cronograma corriendo.",
            "Calidad: se decide bajo presión, eligiendo lo que desbloquea la configuración esta semana en vez de lo que conviene al negocio en tres años.",
            "Reversibilidad: ya firmaste. Si en el camino descubres que ese sistema no era el adecuado para tu operación, salir cuesta muchísimo más que no haber entrado.",
          ],
        },
        {
          kind: "parrafo",
          texto:
            "Hay una cuarta consecuencia, más sutil. Cuando ordenas bajo un proyecto de implementación, tu criterio deja de ser “qué le conviene a mi empresa” y pasa a ser “qué le acomoda al sistema que ya compré”. Le entregaste la decisión estratégica a una herramienta.",
        },
      ],
    },
    {
      heading: "La secuencia que sí funciona",
      bloques: [
        {
          kind: "lista-numerada",
          items: [
            "Mapea el flujo real de tu negocio, de punta a punta, a nivel de etapas y responsables. No a nivel de clics.",
            "Define tus reglas de negocio y tus excepciones. Escríbelas. Son el insumo principal de cualquier cotización seria.",
            "Limpia tus datos maestros: clientes, productos, proveedores. Sin duplicados y con criterios únicos.",
            "Recién ahí evalúa proveedores, usando tus reglas como criterio de comparación en vez de la lista de funcionalidades del vendedor.",
            "Implementa, y deja que el sistema defina los procedimientos. Ahí sí, adáptate a la herramienta.",
          ],
        },
        {
          kind: "parrafo",
          texto:
            "Los pasos 1 a 3 no requieren haber elegido software y no se pierden si después cambias de opinión sobre la herramienta. Son tuyos, y siguen siendo válidos aunque cambies de ERP tres veces en diez años.",
        },
      ],
    },
    {
      heading: "Una forma más simple de verlo",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Nadie contrata a un arquitecto después de haber comprado los materiales. No porque los materiales sean malos, sino porque el diseño determina qué materiales necesitas, y no al revés.",
        },
        {
          kind: "parrafo",
          texto:
            "Con un ERP pasa lo mismo. La pregunta no es si vas a ordenar tu empresa —vas a hacerlo de todas formas, es inevitable—. La pregunta es si lo vas a hacer con tiempo y sin contrato firmado, o contra el reloj y con la factura corriendo.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿No es mejor adaptarse a las buenas prácticas que trae el ERP?",
      answer:
        "Para los procedimientos operativos, sí: conviene adaptarse al sistema en vez de personalizarlo. Para las reglas de negocio, no: el software no conoce tu política de descuentos, tus condiciones especiales ni tus criterios de excepción. Esas las defines tú antes de comprar.",
    },
    {
      question: "¿Qué nivel de detalle necesito documentar antes de elegir sistema?",
      answer:
        "Etapas, responsables, reglas de decisión y excepciones. No hace falta llegar al nivel de pantallas ni de clics: ese detalle lo define la herramienta y documentarlo antes es trabajo que se pierde.",
    },
    {
      question: "Ya firmé el contrato del ERP. ¿Sirve de algo ordenar ahora?",
      answer:
        "Sirve mucho, y cada semana que pasa sirve menos. Definir tus reglas de negocio antes de que empiece la configuración es lo que evita que el proyecto se llene de decisiones tomadas al vuelo. Es tarde para el escenario ideal, pero es temprano para evitar el peor.",
    },
  ],
  related: ["necesitas-un-erp-o-necesitas-orden", "por-que-fallan-los-erp-en-pymes"],
};
