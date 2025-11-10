import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'MVP Build',
      description: 'Fixed-price, small team, 8-12 weeks',
      features: [
        'Initial consultation & planning',
        'MVP development',
        'Basic cloud deployment',
        'Core features implementation',
        '4 weeks post-launch support',
        'Documentation'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Growth',
      subtitle: 'Scale & Optimize',
      description: 'Dedicated team, monthly retainer, iterative roadmap',
      features: [
        'Everything in Starter',
        'Dedicated development team',
        'Continuous optimization',
        'Advanced integrations',
        'Priority support',
        'Monthly strategy sessions',
        'Performance monitoring'
      ],
      cta: 'Schedule a Call',
      popular: true
    },
    {
      name: 'Enterprise',
      subtitle: 'Custom Architecture',
      description: 'Fully custom solution, SLA, dedicated resources',
      features: [
        'Everything in Growth',
        'Custom architecture design',
        'Multi-region deployment',
        'Dedicated account manager',
        '24/7 support with SLA',
        'Security audits',
        'Compliance consulting',
        'Unlimited integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];
  
  return (
    <Section id="pricing" background="white">
      <SectionHeader 
        title="Pricing & Engagement Models"
        subtitle="We offer flexible engagement models to suit your needs, whether you're building a full product or adding features to an existing platform."
      />
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-3xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105' 
                : 'bg-white shadow-lg border border-gray-200'
            } transition-all duration-300 hover:shadow-2xl`}
          >
            {plan.popular && (
              <div className="mb-4">
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <h3 className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
              {plan.name}
            </h3>
            <p className={`text-lg font-semibold mb-2 ${plan.popular ? 'text-blue-100' : 'text-blue-600'}`}>
              {plan.subtitle}
            </p>
            <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
              {plan.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <svg 
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-white' : 'text-green-500'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
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
      
      <p className="text-center text-gray-600 text-sm">
        Custom quotes provided after understanding your specific requirements.
      </p>
    </Section>
  );
}

