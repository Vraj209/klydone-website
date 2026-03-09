import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { DataService } from '../../data';

export default function Pricing() {
  const plans = DataService.getPricingPlans();

  return (
    <Section id="pricing" background="white">
      <SectionHeader
        title="Engagement packages built around your stage."
        subtitle="Choose the right starting point: strategic assessment, first automation launch, or an ongoing partnership to scale what works."
        badge="Engagement models"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 card-lift ${
              plan.popular
                ? 'border-violet-200 bg-gradient-to-b from-violet-600 to-indigo-700 text-white shadow-xl shadow-violet-200'
                : 'border-gray-100 bg-white shadow-sm hover:border-violet-100'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900 shadow">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mt-1 text-sm font-medium ${plan.popular ? 'text-violet-200' : 'text-violet-600'}`}>
                {plan.subtitle}
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${plan.popular ? 'text-white/75' : 'text-gray-500'}`}>
                {plan.description}
              </p>
            </div>

            <ul className="mb-8 flex-1 space-y-3" role="list">
              {plan.features.map((feature, fi) => (
                <li key={fi} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className={`mt-0.5 shrink-0 ${plan.popular ? 'text-violet-200' : 'text-violet-500'}`}
                    aria-hidden="true"
                  />
                  <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              variant={plan.popular ? 'secondary' : 'primary'}
              fullWidth
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-gray-100 bg-gray-50">
        <div className="grid min-w-[760px] grid-cols-4 border-b border-gray-200 bg-white/80 text-sm font-semibold text-gray-700">
          <div className="px-4 py-3">Package</div>
          <div className="px-4 py-3">Duration</div>
          <div className="px-4 py-3">Primary Deliverable</div>
          <div className="px-4 py-3">Support</div>
        </div>
        {[
          ['AI Audit', '1-2 weeks', 'Roadmap and automation opportunities', 'Stakeholder walkthrough'],
          ['MVP Automation', '4 weeks', 'Working automation integrated with your systems', 'Post-launch iteration'],
          ['Scale & Retain', 'Ongoing', 'Expansion and optimization of automations', 'Continuous support'],
        ].map(([pkg, duration, deliverable, support]) => (
          <div key={pkg} className="grid min-w-[760px] grid-cols-4 border-t border-gray-200 text-sm text-gray-600">
            <div className="px-4 py-3 font-medium text-gray-800">{pkg}</div>
            <div className="px-4 py-3">{duration}</div>
            <div className="px-4 py-3">{deliverable}</div>
            <div className="px-4 py-3">{support}</div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        Custom scope is available for enterprise teams with more complex systems, compliance needs, or multi-workflow rollouts.
      </p>
    </Section>
  );
}
