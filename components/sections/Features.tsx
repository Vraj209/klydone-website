import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { Icon } from '../icons';
import { DataService } from '../../data';

export default function Features() {
  const features = DataService.getFeatures();
  
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
            <div className="mb-4">
              <Icon name={feature.icon} size={48} className="text-violet-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-white leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

