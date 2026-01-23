import { ContactFormData, NewsletterData } from '../validations/schemas';
import { ErrorHandler } from '../errors/ErrorHandler';

// Interface Segregation Principle - separate interfaces for different API concerns
interface IContactService {
  submitContact(data: ContactFormData): Promise<ApiResponse>;
}

interface INewsletterService {
  subscribe(data: NewsletterData): Promise<ApiResponse>;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
  errors?: string[];
}

// Single Responsibility Principle - handles only contact API operations
class ContactService implements IContactService {
  private readonly baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async submitContact(data: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit contact form');
      }

      return result;
    } catch (error) {
      ErrorHandler.logError(error, 'ContactService.submitContact');
      throw error;
    }
  }
}

// Single Responsibility Principle - handles only newsletter API operations
class NewsletterService implements INewsletterService {
  private readonly baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async subscribe(data: NewsletterData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to subscribe to newsletter');
      }

      return result;
    } catch (error) {
      ErrorHandler.logError(error, 'NewsletterService.subscribe');
      throw error;
    }
  }
}

// Facade Pattern - provides unified interface to API services
export class ApiService {
  private contactService: ContactService;
  private newsletterService: NewsletterService;

  constructor(baseUrl?: string) {
    this.contactService = new ContactService(baseUrl);
    this.newsletterService = new NewsletterService(baseUrl);
  }

  // Delegate to contact service
  submitContact(data: ContactFormData): Promise<ApiResponse> {
    return this.contactService.submitContact(data);
  }

  // Delegate to newsletter service
  subscribeNewsletter(data: NewsletterData): Promise<ApiResponse> {
    return this.newsletterService.subscribe(data);
  }
}

// Factory Pattern for creating API service instances
export class ApiServiceFactory {
  private static instance: ApiService;

  static getInstance(baseUrl?: string): ApiService {
    if (!this.instance) {
      this.instance = new ApiService(baseUrl);
    }
    return this.instance;
  }
}