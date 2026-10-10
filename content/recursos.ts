/**
 * Recursos descargables a cambio del correo.
 *
 * El archivo vive en `public/descargas/`. La planilla se genera con
 * `tools/crear_test_madurez.py`: si cambian las preguntas, se edita el script
 * y se vuelve a generar, en vez de tocar el Excel a mano.
 */

export type Recurso = {
  id: string;
  titulo: string;
  bajada: string;
  archivo: string;
  nombreArchivo: string;
  formato: string;
};

export const testMadurez: Recurso = {
  id: "test-madurez",
  titulo: "Test de madurez operativa",
  bajada:
    "20 preguntas para saber, en 15 minutos, si tu empresa está lista para implementar un ERP y por dónde conviene empezar a ordenar.",
  archivo: "/descargas/test-de-madurez-operativa.xlsx",
  nombreArchivo: "Test de madurez operativa - Procesos Claros.xlsx",
  formato: "Excel · 24 KB",
};
