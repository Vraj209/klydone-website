import React from 'react';
import { Eye } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents transparency/visibility concept
export default function EyeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Eye size={props.size || 24} />
    </BaseIcon>
  );
}