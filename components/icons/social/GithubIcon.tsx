import React from 'react';
import { Github } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents GitHub platform
export default function GithubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Github size={props.size || 24} />
    </BaseIcon>
  );
}