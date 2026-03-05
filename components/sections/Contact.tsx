'use client';

import { useCallback } from 'react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { Icon } from '../icons';
import { contactFormSchema } from '@/lib/validations/schemas';
import Link from 'next/link';
import {
  useContactFormData,
  useIsContactSubmitting,
  useContactErrors,
  useContactMessage,
  useContactMessageType,
  useContactActions,
} from '@/store/selectors';
import { ValidationServiceFactory } from '@/lib/services/ValidationService';
import { ApiServiceFactory } from '@/lib/services/ApiService';
import LoadingSpinner from '../ui/LoadingSpinner';
import { cn } from '@/lib/utils';
import { SCHEDULE_LINK } from '@/data/constant';
import { ArrowRight, Library } from 'lucide-react';

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
    <Section id="contact" background="tinted">
      <style>{`
        @keyframes klyd-contact-float-a {
          0%,100% { transform: rotateY(-10deg) rotateX(8deg) translate3d(0,0,0); }
          50%     { transform: rotateY(-7deg) rotateX(9deg) translate3d(0,-10px,8px); }
        }
        @keyframes klyd-contact-float-b {
          0%,100% { transform: rotateY(12deg) rotateX(8deg) translate3d(0,0,0); }
          50%     { transform: rotateY(9deg) rotateX(10deg) translate3d(0,10px,10px); }
        }
        @keyframes klyd-contact-panel {
          0%,100% { transform: rotateY(-4deg) rotateX(6deg) translate3d(0,0,0); }
          50%     { transform: rotateY(-2deg) rotateX(8deg) translate3d(0,-6px,10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-klyd-contact-3d] { animation: none !important; }
        }
      `}</style>

      <SectionHeader
        title="Contact us"
        subtitle="Have a question? Want to talk about your next project? Fill out the form and we'll get back to you within 24 hours."
        badge="Get in touch"
      />

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                <Icon name="mail" size={20} className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5">Email</h3>
                <a href="mailto:klydoneinc@gmail.com" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  klydoneinc@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                <Icon name="phone" size={20} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5">Phone</h3>
                <a href="tel:+18734985370" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  +1 (873) 498-5370
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                <Icon name="map-pin" size={20} className="text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5">Location</h3>
                <p className="text-sm text-gray-600">Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>

          {/* 3D Illustration Card Cluster */}
          <div className="relative mt-2 [perspective:1000px]">
            <div
              data-klyd-contact-3d
              className="relative rounded-3xl border border-white/70 bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 p-8 text-white shadow-[0_22px_50px_-20px_rgba(79,70,229,0.55)]"
              style={{ animation: 'klyd-contact-panel 8s ease-in-out infinite' }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70">Discovery sprint</p>
              <h3 className="text-2xl font-bold mb-3">Ready to remove busywork with AI?</h3>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                No commitment. Let&apos;s talk through your workflows, what success looks like, and how we can help in 14–21 days.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
                  <p className="text-xs text-white/70">Avg kickoff</p>
                  <p className="text-xl font-bold">5 days</p>
                </div>
                <div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
                  <p className="text-xs text-white/70">Automation ROI</p>
                  <p className="text-xl font-bold">10–30 hrs/wk</p>
                </div>
              </div>
              <Link href={SCHEDULE_LINK} target="_blank">
                <Button variant="secondary">
                  Book Your Free 30-Minute Discovery Call
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div
              data-klyd-contact-3d
              className="absolute -right-4 -top-6 rounded-2xl border border-violet-100 bg-white px-4 py-3 shadow-lg"
              style={{ animation: 'klyd-contact-float-a 7s ease-in-out infinite' }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-500">Live</p>
              <p className="text-sm font-semibold text-gray-800">Form response SLA: &lt;24h</p>
            </div>

            {/* <div
              data-klyd-contact-3d
              className="absolute -bottom-5 left-6 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-lg"
              style={{ animation: 'klyd-contact-float-b 7.5s ease-in-out infinite' }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-sky-500">Signal</p>
              <p className="text-sm font-semibold text-gray-800">Qualified workflow in 14–21 days</p>
            </div> */}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_20px_45px_-25px_rgba(79,70,229,0.35)] md:p-8"
        >
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
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
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
                  "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
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
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
                  "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
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
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
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
                "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
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
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType || ''}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
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
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget || ''}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
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
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
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
                "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none",
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

