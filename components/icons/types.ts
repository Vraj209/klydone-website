// Icon component interface following Interface Segregation Principle
export interface IconProps {
  size?: number | string;
  className?: string;
  color?: string;
}

// Icon component type for consistency
export type IconComponent = React.ComponentType<IconProps>;