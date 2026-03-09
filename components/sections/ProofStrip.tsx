const ticker = [
  'Launch in 14 days',
  'Secure by design',
  'Human approvals',
  'Audit-ready workflows',
] as const;

const companyRow = [
  { name: 'OpenAI', logo: '/stack/openai.svg' },
  { name: 'Microsoft Azure', logo: '/stack/azure.svg' },
  { name: 'AWS', logo: '/stack/aws.svg' },
  { name: 'Google Cloud', logo: '/stack/google-cloud.svg' },
  { name: 'Slack', logo: '/stack/slack.svg' },
  { name: 'HubSpot', logo: '/stack/hubspot.svg' },
  { name: 'Zendesk', logo: '/stack/zendesk.svg' },
  { name: 'Notion', logo: '/stack/notion.svg' },
  { name: 'Stripe', logo: '/stack/stripe.svg' },
  { name: 'Airtable', logo: '/stack/airtable.svg' },
] as const;

export default function ProofStrip() {
  const loopCompanies = [...companyRow, ...companyRow];
  const loopTicker = [...ticker, ...ticker];

  return (
    <section className="border-y border-gray-100 bg-white py-8" aria-label="Trust and platform signals">
      <style>{`
        @keyframes klyd-proof-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - 8px), 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-proof-loop] { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-5 rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-50 via-indigo-50 to-sky-50 p-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-600">
              Built for real operations
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-gray-600">
              We design AI automations that plug into the tools your team already uses, with secure
              handoffs, measurable outcomes, and production-ready guardrails.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {ticker.map((item) => (
              <span
                key={item}
                className="badge-shine inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-violet-700 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Company movement marquee */}
        <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50/70 py-3">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent" />
          <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Works with your existing stack
          </p>
          <div
            data-proof-loop
            className="flex w-max items-center gap-3 animate-[klyd-proof-marquee_36s_linear_infinite]"
          >
            {loopCompanies.map((company, idx) => (
              <span
                key={`${company.name}-${idx}`}
                aria-hidden={idx >= companyRow.length}
                className="flex h-12 min-w-[92px] items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-6 w-auto object-contain opacity-90"
                  loading="lazy"
                  draggable={false}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
