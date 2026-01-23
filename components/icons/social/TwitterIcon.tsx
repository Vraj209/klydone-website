import React from 'react';
import { Twitter } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents Twitter social platform
export default function TwitterIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Twitter size={props.size || 24} />
    </BaseIcon>
  );
}