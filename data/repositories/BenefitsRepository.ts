import { Benefit } from '../types';

// Benefits Repository following Single Responsibility Principle
export class BenefitsRepository {
  static getBenefits(): Benefit[] {
    return [
      {
        title: 'Speed to Market',
        description: 'We combine lean processes and modern tech stacks so you can launch faster.',
        icon: 'speed'
      },
      {
        title: 'Built for Scale',
        description: 'Architectures designed to handle high traffic, large data volumes and future growth.',
        icon: 'scale'
      },
      {
        title: 'Lower Maintenance Cost',
        description: 'Clean codebases, automated workflows and well-documented systems reduce long-term overhead.',
        icon: 'savings'
      },
      {
        title: 'Technology Partnership',
        description: "You're not just hiring a vendor — we become your extension, advising on architecture, best practices and growth.",
        icon: 'partnership'
      },
      {
        title: 'Transparent Process',
        description: 'Weekly updates, clear milestones and open communication mean you always know where things stand.',
        icon: 'transparency'
      },
      {
        title: 'Results-Driven',
        description: 'We care about outcomes — faster delivery, improved performance, reduced downtime, higher ROI.',
        icon: 'results'
      }
    ];
  }
}