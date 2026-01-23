import { AppError } from './AppError';
import { ZodError } from 'zod';

// Error handler utility following enterprise patterns
export class ErrorHandler {
  static handleError(error: unknown): {
    message: string;
    statusCode: number;
    code?: string;
    errors?: string[];
  } {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return {
        message: 'Validation failed',
        statusCode: 400,
        code: 'VALIDATION_ERROR',
        errors: error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      };
    }

    // Handle custom app errors
    if (error instanceof AppError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
        code: error.code,
      };
    }

    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        message: 'Network error occurred',
        statusCode: 503,
        code: 'NETWORK_ERROR',
      };
    }

    // Handle unknown errors
    console.error('Unhandled error:', error);
    return {
      message: 'An unexpected error occurred',
      statusCode: 500,
      code: 'UNKNOWN_ERROR',
    };
  }

  static logError(error: unknown, context?: string): void {
    const timestamp = new Date().toISOString();
    const errorInfo = this.handleError(error);
    
    console.error(`[${timestamp}] ${context || 'Error'}:`, {
      message: errorInfo.message,
      code: errorInfo.code,
      statusCode: errorInfo.statusCode,
      stack: error instanceof Error ? error.stack : 'No stack trace',
    });
  }

  static createErrorResponse(error: unknown) {
    const errorInfo = this.handleError(error);
    
    return {
      success: false,
      message: errorInfo.message,
      code: errorInfo.code,
      errors: errorInfo.errors || [],
    };
  }
}