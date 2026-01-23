import React from 'react';
import { Scan } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents computer vision/scanning concept
export default function ScanIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Scan size={props.size || 24} />
    </BaseIcon>
  );
}