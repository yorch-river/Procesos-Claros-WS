import type { Post } from "../types";

export const post: Post = {
  slug: "por-que-fallan-los-erp-en-pymes",
  title: "Por qué los ERP fallan en pymes",
  seoTitle: "Por qué fallan los ERP en pymes: 3 errores comunes",
  description:
    "La mayoría de las implementaciones de ERP en pymes se exceden en plazo y presupuesto. Los tres errores de fondo casi nunca son técnicos: son de gestión.",
  excerpt:
    "Las estadísticas son aterradoras. Analizamos los 3 errores más comunes que cometen los dueños de pymes al digitalizar.",
  category: "Tecnología",
  datePublished: "2026-07-09",
  readingMinutes: 8,
  intro:
    "Cuando una implementación de ERP fracasa, la conversación posterior casi siempre culpa al software o al proveedor. En mi experiencia, ninguna de las dos cosas suele ser la causa real. Los proyectos que se caen tienen un patrón, y el patrón empieza mucho antes de la primera reunión técnica.",
  sections: [
    {
      heading: "Error 1: llegar sin procesos definidos",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "El consultor de implementación se sienta con tu equipo y hace una pregunta perfectamente razonable: “¿cómo procesan ustedes una devolución?”. Y alguien responde: “bueno, depende”.",
        },
        {
          kind: "parrafo",
          texto:
            "Ese “depende” es el momento exacto en que el proyecto empieza a costar más de lo presupuestado. Porque ahora hay que detenerse a definir algo que debió estar definido, y esa definición se hace en horario de proyecto, con gente cara en la sala y con un cronograma que ya está corriendo.",
        },
        {
          kind: "parrafo",
          texto:
            "Multiplica ese momento por las decenas de decisiones que un ERP necesita para configurarse —qué gatilla una orden de compra, quién aprueba un crédito, cómo se valoriza el inventario, qué se hace con una factura observada— y tienes la explicación completa de por qué el proyecto de seis meses se convirtió en uno de dieciocho.",
        },
        {
          kind: "destacado",
          titulo: "El síntoma temprano",
          texto:
            "Si en las primeras semanas de levantamiento tu equipo pasa más tiempo discutiendo entre sí que respondiendo al consultor, el problema no es el software. Es que estás definiendo tu operación por primera vez, y lo estás haciendo con el taxímetro corriendo.",
        },
      ],
    },
    {
      heading: "Error 2: creer que el software trae las reglas",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Existe la idea de que un ERP viene con “las mejores prácticas de la industria” incorporadas, y que basta con instalarlo para heredarlas. Es una expectativa comprensible: es lo que sugiere buena parte del material comercial.",
        },
        {
          kind: "parrafo",
          texto:
            "La realidad es más modesta. Un ERP trae una estructura —módulos, tablas, flujos estándar— pero no trae tus reglas de negocio. No sabe cuál es tu política de descuentos, qué clientes tienen condiciones especiales, en qué orden se despachan los pedidos cuando el stock no alcanza, ni qué margen mínimo estás dispuesto a aceptar.",
        },
        {
          kind: "parrafo",
          texto:
            "Todo eso hay que decírselo. Y para decírselo hay que saberlo. Cuando una empresa no lo sabe, ocurre una de dos cosas, y ambas son malas:",
        },
        {
          kind: "lista",
          items: [
            "Se acepta el flujo estándar del sistema sin evaluar si sirve, y el equipo termina peleando contra una herramienta que no refleja cómo trabajan.",
            "Se pide personalizar el software para que replique el desorden actual, lo que dispara el costo, complica cada actualización futura y perpetúa exactamente el problema que se quería resolver.",
          ],
        },
        {
          kind: "cita",
          texto:
            "Un ERP es una cáscara vacía. Si no tienes reglas de negocio claras, el software no las va a inventar por ti.",
        },
      ],
    },
    {
      heading: "Error 3: ignorar la resistencia del equipo",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Este es el error más subestimado, porque no aparece en ninguna cotización. Un sistema nuevo le quita a las personas dos cosas que valoran mucho: sus atajos y su zona de discrecionalidad.",
        },
        {
          kind: "parrafo",
          texto:
            "La persona que llevaba el control de despachos en su propia planilla tenía poder: era la única que sabía dónde estaba cada pedido. Cuando el sistema hace visible esa información para todos, esa persona no gana comodidad. Pierde relevancia. Y va a resistirse, aunque no lo diga con esas palabras.",
        },
        { kind: "parrafo", texto: "La resistencia rara vez es frontal. Se ve así:" },
        {
          kind: "lista",
          items: [
            "“El sistema está lento”, dicho todos los días, sin datos que lo respalden.",
            "Planillas paralelas que siguen vivas “por si acaso”, en paralelo al ERP.",
            "Datos que se cargan tarde, incompletos o con campos rellenados de cualquier forma.",
            "Excepciones que se resuelven por WhatsApp y nunca se registran en el sistema.",
          ],
        },
        {
          kind: "parrafo",
          texto:
            "Seis meses después, la empresa tiene un ERP caro que nadie usa bien y un equipo que sigue operando como antes. Técnicamente el proyecto se “completó”. En la práctica, no cambió nada.",
        },
        {
          kind: "parrafo",
          texto:
            "La forma de prevenirlo no es un curso de capacitación al final. Es involucrar a quienes hacen el trabajo mientras se definen los procesos, antes de que exista software. Cuando alguien participó en decidir cómo debía funcionar algo, defiende esa decisión en vez de sabotearla.",
        },
      ],
    },
    {
      heading: "El denominador común",
      bloques: [
        {
          kind: "parrafo",
          texto:
            "Los tres errores comparten una raíz: se trató un proyecto de gestión como si fuera un proyecto de tecnología.",
        },
        {
          kind: "parrafo",
          texto:
            "La parte técnica de un ERP —instalar, migrar datos, configurar módulos— es la parte fácil y la más predecible. La parte difícil es decidir cómo va a operar tu empresa de aquí en adelante y lograr que el equipo lo haga de esa manera. Eso no es trabajo del proveedor. Es tuyo.",
        },
        {
          kind: "parrafo",
          texto:
            "La buena noticia es que ese trabajo se puede hacer antes, con calma, sin contrato firmado y a una fracción del costo. Cuando llega el momento de implementar, el proyecto se vuelve casi aburrido: el proveedor pregunta y tú ya tienes las respuestas escritas.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Elegir un ERP más caro reduce el riesgo de fracaso?",
      answer:
        "No de manera significativa. Los errores que hacen fracasar una implementación son de definición de procesos, de reglas de negocio y de gestión del cambio. Un sistema más caro no resuelve ninguno de los tres, y a veces los agrava porque exige más disciplina operativa.",
    },
    {
      question: "¿Cómo sé si mi equipo va a resistirse al nuevo sistema?",
      answer:
        "Observa quién concentra hoy información crítica en herramientas propias, como planillas personales. Esas personas son las que más pierden con la transparencia que trae un sistema, y suelen ser el foco de resistencia. Involucrarlas desde la definición de procesos es la mejor forma de convertirlas en aliadas.",
    },
    {
      question: "¿Qué hago si ya implementé un ERP y no está funcionando?",
      answer:
        "Antes de cambiar de software, conviene revisar si el problema es la herramienta o los procesos que se cargaron en ella. Migrar a otro sistema arrastrando las mismas definiciones ambiguas suele reproducir el mismo resultado, con el costo de una segunda implementación.",
    },
  ],
  related: ["necesitas-un-erp-o-necesitas-orden", "empresa-lista-para-digitalizar"],
};
