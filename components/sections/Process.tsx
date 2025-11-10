import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals and technology needs. We map out scope, timeline and budget.',
      highlight: 'Smart Analyzing'
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'We craft UX wireframes, UI mockups and system architecture diagrams to align on structure and flow.',
      highlight: 'Strategic Planning'
    },
    {
      number: '03',
      title: 'Build & Launch',
      description: 'Agile sprints, frequent demos and continuous integration ensure steady progress and high quality.',
      highlight: 'AI Development'
    },
    {
      number: '04',
      title: 'Operate & Optimize',
      description: 'Post-launch support, performance tuning, monitoring and future roadmap planning to keep your product evolving.',
      highlight: 'Continuous Growth'
    }
  ];
  
  return (
    <Section id="process" background="gray">
      <SectionHeader 
        title="Our Process in 4 Steps"
        subtitle="A proven methodology that delivers results"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                  {step.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 z-0"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6">Ready to get started? Let's map out your project together.</p>
        <Button href="#contact" variant="primary" size="lg">
          Start Your Project
        </Button>
      </div>
    </Section>
  );
}

