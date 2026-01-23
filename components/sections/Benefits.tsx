import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { Icon } from '../icons';
import { DataService } from '../../data';

export default function Benefits() {
  const benefits = DataService.getBenefits();
  
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
            <div className="mb-4">
              <Icon name={benefit.icon} size={40} className="text-violet-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
            <p className="text-white leading-relaxed">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

