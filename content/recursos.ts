/**
 * Recursos descargables a cambio del correo.
 *
 * El archivo vive en `public/descargas/`. La versión 2026 se mantiene a mano
 * fuera del repositorio; `tools/crear_test_madurez.py` generaba la versión
 * anterior y ya no corresponde a lo que se publica.
 *
 * El nombre del archivo lleva el año a propósito: al cambiar la ruta, nadie
 * recibe una copia vieja guardada en caché.
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
  archivo: "/descargas/test-de-madurez-operativa-2026.xlsx",
  nombreArchivo: "Test de madurez operativa - Procesos Claros.xlsx",
  formato: "Excel · 34 KB",
};
