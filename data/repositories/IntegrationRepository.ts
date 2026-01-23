import { Integration } from '../types';

// Integration Repository following Single Responsibility Principle
export class IntegrationRepository {
  static getIntegrations(): Integration[] {
    return [
      { name: 'Stripe', icon: 'stripe', category: 'Payments' },
      { name: 'Plaid', icon: 'plaid', category: 'Banking' },
      { name: 'OAuth', icon: 'oauth', category: 'Auth' },
      { name: 'SAML', icon: 'saml', category: 'SSO' },
      { name: 'Azure', icon: 'cloud', category: 'Cloud' },
      { name: 'AWS', icon: 'aws', category: 'Cloud' },
      { name: 'Salesforce', icon: 'salesforce', category: 'CRM' },
      { name: 'Analytics', icon: 'analytics', category: 'Data' }
    ];
  }
}