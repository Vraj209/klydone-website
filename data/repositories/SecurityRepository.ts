import { SecurityFeature } from '../types';

// Security Repository following Single Responsibility Principle
export class SecurityRepository {
  static getSecurityFeatures(): string[] {
    return [
      'Secure coding standards & peer reviews',
      'Role-based access control, encryption at rest & in-transit',
      'Regular vulnerability scanning, pentesting and audits',
      'Cloud-based disaster recovery & high-availability architecture',
      'Compliance readiness (e.g., GDPR, SOC2, ISO 27001)'
    ];
  }

  static getComplianceBadges(): SecurityFeature[] {
    return [
      {
        icon: 'lock',
        title: 'GDPR',
        description: 'Compliant'
      },
      {
        icon: 'check',
        title: 'SOC 2',
        description: 'Ready'
      },
      {
        icon: 'shield',
        title: 'ISO 27001',
        description: 'Certified'
      },
      {
        icon: 'key',
        title: 'Encryption',
        description: 'End-to-End'
      }
    ];
  }
}