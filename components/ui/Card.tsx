interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md'
}: CardProps) {
  const hoverClass = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div className={`bg-gray-800 rounded-2xl shadow-lg ${paddings[padding]} transition-all duration-300 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

