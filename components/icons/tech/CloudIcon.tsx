import React from 'react';
import { Cloud } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents cloud/infrastructure concept
export default function CloudIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Cloud size={props.size || 24} />
    </BaseIcon>
  );
}