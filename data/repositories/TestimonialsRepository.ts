import { Testimonial } from '../types';

// Testimonials Repository following Single Responsibility Principle
export class TestimonialsRepository {
  static getTestimonials(): Testimonial[] {
    return [
      {
        quote: 'Klydone reduced our support backlog by 80% within two weeks and gave our team a workflow we could actually trust.',
        author: 'Jane Smith',
        role: 'Director of Support',
        company: 'Acme Inc.'
      },
      {
        quote: 'They built an automation around our real processes, not a generic chatbot. The rollout was fast, measurable, and secure.',
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