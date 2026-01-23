'use client';

import React from 'react';
import { Icon } from '../icons';
import Button from './Button';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const Fallback = this.props.fallback;
        return <Fallback error={this.state.error} retry={this.retry} />;
      }

      return <DefaultErrorFallback error={this.state.error} retry={this.retry} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, retry }: { error?: Error; retry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="mb-4">
        <Icon name="alert-circle" size={48} className="text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        {error?.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="flex gap-4">
        <Button onClick={retry} variant="primary">
          Try Again
        </Button>
        <Button 
          onClick={() => window.location.reload()} 
          variant="secondary"
        >
          Reload Page
        </Button>
      </div>
      {process.env.NODE_ENV === 'development' && error?.stack && (
        <details className="mt-6 text-left">
          <summary className="cursor-pointer text-gray-400 hover:text-white">
            Error Details (Development)
          </summary>
          <pre className="mt-2 text-xs text-gray-500 bg-gray-800 p-4 rounded overflow-auto max-w-2xl">
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}

export default ErrorBoundary;