import { UseCase } from '../types';

// Use Cases Repository following Single Responsibility Principle
export class UseCasesRepository {
  static getUseCases(): UseCase[] {
    return [
      {
        icon: 'fintech',
        title: 'Fintech Platforms',
        description: 'P2P payments, open banking APIs, crypto dashboards — built with security, compliance and scale in mind.'
      },
      {
        icon: 'saas',
        title: 'SaaS Applications',
        description: 'Subscription-based products for B2B and B2C markets with multi-tenant architecture and global rollout.'
      },
      {
        icon: 'enterprise',
        title: 'Enterprise Modernisation',
        description: 'Legacy system upgrades, cloud migrations and platform revitalisations.'
      },
      {
        icon: 'data',
        title: 'Data-Driven Products',
        description: 'Real-time analytics, dashboards, ML-powered insights for decision makers.'
      },
      {
        icon: 'web',
        title: 'High-Traffic Web Apps',
        description: 'Scalable front-ends & back-ends to serve tens & hundreds of thousands of users.'
      }
    ];
  }
}