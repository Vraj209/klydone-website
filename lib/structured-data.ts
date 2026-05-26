export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Klydone",
  url: "https://klydone.com",
  logo: "https://klydone.com/favicon.svg",
  description:
    "Klydone helps growing businesses reduce manual work, connect tools, automate workflows, and ship secure technical solutions in weeks.",
  email: "sales@klydone.com",
  areaServed: "North America",
  knowsAbout: [
    "business process automation",
    "custom technical solutions",
    "workflow automation",
    "systems integration",
    "internal workflow tools",
    "AI implementation",
    "operations automation",
    "customer support automation",
    "sales operations automation",
    "secure approval workflows",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cambridge",
    addressRegion: "Ontario",
    addressCountry: "Canada",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "sales@klydone.com",
    url: "https://klydone.com/api/contact",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/klydone",
    "https://twitter.com/klydone",
    "https://github.com/klydone",
  ],
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Klydone",
  image: "https://klydone.com/og-image.png",
  "@id": "https://klydone.com",
  url: "https://klydone.com",
  telephone: "+1-555-123-4567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kitchener-Waterloo",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.4516,
    longitude: -80.4925,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};

export const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://klydone.com/",
  name: "Business Automation and Technical Solutions",
  serviceType: "Custom automation, systems integration, internal workflow tools, and AI-enabled implementation",
  description:
    "Klydone designs and ships secure technical solutions that help businesses reduce manual work, connect their tools, automate workflows, and improve day-to-day operations.",
  provider: {
    "@type": "Organization",
    name: "Klydone",
    url: "https://klydone.com",
  },
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Growing businesses that need practical technical solutions",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://klydone.com/#contact",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Automation and Technical Solution Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation",
          description:
            "Reduce repetitive work by automating routing, validation, follow-up, handoffs, and approvals across the tools your team already uses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Systems Integration and Data Sync",
          description:
            "Connect CRM, helpdesk, finance, spreadsheets, databases, and internal tools so information moves without duplicate entry.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Internal Workflow Tools",
          description:
            "Build practical tools that help teams review work, make decisions, track progress, and keep sensitive actions under human approval.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical Solution Audit",
          description:
            "1-2 week assessment to identify the highest-impact opportunities to save time, reduce operational drag, and improve service quality.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First Workflow Launch",
          description:
            "4-week engagement to ship the first production workflow or internal tool connected to your existing systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automation Growth and Optimization",
          description:
            "Ongoing measurement, optimization, and expansion of successful automations across teams and workflows.",
        },
      },
    ],
  },
};
