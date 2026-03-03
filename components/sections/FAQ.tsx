'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { DataService } from '../../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = DataService.getFAQs();

  return (
    <Section id="faq" background="light" className="faq-envelope-section">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="The clarity you are looking for"
        badge="FAQ"
      />

      {/* Desktop / Tablet: marquee envelope rail */}
      <div className="hidden md:block">
        <div className="faq-envelope-marquee mx-auto max-w-7xl">
          <div className="faq-envelope-track">
            {[...faqs, ...faqs].map((faq, renderIndex) => {
              const sourceIndex = renderIndex % faqs.length;
              const isOpen = openIndex === sourceIndex;
              return (
                <article
                  key={renderIndex}
                  className={`faq-envelope-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : sourceIndex)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-envelope-answer-${renderIndex}`}
                    className="faq-envelope-button"
                  >
                    <div className="faq-envelope-shell">
                      <div className={`faq-envelope-flap ${isOpen ? 'is-open' : ''}`} />
                      <div className="faq-envelope-body">
                        <p className="faq-envelope-kicker">Question</p>
                        <h3 className="faq-envelope-title">{faq.question}</h3>
                      </div>
                    </div>

                    <div
                      id={`faq-envelope-answer-${renderIndex}`}
                      className={`faq-envelope-answer ${isOpen ? 'is-open' : ''}`}
                    >
                      <p className="faq-envelope-kicker">Answer</p>
                      <p>{faq.answer}</p>
                    </div>

                    {/* <ChevronDown
                      size={18}
                      className={`faq-envelope-chevron ${isOpen ? 'is-open' : ''}`}
                      aria-hidden="true"
                    /> */}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: stacked accordion for performance */}
      <div className="mx-auto max-w-xl space-y-3 md:hidden">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={index}
              className={`faq-mobile-envelope overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'border-violet-200 bg-white shadow-md shadow-violet-100/70'
                  : 'border-gray-200/90 bg-white shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-mobile-answer-${index}`}
              >
                <span className={`text-base font-semibold tracking-tight ${isOpen ? 'text-violet-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {/* <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet-600' : 'text-gray-400'}`}
                  aria-hidden="true"
                /> */}
              </button>

              <div
                id={`faq-mobile-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
