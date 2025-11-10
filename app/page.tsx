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
import {
  organizationStructuredData,
  localBusinessStructuredData,
  servicesStructuredData,
} from "@/lib/structured-data";

export default function Home() {
  return (
    <>
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
      <main>
        <Hero />
        <Testimonials />
        <About />
        <Benefits />
        <Features />
        <Process />
        <Services />
        <AIServices />
        <UseCases />
        <CaseStudies />
        <Comparison />
        <Contact />
        <Pricing />
        <FAQ />
        <Newsletter />
        <Security />
        <Integration />
        <Blog />
        <Changelog />
      </main>
      <Footer />
    </>
  );
}
