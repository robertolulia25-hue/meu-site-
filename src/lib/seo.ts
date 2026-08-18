export const SITE_URL = "https://www.robertolimajuridico.com.br";
export const SITE_NAME = "Roberto Lima — Advogado & Consultoria Jurídica";
export const LAWYER_NAME = "Roberto Lima";
export const OAB = "OAB/SP 223.861";
export const PHONE = "+55-11-98272-7659";
export const EMAIL = "robertolulia@adv.oabsp.org.br";
export const AREA_SERVED = "São Paulo";

/** Único asset profissional já existente no projeto adequado para compartilhamento social */
export const SOCIAL_IMAGE = "https://www.robertolimajuridico.com.br/retrato.png";
export const SOCIAL_IMAGE_ALT =
  "Roberto Lima, advogado em São Paulo — Advocacia e Consultoria Jurídica";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path === "/" ? "/" : path}`;

export interface Breadcrumb {
  name: string;
  path: string;
}

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#legalservice`,
  name: SITE_NAME,
  description:
    "Roberto Lima, advogado inscrito na OAB/SP sob o nº 223.861, com atuação em Direito do Consumidor, Direito Bancário, Direito Médico, Direito Digital, procedimentos extrajudiciais e elaboração de contratos, em São Paulo.",
  telephone: PHONE,
  email: EMAIL,
  url: `${SITE_URL}/`,
  areaServed: { "@type": "City", name: AREA_SERVED },
  knowsAbout: [
    "Direito do Consumidor",
    "Direito Bancário",
    "Direito Médico e da Saúde",
    "Direito Digital e LGPD",
    "Divórcio Judicial",
    "Separação de Fato e Inventário Extrajudicial",
    "Elaboração e revisão de contratos",
  ],
  provider: { "@id": `${SITE_URL}/#person` },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: LAWYER_NAME,
  jobTitle: "Advogado",
  identifier: OAB,
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Inscrição profissional",
    recognizedBy: {
      "@type": "Organization",
      name: "Ordem dos Advogados do Brasil — Seção São Paulo",
    },
    identifier: OAB,
  },
  email: EMAIL,
  telephone: PHONE,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/retrato.png`,
  worksFor: { "@id": `${SITE_URL}/#legalservice` },
  areaServed: { "@type": "City", name: AREA_SERVED },
};


export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#legalservice` },
};

export const breadcrumbSchema = (items: Breadcrumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  serviceType: opts.name,
  url: absoluteUrl(opts.path),
  provider: { "@id": `${SITE_URL}/#legalservice` },
  areaServed: { "@type": "City", name: AREA_SERVED },
});

export const faqSchema = (faq: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
