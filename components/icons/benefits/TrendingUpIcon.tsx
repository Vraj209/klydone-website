import React from 'react';
import { TrendingUp } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents growth/scaling concept
export default function TrendingUpIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <TrendingUp size={props.size || 24} />
    </BaseIcon>
  );
}