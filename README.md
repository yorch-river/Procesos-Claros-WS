# Procesos Claros

Sitio de **Procesos Claros**: consultoría independiente de procesos para pymes en Chile,
previa a la digitalización y a la implementación de un ERP.

Producción: <https://procesosclaros.cl>

## Stack

- **Next.js 16** (App Router), generación estática
- **React 19** · **TypeScript** · **Tailwind CSS 4**
- Desplegado en **Vercel**

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # build de producción
npm run start      # sirve el build
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
```

## Variables de entorno

El formulario de contacto envía por [Resend](https://resend.com). En Vercel:

| Variable         | Obligatoria | Descripción                                             |
| ---------------- | ----------- | ------------------------------------------------------- |
| `RESEND_API_KEY` | Sí          | Clave de API de Resend. Sin ella el formulario avisa al visitante y muestra el correo directo, en vez de fingir un envío exitoso. |
| `CONTACT_TO`     | No          | Correo donde llegan los mensajes. Por defecto, el de `lib/site.ts`. |
| `CONTACT_FROM`   | No          | Remitente, en formato `Nombre <correo>`. Requiere tener el dominio verificado en Resend. Sin ella se usa el remitente de pruebas de Resend, que solo entrega al correo de la cuenta. |

Para recibir mensajes desde cualquier visitante hay que verificar
`procesosclaros.cl` en Resend (añadiendo los registros DNS que indica) y
definir `CONTACT_FROM`. Mientras no esté verificado, el formulario funciona
pero los avisos solo llegan al correo con que se creó la cuenta de Resend.

## Estructura

```
app/                 Rutas (una carpeta = una URL indexable)
  layout.tsx         Metadata base, idioma y datos estructurados globales
  sitemap.ts         /sitemap.xml generado desde el contenido
  robots.ts          /robots.txt
  opengraph-image.tsx  Imagen para compartir en redes
components/          UI reutilizable
content/             Artículos, servicios y productos (fuente única)
lib/site.ts          Dominio, correo y datos de la marca
lib/seo.ts           Constructor de metadata por página
lib/schema.ts        Generadores de schema.org
```

## Cómo publicar un artículo

1. Crea `content/posts/<slug>.ts` copiando la forma de cualquier artículo existente.
2. Impórtalo en `content/posts.ts` y agrégalo al array `posts`.

Su URL, su entrada en el sitemap, sus datos estructurados y sus enlaces internos
se generan solos.

## Notas de SEO

Estas decisiones son deliberadas; conviene no revertirlas sin motivo:

- **Rutas reales, no `HashRouter`.** Con `#` en la URL, los buscadores tratan
  todo el sitio como una sola página.
- **HTML pre-renderizado.** Cada ruta se genera como HTML completo en el build,
  sin depender de que el rastreador ejecute JavaScript.
- **Un `title`, una `description` y un `canonical` por página**, todos bajo los
  límites que muestra Google (≈60 y ≈160 caracteres).
- **Tailwind compilado**, no por CDN: el CDN compila en el navegador de cada
  visitante y penaliza Core Web Vitals.
- **Un solo `<h1>` por página**, con `h2`/`h3` en orden.
