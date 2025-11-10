'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: 'How do you ensure project stays on schedule?',
      answer: 'We use agile sprints, transparent dashboards and weekly check-ins so you always know status. Our project management approach includes clear milestones, regular demos, and proactive communication to prevent delays.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We favour Go for backend, Node.js / TypeScript for services; React/Next.js for frontend; Azure/AWS for cloud; DevOps best practices. We choose the right tools based on your specific requirements and scale needs.'
    },
    {
      question: 'Do you work with startups as well as enterprises?',
      answer: 'Yes — we partner with early-stage companies for MVPs and with large organisations for platform engineering and modernisation. Our flexible engagement models accommodate businesses of all sizes.'
    },
    {
      question: 'How do you handle support post-launch?',
      answer: 'We offer ongoing maintenance retainers, monitoring and optimisation packages tailored to your business. This includes 24/7 monitoring, performance tuning, feature enhancements, and security updates.'
    },
    {
      question: 'What about security & compliance?',
      answer: 'Security is built in from day one: secure coding, audits, monitoring, and compliance with relevant standards. We follow industry best practices including GDPR, SOC2, and ISO 27001 requirements as needed.'
    }
  ];
  
  return (
    <Section id="faq" background="gray">
      <SectionHeader 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with us"
      />
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
              <svg 
                className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
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
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

