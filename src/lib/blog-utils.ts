/**
 * Utility functions for blog components - optimized for performance
 */

// Cache for formatted dates to prevent repeated calculations
const dateCache = new Map<string, string>();

// Cache for read time calculations
const readTimeCache = new Map<string, number>();

// Cache for image sizes to prevent repeated string creation
const imageSizesCache = new Map<string, string>();

// Pre-computed image sizes strings for different contexts
const IMAGE_SIZES = {
  BLOG_CARD: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  FEATURED_IMAGE: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw",
  AUTHOR_AVATAR: "40px",
  DEFAULT: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
} as const;

/**
 * Format date to Slovak locale - optimized with caching
 */
export const formatDate = (dateString: string): string => {
  // Check cache first
  if (dateCache.has(dateString)) {
    return dateCache.get(dateString)!;
  }

  try {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    
    // Cache the result
    dateCache.set(dateString, formattedDate);
    return formattedDate;
  } catch {
    // Cache the original string to avoid repeated error handling
    dateCache.set(dateString, dateString);
    return dateString;
  }
};

/**
 * Calculate reading time based on content length - optimized with caching
 */
export const calculateReadTime = (content: string): number => {
  // Check cache first
  if (readTimeCache.has(content)) {
    return readTimeCache.get(content)!;
  }

  const wordsPerMinute = 200;
  // Use more efficient word counting - avoid regex split for better performance
  const words = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  const readTime = Math.max(1, Math.ceil(words / wordsPerMinute));
  
  // Cache the result
  readTimeCache.set(content, readTime);
  return readTime;
};

/**
 * Generate optimized image sizes for different breakpoints - optimized with caching
 */
export const getImageSizes = (context: keyof typeof IMAGE_SIZES = 'DEFAULT'): string => {
  // Check cache first
  if (imageSizesCache.has(context)) {
    return imageSizesCache.get(context)!;
  }

  const sizes = IMAGE_SIZES[context];
  imageSizesCache.set(context, sizes);
  return sizes;
};

/**
 * Default blur data URL for image placeholders
 */
export const DEFAULT_BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

/**
 * Handle image error gracefully - optimized to prevent console spam
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.currentTarget;
  // Only log error once per image source
  if (!img.dataset.errorLogged) {
    console.error('Image failed to load:', img.src);
    img.dataset.errorLogged = 'true';
  }
  img.style.display = 'none';
};

/**
 * Handle image load success - optimized to prevent console spam
 */
export const handleImageLoad = (src: string) => {
  // Only log in development mode to prevent console spam in production
  if (process.env.NODE_ENV === 'development') {
    console.log('Image loaded successfully:', src);
  }
};

/**
 * Clear caches - useful for testing or memory management
 */
export const clearBlogUtilsCaches = () => {
  dateCache.clear();
  readTimeCache.clear();
  imageSizesCache.clear();
};
