import React from 'react';
import { CloudLightning } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents AWS/cloud services concept
export default function CloudLightningIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <CloudLightning size={props.size || 24} />
    </BaseIcon>
  );
}