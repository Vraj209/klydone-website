import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function Services() {
  const services = [
    {
      title: 'Backend Engineering (Go / Node.js)',
      description: 'Building microservices, APIs, event-driven systems and high-throughput backends.',
      tags: ['Go', 'Node.js', 'Microservices', 'APIs']
    },
    {
      title: 'Frontend & Web App Development',
      description: 'Highly interactive web applications using Next.js, TypeScript, Tailwind CSS, state management with Zustand/Jotai.',
      tags: ['Next.js', 'TypeScript', 'React', 'Tailwind']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Azure (Canada Central), AWS, containers, Kubernetes, serverless and full DevOps pipelines (CI/CD, monitoring, logging).',
      tags: ['Azure', 'AWS', 'Kubernetes', 'DevOps']
    },
    {
      title: 'SaaS Platform Development',
      description: 'From MVP to full subscription-based SaaS product: user-auth, billing, multi-tenant systems, analytics.',
      tags: ['SaaS', 'Multi-tenant', 'Subscriptions']
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Designing data lakes, ETL pipelines, dashboards and data-driven decision frameworks.',
      tags: ['Data Pipelines', 'ETL', 'Analytics']
    },
    {
      title: 'AI / ML Solutions',
      description: 'Integrating generative AI, agentic AI workflows and smart automation into your applications.',
      tags: ['AI', 'Machine Learning', 'Automation']
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing services: monitoring, performance optimization, feature enhancements, security audits.',
      tags: ['Support', 'Monitoring', 'Security']
    }
  ];
  
  return (
    <Section id="services" background="dark">
      <SectionHeader 
        title="What we offer"
        subtitle="Comprehensive technology solutions for your business"
        badge="Core services we offer"
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-violet-600"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-white mb-6 leading-relaxed">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-3 py-1 bg-violet-600/30 text-white rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

