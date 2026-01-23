import React from 'react';
import { getIcon } from './IconRegistry';
import { IconProps } from './types';

// Main Icon component following Open/Closed and Dependency Inversion Principles
// Open for extension (new icons), closed for modification
// Depends on IconRegistry abstraction, not concrete implementations
interface MainIconProps extends IconProps {
  name: string;
}

export default function Icon({ name, ...props }: MainIconProps) {
  const IconComponent = getIcon(name);
  return <IconComponent {...props} />;
}