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
        title="Clear packages. Fast delivery."
        subtitle="Fixed-scope sprints for the first two tiers — you know exactly what you get and when. Monthly retainer when you want to keep compounding."
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

      <p className="mt-8 text-center text-sm text-gray-400">
        Custom scope available for enterprise teams — pricing after a 30-min discovery call.
      </p>
    </Section>
  );
}
