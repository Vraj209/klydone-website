'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

type DropdownOption = {
  value: string;
  label: string;
};

function ThemedDropdown({
  id,
  value,
  placeholder,
  options,
  disabled,
  onSelect,
}: {
  id: string;
  value: string;
  placeholder: string;
  options: DropdownOption[];
  disabled?: boolean;
  onSelect: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'h-12 w-full rounded-xl border border-gray-200 bg-white/80 px-4 text-left text-sm shadow-[0_1px_0_0_rgba(255,255,255,0.85)_inset] outline-none transition-all hover:border-gray-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:opacity-60',
          !selectedOption ? 'text-gray-400' : 'text-gray-900'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate pr-8">{selectedOption?.label || placeholder}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-violet-100 bg-white p-1 shadow-[0_16px_40px_-20px_rgba(79,70,229,0.6)]">
          <button
            type="button"
            onClick={() => {
              onSelect('');
              setIsOpen(false);
            }}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-gray-500 transition-colors hover:bg-violet-50 hover:text-gray-900"
          >
            <span>{placeholder}</span>
            {!selectedOption && <Check size={14} className="text-violet-500" aria-hidden="true" />}
          </button>
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors',
                  isSelected
                    ? 'bg-violet-50 font-medium text-violet-700'
                    : 'text-gray-700 hover:bg-violet-50 hover:text-gray-900'
                )}
              >
                <span>{option.label}</span>
                {isSelected && <Check size={14} className="text-violet-600" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

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
        const successMessage = result.message;
        resetContactForm();
        setContactMessage(successMessage, 'success');
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

  const labelClasses = 'mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500';
  const fieldBaseClasses =
    'h-12 w-full rounded-xl border bg-white/80 px-4 text-sm text-gray-900 shadow-[0_1px_0_0_rgba(255,255,255,0.85)_inset] outline-none transition-all placeholder:text-gray-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:opacity-60';
  const getFieldClasses = (hasError?: string) =>
    cn(
      fieldBaseClasses,
      hasError ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-gray-200 hover:border-gray-300'
    );
  const projectTypeOptions: DropdownOption[] = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'ai-solution', label: 'AI Solution' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' },
  ];
  const budgetOptions: DropdownOption[] = [
    { value: 'under-10k', label: 'Under $10k' },
    { value: '10k-50k', label: '$10k - $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: 'over-100k', label: 'Over $100k' },
  ];
  
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
        title="Let's Talk"
        subtitle="Tell us about your workflows, goals, and systems. We will respond within one business day with next steps."
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
                <a href="mailto:hello@klydone.com" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">
                  hello@klydone.com
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
                <p className="text-sm text-gray-600">Cambridge, Ontario, Canada</p>
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
              <h3 className="text-2xl font-bold mb-3">Schedule a strategy call</h3>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                We&apos;ll help you identify the highest-ROI workflow for your team and outline what an AI ops audit could uncover.
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
                  Schedule a Strategy Call
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
          className="space-y-6 rounded-3xl border border-violet-100/70 bg-gradient-to-b from-white via-white to-violet-50/40 p-7 shadow-[0_28px_60px_-30px_rgba(79,70,229,0.45)] backdrop-blur md:p-8"
        >
          <div className="rounded-2xl border border-violet-100/70 bg-white/80 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-600">Project intake</p>
            <p className="mt-1 text-sm text-gray-600">Share a few details and we will reply within one business day.</p>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div className={cn(
              'rounded-xl border p-4',
              messageType === 'success' 
                ? 'border-green-200 bg-green-50 text-green-800'
                : 'border-red-200 bg-red-50 text-red-800'
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
              <label htmlFor="name" className={labelClasses}>
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
                className={getFieldClasses(errors.name)}
                placeholder="John Doe"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className={labelClasses}>
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
                className={getFieldClasses(errors.email)}
                placeholder="john@example.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company || ''}
              onChange={handleChange}
              disabled={isSubmitting}
              className={getFieldClasses(errors.company)}
              placeholder="Your Company"
              aria-describedby={errors.company ? 'company-error' : undefined}
            />
            {errors.company && (
              <p id="company-error" className="mt-2 text-xs text-red-500">
                {errors.company}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className={labelClasses}>
                Project Type
              </label>
              <ThemedDropdown
                id="projectType"
                value={formData.projectType || ''}
                placeholder="Select project type"
                options={projectTypeOptions}
                disabled={isSubmitting}
                onSelect={(selectedValue) => setContactField('projectType', selectedValue)}
              />
            </div>

            <div>
              <label htmlFor="budget" className={labelClasses}>
                Budget Range
              </label>
              <ThemedDropdown
                id="budget"
                value={formData.budget || ''}
                placeholder="Select budget range"
                options={budgetOptions}
                disabled={isSubmitting}
                onSelect={(selectedValue) => setContactField('budget', selectedValue)}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className={labelClasses}>
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
                getFieldClasses(errors.message),
                'h-auto min-h-[132px] resize-y py-3'
              )}
              placeholder="Tell us about your project, goals, and requirements..."
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-red-500">
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
          <p className="text-center text-xs text-gray-500">
            We will never share your information. By submitting, you agree to be contacted by our team about your project.
          </p>
        </form>
      </div>
    </Section>
  );
}

