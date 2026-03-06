const ticker = [
  'AI triage live',
  'RAG grounded responses',
  'approval gates enabled',
  'audit logs active',
  'SLA alerts in place',
  'cost optimization tracking',
] as const;

const companyRow = [
  'OpenAI',
  'Azure',
  'AWS',
  'GCP',
  'Slack',
  'HubSpot',
  'Zendesk',
  'Notion',
  'Stripe',
  'Airtable',
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
        {/* Intelligent signal rail */}
        <div className="relative mb-6 overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-indigo-50 to-sky-50 px-3 py-3">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white/85 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white/85 to-transparent" />
          <div
            data-proof-loop
            className="flex w-max items-center gap-2 animate-[klyd-proof-marquee_30s_linear_infinite]"
          >
            {loopTicker.map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="badge-shine inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-violet-700 shadow-sm"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-violet-400" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* Company movement marquee */}
        <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50/70 py-3">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent" />
          <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Trusted stack coverage
          </p>
          <div
            data-proof-loop
            className="flex w-max items-center gap-3 animate-[klyd-proof-marquee_36s_linear_infinite]"
          >
            {loopCompanies.map((name, idx) => (
              <span
                key={`${name}-${idx}`}
                aria-hidden={idx >= companyRow.length}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
