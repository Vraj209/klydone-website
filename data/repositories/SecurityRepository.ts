import { SecurityFeature } from '../types';

// Security Repository — AI-specific governance and guardrails
export class SecurityRepository {
  static getSecurityFeatures(): string[] {
    return [
      'Aligned to GDPR, SOC 2, and PIPEDA requirements where your workflows demand it',
      'Data encrypted in transit and at rest across the systems we deploy',
      'Private-cloud and controlled-environment deployment options for sensitive operations',
      'Granular permissions and access controls for every workflow and operator',
      'Audit logs and monitoring that give your team full visibility and control'
    ];
  }

  static getComplianceBadges(): SecurityFeature[] {
    return [
      {
        icon: 'lock',
        title: 'Least Privilege',
        description: 'Scoped access only'
      },
      {
        icon: 'shield',
        title: 'Data Isolation',
        description: 'No model training'
      },
      {
        icon: 'check',
        title: 'Audit Logs',
        description: 'Full observability'
      },
      {
        icon: 'key',
        title: 'HITL Gates',
        description: 'Human approvals'
      }
    ];
  }
}