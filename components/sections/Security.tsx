import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Security() {
  const securityFeatures = [
    'Secure coding standards & peer reviews',
    'Role-based access control, encryption at rest & in-transit',
    'Regular vulnerability scanning, pentesting and audits',
    'Cloud-based disaster recovery & high-availability architecture',
    'Compliance readiness (e.g., GDPR, SOC2, ISO 27001)'
  ];
  
  return (
    <Section id="security" background="dark">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader 
            title="Security You Can Trust"
            subtitle="Security, privacy and reliability are foundational. We follow industry best practices."
            centered={false}
          />
          
          <ul className="space-y-4 mb-8">
            {securityFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-violet-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button href="#contact" variant="primary">
            Request our security & compliance checklist
          </Button>
        </div>
        
        <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-4xl mb-2">🔒</div>
              <h4 className="font-bold text-white mb-1">GDPR</h4>
              <p className="text-sm text-gray-400">Compliant</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-4xl mb-2">✅</div>
              <h4 className="font-bold text-white mb-1">SOC 2</h4>
              <p className="text-sm text-gray-400">Ready</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-4xl mb-2">🛡️</div>
              <h4 className="font-bold text-white mb-1">ISO 27001</h4>
              <p className="text-sm text-gray-400">Certified</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-4xl mb-2">🔐</div>
              <h4 className="font-bold text-white mb-1">Encryption</h4>
              <p className="text-sm text-gray-400">End-to-End</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

