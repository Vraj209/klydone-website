import { ProcessStep } from '../types';

// Process Repository — AI automation delivery process
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
        description: 'We architect a custom AI solution and prototype it with your data before moving into implementation.',
        highlight: 'Prototype & Architecture'
      },
      {
        number: '03',
        title: 'Build',
        description: 'We integrate with your systems, configure the right models, and build the automation with guardrails and observability.',
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