// Data Service following Facade Pattern and Dependency Inversion Principle
// Provides a unified interface to all data repositories
import {
  NavigationRepository,
  FeaturesRepository,
  UseCasesRepository,
  BenefitsRepository,
  AIRepository,
  IntegrationRepository,
  TestimonialsRepository,
  ProcessRepository,
  PricingRepository,
  FAQRepository,
  ServicesRepository,
  SecurityRepository
} from '../repositories';

export class DataService {
  // Navigation data
  static getNavigationSections() {
    return NavigationRepository.getNavigationSections();
  }

  static getSocialLinks() {
    return NavigationRepository.getSocialLinks();
  }

  // Features and services data
  static getFeatures() {
    return FeaturesRepository.getFeatures();
  }

  static getServices() {
    return ServicesRepository.getServices();
  }

  // Use cases and benefits
  static getUseCases() {
    return UseCasesRepository.getUseCases();
  }

  static getBenefits() {
    return BenefitsRepository.getBenefits();
  }

  // AI-specific data
  static getAIServices() {
    return AIRepository.getAIServices();
  }

  static getAIUseCases() {
    return AIRepository.getAIUseCases();
  }

  // Integration data
  static getIntegrations() {
    return IntegrationRepository.getIntegrations();
  }

  // Social proof
  static getTestimonials() {
    return TestimonialsRepository.getTestimonials();
  }

  // Process and workflow
  static getProcessSteps() {
    return ProcessRepository.getProcessSteps();
  }

  // Pricing information
  static getPricingPlans() {
    return PricingRepository.getPricingPlans();
  }

  // Support and FAQ
  static getFAQs() {
    return FAQRepository.getFAQs();
  }

  // Security features
  static getSecurityFeatures() {
    return SecurityRepository.getSecurityFeatures();
  }

  static getComplianceBadges() {
    return SecurityRepository.getComplianceBadges();
  }
}