import { AlertTriangle, Clock, Database, BarChart2 } from 'lucide-react';

const painPoints = [
  { icon: Clock, label: 'Manual copy-and-paste', color: 'bg-amber-50 border-amber-200 text-amber-600' },
  { icon: AlertTriangle, label: 'Slow response times', color: 'bg-red-50 border-red-200 text-red-500' },
  { icon: Database, label: 'Scattered knowledge', color: 'bg-sky-50 border-sky-200 text-sky-600' },
  { icon: BarChart2, label: 'No visibility', color: 'bg-violet-50 border-violet-200 text-violet-600' },
] as const;

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-20 lg:py-24" aria-labelledby="problem-heading">
      <style>{`
        @keyframes klyd-hidden-cost-type {
          0%, 15% { width: 0ch; }
          45%, 70% { width: 12ch; }
          100% { width: 0ch; }
        }

        @keyframes klyd-hidden-cost-caret {
          0%, 49% { border-color: rgba(79, 70, 229, 0.95); }
          50%, 100% { border-color: transparent; }
        }

        .klyd-hidden-cost-typing {
          display: inline-block;
          width: 0ch;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.12em solid rgba(79, 70, 229, 0.95);
          padding-right: 0.12em;
          animation:
            klyd-hidden-cost-type 4.8s steps(12, end) infinite,
            klyd-hidden-cost-caret 0.8s step-end infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .klyd-hidden-cost-typing {
            width: 12ch;
            animation: none;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <span className="badge-shine mb-4 inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700">
              The real problem
            </span>
            <h2
              id="problem-heading"
              className="mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
            >
              Manual work is your biggest{' '}
              <span className="font-display  gradient-text">hidden cost.</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-500">
              If your team is drowning in copy-and-paste workflows, support tickets are piling up,
              and knowledge is scattered across tools, manual work is costing you more than you
              think. We build AI-powered solutions that centralize your knowledge, automate
              repetitive processes, and provide complete visibility into your operations.
            </p>

            <ul className="space-y-3" role="list">
              {painPoints.map(({ icon: Icon, label, color }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${color}`} aria-hidden="true">
                    <Icon size={19} />
                  </div>
                  <p className="text-sm text-gray-700">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — bridge callout */}
          <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-violet-50 via-indigo-50 to-sky-50 p-8 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600">
              The bridge
            </p>
            <blockquote className="font-display text-2xl font-semibold leading-snug text-gray-900">
              We build AI systems that are grounded in your data, secure, measurable, and tailored
              to your operations.
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              That means automation designed around your real workflows, integrated into the tools
              your team already uses, and delivered with the guardrails needed for production.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white bg-white p-5 text-center shadow-sm">
                <span className="font-display block text-3xl font-bold text-violet-600">14–21</span>
                <span className="mt-1 block text-xs text-gray-500">days to first automation</span>
              </div>
              <div className="rounded-2xl border border-white bg-white p-5 text-center shadow-sm">
                <span className="font-display block text-3xl font-bold text-indigo-600">100%</span>
                <span className="mt-1 block text-xs text-gray-500">your data, your environment</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
