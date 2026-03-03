'use client';

import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { DataService } from '../../data';

const cardThemes = [
  {
    bg: 'bg-lime-400',
    text: 'text-gray-900',
    muted: 'text-gray-800/80',
    divider: 'border-gray-800/10',
    avatar: 'bg-white/90 text-gray-900',
  },
  {
    bg: 'bg-orange-400',
    text: 'text-gray-900',
    muted: 'text-gray-900/85',
    divider: 'border-gray-900/10',
    avatar: 'bg-white/90 text-gray-900',
  },
  {
    bg: 'bg-sky-400',
    text: 'text-gray-900',
    muted: 'text-gray-900/85',
    divider: 'border-gray-900/10',
    avatar: 'bg-white/90 text-gray-900',
  },
] as const;

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function Testimonials() {
  const testimonials = DataService.getTestimonials();
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <Section id="testimonials" background="light" padding="md">
      <style>{`
        @keyframes klyd-testimonials-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - 8px), 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-klyd-marquee-track] {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mb-8">
        <SectionHeader
          title="What our customers say about us..."
          subtitle="Trusted by teams building serious AI operations."
          badge="Customer stories"
          centered={false}
        />
      </div>

      <div
        className="group overflow-hidden"
        aria-label="Customer stories carousel"
      >
        <div
          data-klyd-marquee-track
          className="flex w-max gap-4 animate-[klyd-testimonials-marquee_32s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        >
        {loopedTestimonials.map((testimonial, index) => {
          const theme = cardThemes[index % cardThemes.length];
          const isClone = index >= testimonials.length;
          return (
            <article
              key={`${testimonial.author}-${testimonial.company}-${index}`}
              aria-hidden={isClone}
              className={`min-h-[340px] w-[88vw] min-w-[88vw] sm:w-[520px] sm:min-w-[520px] rounded-[28px] p-7 shadow-[0_24px_45px_-28px_rgba(17,24,39,0.45)] ${theme.bg} ${theme.text}`}
            >
              <p className="mb-8 text-3xl font-bold tracking-tight">{testimonial.company}</p>
              <p className={`mb-10 text-[30px] leading-none font-display ${theme.text}`}>“</p>
              <p className={`min-h-[112px] text-lg leading-relaxed ${theme.muted}`}>
                {testimonial.quote}
              </p>

              <div className={`mt-8 border-t pt-5 ${theme.divider}`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${theme.avatar}`}
                  >
                    {initials(testimonial.author)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{testimonial.author}</p>
                    <p className="text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </Section>
  );
}
