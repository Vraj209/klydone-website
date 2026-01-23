'use client';

import { ReactNode } from 'react';
import ClientOnly from '../wrappers/ClientOnly';

interface StoreProviderProps {
  children: ReactNode;
}

// SSR-safe store provider following Dependency Inversion Principle
// Ensures store-dependent components only render on client-side
export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <ClientOnly fallback={<div className="min-h-screen bg-black" />}>
      {children}
    </ClientOnly>
  );
}