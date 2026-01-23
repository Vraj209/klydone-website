import React from 'react';
import { Headphones } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents support/help concept
export default function SupportIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Headphones size={props.size || 24} />
    </BaseIcon>
  );
}