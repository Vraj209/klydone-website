import { PricingPlan } from '../types';

// Pricing Repository following Single Responsibility Principle
export class PricingRepository {
  static getPricingPlans(): PricingPlan[] {
    return [
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
  }
}