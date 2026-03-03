import { PricingPlan } from '../types';

// Pricing Repository — AI automation engagement packages
export class PricingRepository {
  static getPricingPlans(): PricingPlan[] {
    return [
      {
        name: 'AI Audit',
        subtitle: '1 week · Fixed scope',
        description: 'Understand where AI can move the needle before you spend a dollar on build.',
        features: [
          'Workflow map + automation opportunity analysis',
          'ROI estimate + risk assessment',
          'Architecture + 90-day roadmap',
          'Written findings delivered in 5 business days',
          'Strategy call walkthrough included'
        ],
        cta: 'Get AI Audit',
        popular: false
      },
      {
        name: 'MVP Automation',
        subtitle: '2–3 weeks · Fixed scope',
        description: 'Ship 1–2 production-ready automations with full observability and team handoff.',
        features: [
          '1–2 end-to-end workflows shipped',
          'Logging, monitoring & error alerting',
          'Evaluation tests + quality gates',
          'Team handoff + runbook documentation',
          'Two weeks of post-launch support'
        ],
        cta: 'Book Build Sprint',
        popular: true
      },
      {
        name: 'Scale & Retain',
        subtitle: 'Monthly · Ongoing',
        description: 'Continuous improvements, new automations, model optimisation, and governance.',
        features: [
          'Everything in MVP Automation',
          'Unlimited new workflow requests',
          'Prompt and model tuning',
          'Cost optimisation + provider governance',
          'Monthly strategy review',
          'Dedicated Slack channel'
        ],
        cta: 'Talk Retainer',
        popular: false
      }
    ];
  }
}