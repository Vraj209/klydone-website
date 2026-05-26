import { FAQ } from '../types';

// FAQ Repository — objection-handling questions optimised for automation and technical solution sales
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
        answer: 'We offer three engagement models: Automation Audit, First Workflow Launch, and Scale & Optimize. Each one is designed for a different stage of your automation journey.'
      },
      {
        question: 'What support do you provide after launch?',
        answer: 'Our Scale & Optimize partnership includes ongoing support, system maintenance, monitoring, and expansion of your workflows as your needs evolve.'
      },
      {
        question: 'How fast can we launch the first automation?',
        answer: 'Most teams can launch their first custom automation in about 14 days after kickoff, depending on workflow complexity and integration requirements.'
      },
      {
        question: 'How do you keep automated workflows accurate?',
        answer: 'We use approved data sources, validation rules, human approval points, and monitoring so each workflow stays useful and trustworthy.'
      },
      {
        question: 'Can you work with compliance requirements?',
        answer: 'Yes. We design around requirements like GDPR, SOC 2, and PIPEDA with access controls, audit logs, and deployment choices aligned to your environment.'
      }
    ];
  }
}
