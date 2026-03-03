import { Zap, BookOpen, Bot } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const solutions = [
  {
    icon:    Zap,
    title:   'AI Workflow Automation',
    outcome: 'Replace manual hand-offs with fully automated trigger → validate → act → log pipelines.',
    features: [
      'Multi-step orchestration with conditional branching',
      'Error recovery, retry logic, and alert routing',
    ],
    gradient: 'from-violet-500 to-purple-600',
    bg:       'bg-violet-50 border-violet-100',
    iconBg:   'bg-violet-100 text-violet-600',
  },
  {
    icon:    BookOpen,
    title:   'RAG Knowledge Assist',
    outcome: 'Ground AI answers in your internal docs so responses are accurate, cited, and auditable.',
    features: [
      'Retrieval from Notion, Drive, Confluence, or custom DBs',
      'Source citation + confidence scoring built in',
    ],
    gradient: 'from-indigo-500 to-blue-600',
    bg:       'bg-indigo-50 border-indigo-100',
    iconBg:   'bg-indigo-100 text-indigo-600',
  },
  {
    icon:    Bot,
    title:   'AI Agents for Tasks',
    outcome: 'Autonomous multi-step task execution with guardrails, approvals, and full observability.',
    features: [
      'Tool-use agents with sandboxed permission scopes',
      'Human-in-the-loop gates before irreversible actions',
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
          title="AI systems designed for real operations."
          subtitle="Three focused products that remove busywork, surface knowledge, and execute tasks — each shipped with monitoring and handoff docs."
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
