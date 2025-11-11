import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Integration() {
  const integrations = [
    { name: 'Stripe', icon: '💳', category: 'Payments' },
    { name: 'Plaid', icon: '🏦', category: 'Banking' },
    { name: 'OAuth', icon: '🔑', category: 'Auth' },
    { name: 'SAML', icon: '🎫', category: 'SSO' },
    { name: 'Azure', icon: '☁️', category: 'Cloud' },
    { name: 'AWS', icon: '🌩️', category: 'Cloud' },
    { name: 'Salesforce', icon: '⚡', category: 'CRM' },
    { name: 'Analytics', icon: '📊', category: 'Data' }
  ];
  
  return (
    <Section id="integration" background="dark">
      <SectionHeader 
        title="Seamless Integrations"
        subtitle="Our solutions easily integrate with your existing systems, third-party APIs and data sources."
        badge="Anything you can imagine, we can integrate"
      />
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-white text-center leading-relaxed mb-8">
          Whether you&apos;re building a new product or adding features to an existing platform, we make it work.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border border-gray-700"
            >
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h4 className="font-bold text-white mb-1">{integration.name}</h4>
              <p className="text-sm text-white">{integration.category}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center bg-violet-600 rounded-3xl p-12">
        <h3 className="text-2xl font-bold mb-4 text-white">Need a Custom Integration?</h3>
        <p className="text-white mb-6 max-w-2xl mx-auto">
          We specialize in building custom integrations to connect your existing systems and create seamless data flows across your entire technology stack.
        </p>
        <Button href="#contact" variant="secondary" size="lg">
          Let&apos;s talk about your project
        </Button>
      </div>
    </Section>
  );
}

