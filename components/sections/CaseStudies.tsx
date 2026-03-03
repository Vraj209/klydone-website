import {
  ArrowRight,
  ChartNoAxesCombined,
  Clock3,
  DatabaseZap,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

interface CaseStudyData {
  client:   string;
  industry: string;
  title:    string;
  before:   string;
  after:    string;
  results:  string[];
  stack:    string[];
  accent:   string;
  illustration: {
    label: string;
    metric: string;
    icon: 'sparkles' | 'data' | 'chart';
    gradient: string;
  };
}

const caseStudies: CaseStudyData[] = [
  {
    client:   'SaaS Operations Team',
    industry: 'B2B SaaS',
    title:    'AI Triage Copilot for Support Ops',
    before:   'Support agents manually triaged 400+ tickets/week, routing by hand across Zendesk, Slack, and Notion — 3+ hours of coordination daily.',
    after:    'AI triage agent classifies, routes, and drafts responses grounded in the internal knowledge base. Agents review and approve in one click.',
    results:  ['↓ 35% ticket backlog in 3 weeks', '↑ 2.4× faster first-response', '↓ 18 hrs/week manual triage eliminated'],
    stack:    ['OpenAI', 'Zendesk', 'Notion', 'Slack', 'Postgres'],
    accent:   'violet',
    illustration: {
      label: 'Automation flow health',
      metric: '98.7%',
      icon: 'sparkles',
      gradient: 'from-violet-500 to-indigo-500',
    },
  },
  {
    client:   'Sales Ops — Mid-Market Fintech',
    industry: 'Fintech',
    title:    'Lead Qualification and Routing Engine',
    before:   'Inbound leads sat in HubSpot for 6–24 hours. SDRs copy-pasted CRM data into email drafts and Slack messages.',
    after:    'Automated pipeline: new lead → enrich → score → draft personalised outreach → route to SDR with one-click send. Full audit log.',
    results:  ['↑ 22% lead response speed', '↓ 4 hrs/week SDR admin', '12-day build-and-launch cycle'],
    stack:    ['Anthropic', 'HubSpot', 'Gmail', 'Airtable', 'Stripe'],
    accent:   'indigo',
    illustration: {
      label: 'SLA adherence',
      metric: '99.2%',
      icon: 'data',
      gradient: 'from-indigo-500 to-sky-500',
    },
  },
  {
    client:   'Internal Ops — Healthcare Tech',
    industry: 'Healthcare Tech',
    title:    'Policy Intelligence Assistant (RAG)',
    before:   'Policy docs in 6 Drive folders. Employees opened 8–12 support tickets daily asking identical compliance questions.',
    after:    'RAG assistant grounded in policy docs, surfaced in Slack. Compliance team updates docs — assistant refreshes automatically.',
    results:  ['↓ 71% repeat compliance tickets', '5-day from doc to live assistant', 'Zero PII left customer environment'],
    stack:    ['Azure OpenAI', 'Google Drive', 'Slack', 'LangChain', 'Pinecone'],
    accent:   'sky',
    illustration: {
      label: 'Knowledge coverage',
      metric: '92%',
      icon: 'chart',
      gradient: 'from-sky-500 to-cyan-500',
    },
  },
];

function AccentClasses(accent: CaseStudyData['accent']) {
  if (accent === 'violet') {
    return {
      badge: 'bg-violet-50 text-violet-700 border-violet-200',
      ring: 'ring-violet-100',
      result: 'bg-violet-50 border-violet-100 text-violet-700',
      icon: 'bg-violet-100 text-violet-700',
    };
  }
  if (accent === 'indigo') {
    return {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      ring: 'ring-indigo-100',
      result: 'bg-indigo-50 border-indigo-100 text-indigo-700',
      icon: 'bg-indigo-100 text-indigo-700',
    };
  }
  return {
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    ring: 'ring-sky-100',
    result: 'bg-sky-50 border-sky-100 text-sky-700',
    icon: 'bg-sky-100 text-sky-700',
  };
}

function IllustrationCard({
  label,
  metric,
  icon,
  gradient,
}: CaseStudyData['illustration']) {
  const Icon = icon === 'sparkles' ? Sparkles : icon === 'data' ? DatabaseZap : ChartNoAxesCombined;

  return (
    <div className="relative mx-auto w-full max-w-[320px] [perspective:900px]">
      <div
        className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_22px_45px_-20px_rgba(79,70,229,0.45)] backdrop-blur-sm"
        style={{ transform: 'rotateY(-10deg) rotateX(8deg)' }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">{label}</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            live
          </span>
        </div>

        <div className={`mb-3 h-1.5 w-full rounded-full bg-gradient-to-r ${gradient}`} />

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
            <Icon size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-500">quality score</p>
            <p className="text-2xl font-bold text-gray-900">{metric}</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-4 -right-4 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-lg"
        style={{ transform: 'rotateY(14deg) rotateX(6deg)' }}
      >
        <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-500">
          <Clock3 size={12} />
          <span>Auto-sync active</span>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <Section id="case-studies" background="light">
      <SectionHeader
        title="Results, not demos."
        subtitle="Real automations shipped for real ops teams — with before, after, and the numbers that matter."
        badge="Case studies"
      />

      <div className="space-y-6">
        {caseStudies.map((study, index) => (
          <article key={index} className="card-lift rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            {/* Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${AccentClasses(study.accent).badge}`}
                >
                  {study.client}
                </span>
                <span className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                  {study.industry}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                <ChartNoAxesCombined size={12} />
                Productized workflow
              </span>
            </div>

            <h3 className="mb-6 text-xl font-semibold text-gray-900">{study.title}</h3>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                {/* Before / After */}
                <div className="mb-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingDown size={15} className="text-red-500" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-red-500">Before</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{study.before}</p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingUp size={15} className="text-emerald-600" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">After</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{study.after}</p>
                  </div>
                </div>

                {/* Results + Stack */}
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <ul className="flex flex-wrap gap-2" role="list">
                    {study.results.map((result, ri) => (
                      <li
                        key={ri}
                        className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${AccentClasses(study.accent).result}`}
                      >
                        {result}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Stack:</span>
                    {study.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-500"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3D Illustration Panel */}
              <div className={`rounded-2xl bg-gradient-to-br from-white to-gray-50 p-4 ring-1 ${AccentClasses(study.accent).ring}`}>
                <IllustrationCard
                  label={study.illustration.label}
                  metric={study.illustration.metric}
                  icon={study.illustration.icon}
                  gradient={study.illustration.gradient}
                />
                <div className={`mt-8 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold ${AccentClasses(study.accent).icon}`}>
                  <Sparkles size={13} />
                  Measurable outcomes tied to production workflows
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="#contact" variant="ghost" size="md">
          Discuss your automation opportunity
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
