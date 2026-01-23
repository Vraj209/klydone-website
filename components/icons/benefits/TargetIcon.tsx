import React from 'react';
import { Target } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents results/goals concept
export default function TargetIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Target size={props.size || 24} />
    </BaseIcon>
  );
}