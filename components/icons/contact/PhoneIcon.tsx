import React from 'react';
import { Phone } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents phone/call concept
export default function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Phone size={props.size || 24} />
    </BaseIcon>
  );
}