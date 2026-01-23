'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { DataService } from '../../data';

export default function FAQ() {
  // Initialize with null to match server-side rendering
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = DataService.getFAQs();
  
  return (
    <Section id="faq" background="dark">
      <SectionHeader 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with us"
        badge="Best answers to your questions"
      />
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 transition-colors"
            >
              <span className="text-lg text-white font-bold">{faq.question}</span>
              <svg 
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-8 pb-6">
                <p className="text-white leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

