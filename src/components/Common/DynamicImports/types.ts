import { ComponentType } from 'react';

export interface DynamicImportOptions {
  ssr?: boolean;
  loading?: ComponentType;
  error?: ComponentType;
  chunkName?: string;
}

export interface DynamicImportHookResult<T> {
  Component: T | null;
  loading: boolean;
  error: Error | null;
}

export interface LazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface CodeSplittingConfig {
  chunks: {
    critical: string[];
    nonCritical: string[];
    heavy: string[];
  };
  preload: {
    routes: string[];
    components: string[];
  };
}
