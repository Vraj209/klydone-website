import React from 'react';
import { MapPin } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents location/address concept
export default function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <MapPin size={props.size || 24} />
    </BaseIcon>
  );
}