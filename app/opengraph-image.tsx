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
          background: "#1a1c1f",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700, letterSpacing: -1, color: "#ffffff" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, width: 40, height: 40, border: "3px solid #ffffff", padding: "0 8px" }}>
            <div style={{ display: "flex", width: 20, height: 3, background: "#7fc4cc" }} />
            <div style={{ display: "flex", width: 12, height: 3, background: "#7fc4cc" }} />
          </div>
          Procesos Claros
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
            Antes de implementar un ERP,{" "}
            <span style={{ color: "#7fc4cc" }}>ordena tu negocio.</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#a6aab1" }}>
            Consultoría independiente de procesos para pymes · Chile
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 80, height: 6, background: "#0e5a66" }} />
          <div style={{ display: "flex", fontSize: 26, color: "#d8dadd" }}>
            procesosclaros.cl
          </div>
        </div>
      </div>
    ),
    size,
  );
}
