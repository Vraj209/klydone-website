import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

const siteTitle = "Business Automation & Technical Solutions | Klydone";
const siteDescription =
  "Klydone helps growing businesses reduce manual work, connect their tools, automate workflows, and ship secure technical solutions in weeks.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "AI automation agency in Canada",
    "AI agency",
    "AI automation agency in Kitchener-Waterloo",
    "business automation solutions",
    "business automation solutions in Canada",
    "custom technical solutions for business",
    "technical solutions company in Canada",
    "technical solutions company in Kitchener-Waterloo",
    "custom software solutions in Canada",
    "business process automation in Canada",
    "workflow automation company in Canada",
    "systems integration services",
    "operations automation in Canada",
    "operations automation in Kitchener-Waterloo",
    "automate repetitive business tasks",
    "reduce manual work",
    "connect business tools",
    "internal workflow tools",
    "AI implementation partner",
    "AI support automation in Canada",
    "secure automation workflows",
    "human approval workflows",
  ],
  authors: [{ name: "Klydone" }],
  creator: "Klydone",
  publisher: "Klydone",
  metadataBase: new URL("https://klydone.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://klydone.com",
    title: siteTitle,
    description: siteDescription,
    siteName: "Klydone",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Klydone — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/cqq6hmq.css" />
        <link rel="alternate" type="application/json" href="/.well-known/ai-capabilities.json" />
      </head>
      <body className="font-sans antialiased">
        <Script
          id="klaviyo-onsite"
          src="https://static.klaviyo.com/onsite/js/RMV9Vh/klaviyo.js?company_id=RMV9Vh"
          strategy="afterInteractive"
        />
        <Script id="klaviyo-init" strategy="afterInteractive">
          {`
            !function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y0MLRZ7V0S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y0MLRZ7V0S');
          `}
        </Script>
        <AppProviders>
          {children}
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
