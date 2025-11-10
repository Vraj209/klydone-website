import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Custom Backend Development',
      description: 'Go / Node.js services built for performance, reliability and scale.'
    },
    {
      icon: '🎨',
      title: 'Modern Frontend Experiences',
      description: 'React / Next.js applications with TypeScript, responsive design and seamless UX.'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture & DevOps',
      description: 'Azure (and multi-cloud) architecture, CI/CD, automation to accelerate releases.'
    },
    {
      icon: '📊',
      title: 'Data & Analytics Engineering',
      description: 'Data pipelines, BI dashboards and real-time analytics to power growth.'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning Integration',
      description: 'From proof-of-concepts to production-ready AI systems.'
    },
    {
      icon: '🚀',
      title: 'SaaS Product Engineering',
      description: 'End-to-end SaaS development: design, build, launch and maintain.'
    }
  ];
  
  return (
    <Section id="features" background="gray">
      <SectionHeader 
        title="What We Offer"
        subtitle="Comprehensive solutions for modern software development"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

