import React from 'react';
import { Key } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents authentication/security concept
export default function KeyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Key size={props.size || 24} />
    </BaseIcon>
  );
}