import React from 'react';
import { Activity } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents activity/monitoring concept
export default function ActivityIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Activity size={props.size || 24} />
    </BaseIcon>
  );
}