'use client';

import { useCallback } from 'react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { Icon } from '../icons';
import { contactFormSchema, ContactFormData } from '@/lib/validations/schemas';
import { 
  useContactFormData,
  useIsContactSubmitting,
  useContactErrors,
  useContactMessage,
  useContactMessageType,
  useContactActions
} from '@/store/selectors';
import { ValidationServiceFactory } from '@/lib/services/ValidationService';
import { ApiServiceFactory } from '@/lib/services/ApiService';
import LoadingSpinner from '../ui/LoadingSpinner';
import ClientOnly from '../wrappers/ClientOnly';
import { cn } from '@/lib/utils';

export default function Contact() {
  // Atomic selectors to prevent re-renders
  const formData = useContactFormData();
  const isSubmitting = useIsContactSubmitting();
  const errors = useContactErrors();
  const message = useContactMessage();
  const messageType = useContactMessageType();
  
  // Actions
  const {
    setContactField,
    setContactErrors,
    clearContactErrors,
    setContactSubmitting,
    setContactMessage,
    clearContactMessage,
    resetContactForm,
  } = useContactActions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      clearContactErrors();
      setContactSubmitting(true);

      // Use validation service following Dependency Inversion Principle
      const validationService = ValidationServiceFactory.getInstance();
      const validatedData = validationService.validate(contactFormSchema, formData);

      // Use API service following Facade Pattern
      const apiService = ApiServiceFactory.getInstance();
      const result = await apiService.submitContact(validatedData);

      if (result.success) {
        setContactMessage(result.message, 'success');
        resetContactForm();
      } else {
        setContactMessage(result.message, 'error');
        if (result.errors) {
          const fieldErrors: Record<string, string> = {};
          result.errors.forEach((error: string) => {
            const [field, message] = error.split(': ');
            fieldErrors[field] = message;
          });
          setContactErrors(fieldErrors);
        }
      }
    } catch (error) {
      setContactMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred',
        'error'
      );
    } finally {
      setContactSubmitting(false);
    }
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setContactField(name, value);
    },
    [setContactField]
  );
  
  return (
    <Section id="contact" background="dark">
      <SectionHeader 
        title="Contact us"
        subtitle="Have a question? Want to talk about your next project? Fill out the form below and we'll get back to you within 24 hours."
        badge="Reach out to us without any hesitation"
      />
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                <Icon name="mail" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <a href="mailto:hello@klydone.com" className="text-white hover:underline">
                  hello@klydone.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                <Icon name="phone" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <a href="tel:+15551234567" className="text-white hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                <Icon name="map-pin" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Address</h3>
                <p className="text-white">Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>
          
          <div className="bg-violet-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Extraordinary?</h3>
            <p className="text-white mb-6">
              No risk. Let&apos;s talk through your idea, what success looks like, and how we can help you get there.
            </p>
            <Button href="#contact" variant="secondary">
              Book Your Free 30-Minute Discovery Call
            </Button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Success/Error Message */}
          {message && (
            <div className={cn(
              'p-4 rounded-lg border',
              messageType === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            )}>
              <div className="flex items-center gap-2">
                <Icon 
                  name={messageType === 'success' ? 'check' : 'alert-circle'} 
                  size={20} 
                />
                <span>{message}</span>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name || ''}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
                  errors.name ? 'border-red-500' : 'border-gray-300',
                  isSubmitting && 'opacity-50 cursor-not-allowed'
                )}
                placeholder="John Doe"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email || ''}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
                  errors.email ? 'border-red-500' : 'border-gray-300',
                  isSubmitting && 'opacity-50 cursor-not-allowed'
                )}
                placeholder="john@example.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company || ''}
              onChange={handleChange}
              disabled={isSubmitting}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
                errors.company ? 'border-red-500' : 'border-gray-300',
                isSubmitting && 'opacity-50 cursor-not-allowed'
              )}
              placeholder="Your Company"
              aria-describedby={errors.company ? 'company-error' : undefined}
            />
            {errors.company && (
              <p id="company-error" className="mt-1 text-sm text-red-400">
                {errors.company}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType || ''}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
                  isSubmitting && 'opacity-50 cursor-not-allowed'
                )}
              >
                <option value="">Select project type</option>
                <option value="web-app">Web Application</option>
                <option value="mobile-app">Mobile App</option>
                <option value="ai-solution">AI Solution</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget || ''}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
                  isSubmitting && 'opacity-50 cursor-not-allowed'
                )}
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="over-100k">Over $100k</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
              Project Brief *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message || ''}
              onChange={handleChange}
              disabled={isSubmitting}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none",
                errors.message ? 'border-red-500' : 'border-gray-300',
                isSubmitting && 'opacity-50 cursor-not-allowed'
              )}
              placeholder="Tell us about your project, goals, and requirements..."
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                <span>Sending Message...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
}

