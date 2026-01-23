import { IconComponent } from './types';

// Business icons
import { 
  CreditCardIcon, 
  RefreshIcon, 
  BuildingIcon, 
  AnalyticsIcon, 
  GlobeIcon 
} from './business';

// Tech icons
import { 
  ZapIcon, 
  PaletteIcon, 
  CloudIcon, 
  BotIcon, 
  RocketIcon 
} from './tech';

// Benefits icons
import { 
  TrendingUpIcon, 
  DollarSignIcon, 
  HandshakeIcon, 
  EyeIcon, 
  TargetIcon 
} from './benefits';

// AI icons
import { 
  BrainIcon, 
  ScanIcon, 
  SparklesIcon 
} from './ai';

// Integration icons
import { 
  BankIcon, 
  KeyIcon, 
  TicketIcon, 
  CloudLightningIcon 
} from './integration';

// Social icons
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon 
} from './social';

// Security icons
import { 
  LockIcon, 
  CheckIcon, 
  ShieldIcon, 
  SupportIcon 
} from './security';

// Contact icons
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  AlertCircleIcon 
} from './contact';

// System icons
import { 
  SettingsIcon, 
  ActivityIcon, 
  ServerIcon, 
  CodeIcon 
} from './system';

// Icon Registry following Dependency Inversion Principle
// Components depend on this abstraction, not concrete implementations
export const IconRegistry: Record<string, IconComponent> = {
  // Business & Use Cases
  'credit-card': CreditCardIcon,
  'fintech': CreditCardIcon,
  'refresh': RefreshIcon,
  'saas': RefreshIcon,
  'building': BuildingIcon,
  'enterprise': BuildingIcon,
  'analytics': AnalyticsIcon,
  'data': AnalyticsIcon,
  'globe': GlobeIcon,
  'web': GlobeIcon,
  
  // Technology & Features
  'zap': ZapIcon,
  'performance': ZapIcon,
  'speed': ZapIcon,
  'palette': PaletteIcon,
  'design': PaletteIcon,
  'frontend': PaletteIcon,
  'cloud': CloudIcon,
  'devops': CloudIcon,
  'bot': BotIcon,
  'ai': BotIcon,
  'automation': BotIcon,
  'rocket': RocketIcon,
  'launch': RocketIcon,
  'growth': RocketIcon,
  
  // Benefits
  'trending-up': TrendingUpIcon,
  'scale': TrendingUpIcon,
  'dollar-sign': DollarSignIcon,
  'cost': DollarSignIcon,
  'savings': DollarSignIcon,
  'handshake': HandshakeIcon,
  'partnership': HandshakeIcon,
  'eye': EyeIcon,
  'transparency': EyeIcon,
  'visibility': EyeIcon,
  'target': TargetIcon,
  'results': TargetIcon,
  'goals': TargetIcon,
  
  // AI Specific
  'brain': BrainIcon,
  'intelligence': BrainIcon,
  'ml': BrainIcon,
  'scan': ScanIcon,
  'vision': ScanIcon,
  'computer-vision': ScanIcon,
  'sparkles': SparklesIcon,
  'generative': SparklesIcon,
  'creative': SparklesIcon,
  
  // Integration Specific
  'bank': BankIcon,
  'banking': BankIcon,
  'key': KeyIcon,
  'auth': KeyIcon,
  'oauth': KeyIcon,
  'ticket': TicketIcon,
  'sso': TicketIcon,
  'saml': TicketIcon,
  'aws': CloudLightningIcon,
  'cloud-lightning': CloudLightningIcon,
  'stripe': CreditCardIcon,
  'payments': CreditCardIcon,
  'plaid': BankIcon,
  'salesforce': ZapIcon,
  'crm': ZapIcon,
  
  // Social Media
  'linkedin': LinkedinIcon,
  'twitter': TwitterIcon,
  'github': GithubIcon,
  
  // Security
  'lock': LockIcon,
  'security': LockIcon,
  'check': CheckIcon,
  'verified': CheckIcon,
  'shield': ShieldIcon,
  'protection': ShieldIcon,
  'support': SupportIcon,
  'help': SupportIcon,
  
  // Contact & Communication
  'mail': MailIcon,
  'phone': PhoneIcon,
  'map-pin': MapPinIcon,
  'alert-circle': AlertCircleIcon,
  
  // System & Development
  'settings': SettingsIcon,
  'activity': ActivityIcon,
  'server': ServerIcon,
  'code': CodeIcon,
};

// Helper function to get icon by name with fallback
export function getIcon(name: string): IconComponent {
  const icon = IconRegistry[name.toLowerCase()];
  if (!icon) {
    console.warn(`Icon "${name}" not found in registry. Using default.`);
    return RocketIcon; // Default fallback icon
  }
  return icon;
}