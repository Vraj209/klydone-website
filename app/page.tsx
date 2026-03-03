import { Suspense } from 'react';
import Navigation from "@/components/ui/Navigation";
import ExperienceEnhancer from "@/components/effects/ExperienceEnhancer";
import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Pricing from "@/components/sections/Pricing";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SkipLink from "@/lib/accessibility/SkipLink";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import {
  organizationStructuredData,
  localBusinessStructuredData,
  servicesStructuredData,
} from "@/lib/structured-data";

// Server Component — composes static marketing sections
export default function Home() {
  return (
    <>
      {/* <SkipLink /> */}

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />

      <Navigation />
      <ExperienceEnhancer />

      <main id="main-content" role="main">
        {/* 1. Hero — value prop + primary CTA */}
        <div data-reveal="up"><Hero /></div>

        {/* 2. Social proof strip — credibility in 2 seconds */}
        <div data-reveal="up"><ProofStrip /></div>

        {/* 3. Problem → cost of inaction */}
        <div data-reveal="left"><Problem /></div>

        {/* 4. Solution — 3 product cards */}
        <div data-reveal="up"><Solution /></div>

        {/* 5. Packages — offers and pricing */}
        <div data-reveal="up"><Pricing /></div>

        {/* 6. Case studies — before/after/results */}
        <div data-reveal="up">
          <Suspense fallback={<LoadingSpinner text="Loading case studies..." />}>
            <CaseStudies />
          </Suspense>
        </div>

        {/* 7. Process — predictable delivery */}
        <div data-reveal="up"><Process /></div>

        {/* 8. Security & Governance */}
        <div data-reveal="right"><Security /></div>

        {/* 9. Testimonials — social proof */}
        <div data-reveal="up">
          <Suspense fallback={<LoadingSpinner text="Loading testimonials..." />}>
            <Testimonials />
          </Suspense>
        </div>

        {/* 10. FAQ — objection handling */}
        <div data-reveal="up"><FAQ /></div>

        {/* 11. Contact form */}
        <div data-reveal="up">
          <Suspense fallback={<LoadingSpinner text="Loading contact form..." />}>
            <Contact />
          </Suspense>
        </div>

        {/* 12. Final CTA */}
        <div data-reveal="zoom"><FinalCTA /></div>
      </main>

      <Footer />
    </>
  );
}
