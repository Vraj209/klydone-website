import React from 'react';
import { AlertCircle } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents alert/warning concept
export default function AlertCircleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <AlertCircle size={props.size || 24} />
    </BaseIcon>
  );
}