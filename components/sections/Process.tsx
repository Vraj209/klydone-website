import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { DataService } from '../../data';

export default function Process() {
  const steps = DataService.getProcessSteps();
  
  return (
    <Section id="process" background="dark">
      <SectionHeader 
        title="How we work"
        subtitle="We follow a proven methodology that delivers results"
        badge="Smooth and efficient process"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="text-6xl font-bold text-white mb-4">{step.number}</div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-violet-600 text-white rounded-full text-xs font-semibold">
                  {step.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-white leading-relaxed">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-violet-600 z-0"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-lg text-white mb-6">Ready to get started? Let&apos;s map out your project together.</p>
        <Button href="#contact" variant="primary" size="lg">
          Start Your Project
        </Button>
      </div>
    </Section>
  );
}

