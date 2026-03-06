import { Shield, Lock, UserCheck, Eye, Layers } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { DataService } from '../../data';

const featureIcons = [Lock, Shield, UserCheck, Eye, Layers];

const guardRails = [
  { icon: Lock,      title: 'Least Privilege',  desc: 'Scoped access only',               color: 'bg-violet-50 border-violet-100 text-violet-600' },
  { icon: Shield,    title: 'Data Isolation',   desc: 'No model training on your data',   color: 'bg-indigo-50 border-indigo-100 text-indigo-600' },
  { icon: UserCheck, title: 'HITL Gates',       desc: 'Human approvals before critical actions', color: 'bg-sky-50 border-sky-100 text-sky-600'   },
  { icon: Eye,       title: 'Audit Logs',       desc: 'Full run-level observability',     color: 'bg-emerald-50 border-emerald-100 text-emerald-600' },
] as const;

export default function Security() {
  const securityFeatures = DataService.getSecurityFeatures();

  return (
    <Section id="security" background="white">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <span className="badge-shine mb-4 inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700">
            Security & Governance
          </span>
          <SectionHeader
            title="Built with guardrails."
            subtitle="Security is a first-class constraint, not an afterthought. Every AI system we ship is scoped, observable, and designed to keep your data in your control."
            centered={false}
          />

          <ul className="mb-8 space-y-3" role="list">
            {securityFeatures.map((feature, index) => {
              const Icon = featureIcons[index] ?? Shield;
              return (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-violet-50" aria-hidden="true">
                    <Icon size={17} className="text-violet-600" />
                  </div>
                  <p className="pt-1 text-sm text-gray-700">{feature}</p>
                </li>
              );
            })}
          </ul>

          <Button href="#contact" variant="primary">
            Request our security checklist
          </Button>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Governance defaults
          </p>
          <div className="grid grid-cols-2 gap-4">
            {guardRails.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={`flex flex-col items-center rounded-2xl border bg-white p-5 text-center shadow-sm ${color.split(' ')[1]}`}>
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${color}`} aria-hidden="true">
                  <Icon size={19} />
                </div>
                <h4 className="mb-1 text-sm font-bold text-gray-900">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 text-center">
            <p className="text-sm text-gray-500">
              Vendor-neutral architecture — swap from{' '}
              <span className="font-semibold text-gray-700">OpenAI → Azure → Anthropic</span>{' '}
              without rebuilding.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
