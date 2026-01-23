import { useAppStore } from './AppStore';

// Atomic selectors following Single Responsibility Principle
// Each selector returns a single value to prevent re-renders

// UI Selectors
export const useIsLoading = () => useAppStore((state) => state.isLoading);
export const useLoadingState = (key: string) => useAppStore((state) => state.loadingStates[key] || false);
export const useIsMobileMenuOpen = () => useAppStore((state) => state.isMobileMenuOpen);
export const useActiveSection = () => useAppStore((state) => state.activeSection);
export const useTheme = () => useAppStore((state) => state.theme);

// UI Actions
export const useUIActions = () => ({
  setLoading: useAppStore((state) => state.setLoading),
  setGlobalLoading: useAppStore((state) => state.setGlobalLoading),
  toggleMobileMenu: useAppStore((state) => state.toggleMobileMenu),
  closeMobileMenu: useAppStore((state) => state.closeMobileMenu),
  setActiveSection: useAppStore((state) => state.setActiveSection),
  setTheme: useAppStore((state) => state.setTheme),
});

// Contact Form Selectors
export const useContactFormData = () => useAppStore((state) => state.contactFormData);
export const useIsContactSubmitting = () => useAppStore((state) => state.isContactSubmitting);
export const useContactErrors = () => useAppStore((state) => state.contactErrors);
export const useContactMessage = () => useAppStore((state) => state.contactMessage);
export const useContactMessageType = () => useAppStore((state) => state.contactMessageType);

// Contact Form Actions
export const useContactActions = () => ({
  setContactField: useAppStore((state) => state.setContactField),
  setContactErrors: useAppStore((state) => state.setContactErrors),
  clearContactErrors: useAppStore((state) => state.clearContactErrors),
  setContactSubmitting: useAppStore((state) => state.setContactSubmitting),
  setContactMessage: useAppStore((state) => state.setContactMessage),
  clearContactMessage: useAppStore((state) => state.clearContactMessage),
  resetContactForm: useAppStore((state) => state.resetContactForm),
});