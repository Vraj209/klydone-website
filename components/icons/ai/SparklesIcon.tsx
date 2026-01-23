import React from 'react';
import { Sparkles } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents generative AI/creativity concept
export default function SparklesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Sparkles size={props.size || 24} />
    </BaseIcon>
  );
}