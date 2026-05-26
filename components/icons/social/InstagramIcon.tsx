import React from 'react';
import { Instagram } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents Instagram social platform
export default function InstagramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Instagram size={props.size || 24} />
    </BaseIcon>
  );
}
