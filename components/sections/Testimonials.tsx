import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function Testimonials() {
  const testimonials = [
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
  
  return (
    <Section id="testimonials" background="dark" padding="md">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Real results from real partnerships"
        badge="Over 50+ Projects Delivered"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black text-white border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-violet-500"
          >
            <div className="mb-6">
              <svg
                className="w-10 h-10 text-violet-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-white mb-6 leading-relaxed italic">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-white">{testimonial.author}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="text-sm text-violet-600">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

