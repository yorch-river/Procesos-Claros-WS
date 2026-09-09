import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, personSchema, webSiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * next/font descarga Inter en el build y la sirve desde nuestro dominio, con
 * el `@font-face` ya incrustado en el CSS. Reemplaza al <link> a Google Fonts,
 * que agregaba dos conexiones externas al camino crítico del render.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Base para resolver todas las URLs relativas de canonical y Open Graph.
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    // Cada página aporta su título y hereda la marca.
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.linkedin }],
  creator: site.founder.name,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  // El favicon sale de app/icon.svg y el manifest de app/manifest.ts:
  // Next los enlaza solo, sin declararlos acá.
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.lang} className={inter.variable}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* Entidades globales: se declaran una vez y el resto del sitio las
            referencia por @id, en vez de repetirlas en cada página. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={personSchema()} />
        <JsonLd data={webSiteSchema()} />

        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>

        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="contenido" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
