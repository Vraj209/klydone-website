import React from 'react';
import { Globe } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents global/web concept
export default function GlobeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Globe size={props.size || 24} />
    </BaseIcon>
  );
}