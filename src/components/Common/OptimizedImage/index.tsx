'use client';

import Image from 'next/image';

/**
 * OptimizedImage - A wrapper around Next.js Image component with sensible defaults
 * Provides consistent image handling across the application
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 85,
  sizes = '100vw',
  className,
  placeholder = 'blur',
  blurDataURL,
  ...props
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number; 
  fill?: boolean; 
  priority?: boolean; 
  quality?: number; 
  sizes?: string; 
  className?: string; 
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  [key: string]: any;
}) => {
  // Default blur data URL for consistent loading experience
  const defaultBlurDataURL = blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  // Ensure consistent props between server and client
  const imageProps: any = {
    src,
    alt,
    fill,
    priority,
    quality,
    sizes: fill ? sizes : '100vw', // Always provide sizes to prevent hydration mismatch
    className,
    placeholder,
    blurDataURL: defaultBlurDataURL,
    // Ensure consistent loading behavior - always use string values
    loading: (priority ? 'eager' : 'lazy') as 'eager' | 'lazy',
    // Ensure consistent decoding
    decoding: 'async' as const,
    // Ensure consistent fetch priority - always use string values
    fetchPriority: (priority ? 'high' : 'auto') as 'high' | 'auto' | 'low',
    ...props
  };

  // Only add width/height if not using fill and values are provided
  if (!fill && width !== undefined) {
    imageProps.width = width;
  }
  if (!fill && height !== undefined) {
    imageProps.height = height;
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...imageProps} />;
};

export default OptimizedImage;
