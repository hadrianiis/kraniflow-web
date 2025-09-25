/**
 * Global type declarations
 * Extends global namespace with custom types
 */

declare global {
  // Window object extensions
  interface Window {
    dataLayer?: unknown[];
    // Performance monitoring
    performance?: Performance;
    // Service Worker
    serviceWorker?: ServiceWorkerContainer;
  }

  // Process environment variables
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_SITE_URL?: string;
      DATABASE_URL?: string;
      GOOGLE_SHEETS_API_KEY?: string;
      GOOGLE_SHEETS_SHEET_ID?: string;
      CONTACT_EMAIL?: string;
    }
  }

  // CSS custom properties
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }

  // Styled-components theme - import from actual theme
  interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      text: {
        primary: string;
        secondary: string;
        muted: string;
        light: string;
        white: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      border: {
        light: string;
        medium: string;
        dark: string;
      };
      gradient: {
        start: string;
        end: string;
      };
    };
    shadow: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontFamily: {
        sans: string[];
        serif: string[];
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeight: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
      cubic: string;
    };
    zIndex: {
      dropdown: number;
      sticky: number;
      fixed: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
  }
}

// Export empty object to make this a module
export {};
