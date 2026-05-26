import { ProcessStep } from '../types';

// Process Repository — automation and technical solution delivery process
export class ProcessRepository {
  static getProcessSteps(): ProcessStep[] {
    return [
      {
        number: '01',
        title: 'Discover',
        description: 'We meet your team, map your workflows, and identify your biggest automation opportunities.',
        highlight: 'Workflows & Opportunities'
      },
      {
        number: '02',
        title: 'Design',
        description: 'We architect a custom technical solution and prototype the workflow with your data before moving into implementation.',
        highlight: 'Prototype & Architecture'
      },
      {
        number: '03',
        title: 'Build',
        description: 'We integrate with your systems and build the workflow with guardrails, monitoring, and clear handoff points.',
        highlight: 'Integrate & Build'
      },
      {
        number: '04',
        title: 'Launch',
        description: 'We deploy your automation, monitor performance, and iteratively improve it with your team after launch.',
        highlight: 'Deploy & Improve'
      }
    ];
  }
}
