import React from 'react';
import { Code } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents code/development concept
export default function CodeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Code size={props.size || 24} />
    </BaseIcon>
  );
}