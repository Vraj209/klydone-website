import { Suspense } from 'react';
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import AIServices from "@/components/sections/AIServices";
import UseCases from "@/components/sections/UseCases";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Changelog from "@/components/sections/Changelog";
import Security from "@/components/sections/Security";
import Integration from "@/components/sections/Integration";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SkipLink from "@/lib/accessibility/SkipLink";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import {
  organizationStructuredData,
  localBusinessStructuredData,
  servicesStructuredData,
} from "@/lib/structured-data";

// Server Component - handles static data and SEO
export default function Home() {
  return (
    <>
      {/* Accessibility */}
      <SkipLink />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <Navigation />
      
      <main id="main-content" role="main">
        <Hero />
        
        <Suspense fallback={<LoadingSpinner text="Loading testimonials..." />}>
          <Testimonials />
        </Suspense>
        
        <About />
        <Benefits />
        <Features />
        <Process />
        
        <Suspense fallback={<LoadingSpinner text="Loading services..." />}>
          <Services />
        </Suspense>
        
        <AIServices />
        <UseCases />
        
        <Suspense fallback={<LoadingSpinner text="Loading case studies..." />}>
          <CaseStudies />
        </Suspense>
        
        <Comparison />
        
        <Suspense fallback={<LoadingSpinner text="Loading contact form..." />}>
          <Contact />
        </Suspense>
        
        <Pricing />
        <FAQ />
        
        <Suspense fallback={<LoadingSpinner text="Loading newsletter..." />}>
          <Newsletter />
        </Suspense>
        
        <Security />
        <Integration />
        
        <Suspense fallback={<LoadingSpinner text="Loading blog..." />}>
          <Blog />
        </Suspense>
        
        <Changelog />
      </main>
      
      <Footer />
    </>
  );
}
