'use client';

import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Newsletter() {
  return (
    <Section background="light" padding="md">
      <div className="relative overflow-hidden rounded-[36px] border border-gray-100 bg-white px-6 py-16 text-center shadow-sm sm:px-12">
        {/* Decorative soft hills */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-8 h-40 w-80 rounded-[999px] bg-pink-200/60 blur-xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 left-1/4 h-32 w-60 rounded-[999px] bg-lime-200/60 blur-lg"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-0 h-40 w-72 rounded-[999px] bg-pink-200/60 blur-xl"
        />

        <h2 className="relative z-10 mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Turn your growth ideas into reality today
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-sm text-gray-500 sm:text-base">
          Start your 14-day trial today. No credit card required.
        </p>

        <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#contact" variant="secondary" size="md">
            Start building for free
          </Button>
          <Button href="#contact" variant="outline" size="md">
            Get a demo
          </Button>
        </div>
      </div>
    </Section>
  );
}

