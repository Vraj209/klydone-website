import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must not exceed 100 characters'),
  
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters')
    .optional(),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters'),
  
  projectType: z
    .enum(['web-app', 'mobile-app', 'ai-solution', 'consulting', 'other'])
    .optional(),
  
  budget: z
    .enum(['under-10k', '10k-50k', '50k-100k', 'over-100k'])
    .optional(),
  
  timeline: z
    .enum(['asap', '1-3-months', '3-6-months', '6-months-plus'])
    .optional(),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must not exceed 100 characters'),
  
  preferences: z
    .array(z.enum(['tech-updates', 'case-studies', 'industry-news']))
    .optional(),
});

// AI project estimate request schema
export const aiProjectEstimateSchema = z.object({
  company_type: z
    .string()
    .min(2, 'Company type must be at least 2 characters')
    .max(60, 'Company type must not exceed 60 characters'),
  goal: z
    .string()
    .min(5, 'Goal must be at least 5 characters')
    .max(200, 'Goal must not exceed 200 characters'),
});

// API response schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().optional(),
  errors: z.array(z.string()).optional(),
});

export const errorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  errors: z.array(z.string()),
  code: z.string().optional(),
});

// Data validation schemas for repositories
export const featureSchema = z.object({
  icon: z.string().min(1, 'Icon is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

export const testimonialSchema = z.object({
  quote: z.string().min(10, 'Quote must be at least 10 characters'),
  author: z.string().min(1, 'Author is required'),
  role: z.string().min(1, 'Role is required'),
  company: z.string().min(1, 'Company is required'),
});

export const pricingPlanSchema = z.object({
  name: z.string().min(1, 'Plan name is required'),
  subtitle: z.string().min(1, 'Subtitle is required'),
  description: z.string().min(1, 'Description is required'),
  features: z.array(z.string().min(1)).min(1, 'At least one feature is required'),
  cta: z.string().min(1, 'CTA is required'),
  popular: z.boolean(),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type AiProjectEstimateInput = z.infer<typeof aiProjectEstimateSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
export type Feature = z.infer<typeof featureSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type PricingPlan = z.infer<typeof pricingPlanSchema>;