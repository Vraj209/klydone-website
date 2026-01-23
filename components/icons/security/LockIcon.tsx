import React from 'react';
import { Lock } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents security/lock concept
export default function LockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Lock size={props.size || 24} />
    </BaseIcon>
  );
}