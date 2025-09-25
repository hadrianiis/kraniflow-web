/**
 * Safe meta tag utilities to prevent mobile errors
 * Handles cases where meta tags might not exist or document is not available
 */

export const safeGetMetaContent = (selector: string): string | null => {
  if (typeof document === 'undefined') {
    return null;
  }

  try {
    const element = document.querySelector(selector);
    return element?.getAttribute('content') || null;
  } catch (error) {
    console.warn(`Error accessing meta tag ${selector}:`, error);
    return null;
  }
};

export const safeGetOGType = (): string | null => {
  return safeGetMetaContent('meta[property="og:type"]');
};

export const safeGetOGTitle = (): string | null => {
  return safeGetMetaContent('meta[property="og:title"]');
};

export const safeGetOGDescription = (): string | null => {
  return safeGetMetaContent('meta[property="og:description"]');
};

export const ensureOGMetaTags = (): void => {
  if (typeof document === 'undefined') {
    return;
  }

  try {
    // Ensure og:type exists
    if (!document.querySelector('meta[property="og:type"]')) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.setAttribute('content', 'website');
      document.head.appendChild(meta);
    }

    // Ensure og:title exists
    if (!document.querySelector('meta[property="og:title"]')) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.setAttribute('content', document.title || 'KranioFlow');
      document.head.appendChild(meta);
    }

    // Ensure og:description exists
    if (!document.querySelector('meta[property="og:description"]')) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.setAttribute('content', 'Kraniosakrálna terapia Bratislava');
      document.head.appendChild(meta);
    }
  } catch (error) {
    console.warn('Error ensuring OG meta tags:', error);
  }
};
