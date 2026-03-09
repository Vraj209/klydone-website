import { PricingPlan } from '../types';

// Pricing Repository — AI automation engagement packages
export class PricingRepository {
  static getPricingPlans(): PricingPlan[] {
    return [
      {
        name: 'AI Audit',
        subtitle: '1-2 weeks · Strategy engagement',
        description: 'A focused engagement where we analyze your processes, identify automation opportunities, and deliver a practical roadmap.',
        features: [
          'Current-state workflow mapping',
          'Opportunity and risk assessment',
          'Recommended automation roadmap',
          'Priority use cases with expected ROI',
          'Stakeholder walkthrough and next steps'
        ],
        cta: 'Get Your AI Audit',
        popular: false
      },
      {
        name: 'MVP Automation',
        subtitle: '4 weeks · Delivery sprint',
        description: 'A build sprint where we design and launch a working automation integrated with your systems.',
        features: [
          'Custom automation design and implementation',
          'Integration with your support, CRM, or internal tools',
          'Monitoring, logging, and quality checks',
          'Team handoff and documentation',
          'Post-launch support and iteration'
        ],
        cta: 'Launch an MVP Automation',
        popular: true
      },
      {
        name: 'Scale & Retain',
        subtitle: 'Ongoing partnership',
        description: 'An ongoing partnership where we expand your automations, maintain models, and provide continuous support.',
        features: [
          'Expansion of existing automations',
          'Model maintenance and optimization',
          'Continuous monitoring and support',
          'Monthly strategy reviews',
          'New workflow opportunities prioritized with your team'
        ],
        cta: 'Talk About Ongoing Support',
        popular: false
      }
    ];
  }
}