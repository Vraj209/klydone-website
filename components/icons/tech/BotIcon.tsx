import React from 'react';
import { Bot } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents AI/automation concept
export default function BotIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Bot size={props.size || 24} />
    </BaseIcon>
  );
}