import React from 'react';
import { Server } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents server/backend concept
export default function ServerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Server size={props.size || 24} />
    </BaseIcon>
  );
}