import React from 'react';
import { IconProps } from './types';

// Base icon wrapper following Single Responsibility Principle
// Handles common icon behavior and styling
interface BaseIconProps extends IconProps {
  children: React.ReactNode;
}

export default function BaseIcon({ 
  children, 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}: BaseIconProps) {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size, 
        color 
      }}
    >
      {children}
    </div>
  );
}