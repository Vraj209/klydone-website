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
    <Section id="integration" background="white">
      <SectionHeader 
        title="Seamless Integrations"
        subtitle="Our solutions easily integrate with your existing systems, third-party APIs and data sources."
      />
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
          Whether you're connecting payment gateways, identity providers, CRMs, analytics tools or cloud services, we make it work.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100"
            >
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h4 className="font-bold text-gray-900 mb-1">{integration.name}</h4>
              <p className="text-sm text-gray-500">{integration.category}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Need a Custom Integration?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We specialize in connecting disparate systems and creating seamless data flows across your entire technology stack.
        </p>
        <Button href="#contact" variant="primary" size="lg">
          Ask about a custom integration
        </Button>
      </div>
    </Section>
  );
}

