import { PricingPlan } from '../types';

// Pricing Repository — automation and technical solution engagement packages
export class PricingRepository {
  static getPricingPlans(): PricingPlan[] {
    return [
      {
        name: 'Automation Audit',
        subtitle: '1-2 weeks · Strategy engagement',
        description: '',
        features: [
          'Current-state workflow mapping',
          'Opportunity and risk assessment',
          'Recommended automation roadmap',
          'Priority use cases with expected ROI',
          'Stakeholder walkthrough and next steps'
        ],
        cta: 'Get Your Automation Audit',
        popular: false
      },
      {
        name: 'First Workflow Launch',
        subtitle: '4 weeks · Delivery sprint',
        description: '',
        features: [
          'Custom workflow design and implementation',
          'Integration with CRM, support, finance, data, or internal tools',
          'Monitoring, logging, and quality checks',
          'Team handoff and documentation',
          'Post-launch support and iteration'
        ],
        cta: 'Launch a Workflow',
        popular: true
      },
      {
        name: 'Scale & Optimize',
        subtitle: 'Ongoing partnership',
        description: '',
        features: [
          'Expansion of existing workflows',
          'System maintenance and optimization',
          'Continuous monitoring and support',
          'Monthly strategy reviews',
          'New workflow opportunities prioritized with your team'
        ],
        cta: 'Talk About Scaling',
        popular: false
      }
    ];
  }
}
