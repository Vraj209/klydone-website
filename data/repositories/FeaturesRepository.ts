import { Feature } from '../types';

// Features Repository following Single Responsibility Principle
export class FeaturesRepository {
  static getFeatures(): Feature[] {
    return [
      {
        icon: 'performance',
        title: 'Custom Backend Development',
        description: 'Go / Node.js services built for performance, reliability and scale.'
      },
      {
        icon: 'design',
        title: 'Modern Frontend Experiences',
        description: 'React / Next.js applications with TypeScript, responsive design and seamless UX.'
      },
      {
        icon: 'cloud',
        title: 'Cloud Architecture & DevOps',
        description: 'Azure (and multi-cloud) architecture, CI/CD, automation to accelerate releases.'
      },
      {
        icon: 'analytics',
        title: 'Data & Analytics Engineering',
        description: 'Data pipelines, BI dashboards and real-time analytics to power growth.'
      },
      {
        icon: 'ai',
        title: 'AI & Machine Learning Integration',
        description: 'From proof-of-concepts to production-ready AI systems.'
      },
      {
        icon: 'launch',
        title: 'SaaS Product Engineering',
        description: 'End-to-end SaaS development: design, build, launch and maintain.'
      }
    ];
  }
}