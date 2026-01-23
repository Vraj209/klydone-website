import React from 'react';
import { Rocket } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents launch/speed/growth concept
export default function RocketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Rocket size={props.size || 24} />
    </BaseIcon>
  );
}