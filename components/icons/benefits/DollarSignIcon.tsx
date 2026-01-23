import React from 'react';
import { DollarSign } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents cost/financial benefit concept
export default function DollarSignIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <DollarSign size={props.size || 24} />
    </BaseIcon>
  );
}