import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

export const metadata: Metadata = {
  title: "Klydone — AI Automation for Operations | Save 10–30 hrs/week",
  description:
    "Klydone designs and ships AI automations that remove manual work across support, sales ops, and internal processes. Secure, measurable, and production-ready in 14–21 days.",
  keywords: [
    "AI automation agency",
    "AI workflow automation",
    "RAG knowledge assistant",
    "AI agents for operations",
    "AI support automation",
    "LLM integration",
    "OpenAI integration",
    "AI ops automation",
    "AI automation SaaS",
    "AI automation fintech",
    "production AI systems",
  ],
  authors: [{ name: "Klydone" }],
  creator: "Klydone",
  publisher: "Klydone",
  metadataBase: new URL("https://klydone.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://klydone.com",
    title: "Klydone — AI Automation for Operations",
    description: "Ship AI automations that save your team 10–30 hours/week. Secure. Measurable. Production-ready.",
    siteName: "Klydone",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klydone — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klydone — AI Automation for Operations",
    description: "Ship AI automations that save your team 10–30 hours/week. Secure. Measurable. Production-ready.",
    images: ["/og-image.jpg"],
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
      </head>
      <body className="font-sans antialiased">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
