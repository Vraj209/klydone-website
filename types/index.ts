export interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudyData {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ServiceData {
  title: string;
  description: string;
  tags: string[];
}

export interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

