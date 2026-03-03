'use client';

import { BarChart3, Database, Sparkles, Workflow } from 'lucide-react';

export default function Hero3DVisual() {
  const workflowItems = [
    { title: 'Capture', description: 'HubSpot webhook', icon: Database },
    { title: 'Score', description: 'AI intent classifier', icon: Sparkles },
    { title: 'Route', description: 'Assign to SDR + Slack', icon: Workflow },
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-[520px] [perspective:1200px]">
      <style>{`
        @keyframes klyd-float-card-a {
          0%,100% { transform: rotateY(-16deg) rotateX(8deg) translate3d(0,0,0); }
          50%     { transform: rotateY(-12deg) rotateX(6deg) translate3d(0,-12px,12px); }
        }
        @keyframes klyd-float-card-b {
          0%,100% { transform: rotateY(18deg) rotateX(6deg) translate3d(0,0,0); }
          50%     { transform: rotateY(14deg) rotateX(8deg) translate3d(0,10px,10px); }
        }
        @keyframes klyd-float-panel {
          0%,100% { transform: rotateY(-6deg) rotateX(8deg) translate3d(0,0,0); }
          50%     { transform: rotateY(-4deg) rotateX(10deg) translate3d(0,-8px,14px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-klyd-3d] { animation: none !important; }
        }
      `}</style>

      {/* Back glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-12 h-72 rounded-full bg-violet-200/70 blur-3xl"
      />

      {/* Main glass panel */}
      <div
        data-klyd-3d
        className="relative rounded-3xl border border-white/60 bg-white/75 p-6 shadow-[0_20px_60px_-20px_rgba(79,70,229,0.45)] backdrop-blur-xl [transform-style:preserve-3d]"
        style={{ animation: 'klyd-float-panel 8s ease-in-out infinite' }}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600">Live Workflow</p>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
            healthy
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold text-gray-900">Inbound Lead Autopilot</h3>
        <p className="mt-1 text-sm text-gray-500">Capture → Enrich → Score → Route → Notify</p>

        <div className="mt-5 space-y-3">
          {workflowItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <item.icon size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-3">
          <div className="flex items-center justify-between text-xs text-indigo-700">
            <span>Conversion uplift</span>
            <span className="font-bold">+22%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-indigo-100">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>
        </div>
      </div>

      {/* Floating card A */}
      <div
        data-klyd-3d
        className="absolute -left-5 top-8 rounded-2xl border border-violet-100 bg-white p-4 shadow-[0_18px_40px_-22px_rgba(124,58,237,0.7)] [transform-style:preserve-3d]"
        style={{ animation: 'klyd-float-card-a 7s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-2 text-violet-700">
          <Sparkles size={14} />
          <span className="text-xs font-semibold">AI Enrichment</span>
        </div>
        <p className="mt-1.5 text-[11px] text-gray-500">150+ data signals merged</p>
      </div>

      {/* Floating card B */}
      <div
        data-klyd-3d
        className="absolute -right-6 bottom-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-[0_18px_40px_-22px_rgba(14,165,233,0.65)] [transform-style:preserve-3d]"
        style={{ animation: 'klyd-float-card-b 7.5s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-2 text-sky-700">
          <BarChart3 size={14} />
          <span className="text-xs font-semibold">Realtime KPIs</span>
        </div>
        <p className="mt-1.5 text-[11px] text-gray-500">SLA alerts + trend insights</p>
      </div>
    </div>
  );
}
