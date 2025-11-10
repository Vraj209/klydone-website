import Button from './Button';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  background?: 'gradient' | 'dark' | 'light';
}

export default function CTABanner({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA,
  background = 'gradient'
}: CTABannerProps) {
  const backgrounds = {
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600 text-white',
    dark: 'bg-gray-900 text-white',
    light: 'bg-blue-50 text-gray-900'
  };
  
  return (
    <div className={`rounded-3xl p-12 text-center ${backgrounds[background]}`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-xl mb-8 max-w-2xl mx-auto ${
          background === 'light' ? 'text-gray-600' : 'text-blue-100'
        }`}>
          {subtitle}
        </p>
      )}
      {(primaryCTA || secondaryCTA) && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCTA && (
            <Button 
              href={primaryCTA.href} 
              variant={background === 'light' ? 'primary' : 'secondary'} 
              size="lg"
            >
              {primaryCTA.text}
            </Button>
          )}
          {secondaryCTA && (
            <Button 
              href={secondaryCTA.href} 
              variant="outline" 
              size="lg"
            >
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

