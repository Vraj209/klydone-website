import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function Comparison() {
  const comparisons = [
    {
      alone: 'Hiring & managing multiple contractors',
      withUs: 'One experienced full-stack team'
    },
    {
      alone: 'Multiple fire-fights, unclear ownership',
      withUs: 'Clear roles, smooth hand-off'
    },
    {
      alone: 'Extended timelines, cost over-runs',
      withUs: 'Predictable delivery, budget transparency'
    },
    {
      alone: 'Unintegrated stack & siloed teams',
      withUs: 'Unified architecture and codebase'
    },
    {
      alone: 'Maintenance chaos after launch',
      withUs: 'Ongoing support, optimization built in'
    }
  ];
  
  return (
    <Section id="comparison" background="gray">
      <SectionHeader 
        title="Compare: Doing It Alone vs. Partnering With Us"
        subtitle="See the difference a professional partner makes"
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-x divide-gray-200">
            <div className="bg-red-50 p-6">
              <h3 className="text-2xl font-bold text-center mb-4 text-red-900">Doing It Alone</h3>
            </div>
            <div className="bg-green-50 p-6">
              <h3 className="text-2xl font-bold text-center mb-4 text-green-900">Partnering With Klydone</h3>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid md:grid-cols-2 divide-x divide-gray-200">
                <div className="p-6 flex items-center gap-3 bg-red-50/50">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{comparison.alone}</p>
                </div>
                <div className="p-6 flex items-center gap-3 bg-green-50/50">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{comparison.withUs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

