import Link from 'next/link';

interface ButtonProps {
  href?:      string;
  variant?:   'primary' | 'secondary' | 'outline' | 'ghost';
  size?:      'sm' | 'md' | 'lg';
  children:   React.ReactNode;
  onClick?:   () => void;
  className?: string;
  fullWidth?: boolean;
  type?:      'button' | 'submit' | 'reset';
  disabled?:  boolean;
}

export default function Button({
  href,
  variant  = 'primary',
  size     = 'md',
  children,
  onClick,
  className = '',
  fullWidth = false,
  type      = 'button',
  disabled  = false,
}: ButtonProps) {
  const base =
    'micro-button inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-black text-white shadow-md shadow-violet-200 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-300 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-gray-900 text-white shadow-md hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'text-violet-600 bg-violet-50 hover:bg-violet-100 hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm gap-1.5',
    md: 'px-7 py-2.5 text-base gap-2',
    lg: 'px-9 py-3.5 text-base gap-2',
  };

  const widthClass    = fullWidth ? 'w-full' : '';
  const disabledClass = disabled  ? 'opacity-50 cursor-not-allowed !translate-y-0 !shadow-none' : '';
  const combined      = `${base} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`;

  if (href) {
    return <Link href={href} className={combined}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={combined} disabled={disabled}>
      {children}
    </button>
  );
}
