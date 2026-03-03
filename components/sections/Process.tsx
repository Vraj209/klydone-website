import { Search, PenTool, Wrench, Rocket } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { DataService } from '../../data';

const stepIcons   = [Search, PenTool, Wrench, Rocket] as const;
const stepColors  = [
  { icon: 'bg-violet-100 text-violet-600', bar: 'from-violet-400 to-purple-500'  },
  { icon: 'bg-indigo-100 text-indigo-600', bar: 'from-indigo-400 to-blue-500'    },
  { icon: 'bg-sky-100    text-sky-600',    bar: 'from-sky-400    to-cyan-500'     },
  { icon: 'bg-emerald-100 text-emerald-600', bar: 'from-emerald-400 to-teal-500' },
] as const;

export default function Process() {
  const steps = DataService.getProcessSteps();

  return (
    <Section id="process" background="tinted">
      <style>{`
        @keyframes klyd-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes klyd-pulse {
          0%,100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
        .klyd-flow-line {
          background: linear-gradient(90deg, #c4b5fd 0%, #818cf8 35%, #38bdf8 65%, #34d399 100%);
          background-size: 220% 100%;
          animation: klyd-flow 6s linear infinite;
        }
        .klyd-step-node {
          animation: klyd-pulse 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .klyd-flow-line, .klyd-step-node { animation: none !important; }
        }
      `}</style>

      <SectionHeader
        title="A predictable delivery process."
        subtitle="No black boxes. Every engagement follows the same four phases so you know exactly what's happening and when."
        badge="How we work"
      />

      <div className="relative">
        {/* Flowing workflow rail (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[6%] right-[6%] top-11 hidden h-1 rounded-full lg:block klyd-flow-line"
        />

        {/* Connector nodes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[6%] right-[6%] top-[38px] hidden justify-between px-0 lg:flex"
        >
          {[0, 1, 2, 3].map((node) => (
            <span
              key={node}
              className="klyd-step-node h-6 w-6 rounded-full border-4 border-white bg-violet-500 shadow-[0_0_0_6px_rgba(139,92,246,0.2)]"
            />
          ))}
        </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon   = stepIcons[index]  ?? Search;
          const colors = stepColors[index] ?? stepColors[0];
          return (
            <div
              key={index}
              className="card-lift relative flex flex-col rounded-3xl border border-white bg-white p-7 shadow-sm"
            >
              {/* Gradient top bar */}
              <div className={`mb-5 h-1 w-10 rounded-full bg-gradient-to-r ${colors.bar}`} aria-hidden="true" />

              {/* Step number */}
              <span className="mb-3 font-display text-5xl font-bold leading-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${colors.icon}`} aria-hidden="true">
                <Icon size={21} />
              </div>

              {/* Badge */}
              <span className="mb-2 inline-block rounded-full bg-gray-50 px-3 py-0.5 text-xs font-semibold text-gray-500">
                {step.highlight}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
            </div>
          );
        })}
      </div>
      </div>

      <p className="mt-10 text-center text-sm font-medium text-gray-500">
        Most clients ship something working in{' '}
        <span className="font-display italic text-violet-600">14–21 days.</span>
      </p>
    </Section>
  );
}
