// Data types following Interface Segregation Principle
// Each interface has a single, specific responsibility

export interface NavigationLink {
  name: string;
  href: string;
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface AIService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface AIUseCase {
  industry: string;
  application: string;
  impact: string;
}

export interface Integration {
  name: string;
  icon: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Comparison {
  feature: string;
  us: string | boolean;
  others: string | boolean;
}

export interface ChangelogUpdate {
  version: string;
  date: string;
  title: string;
  description: string;
  type: 'feature' | 'improvement' | 'fix';
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}