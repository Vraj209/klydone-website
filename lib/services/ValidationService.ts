import { ZodSchema, ZodError } from 'zod';
import { ValidationError } from '../errors/AppError';

// Interface Segregation Principle - focused validation interface
interface IValidationService {
  validate<T>(schema: ZodSchema<T>, data: unknown): T;
  validateAsync<T>(schema: ZodSchema<T>, data: unknown): Promise<T>;
}

// Single Responsibility Principle - handles only validation logic
export class ValidationService implements IValidationService {
  validate<T>(schema: ZodSchema<T>, data: unknown): T {
    try {
      return schema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map(issue => 
          `${issue.path.join('.')}: ${issue.message}`
        );
        throw new ValidationError(
          `Validation failed: ${errorMessages.join(', ')}`
        );
      }
      throw error;
    }
  }

  async validateAsync<T>(schema: ZodSchema<T>, data: unknown): Promise<T> {
    try {
      return await schema.parseAsync(data);
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map(issue => 
          `${issue.path.join('.')}: ${issue.message}`
        );
        throw new ValidationError(
          `Validation failed: ${errorMessages.join(', ')}`
        );
      }
      throw error;
    }
  }
}

// Factory Pattern for creating validation service instances
export class ValidationServiceFactory {
  private static instance: ValidationService;

  static getInstance(): ValidationService {
    if (!this.instance) {
      this.instance = new ValidationService();
    }
    return this.instance;
  }
}