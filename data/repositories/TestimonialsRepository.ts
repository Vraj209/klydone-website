import { Testimonial } from '../types';

// Testimonials Repository following Single Responsibility Principle
export class TestimonialsRepository {
  static getTestimonials(): Testimonial[] {
    return [
      {
        quote: 'Klydone replaced a manual process with a workflow we could actually trust, and the time savings showed up within weeks.',
        author: 'Jane Smith',
        role: 'Operations Lead',
        company: 'Acme Inc.'
      },
      {
        quote: 'They built around our real process, not a generic demo. The rollout was fast, measurable, and secure.',
        author: 'Michael Rodriguez',
        role: 'Head of Operations',
        company: 'CloudSync'
      },
      {
        quote: 'The first automation went live in under three weeks and saved our team hours every single week right away.',
        author: 'David Thompson',
        role: 'VP of Customer Experience',
        company: 'PayStream Solutions'
      }
    ];
  }
}
