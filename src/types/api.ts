/**
 * API-related TypeScript types and interfaces
 * Provides type safety for all API interactions
 */

// ============================================================================
// API RESPONSE TYPES
// ============================================================================
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// ============================================================================
// CONTACT FORM TYPES
// ============================================================================
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  preferredContact: 'email' | 'phone';
  serviceInterest?: string;
  consent: boolean;
}

export interface ContactFormResponse {
  id: string;
  status: 'pending' | 'processed' | 'replied';
  createdAt: string;
  updatedAt: string;
}

// ============================================================================
// BLOG TYPES
// ============================================================================
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  views: number;
  status: 'draft' | 'published' | 'archived';
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

// ============================================================================
// PERFORMANCE TYPES
// ============================================================================
export interface PerformanceMetrics {
  timestamp: string;
  url: string;
  metrics: {
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
    ttfb: number; // Time to First Byte
  };
  userAgent: string;
  connectionType?: string;
  deviceMemory?: number;
}

export interface PerformanceReport {
  id: string;
  sessionId: string;
  metrics: PerformanceMetrics[];
  averageScore: number;
  recommendations: string[];
  createdAt: string;
}

// ============================================================================
// ERROR TYPES
// ============================================================================
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  stack?: string;
  timestamp: string;
}

export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}

export interface FormError {
  field?: string;
  message: string;
  code?: string;
}

// ============================================================================
// REQUEST TYPES
// ============================================================================
export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  timeout?: number;
  retries?: number;
}

export interface RequestConfig extends RequestOptions {
  baseURL?: string;
  params?: Record<string, string | number | boolean>;
  signal?: AbortSignal;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type StatusCode = 200 | 201 | 400 | 401 | 403 | 404 | 422 | 500 | 502 | 503;

export type ContentType = 
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'
  | 'text/html';

// ============================================================================
// HOOK TYPES
// ============================================================================
export interface UseApiOptions<T> {
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: ApiError) => void;
  retries?: number;
  retryDelay?: number;
}

export interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
  mutate: (data: T) => void;
}

// ============================================================================
// CACHE TYPES
// ============================================================================
export interface CacheConfig {
  ttl: number; // Time to live in seconds
  key: string;
  tags?: string[];
  revalidate?: boolean;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  tags: string[];
}

// ============================================================================
// ANALYTICS TYPES
// ============================================================================
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, unknown>;
  timestamp: string;
  sessionId: string;
  userId?: string;
}

export interface PageView {
  url: string;
  title: string;
  referrer?: string;
  timestamp: string;
  sessionId: string;
  userId?: string;
  duration?: number;
}

// ============================================================================
// SEARCH TYPES
// ============================================================================
export interface SearchQuery {
  q: string;
  filters?: Record<string, string | string[]>;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  facets?: Record<string, Array<{ value: string; count: number }>>;
  suggestions?: string[];
}
