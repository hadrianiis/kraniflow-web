import { createGlobalStyle } from 'styled-components';

// Global styles for styled-components
export const GlobalStyles = createGlobalStyle`
  /* Reset and base styles */
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Ensure consistent rendering across browsers */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Prevent layout shift during hydration */
  [data-styled] {
    visibility: visible !important;
  }
`;

// Styled-components configuration for consistent SSR
export const styledComponentsConfig = {
  // Disable vendor prefixing for better performance
  enableVendorPrefixes: false,
  
  // Prevent non-DOM props from being passed to DOM elements
  shouldForwardProp: (prop: string) => !prop.startsWith('$'),
  
  // Add stable ID to prevent hydration mismatches
  stylisPlugins: [],
  
  // Add deterministic class name generation for consistent SSR/client hydration
  generateId: (rule: any, sheet: any) => {
    const componentId = sheet.options.componentId || 'sc';
    // Use a more deterministic hash based on rule content
    const ruleContent = rule.toString();
    let hash = 0;
    for (let i = 0; i < ruleContent.length; i++) {
      const char = ruleContent.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    const ruleHash = Math.abs(hash).toString(36).slice(0, 8);
    return `${componentId}-${ruleHash}`;
  }
};
