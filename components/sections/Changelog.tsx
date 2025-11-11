import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Changelog() {
  const updates = [
    {
      date: 'November 2025',
      title: 'Enhanced AI Integration Services',
      description: 'Launched comprehensive AI integration services including agentic AI workflows and smart automation solutions.',
      type: 'New Feature'
    },
    {
      date: 'October 2025',
      title: 'Azure Canada Central Migration',
      description: 'Migrated our standard infrastructure baseline to Azure Canada Central for lower latency and data-sovereignty compliance.',
      type: 'Infrastructure'
    },
    {
      date: 'September 2025',
      title: 'Multi-Tenant SaaS Framework',
      description: 'Rolled out multi-tenant support framework for our SaaS clients, enabling faster deployment and better scalability.',
      type: 'Platform'
    },
    {
      date: 'August 2025',
      title: 'AI-Assisted Code Review',
      description: 'Introduced internal AI-assisted code review system to further improve delivery speed and quality standards.',
      type: 'Process'
    }
  ];
  
  const typeColors = {
    'New Feature': 'bg-violet-600 text-white',
    'Infrastructure': 'bg-violet-600 text-white',
    'Platform': 'bg-violet-600 text-white',
    'Process': 'bg-violet-600 text-white'
  };
  
  return (
    <Section id="changelog" background="dark">
      <SectionHeader 
        title="Product Updates & Improvements"
        subtitle="We continuously improve our offerings, deliver new features, optimise performance and strengthen security."
        badge="We are always improving our services"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-violet-200 pl-8 space-y-8">
          {updates.map((update, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-violet-600 border-4 border-white"></div>
              
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-white">{update.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[update.type as keyof typeof typeColors]}`}>
                    {update.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{update.title}</h3>
                <p className="text-white leading-relaxed">{update.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button href="#contact" variant="outline" size="lg">
            Learn more about our service evolution
          </Button>
        </div>
      </div>
    </Section>
  );
}

