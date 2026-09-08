import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Imagen que se muestra al compartir el sitio en LinkedIn, WhatsApp o X.
 *
 * Next la genera en el build y la aplica a todas las páginas que no definan
 * una propia. Antes no existía ninguna: los enlaces compartidos salían como un
 * rectángulo en blanco, que es la peor tarjeta de presentación posible para un
 * consultor cuyo canal principal es LinkedIn.
 */
export const alt = site.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f172a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
          <span style={{ color: "#ffffff" }}>PROCESOS</span>
          <span style={{ color: "#60a5fa" }}>CLAROS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 78,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Antes de implementar un ERP, ordena tu negocio.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#94a3b8" }}>
            Consultoría independiente de procesos para pymes · Chile
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 80, height: 6, background: "#2563eb" }} />
          <div style={{ display: "flex", fontSize: 26, color: "#cbd5e1" }}>
            procesosclaros.cl
          </div>
        </div>
      </div>
    ),
    size,
  );
}
