import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Combined store interface following Interface Segregation Principle
interface AppStoreState {
  // UI State
  isLoading: boolean;
  loadingStates: Record<string, boolean>;
  isMobileMenuOpen: boolean;
  activeSection: string;
  theme: 'light' | 'dark' | 'system';
  
  // Contact Form State
  contactFormData: {
    name: string;
    email: string;
    company: string;
    message: string;
    projectType?: string;
    budget?: string;
    timeline?: string;
  };
  isContactSubmitting: boolean;
  contactErrors: Record<string, string>;
  contactMessage: string | null;
  contactMessageType: 'success' | 'error' | null;
}

interface AppStoreActions {
  // UI Actions
  setLoading: (key: string, loading: boolean) => void;
  setGlobalLoading: (loading: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setActiveSection: (section: string) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  
  // Contact Form Actions
  setContactField: (field: string, value: string) => void;
  setContactErrors: (errors: Record<string, string>) => void;
  clearContactErrors: () => void;
  setContactSubmitting: (submitting: boolean) => void;
  setContactMessage: (message: string, type: 'success' | 'error') => void;
  clearContactMessage: () => void;
  resetContactForm: () => void;
}

type AppStore = AppStoreState & AppStoreActions;

// Initial state following Single Responsibility Principle
const initialState: AppStoreState = {
  // UI State
  isLoading: false,
  loadingStates: {},
  isMobileMenuOpen: false,
  activeSection: 'hero',
  theme: 'dark',
  
  // Contact Form State
  contactFormData: {
    name: '',
    email: '',
    company: '',
    message: '',
  },
  isContactSubmitting: false,
  contactErrors: {},
  contactMessage: null,
  contactMessageType: null,
};

// Store creation with SSR safety
const createAppStore = () => {
  const storeCreator = (
    set: (partial: AppStore | Partial<AppStore> | ((state: AppStore) => AppStore | Partial<AppStore>)) => void,
    get: () => AppStore
  ): AppStore => ({
    ...initialState,
    
    // UI Actions
    setLoading: (key, loading) =>
      set((state: AppStore) => ({
        loadingStates: { ...state.loadingStates, [key]: loading },
      })),
    
    setGlobalLoading: (loading) => set({ isLoading: loading }),
    
    toggleMobileMenu: () =>
      set((state: AppStore) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
    
    setActiveSection: (section) => set({ activeSection: section }),
    
    setTheme: (theme) => set({ theme }),
    
    // Contact Form Actions
    setContactField: (field, value) =>
      set((state: AppStore) => ({
        contactFormData: { ...state.contactFormData, [field]: value },
        contactErrors: { ...state.contactErrors, [field]: '' },
      })),
    
    setContactErrors: (errors) => set({ contactErrors: errors }),
    
    clearContactErrors: () => set({ contactErrors: {} }),
    
    setContactSubmitting: (submitting) => set({ isContactSubmitting: submitting }),
    
    setContactMessage: (message, type) => 
      set({ contactMessage: message, contactMessageType: type }),
    
    clearContactMessage: () => 
      set({ contactMessage: null, contactMessageType: null }),
    
    resetContactForm: () => set({
      contactFormData: initialState.contactFormData,
      isContactSubmitting: false,
      contactErrors: {},
      contactMessage: null,
      contactMessageType: null,
    }),
  });

  // Only use devtools on client-side
  if (typeof window !== 'undefined') {
    return create<AppStore>()(devtools(storeCreator, { name: 'klydone-store' }));
  }
  
  return create<AppStore>()(storeCreator);
};

export const useAppStore = createAppStore();