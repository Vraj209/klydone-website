import React from 'react';
import { Landmark } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents banking/financial institution concept
export default function BankIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Landmark size={props.size || 24} />
    </BaseIcon>
  );
}