import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import HeroBackground from './HeroBackground';
import TypingEffect from './TypingEffect';
import Hero3DVisual from './Hero3DVisual';
import { SCHEDULE_LINK } from '@/data/constant';
import Link from 'next/link';

const heroBullets = [
  'Launch your first business workflow in 14 days',
  'Connect the tools, data, and approvals your team already uses',
  'Built around your process, not a generic software demo',
] as const;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">

            {/* Eyebrow */}
            {/* <div className="badge-shine mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" aria-hidden="true" />
              Business Automation & Technical Solutions
            </div> */}

            {/* Headline */}
            <h1
              id="hero-heading"
              className="mb-5 font-display text-5xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Custom Technical Solutions for{' '}
              <br className="hidden sm:block" />
              <span className="font-display italic gradient-text">Growing Businesses.</span>
            </h1>

            {/* <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0">
              Reduce manual work, connect scattered tools, and launch secure workflows that make
              your team faster.
            </p> */}

            {/* <p className="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-gray-500 lg:mx-0">
              We map your process, design the right technical solution, and build production-ready
              systems around your data, tools, and approval needs.
            </p> */}

            {/* Typing effect */}
            <TypingEffect />

            {/* <div className="mb-10 max-w-xl rounded-2xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-gray-700">
                &ldquo;Klydone turned a manual process into a reliable workflow our team could trust.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">
                Jane Smith, Operations Lead at Acme Inc.
              </p>
            </div> */}

            {/* Hero bullets */}
            <ul className="mx-auto mb-10 flex max-w-xl flex-col gap-2.5 text-left lg:mx-0" role="list">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-violet-500" aria-hidden="true" />
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href={SCHEDULE_LINK} target="_blank">
              <Button variant="primary" size="lg">
                Get Your Free Automation Audit
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
              </Link>
              <Button href="#case-studies" variant="outline" size="lg">
                <Calendar size={17} aria-hidden="true" />
                See Case Studies
              </Button>
            </div>
          </div>

          {/* 3D Visual (Clay-inspired, brand-unique) */}
          <div className="relative">
            <Hero3DVisual />
          </div>
        </div>

      </div>
    </section>
  );
}
