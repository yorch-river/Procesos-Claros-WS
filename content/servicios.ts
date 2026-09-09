/**
 * Los tres servicios de consultoría.
 *
 * Viven acá y no dentro de la página porque los consume tanto el HTML visible
 * como los datos estructurados de schema.org. Una sola fuente evita que Google
 * lea una cosa y el visitante vea otra, que es una señal de calidad negativa.
 */

export type Servicio = {
  id: string;
  title: string;
  /** Descripción corta para schema.org y para el resumen en la home. */
  summary: string;
  problem: string;
  includes: string[];
  result: string;
};

export const servicios: Servicio[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico de Procesos y Madurez",
    summary:
      "Auditoría del flujo de trabajo actual y test de madurez operativa para saber si tu pyme está lista para digitalizar.",
    problem:
      "No sabes si el problema es tu equipo, tus procesos o que realmente te falta software.",
    includes: [
      "Auditoría de flujo de trabajo actual.",
      "Identificación de cuellos de botella y “fugas” de rentabilidad.",
      "Test de madurez operativa para digitalización.",
      "Informe de hallazgos y prioridades.",
    ],
    result:
      "Claridad total sobre el estado real de tu operación y qué debe arreglarse antes de invertir en sistemas.",
  },
  {
    id: "sistematizacion",
    title: "Sistematización y Documentación",
    summary:
      "Mapeo de procesos clave, definición de responsables y manuales de operación para que el negocio no dependa de personas.",
    problem:
      "Tu empresa depende de que tú estés ahí o de que los empleados clave no se vayan.",
    includes: [
      "Mapeo de procesos clave (Ventas, Compras, Almacén, Administración).",
      "Definición de responsables y KPIs.",
      "Manuales de operación ligeros y prácticos.",
      "Eliminación de duplicidades en tareas.",
    ],
    result:
      "Un negocio que funciona bajo reglas claras, reduciendo el error humano y facilitando la delegación.",
  },
  {
    id: "preparacion-erp",
    title: "Preparación para Digitalización",
    summary:
      "Definición de requerimientos, limpieza de datos y acompañamiento independiente en la selección de tu ERP.",
    problem:
      "Quieres comprar un ERP pero no sabes cómo elegir ni qué pedirle al proveedor.",
    includes: [
      "Definición de requerimientos técnicos y funcionales.",
      "Limpieza de datos previa (catálogos, maestros).",
      "Acompañamiento en la selección de proveedores (independiente).",
      "Plan de gestión del cambio para el equipo.",
    ],
    result:
      "Una implementación de software exitosa, en tiempo y presupuesto, alineada con tus procesos reales.",
  },
];
