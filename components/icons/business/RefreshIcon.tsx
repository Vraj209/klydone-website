import React from 'react';
import { RefreshCw } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents refresh/cycle/SaaS concept
export default function RefreshIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <RefreshCw size={props.size || 24} />
    </BaseIcon>
  );
}