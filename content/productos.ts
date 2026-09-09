/**
 * Productos digitales.
 *
 * `priceClp` se guarda como número para que schema.org lo publique en formato
 * válido; `priceLabel` es lo que ve la persona. Separarlos evita tener que
 * parsear "CLP $39.000" para generar los datos estructurados.
 */

export type Producto = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceClp: number;
  priceLabel: string;
  features: string[];
  cta: string;
};

export const productos: Producto[] = [
  {
    id: "kit-autodiagnostico",
    name: "Kit de Autodiagnóstico Operativo",
    tagline: "¿Tu empresa está lista para un ERP?",
    description:
      "Ideal para dueños que quieren una evaluación objetiva antes de gastar millones en software. No compres a ciegas.",
    priceClp: 39000,
    priceLabel: "CLP $39.000",
    features: [
      "Test de madurez de procesos (Excel interactivo).",
      "Guía de interpretación de resultados.",
      "Checklist de señales de alerta operativa.",
      "Plantilla de cálculo de ROI potencial para ERP.",
    ],
    cta: "Comprar ahora",
  },
  {
    id: "kit-sistematizacion",
    name: "Kit de Sistematización Pyme",
    tagline: "Ordena tu casa antes de digitalizar.",
    description:
      "El paso a paso para documentar tus procesos clave sin complicaciones burocráticas ni ISOs aburridas.",
    priceClp: 129000,
    priceLabel: "CLP $129.000",
    features: [
      "Guía metodológica “Sistematización Ágil”.",
      "Plantillas de descripción de puestos y procesos.",
      "Ejemplos reales de flujogramas de negocio.",
      "Vídeo-clase: cómo evitar la resistencia del equipo.",
    ],
    cta: "Comprar ahora",
  },
];

/** Testimonio mostrado en la página de productos. */
export const testimonioProductos = {
  texto:
    "El kit de autodiagnóstico nos ahorró una mala inversión de más de $20.000.000 en un ERP para el que no estábamos listos. Ordenamos primero y hoy el sistema nuevo funciona perfecto.",
  autor: "Javier M.",
  cargo: "Dueño de Comercializadora",
  rating: 5,
};
