import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Oculta la cabecera `X-Powered-By: Next.js`.
  poweredByHeader: false,
  // Sin `trailingSlash`: cada pagina vive en una sola URL canonica, sin barra
  // final. Vercel redirige la variante con barra a esta, evitando contenido
  // duplicado.
};

export default nextConfig;
