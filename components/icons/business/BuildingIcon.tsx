import React from 'react';
import { Building2 } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents enterprise/building concept
export default function BuildingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Building2 size={props.size || 24} />
    </BaseIcon>
  );
}