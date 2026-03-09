import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import HeroBackground from './HeroBackground';
import TypingEffect from './TypingEffect';
import Hero3DVisual from './Hero3DVisual';
import { SCHEDULE_LINK } from '@/data/constant';
import Link from 'next/link';

const heroBullets = [
  'Launch your first custom automation in 14 days',
  'Built using your data, fully secure and measurable',
  'Grounded in your operations, not a generic chatbot',
] as const;

const stats = [
  {
    value: '14',
    unit: ' days',
    label: 'to first automation',
    detail: 'Time from kickoff to your first deployed automation',
  },
  {
    value: '80-99%',
    unit: '',
    label: 'ticket backlog reduction',
    detail: 'Typical reduction in support backlog across automation engagements',
  },
  {
    value: '600+',
    unit: ' hrs/mo',
    label: 'saved every month',
    detail: 'Hours an average client can recover after automation is live',
  },
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
            <div className="badge-shine mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" aria-hidden="true" />
              AI Automation for Customer Support & Operations
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="mb-5 font-display text-5xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              AI Automation for{' '}
              <br className="hidden sm:block" />
              Customer Support{' '}
              <br className="hidden sm:block" />
              <span className="font-display italic gradient-text">
                & Operations.
              </span>
            </h1>

            <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0">
              Free your team from repetitive tasks, improve response times, and save 10-30 hours
              of manual work every week.
            </p>

            <p className="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-gray-500 lg:mx-0">
              We build AI systems grounded in your data, secure, measurable, and tailored to your
              operations.
            </p>

            {/* Typing effect */}
            <TypingEffect />

            <div className="mb-10 max-w-xl rounded-2xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-gray-700">
                &ldquo;Klydone reduced our support backlog by 80% within two weeks.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">
                Jane Smith, Director of Support at Acme Inc.
              </p>
            </div>

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
                Get Your Free AI Ops Audit
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

        {/* Stats row */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm md:grid-cols-3">
          {stats.map(({ value, unit, label, detail }) => (
            <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 text-center">
              <p className="font-display text-2xl font-bold text-gray-900">
                {value}<span className="text-violet-600 text-base">{unit}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-700">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
