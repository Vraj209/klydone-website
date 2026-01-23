import React from 'react';
import { Handshake } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents partnership concept
export default function HandshakeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Handshake size={props.size || 24} />
    </BaseIcon>
  );
}