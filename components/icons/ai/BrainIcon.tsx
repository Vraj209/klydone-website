import React from 'react';
import { Brain } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents AI/intelligence concept
export default function BrainIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Brain size={props.size || 24} />
    </BaseIcon>
  );
}