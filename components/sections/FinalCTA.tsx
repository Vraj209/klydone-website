import { ArrowRight, CalendarCheck } from 'lucide-react';
import Button from '../ui/Button';
import Link from 'next/link';
import { SCHEDULE_LINK } from '@/data/constant';

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.75) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glow orbs */}
      {/* <div
        data-parallax-speed="0.1"
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
      /> */}
      <div
        data-parallax-speed="0.14"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-14 -right-20 h-64 w-64 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Gradient frame */}
        <div className="rounded-[38px]  p-[1.5px] card-shadow">
          {/* Card */}
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/90 px-6 py-14 text-center backdrop-blur-sm sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-100/70 to-transparent"
            />

            <span className="relative z-10 mb-5 inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
              Ready to get started?
            </span>

            <h2
              id="final-cta-heading"
              className="relative z-10 mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
            >
              Ready to remove busywork
              <br />
              <span className="gradient-text">with AI?</span>
            </h2>

            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-500">
              We'll identify the highest-ROI workflow for your team and give you a clear,
              no-obligation plan — in 30 minutes.
            </p>

            <div className="relative z-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href= {SCHEDULE_LINK} target="_blank">
              <Button variant="primary" size="lg">
                <CalendarCheck size={18} aria-hidden="true" />
                Book a Strategy Call
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              </Link>
            </div>

            <p className="relative z-10 mt-8 text-sm text-gray-400">
              No commitment. No sales deck. Just a focused conversation about your workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
