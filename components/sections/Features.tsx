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
    <Section id="features" background="dark">
      <SectionHeader 
        title="What we provide"
        subtitle="We offer a wide range of services to help you build your next-gen application"
        badge="Features we offer"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-white leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

