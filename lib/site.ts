/**
 * Datos del sitio en un solo lugar.
 *
 * Todo lo que Google, LinkedIn o WhatsApp necesitan saber sobre el sitio sale
 * de aqui: URLs canonicas, sitemap, Open Graph y datos estructurados. Si el
 * dominio o el correo cambian, se cambian una vez en este archivo.
 */

export const site = {
  name: "Procesos Claros",
  legalName: "Procesos Claros Consultoría",
  // Con "www" y sin barra final. Debe ser exactamente el dominio de
  // producción en Vercel: procesosclaros.cl responde con un 308 hacia
  // www.procesosclaros.cl, así que apuntar acá a la versión sin www dejaría
  // cada canonical señalando a una URL que redirige.
  url: "https://www.procesosclaros.cl",
  locale: "es_CL",
  lang: "es-CL",
  country: "CL",
  email: "jorge@procesosclaros.cl",
  linkedin: "https://www.linkedin.com/in/jriveradelvalle",
  founder: {
    name: "Jorge Rivera",
    jobTitle: "Consultor Independiente de Procesos y Operaciones",
    image: "/images/Foto-LI.jpg",
  },
  defaultTitle: "Consultoría de Procesos para Pymes | Procesos Claros",
  defaultDescription:
    "Consultoría independiente para pymes en Chile: ordenamos y sistematizamos tus procesos antes de implementar un ERP, para que la tecnología no acelere el desorden.",
} as const;

/** Convierte una ruta interna en URL absoluta para canonical, sitemap y OG. */
export function absoluteUrl(path = "/"): string {
  return `${site.url}${path === "/" ? "" : path}`;
}

/** Navegación principal. Es la fuente del menú, del footer y del sitemap. */
export const navigation = [
  { name: "Inicio", path: "/" },
  { name: "Antes del ERP", path: "/antes-del-erp" },
  { name: "Servicios", path: "/servicios" },
  { name: "Productos", path: "/productos" },
  { name: "Blog", path: "/blog" },
  { name: "Sobre Mí", path: "/sobre-mi" },
  { name: "Contacto", path: "/contacto" },
] as const;
