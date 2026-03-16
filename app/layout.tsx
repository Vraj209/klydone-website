import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

export const metadata: Metadata = {
  title: "Klydone — AI Automation for Customer Support & Operations",
  description:
    "Free your team from repetitive tasks, improve response times, and save 10-30 hours of manual work every week with AI systems grounded in your data.",
  keywords: [
    "AI automation agency in Canada",
    "AI automation agency in Kitchener-Waterloo",
    "AI workflow automation in Canada",
    "AI workflow automation in Kitchener-Waterloo",
    "RAG knowledge assistant",
    "RAG knowledge assistant in Canada",
    "RAG knowledge assistant in Kitchener-Waterloo",
    "AI agents for operations in Canada",
    "AI agents for operations in Kitchener-Waterloo",
    "AI support automation in Canada",
    "AI support automation in Kitchener-Waterloo",
    "LLM integration in Canada",
    "LLM integration in Kitchener-Waterloo",
    "OpenAI integration in Canada",
    "OpenAI integration in Kitchener-Waterloo",
    "AI ops automation",
    "AI ops automation in Canada",
    "AI ops automation in Kitchener-Waterloo",
    "AI automation SaaS",
    "AI automation fintech in Canada",
    "AI automation fintech in Kitchener-Waterloo",
    "production AI systems in Canada",
    "production AI systems in Kitchener-Waterloo",
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
    title: "Klydone — AI Automation for Customer Support & Operations",
    description: "Free your team from repetitive tasks, improve response times, and save 10-30 hours of manual work every week.",
    siteName: "Klydone",
    images: [
      {
        url: "/klydone.png",
        width: 1200,
        height: 630,
        alt: "Klydone — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klydone — AI Automation for Customer Support & Operations",
    description: "Free your team from repetitive tasks, improve response times, and save 10-30 hours of manual work every week.",
    images: ["public/klydone.png"],
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
