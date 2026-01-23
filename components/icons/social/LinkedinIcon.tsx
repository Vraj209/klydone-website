import React from 'react';
import { Linkedin } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents LinkedIn social platform
export default function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Linkedin size={props.size || 24} />
    </BaseIcon>
  );
}