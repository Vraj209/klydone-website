import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  className = '',
  fullWidth = false,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-500/30',
    secondary: 'bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/30 border border-gray-700',
    outline: 'border-2 border-gray-900 text-white hover:border-violet-900 hover:text-violet-500'
  };
  
  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

