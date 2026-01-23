import { Testimonial } from '../types';

// Testimonials Repository following Single Responsibility Principle
export class TestimonialsRepository {
  static getTestimonials(): Testimonial[] {
    return [
      {
        quote: 'Working with Klydone transformed our backend infrastructure and cut our release cycles in half. Their team really understood our fintech requirements.',
        author: 'Sarah Chen',
        role: 'CTO',
        company: 'FinanceFlow Inc.'
      },
      {
        quote: 'From UX design to final launch, their process was smooth and extremely professional. Highly recommend for any SaaS project.',
        author: 'Michael Rodriguez',
        role: 'Product Director',
        company: 'CloudSync'
      },
      {
        quote: 'Reliable, responsive and technically excellent — they built our open-banking integration ahead of schedule and under budget.',
        author: 'David Thompson',
        role: 'CEO',
        company: 'PayStream Solutions'
      }
    ];
  }
}