import React from 'react';
import { Settings } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents settings/configuration concept
export default function SettingsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Settings size={props.size || 24} />
    </BaseIcon>
  );
}