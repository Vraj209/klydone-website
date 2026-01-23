import { FAQ } from '../types';

// FAQ Repository following Single Responsibility Principle
export class FAQRepository {
  static getFAQs(): FAQ[] {
    return [
      {
        question: 'How do you ensure project stays on schedule?',
        answer: 'We use agile sprints, transparent dashboards and weekly check-ins so you always know status. Our project management approach includes clear milestones, regular demos, and proactive communication to prevent delays.'
      },
      {
        question: 'What technologies do you use?',
        answer: 'We favour Go for backend, Node.js / TypeScript for services; React/Next.js for frontend; Azure/AWS for cloud; DevOps best practices. We choose the right tools based on your specific requirements and scale needs.'
      },
      {
        question: 'Do you work with startups as well as enterprises?',
        answer: 'Yes — we partner with early-stage companies for MVPs and with large organisations for platform engineering and modernisation. Our flexible engagement models accommodate businesses of all sizes.'
      },
      {
        question: 'How do you handle support post-launch?',
        answer: 'We offer ongoing maintenance retainers, monitoring and optimisation packages tailored to your business. This includes 24/7 monitoring, performance tuning, feature enhancements, and security updates.'
      },
      {
        question: 'What about security & compliance?',
        answer: 'Security is built in from day one: secure coding, audits, monitoring, and compliance with relevant standards. We follow industry best practices including GDPR, SOC2, and ISO 27001 requirements as needed.'
      }
    ];
  }
}