import React from 'react';
import { Mail } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents mail/email concept
export default function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Mail size={props.size || 24} />
    </BaseIcon>
  );
}