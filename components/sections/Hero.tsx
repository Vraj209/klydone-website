import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import HeroBackground from './HeroBackground';
import TypingEffect from './TypingEffect';
import Hero3DVisual from './Hero3DVisual';
import { SCHEDULE_LINK } from '@/data/constant';
import Link from 'next/link';

const heroBullets = [
  'Automate support + internal ops with measurable KPIs',
  'Secure-by-default — least privilege, full auditability',
  'Production delivery: monitoring, evals, and handover docs',
] as const;

const stats = [
  { value: '14–21',  unit: 'days',      label: 'to first automation' },
  { value: '↓ 35%',  unit: '',          label: 'avg. ticket backlog'  },
  { value: '18 hrs', unit: '/week',     label: 'manual work saved'    },
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
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" aria-hidden="true" />
              AI Automation for Operations
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="mb-5 font-display text-5xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Ship AI automations{' '}
              <br className="hidden sm:block" />
              that save your team{' '}
              <span className="font-display italic gradient-text">
                10–30 hrs/week.
              </span>
            </h1>

            {/* Typing effect */}
            <TypingEffect />

            {/* Sub */}
            <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg lg:mx-0">
              We help ops-heavy teams automate repetitive workflows using AI agents, RAG, and
              integrations — with security, observability, and measurable ROI. No risky
              deployments. No black-box tooling.
            </p>

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
                Book a Strategy Call
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
        <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-2xl font-bold text-gray-900">
                {value}<span className="text-violet-600 text-base">{unit}</span>
              </p>
              <p className="mt-0.5 text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
