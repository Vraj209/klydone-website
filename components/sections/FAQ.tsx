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
    <Section id="faq" background="light">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Straight answers to the questions we hear most before teams decide to work with us."
        badge="FAQ"
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? 'border-violet-200 bg-white shadow-md shadow-violet-100/50'
                  : 'border-gray-100 bg-white shadow-sm hover:border-violet-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className={`text-base font-semibold ${isOpen ? 'text-violet-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-violet-600' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-7 pb-6 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
