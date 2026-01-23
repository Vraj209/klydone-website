import { Service } from '../types';

// Services Repository following Single Responsibility Principle
export class ServicesRepository {
  static getServices(): Service[] {
    return [
      {
        icon: 'performance',
        title: 'Backend Engineering (Go / Node.js)',
        description: 'Building microservices, APIs, event-driven systems and high-throughput backends.',
        features: ['Go', 'Node.js', 'Microservices', 'APIs']
      },
      {
        icon: 'frontend',
        title: 'Frontend & Web App Development',
        description: 'Highly interactive web applications using Next.js, TypeScript, Tailwind CSS, state management with Zustand/Jotai.',
        features: ['Next.js', 'TypeScript', 'React', 'Tailwind']
      },
      {
        icon: 'cloud',
        title: 'Cloud & Infrastructure',
        description: 'Azure (Canada Central), AWS, containers, Kubernetes, serverless and full DevOps pipelines (CI/CD, monitoring, logging).',
        features: ['Azure', 'AWS', 'Kubernetes', 'DevOps']
      },
      {
        icon: 'saas',
        title: 'SaaS Platform Development',
        description: 'From MVP to full subscription-based SaaS product: user-auth, billing, multi-tenant systems, analytics.',
        features: ['SaaS', 'Multi-tenant', 'Subscriptions']
      },
      {
        icon: 'analytics',
        title: 'Data Engineering & Analytics',
        description: 'Designing data lakes, ETL pipelines, dashboards and data-driven decision frameworks.',
        features: ['Data Pipelines', 'ETL', 'Analytics']
      },
      {
        icon: 'ai',
        title: 'AI / ML Solutions',
        description: 'Integrating generative AI, agentic AI workflows and smart automation into your applications.',
        features: ['AI', 'Machine Learning', 'Automation']
      },
      {
        icon: 'support',
        title: 'Maintenance & Support',
        description: 'Ongoing services: monitoring, performance optimization, feature enhancements, security audits.',
        features: ['Support', 'Monitoring', 'Security']
      }
    ];
  }
}