export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Klydone",
  url: "https://klydone.com",
  logo: "https://klydone.com/logo.png",
  description:
    "Web and AI development agency specializing in Go backends, React/Next.js frontends, and cloud-native architectures.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "Ontario",
    addressCountry: "Canada",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Customer Service",
    email: "hello@klydone.com",
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
  serviceType: "Web Development and AI Solutions",
  provider: {
    "@type": "Organization",
    name: "Klydone",
    url: "https://klydone.com",
  },
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend Development",
          description: "Go and Node.js backend development services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Development",
          description: "React and Next.js frontend development services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Architecture",
          description: "Azure and AWS cloud infrastructure services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Solutions",
          description:
            "Custom AI models, chatbots, predictive analytics, process automation, and generative AI solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbots & Assistants",
          description: "Intelligent conversational AI with NLP integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predictive Analytics",
          description: "Advanced data analysis and forecasting using AI",
        },
      },
    ],
  },
};
