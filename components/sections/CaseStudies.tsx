import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';

type Accent = 'violet' | 'indigo' | 'sky';

interface CaseStudyData {
  client: string;
  industry: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  proof: string;
  tools: string[];
  accent: Accent;
}

const caseStudies: CaseStudyData[] = [
  {
    client: 'SaaS Ops',
    industry: 'B2B SaaS',
    title: 'Ticket triage that routes itself',
    summary: 'Support tickets are classified, drafted, and routed with one-click human approval.',
    metric: '2.4x',
    metricLabel: 'faster first response',
    proof: '18 hrs/week saved',
    tools: ['Zendesk', 'Slack', 'Notion'],
    accent: 'violet',
  },
  {
    client: 'Fintech Sales',
    industry: 'Fintech',
    title: 'Lead routing with clean context',
    summary: 'New leads are enriched, scored, and assigned before the handoff slows down.',
    metric: '99.2%',
    metricLabel: 'SLA adherence',
    proof: '12-day launch',
    tools: ['HubSpot', 'Gmail', 'Airtable'],
    accent: 'indigo',
  },
  {
    client: 'Healthtech Ops',
    industry: 'Healthcare Tech',
    title: 'Policy answers from approved docs',
    summary: 'Employees get governed answers in Slack from controlled internal documents.',
    metric: '71%',
    metricLabel: 'repeat tickets reduced',
    proof: 'PII stays private',
    tools: ['Azure OpenAI', 'Drive', 'Slack'],
    accent: 'sky',
  },
];

const accentStyles: Record<Accent, {
  card: string;
  badge: string;
  metric: string;
  proof: string;
}> = {
  violet: {
    card: 'border-violet-100 bg-violet-50/35',
    badge: 'border-violet-200 bg-white text-violet-700',
    metric: 'text-violet-700',
    proof: 'bg-violet-100 text-violet-700',
  },
  indigo: {
    card: 'border-indigo-100 bg-indigo-50/35',
    badge: 'border-indigo-200 bg-white text-indigo-700',
    metric: 'text-indigo-700',
    proof: 'bg-indigo-100 text-indigo-700',
  },
  sky: {
    card: 'border-sky-100 bg-sky-50/40',
    badge: 'border-sky-200 bg-white text-sky-700',
    metric: 'text-sky-700',
    proof: 'bg-sky-100 text-sky-700',
  },
};

export default function CaseStudies() {
  return (
    <Section id="case-studies" background="white">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="badge-shine mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase text-violet-700">
          Case studies
        </span>
        <h2 className="font-display mb-4 text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
          Clear outcomes, less noise.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => {
          const styles = accentStyles[study.accent];

          return (
            <article
              key={study.title}
              className={`flex min-h-[340px] flex-col rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60 ${styles.card}`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">{study.industry}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-gray-950">{study.title}</h3>
                </div>
                <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${styles.badge}`}>
                  {study.client}
                </span>
              </div>

              <p className="mb-8 text-sm leading-relaxed text-gray-600">{study.summary}</p>

              <div className="mt-auto">
                <div className="mb-5 flex items-end justify-between gap-4 rounded-2xl bg-white/80 p-4 ring-1 ring-gray-900/5">
                  <div>
                    <p className={`font-display text-4xl font-bold leading-none ${styles.metric}`}>
                      {study.metric}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase text-gray-500">{study.metricLabel}</p>
                  </div>
                  <ArrowUpRight size={18} className={styles.metric} aria-hidden="true" />
                </div>

                <div className="mb-5 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${styles.proof}`}>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    {study.proof}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-500"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
