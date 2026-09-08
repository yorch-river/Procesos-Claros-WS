import { absoluteUrl, site } from "./site";

/** Identificadores estables para que las entidades se enlacen entre sí. */
const ORG_ID = absoluteUrl("/#organization");
const PERSON_ID = absoluteUrl("/#jorge-rivera");
const WEBSITE_ID = absoluteUrl("/#website");

/** La consultoría como servicio profesional, con su ámbito geográfico. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    description: site.defaultDescription,
    image: absoluteUrl(site.founder.image),
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "Chile" },
    knowsLanguage: "es",
    founder: { "@id": PERSON_ID },
    sameAs: [site.linkedin],
    serviceType: [
      "Consultoría de procesos",
      "Sistematización de procesos para pymes",
      "Preparación para implementación de ERP",
    ],
  };
}

/** Jorge como autor y profesional: base para el E-E-A-T que Google evalúa. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    url: absoluteUrl("/sobre-mi"),
    image: absoluteUrl(site.founder.image),
    email: site.email,
    sameAs: [site.linkedin],
    worksFor: { "@id": ORG_ID },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: site.lang,
    publisher: { "@id": ORG_ID },
  };
}

/** Migas de pan: dan a Google la jerarquía del sitio y mejoran el snippet. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Preguntas frecuentes. Puede ganar espacio extra en la página de resultados. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    inLanguage: site.lang,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Chile" },
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  priceClp: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      price: product.priceClp,
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
      seller: { "@id": ORG_ID },
    },
  };
}
