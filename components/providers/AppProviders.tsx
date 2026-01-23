'use client';

import { ReactNode } from 'react';
import ErrorBoundary from '../ui/ErrorBoundary';
import StoreProvider from './StoreProvider';

interface AppProvidersProps {
  children: ReactNode;
}

// Client-side providers wrapper following Clean Architecture
export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ErrorBoundary>
      <StoreProvider>
        {children}
      </StoreProvider>
    </ErrorBoundary>
  );
}