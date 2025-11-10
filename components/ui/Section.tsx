interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'dark',
  padding = 'lg'
}: SectionProps) {
  const backgrounds = {
    dark: 'bg-black text-white',
    gray: 'bg-gray-50 text-black',
    white: 'bg-white text-black'
  };
  
  const paddings = {
    sm: 'py-10',
    md: 'py-16',
    lg: 'py-20 lg:py-24'
  };
  
  return (
    <section 
      id={id} 
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

