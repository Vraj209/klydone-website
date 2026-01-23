import React from 'react';
import { BarChart3 } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents analytics/data concept
export default function AnalyticsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <BarChart3 size={props.size || 24} />
    </BaseIcon>
  );
}