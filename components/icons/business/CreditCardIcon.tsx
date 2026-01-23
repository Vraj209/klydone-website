import React from 'react';
import { CreditCard } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents credit card/fintech concept
export default function CreditCardIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <CreditCard size={props.size || 24} />
    </BaseIcon>
  );
}