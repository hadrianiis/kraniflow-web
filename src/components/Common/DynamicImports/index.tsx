'use client';

import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

// Loading component with performance optimization
const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  transform: translateZ(0); /* Force hardware acceleration */
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid var(--green);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


// Generic dynamic import wrapper with performance optimizations
export const createDynamicImport = <P extends object>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  options: {
    ssr?: boolean;
    loading?: ComponentType;
    error?: ComponentType;
  } = {}
) => {
  const {
    ssr = false,
    loading: LoadingComponent = LoadingSpinner,
  } = options;

  return dynamic(importFunction, {
    ssr,
    loading: () => <LoadingComponent />,
  });
};

// Pre-configured dynamic imports for common use cases
// These can be uncommented when the components exist
// export const DynamicHeavyComponent = createDynamicImport(
//   () => import('@/components/HeavyComponent'),
//   { ssr: false }
// );

// export const DynamicChart = createDynamicImport(
//   () => import('@/components/Charts/ChartComponent'),
//   { ssr: false }
// );

// export const DynamicModal = createDynamicImport(
//   () => import('@/components/UI/Modal'),
//   { ssr: false }
// );

// export const DynamicForm = createDynamicImport(
//   () => import('@/components/Forms/ContactForm'),
//   { ssr: false }
// );

// Route-based code splitting utilities
export const withCodeSplitting = <P extends object>(
  Component: ComponentType<P>
) => {
  return dynamic(() => Promise.resolve({ default: Component }), {
    ssr: false,
    loading: () => <LoadingSpinner />,
  });
};

// Lazy loading wrapper for images and heavy content
export const LazyWrapper = styled.div`
  /* Intersection Observer will handle visibility */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Performance-optimized dynamic import hook
export const useDynamicImport = <T,>(
  importFunction: () => Promise<T>,
  deps: any[] = []
) => {
  const [Component, setComponent] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    const loadComponent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const component = await importFunction();
        
        if (!cancelled) {
          setComponent(component);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    loadComponent();

    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { Component, loading, error };
};
