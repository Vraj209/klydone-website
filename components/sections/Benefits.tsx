import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function Benefits() {
  const benefits = [
    {
      title: 'Speed to Market',
      description: 'We combine lean processes and modern tech stacks so you can launch faster.',
      icon: '🚀'
    },
    {
      title: 'Built for Scale',
      description: 'Architectures designed to handle high traffic, large data volumes and future growth.',
      icon: '📈'
    },
    {
      title: 'Lower Maintenance Cost',
      description: 'Clean codebases, automated workflows and well-documented systems reduce long-term overhead.',
      icon: '💰'
    },
    {
      title: 'Technology Partnership',
      description: "You're not just hiring a vendor — we become your extension, advising on architecture, best practices and growth.",
      icon: '🤝'
    },
    {
      title: 'Transparent Process',
      description: 'Weekly updates, clear milestones and open communication mean you always know where things stand.',
      icon: '👁️'
    },
    {
      title: 'Results-Driven',
      description: 'We care about outcomes — faster delivery, improved performance, reduced downtime, higher ROI.',
      icon: '🎯'
    }
  ];
  
  return (
    <Section id="benefits" background="dark">
      <SectionHeader 
        title="Why work with us?"
        subtitle="The competitive advantages that set us apart"
        badge="Benefits of working with us"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} padding="lg">
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
            <p className="text-white leading-relaxed">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

