import { FAQ } from '../types';

// FAQ Repository — objection-handling questions optimised for AI automation sales
export class FAQRepository {
  static getFAQs(): FAQ[] {
    return [
      {
        question: 'What systems can you integrate with?',
        answer: 'We integrate with tools like Zendesk, Salesforce, HubSpot, Slack, Notion, Google Drive, and custom internal systems through APIs.'
      },
      {
        question: 'How is my data secured?',
        answer: 'Your data stays in your environment whenever possible. We use encryption in transit and at rest, strict access controls, and auditable workflows designed around your security requirements.'
      },
      {
        question: 'What are your pricing options?',
        answer: 'We offer three engagement models: AI Audit, MVP Automation, and Scale & Retain. Each one is designed for a different stage of your automation journey.'
      },
      {
        question: 'What support do you provide after launch?',
        answer: 'Our Scale & Retain partnership includes ongoing support, model maintenance, monitoring, and expansion of your automations as your needs evolve.'
      },
      {
        question: 'How fast can we launch the first automation?',
        answer: 'Most teams can launch their first custom automation in about 14 days after kickoff, depending on workflow complexity and integration requirements.'
      },
      {
        question: 'How do you keep AI responses accurate?',
        answer: 'We ground responses in your own knowledge base, add validation and guardrails, and monitor quality so the system stays useful and trustworthy.'
      },
      {
        question: 'Can you work with compliance requirements?',
        answer: 'Yes. We design around requirements like GDPR, SOC 2, and PIPEDA with access controls, audit logs, and deployment choices aligned to your environment.'
      }
    ];
  }
}