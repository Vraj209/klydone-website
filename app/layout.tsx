import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Klydone - Web & AI Development Agency | Fast. Reliable. Scalable.",
  description:
    "Partner with Klydone for next-gen application development. Specializing in Go backends, React/Next.js frontends, cloud-native architectures, and AI solutions. Trusted by startups and enterprises.",
  keywords: [
    "web development agency",
    "AI development",
    "Go backend development",
    "Next.js development",
    "cloud architecture",
    "SaaS development",
    "fintech development",
    "software agency",
    "DevOps",
    "Azure",
    "AWS",
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
    title: "Klydone - Web & AI Development Agency",
    description: "Building the future of software. Fast. Reliable. Scalable.",
    siteName: "Klydone",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klydone - Web & AI Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klydone - Web & AI Development Agency",
    description: "Building the future of software. Fast. Reliable. Scalable.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
