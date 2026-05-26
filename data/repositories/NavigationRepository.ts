import { NavigationSection, SocialLink } from '../types';

// Navigation Repository following Single Responsibility Principle
// Handles all navigation-related data
export class NavigationRepository {
  static getNavigationSections(): NavigationSection[] {
    return [
      {
        title: 'Company',
        links: [
          { name: 'About', href: '#about' },
          { name: 'Services', href: '#services' },
          { name: 'Blog', href: '#blog' },
          { name: 'Contact', href: '#contact' }
        ]
      },
      {
        title: 'Services',
        links: [
          { name: 'Backend Development', href: '#services' },
          { name: 'Frontend Development', href: '#services' },
          { name: 'Cloud Architecture', href: '#services' },
          { name: 'AI Solutions', href: '#services' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'Case Studies', href: '#case-studies' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'FAQ', href: '#faq' },
          { name: 'Security', href: '#security' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '/privacy' },
          { name: 'Terms of Service', href: '/terms' },
          { name: 'Cookie Policy', href: '/cookies' }
        ]
      }
    ];
  }

  static getSocialLinks(): SocialLink[] {
    return [
      { name: 'Twitter', href: 'https://x.com/klydone', icon: 'twitter' },
      { name: 'Instagram', href: 'https://www.instagram.com/klydone/', icon: 'instagram' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/klydone/', icon: 'linkedin' }
    ];
  }
}
