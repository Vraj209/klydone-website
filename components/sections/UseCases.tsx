import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function UseCases() {
  const useCases = [
    {
      icon: '💳',
      title: 'Fintech Platforms',
      description: 'P2P payments, open banking APIs, crypto dashboards — built with security, compliance and scale in mind.'
    },
    {
      icon: '🔄',
      title: 'SaaS Applications',
      description: 'Subscription-based products for B2B and B2C markets with multi-tenant architecture and global rollout.'
    },
    {
      icon: '🏢',
      title: 'Enterprise Modernisation',
      description: 'Legacy system upgrades, cloud migrations and platform revitalisations.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Products',
      description: 'Real-time analytics, dashboards, ML-powered insights for decision makers.'
    },
    {
      icon: '🌐',
      title: 'High-Traffic Web Apps',
      description: 'Scalable front-ends & back-ends to serve tens & hundreds of thousands of users.'
    }
  ];
  
  return (
    <Section id="use-cases" background="dark">
      <SectionHeader 
        title="Use Cases We Excel At"
        subtitle="Industry-specific solutions powered by cutting-edge technology"
        badge="What we give value to "
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <Card key={index}>
            <div className="text-5xl mb-4">{useCase.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
            <p className="text-white leading-relaxed">{useCase.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

