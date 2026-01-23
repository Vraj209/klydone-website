import React from 'react';
import { Ticket } from 'lucide-react';
import BaseIcon from '../BaseIcon';
import { IconProps } from '../types';

// Single Responsibility: Represents SSO/ticket-based auth concept
export default function TicketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <Ticket size={props.size || 24} />
    </BaseIcon>
  );
}