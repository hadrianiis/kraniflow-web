/**
 * Shared theme configuration for styled-components
 * Optimized for performance and consistency
 */

export const theme = {
  colors: {
    primary: '#469f9d',
    primaryHover: '#3a8a88',
    secondary: '#f5f7fa',
    text: {
      primary: '#1a1a1a',
      secondary: '#333',
      muted: '#666',
      light: '#999',
      white: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e5e5e5',
    },
    border: {
      light: '#e5e5e5',
      medium: '#d1d5db',
      dark: '#9ca3af',
    },
    gradient: {
      start: '#F2BCBB',
      end: '#469F9D',
    },
  },
  shadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '6rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  typography: {
    fontFamily: {
      sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      serif: ['Georgia', 'Times New Roman', 'serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '0.1s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
    cubic: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
} as const;

export type Theme = typeof theme;

// Media query helpers for responsive design
export const media = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  '2xl': `@media (min-width: ${theme.breakpoints['2xl']})`,
} as const;

// Common styled-components patterns - moved after theme definition
export const getCommonStyles = (theme: Theme) => ({
  // Container with max-width and centering
  container: `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    ${media.md} {
      padding: 0 1.5rem;
    }
  `,
  
  // Flexbox centering
  centerFlex: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  // Card base styles
  card: `
    background: ${theme.colors.background.primary};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadow.sm};
    overflow: hidden;
    transition: transform ${theme.transitions.cubic}, box-shadow ${theme.transitions.normal};
  `,
  
  // Button base styles
  button: `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border: none;
    border-radius: ${theme.borderRadius.md};
    font-weight: ${theme.typography.fontWeight.medium};
    cursor: pointer;
    transition: all ${theme.transitions.normal};
    text-decoration: none;
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
  
  // Text truncation
  truncate: `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  
  // Multi-line truncation
  lineClamp: (lines: number) => `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  
  // Focus styles
  focus: `
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  `,
  
  // Visually hidden (for accessibility)
  visuallyHidden: `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,
});

// Export commonStyles as a function that takes theme
export const commonStyles = getCommonStyles(theme);
