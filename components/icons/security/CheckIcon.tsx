import React from 'react';
import { Check } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents check/verified concept
export default function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Check size={props.size || 24} />
    </BaseIcon>
  );
}