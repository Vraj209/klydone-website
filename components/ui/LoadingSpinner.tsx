'use client';

import { cn } from '@/lib/utils';
import { Icon } from '../icons';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

export default function LoadingSpinner({ 
  size = 'md', 
  className,
  text 
}: LoadingSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <div className={cn(
        'animate-spin text-violet-500',
        sizeClasses[size]
      )}>
        <Icon name="refresh" size={size === 'sm' ? 16 : size === 'md' ? 24 : size === 'lg' ? 32 : 48} />
      </div>
      {text && (
        <p className="text-sm text-gray-400 animate-pulse">{text}</p>
      )}
    </div>
  );
}