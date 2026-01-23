import { ProcessStep } from '../types';

// Process Repository following Single Responsibility Principle
export class ProcessRepository {
  static getProcessSteps(): ProcessStep[] {
    return [
      {
        number: '01',
        title: 'Discovery & Planning',
        description: 'We start by understanding your vision, goals and technology needs. We map out scope, timeline and budget.',
        highlight: 'Smart Analyzing'
      },
      {
        number: '02',
        title: 'Design & Architecture',
        description: 'We craft UX wireframes, UI mockups and system architecture diagrams to align on structure and flow.',
        highlight: 'Strategic Planning'
      },
      {
        number: '03',
        title: 'Build & Launch',
        description: 'Agile sprints, frequent demos and continuous integration ensure steady progress and high quality.',
        highlight: 'AI Development'
      },
      {
        number: '04',
        title: 'Operate & Optimize',
        description: 'Post-launch support, performance tuning, monitoring and future roadmap planning to keep your product evolving.',
        highlight: 'Continuous Growth'
      }
    ];
  }
}