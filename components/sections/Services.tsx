import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { Icon } from '../icons';
import { DataService } from '../../data';

export default function Services() {
  const services = DataService.getServices();
  
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
            <div className="mb-4">
              <Icon name={service.icon} size={40} className="text-violet-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-white mb-6 leading-relaxed">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, featureIndex) => (
                <span 
                  key={featureIndex} 
                  className="px-3 py-1 bg-violet-600/30 text-white rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

