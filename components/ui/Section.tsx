interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'tinted' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Section({
  id,
  children,
  className = '',
  background = 'white',
  padding = 'lg',
}: SectionProps) {
  const backgrounds: Record<NonNullable<SectionProps['background']>, string> = {
    white:    'bg-white          text-gray-900',
    light:    'bg-gray-50        text-gray-900',
    tinted:   'bg-violet-50/60   text-gray-900',
    dark:     'bg-gray-950       text-white',
    gradient: 'bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 text-white',
  };

  const paddings = {
    sm: 'py-10',
    md: 'py-16',
    lg: 'py-20 lg:py-24',
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
