import { SecurityFeature } from '../types';

// Security Repository — AI-specific governance and guardrails
export class SecurityRepository {
  static getSecurityFeatures(): string[] {
    return [
      'Least privilege access — AI agents only touch what they need',
      'Data boundaries + retention controls — your data never trains public models',
      'Human-in-the-loop approvals for critical or irreversible actions',
      'Audit logs + monitoring — full observability on every automation run',
      'Vendor-neutral architecture — swap providers without rebuilding'
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