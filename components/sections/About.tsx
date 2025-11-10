import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  const values = [
    {
      title: 'Clean Code',
      description: 'Clean, maintainable code is the foundation of scalability.'
    },
    {
      title: 'Right Architecture',
      description: 'The right architecture accelerates time to market.'
    },
    {
      title: 'Close Partnership',
      description: 'A close partnership with you ensures we deliver what you truly need.'
    }
  ];
  
  return (
    <Section id="about" background="white">
      <SectionHeader 
        title="Who We Are"
        subtitle="Founded by seasoned software engineers and entrepreneurs"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a full-service digital agency specialising in high-performance backend systems, 
            modern frontend experiences and robust cloud infrastructure. Whether you're creating a 
            fintech platform, building a SaaS product, or scaling a mission-critical system, we've done it.
          </p>
          
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-blue-100">
                To help companies accelerate growth by turning technology into a strategic advantage.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-blue-100">
                To be a trusted technology partner for businesses building the next wave of digital innovation.
              </p>
            </div>
            
            <div className="pt-4 border-t border-blue-400">
              <p className="text-sm text-blue-100">
                Located in Kitchener-Waterloo, Canada and fully remote-capable, serving clients across North America and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

