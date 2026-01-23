import React from 'react';
import { Shield } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents shield/protection concept
export default function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Shield size={props.size || 24} />
    </BaseIcon>
  );
}