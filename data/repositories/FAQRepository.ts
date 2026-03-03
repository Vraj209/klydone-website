import { FAQ } from '../types';

// FAQ Repository — objection-handling questions optimised for AI automation sales
export class FAQRepository {
  static getFAQs(): FAQ[] {
    return [
      {
        question: 'How fast can we see results?',
        answer: 'Most teams see a working automation in 2–3 weeks. If you start with an AI Audit, you\'ll get a roadmap and ROI estimate in 5 business days.'
      },
      {
        question: 'Do you use our data to train models?',
        answer: 'No. Your data stays within your environment and the providers you approve. We design systems with data minimisation and clear retention controls.'
      },
      {
        question: 'What tools do you integrate with?',
        answer: 'Common integrations include Slack, Gmail, HubSpot, Zendesk, Notion, Google Drive, Airtable, Postgres, Stripe, and internal APIs. If you have a custom system, we build adapters.'
      },
      {
        question: 'How do you prevent hallucinations?',
        answer: 'We use RAG grounding, structured outputs, validation, and evaluation tests. For critical workflows, we add human approval steps.'
      },
      {
        question: 'What\'s the pricing model?',
        answer: 'We offer fixed-scope sprints for the Audit and MVP, then optional monthly support for scaling. Pricing depends on workflows, integrations, and compliance needs.'
      },
      {
        question: 'Do you offer ongoing support?',
        answer: 'Yes — monitoring, continuous improvements, prompt and model tuning, new automations, and cost optimisation are all included in our Scale & Retain retainer.'
      },
      {
        question: 'Can this work with compliance requirements?',
        answer: 'Yes. We can design for least privilege, audit logs, retention controls, and provider choices — including enterprise setups — based on your specific requirements.'
      }
    ];
  }
}