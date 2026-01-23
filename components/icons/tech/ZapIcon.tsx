import React from 'react';
import { Zap } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents speed/performance concept
export default function ZapIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Zap size={props.size || 24} />
    </BaseIcon>
  );
}