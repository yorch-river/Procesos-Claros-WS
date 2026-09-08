import type { Post } from "../types";

export const post: Post = {
  slug: "necesitas-un-erp-o-necesitas-orden",
  title: "¿Realmente necesitas un ERP o necesitas orden?",
  seoTitle: "¿Necesitas un ERP o necesitas orden?",
  description:
    "Muchas pymes compran un ERP para resolver un problema que no es de software. Aprende a distinguir si tu caos viene de la tecnología o de tus procesos.",
  excerpt:
    "Muchas empresas culpan a la tecnología cuando el problema es la falta de procesos claros. Aprende a distinguir la raíz del caos.",
  category: "Estrategia",
  datePublished: "2024-03-12",
  readingMinutes: 7,
  intro:
    "Casi todas las conversaciones que tengo con dueños de pymes empiezan igual: “necesitamos un sistema”. Es una frase honesta, pero casi siempre es la respuesta correcta a la pregunta equivocada.",
  sections: [
    {
      heading: "La pregunta que nadie se hace antes de cotizar",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Cuando un negocio empieza a dolerle, el dolor se siente en todas partes: pedidos que se pierden, inventario que no cuadra, cobranzas que se atrasan, un equipo que discute sobre quién debía hacer qué. Frente a ese ruido, la salida más intuitiva es buscar una herramienta que lo ordene todo.",
        },
        {
          kind: "parrafo",
          texto:
            "El problema es que un ERP no ordena. Un ERP ejecuta. Es una máquina extraordinariamente rápida y obediente que hará exactamente lo que tus procesos le indiquen. Si tus procesos son ambiguos, la máquina ejecutará esa ambigüedad a gran velocidad y a mayor escala.",
        },
        {
          kind: "cita",
          texto:
            "Automatizar un proceso desordenado no lo arregla. Solo hace que te equivoques más rápido y de forma más consistente.",
        },
        {
          kind: "parrafo",
          texto:
            "Por eso la primera pregunta no es “¿qué sistema compro?”, sino “¿qué le voy a pedir a ese sistema que haga?”. Si no puedes responder eso con precisión, todavía no estás comprando software: estás comprando la esperanza de que alguien más defina tu negocio por ti.",
        },
      ],
    },
    {
      heading: "Cómo distinguir un problema de software de un problema de proceso",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Hay una prueba simple. Toma tu proceso más importante —el que va desde que llega un cliente hasta que cobras— y pregúntale a tres personas de tu equipo cómo funciona. Por separado.",
        },
        {
          kind: "parrafo",
          texto:
            "Si las tres descripciones coinciden y la queja es “esto lo hacemos bien, pero nos toma demasiado tiempo y lo anotamos en cinco planillas distintas”, tienes un problema de software. Un sistema te va a servir, y te va a servir muchísimo.",
        },
        {
          kind: "parrafo",
          texto:
            "Si las tres descripciones no coinciden —o si alguna incluye la frase “depende de quién lo haga”— no tienes un problema de software. Tienes un problema de definición. Y ningún ERP del mundo lo va a resolver, porque el ERP va a llegar preguntando exactamente lo mismo que tú no sabes responder.",
        },
        {
          kind: "destacado",
          titulo: "La señal más clara",
          texto:
            "Si al configurar el sistema tu equipo empieza a discutir sobre cómo debería funcionar el negocio, ese es el trabajo que faltaba hacer antes. Y hacerlo bajo la presión de un proyecto de implementación es la forma más cara posible de hacerlo.",
        },
      ],
    },
    {
      heading: "Lo que realmente estás comprando cuando compras un ERP",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Un ERP es una cáscara. Viene con contenedores vacíos: clientes, productos, pedidos, facturas, bodegas. Lo que le da valor es lo que tú pones dentro y las reglas con las que se mueve.",
        },
        {
          kind: "parrafo",
          texto: "Esas reglas son tuyas. El proveedor no las trae. Por ejemplo:",
        },
        {
          kind: "lista",
          items: [
            "¿Qué pasa cuando un cliente pide algo que no hay en stock? ¿Se rechaza, se reserva, se fabrica, se avisa?",
            "¿Quién puede autorizar un descuento y hasta qué porcentaje?",
            "¿Cuándo se considera cerrada una venta: con la orden de compra, con el despacho o con el pago?",
            "¿Qué se hace cuando un despacho llega incompleto?",
          ],
        },
        {
          kind: "parrafo",
          texto:
            "Si estas respuestas hoy viven en la cabeza de dos o tres personas y cambian según el día, el software no te va a dar control. Te va a dar un registro muy prolijo de tu descontrol.",
        },
      ],
    },
    {
      heading: "El costo real de invertir el orden",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Cuando una pyme compra primero y ordena después, el ordenamiento igual ocurre. Solo que ocurre en el peor contexto posible: con el reloj corriendo, con horas de consultoría facturándose, con un equipo agotado y con un proveedor esperando definiciones que nadie tiene.",
        },
        {
          kind: "parrafo",
          texto:
            "Ahí es donde se disparan los presupuestos. No en las licencias: en las semanas de reuniones para decidir cosas que debieron decidirse antes, y en las personalizaciones que se piden para que el sistema replique un desorden que nadie se atrevió a cuestionar.",
        },
        {
          kind: "parrafo",
          texto:
            "Ordenar primero cuesta bastante menos y, sobre todo, cuesta antes de haber firmado un contrato de varios años.",
        },
      ],
    },
    {
      heading: "Qué hacer esta semana",
      bloques: [
        {
          kind: "lista-numerada",
          items: [
            "Elige tu proceso más crítico: el que si falla te cuesta clientes o plata.",
            "Dibújalo en una hoja. Sin software y sin metodología: solo cajas y flechas, de principio a fin.",
            "Marca cada punto donde tuviste que decir “depende”. Esos son tus vacíos de definición.",
            "Muéstrale el dibujo a tu equipo y observa dónde te corrigen. Ahí está la brecha entre cómo crees que opera tu empresa y cómo opera de verdad.",
          ],
        },
        {
          kind: "parrafo",
          texto:
            "Si el dibujo queda limpio y todos están de acuerdo, estás listo para evaluar sistemas. Si quedó lleno de “depende”, ya sabes cuál es el proyecto que va primero.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Puedo ordenar mis procesos mientras implemento el ERP?",
      answer:
        "Se puede, pero es la opción más cara y más riesgosa. Ordenar bajo la presión de un proyecto en marcha significa tomar decisiones de fondo sobre tu negocio con el cronómetro corriendo y con horas de consultoría facturándose. Lo habitual es que el proyecto se extienda y que el presupuesto se exceda.",
    },
    {
      question: "¿Cuánto tiempo toma ordenar los procesos antes de digitalizar?",
      answer:
        "En una pyme típica, mapear y definir los procesos críticos toma entre 4 y 10 semanas, según la cantidad de áreas involucradas y la disponibilidad del equipo. Es bastante menos de lo que suele extenderse una implementación de ERP mal preparada.",
    },
    {
      question: "¿Un ERP no trae las mejores prácticas incorporadas?",
      answer:
        "Trae una estructura general y algunos flujos estándar, pero no conoce tus reglas de excepción, tus responsables ni tus criterios de decisión. Esa parte la defines tú, y el sistema te la va a preguntar durante la configuración.",
    },
  ],
  related: ["por-que-fallan-los-erp-en-pymes", "erp-o-procesos-que-va-primero"],
};
