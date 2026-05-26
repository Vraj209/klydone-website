import { Zap, BookOpen, Bot } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const solutions = [
  {
    icon:    Zap,
    title:   'Workflow Automation',
    outcome: '',
    features: [
      'Trigger work from the tools your team already uses',
      'Automate validation, routing, updates, approvals, and follow-up actions',
    ],
    gradient: 'from-violet-500 to-purple-600',
    bg:       'bg-violet-50 border-violet-100',
    iconBg:   'bg-violet-100 text-violet-600',
  },
  {
    icon:    BookOpen,
    title:   'Systems Integration',
    outcome: '',
    features: [
      'Sync customer, sales, finance, and operations data',
      'Keep teams aligned with one reliable workflow across systems',
    ],
    gradient: 'from-indigo-500 to-blue-600',
    bg:       'bg-indigo-50 border-indigo-100',
    iconBg:   'bg-indigo-100 text-indigo-600',
  },
  {
    icon:    Bot,
    title:   'AI-Assisted Workflows',
    outcome: '',
    features: [
      'Reduce manual review while preserving human oversight',
      'Built with approvals, monitoring, and production guardrails',
    ],
    gradient: 'from-sky-500 to-cyan-600',
    bg:       'bg-sky-50 border-sky-100',
    iconBg:   'bg-sky-100 text-sky-600',
  },
] as const;

export default function Solution() {
  return (
    <section id="solution" className="bg-gray-50 py-20 lg:py-24" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Technical solutions built around business outcomes."
          // subtitle="We design practical systems around your workflows, tools, and goals so teams can move faster without adding operational risk."
          badge="What we build"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map(({ icon: Icon, title, outcome, features, bg, iconBg, gradient }) => (
            <article
              key={title}
              className={`group card-lift flex flex-col rounded-3xl border bg-white p-8 shadow-sm ${bg}`}
            >
              {/* Icon + gradient top bar */}
              <div className={`mb-1 h-1 w-12 rounded-full bg-gradient-to-r ${gradient}`} aria-hidden="true" />
              <div className={`mb-5 mt-5 flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`} aria-hidden="true">
                <Icon size={24} />
              </div>

              <h3 className="mb-3 font-display text-xl font-bold text-gray-900">{title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">{outcome}</p>

              <ul className="space-y-2" role="list">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
