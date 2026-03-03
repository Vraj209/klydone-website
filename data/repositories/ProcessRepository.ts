import { ProcessStep } from '../types';

// Process Repository — AI automation delivery process
export class ProcessRepository {
  static getProcessSteps(): ProcessStep[] {
    return [
      {
        number: '01',
        title: 'Discover',
        description: 'We map your goals, data sources, constraints, and existing tools. You leave with a ranked list of automation opportunities and a clear ROI estimate.',
        highlight: 'Goals & Constraints'
      },
      {
        number: '02',
        title: 'Design',
        description: 'We produce the system architecture, data flow diagrams, evaluation plan, and UX for any human-facing touchpoints before writing a single line of code.',
        highlight: 'Architecture & Evals'
      },
      {
        number: '03',
        title: 'Build',
        description: 'Implementation with observability built in from day one — logs, metrics, evaluation tests, and human-in-the-loop gates where your workflows require them.',
        highlight: 'Implementation'
      },
      {
        number: '04',
        title: 'Launch',
        description: 'We run team training, hand over runbooks, and stay on as your monitoring partner. Most clients ship something working in 14–21 days.',
        highlight: 'Handoff & Iterate'
      }
    ];
  }
}