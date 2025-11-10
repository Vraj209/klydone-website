import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function CaseStudies() {
  const caseStudies = [
    {
      client: 'Fintech Startup',
      challenge: 'Legacy payment system, slow releases, high downtime',
      solution: 'New Go-microservices backend + Next.js frontend + Azure deployment',
      results: [
        '50% faster time-to-market',
        '99.9% uptime',
        '30% reduction in maintenance cost'
      ]
    },
    {
      client: 'SaaS Company',
      challenge: 'Multi-tenant architecture poor performance',
      solution: 'Re-architected for scale, introduced CI/CD, improved UX',
      results: [
        '3× traffic handling capacity',
        'Reduced customer churn by 15%',
        'Improved load times by 60%'
      ]
    }
  ];
  
  return (
    <Section id="case-studies" background="white">
      <SectionHeader 
        title="Featured Case Studies"
        subtitle="Real-world success stories from our clients"
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                {study.client}
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h4>
                <p className="text-gray-700">{study.challenge}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h4>
                <p className="text-gray-700">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <Button href="#contact" variant="outline" size="sm">
                Read Full Case Study
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

