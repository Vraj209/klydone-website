import React from 'react';
import { Palette } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents design/frontend concept
export default function PaletteIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Palette size={props.size || 24} />
    </BaseIcon>
  );
}