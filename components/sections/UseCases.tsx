import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { Icon } from '../icons';
import { DataService } from '../../data';

export default function UseCases() {
  const useCases = DataService.getUseCases();
  
  return (
    <Section id="use-cases" background="dark">
      <SectionHeader 
        title="Use Cases We Excel At"
        subtitle="Industry-specific solutions powered by cutting-edge technology"
        badge="What we give value to "
      />
      
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <Card key={index}>
            <div className="mb-4">
              <Icon name={useCase.icon} size={48} className="text-violet-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
            <p className="text-white leading-relaxed">{useCase.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

