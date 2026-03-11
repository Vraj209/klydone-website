export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Klydone AI Engineering",
  url: "https://klydone.com",
  logo: "https://klydone.com/favicon.svg",
  description:
    "AI engineering agency building AI agents, enterprise RAG systems, and workflow automation platforms.",
  email: "hello@klydone.com",
  areaServed: "North America",
  knowsAbout: [
    "AI agent development",
    "enterprise RAG systems",
    "AI workflow automation",
    "LLM infrastructure",
    "customer support automation",
    "sales operations automation",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "Ontario",
    addressCountry: "Canada",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "hello@klydone.com",
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
  image: "https://klydone.com/logo.png",
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
  name: "AI Automation Services",
  serviceType: "AI automation consulting and implementation",
  description:
    "Klydone designs and ships AI automations for customer support and operations teams, including workflow automation, enterprise RAG systems, and task-oriented AI agents.",
  provider: {
    "@type": "Organization",
    name: "Klydone AI Engineering",
    url: "https://klydone.com",
  },
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Customer support and operations teams",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://klydone.com/#contact",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Workflow Automation",
          description:
            "Automation workflows connected to helpdesk, CRM, and internal systems with validation, routing, and follow-up actions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RAG Knowledge Assist",
          description:
            "Retrieval-augmented assistants grounded in your documentation, policies, and FAQs for support and operations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agents for Tasks",
          description:
            "Multi-step AI agents for ticket triage, lead qualification, and response drafting with approvals and monitoring.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Ops Audit",
          description:
            "1-2 week assessment to identify highest-ROI automation opportunities and delivery roadmap.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP Automation Launch",
          description:
            "4-week engagement to ship first production automation integrated with your existing systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scale & Retain",
          description:
            "Ongoing optimization and expansion of successful automations across teams and workflows.",
        },
      },
    ],
  },
};
