import { BlogPost, Author, BlogCategory } from '@/types/blog';

// Simple emoji cleaning function
const convertWordPressEmojis = (html: string): string => {
  return html
    // Replace WordPress.com emoji images with actual emoji characters
    .replace(/<img[^>]*src="[^"]*wpcom-smileys\/twemoji\/[^"]*\/1f([0-9a-f]{3})\.png"[^>]*alt="([^"]*)"[^>]*\/?>/gi, (_, emojiCode) => {
      // Convert hex code to Unicode emoji
      const unicodeEmoji = String.fromCodePoint(parseInt('1f' + emojiCode, 16));
      return unicodeEmoji;
    })
    // Handle other common WordPress emoji patterns
    .replace(/<img[^>]*class="wp-smiley"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '$1')
    // Clean up any remaining WordPress emoji artifacts
    .replace(/<img[^>]*wp-smiley[^>]*\/?>/gi, '');
};

// WordPress.com API Types
export interface WordPressComPost {
  ID: number;
  site_ID: number;
  author: {
    ID: number;
    login: string;
    email: boolean;
    name: string;
    first_name: string;
    last_name: string;
    nice_name: string;
    URL: string;
    avatar_URL: string;
    profile_URL: string;
    site_ID: number;
  };
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  discussion: {
    comments_open: boolean;
    comment_status: string;
    pings_open: boolean;
    ping_status: string;
    comment_count: number;
  };
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: number;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image: string;
  post_thumbnail?: {
    ID: number;
    URL: string;
    guid: string;
    mime_type: string;
    width: number;
    height: number;
  };
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: any[];
  terms: {
    category: Record<string, {
      ID: number;
      name: string;
      slug: string;
      description: string;
      post_count: number;
      parent: number;
      meta: any;
    }>;
    post_tag: Record<string, any>;
    post_format: Record<string, any>;
    mentions: Record<string, any>;
  };
  tags: Record<string, any>;
  categories: Record<string, {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    parent: number;
    meta: any;
  }>;
  attachments: Record<string, any>;
  attachment_count: number;
  metadata: Array<{
    id: string;
    key: string;
    value: string;
  }>;
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
      replies: string;
      likes: string;
    };
  };
  capabilities: {
    publish_post: boolean;
    delete_post: boolean;
    edit_post: boolean;
  };
  other_URLs: Record<string, any>;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    '24': string;
    '48': string;
    '96': string;
  };
  meta: any[];
  _links: any;
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  _links: any;
}

export interface WordPressTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: any[];
  _links: any;
}

export interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta: any;
  };
  source_url: string;
  _links: any;
}

// Configuration
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

// Helper function to calculate read time
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper function to strip HTML tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}


// Transform WordPress.com post to our BlogPost format
export function transformWordPressComPost(wpPost: WordPressComPost): BlogPost {
  // Get first category name
  const categoryNames = Object.keys(wpPost.categories);
  const firstCategory = categoryNames.length > 0 ? wpPost.categories[categoryNames[0] as keyof typeof wpPost.categories] : null;
  
  // Get tags from terms
  const tagNames = Object.keys(wpPost.terms.post_tag);
  
  return {
    id: wpPost.ID.toString(),
    slug: wpPost.slug || `post-${wpPost.ID}`,
    title: stripHtml(wpPost.title),
    excerpt: stripHtml(wpPost.excerpt),
    content: convertWordPressEmojis(wpPost.content),
    featuredImage: wpPost.featured_image || wpPost.post_thumbnail?.URL || '/images/skeleton.avif',
    publishedAt: wpPost.date?.split('T')[0] || new Date().toISOString().split('T')[0] || '',
    updatedAt: wpPost.modified?.split('T')[0] || new Date().toISOString().split('T')[0] || '',
    readTime: calculateReadTime(wpPost.content),
    author: {
      id: wpPost.author.ID.toString(),
      name: wpPost.author.name || 'Neznámy autor',
      avatar: wpPost.author.avatar_URL || '/images/kika-photo-kranio.avif',
      bio: '', // WordPress.com doesn't provide author bio in posts
      role: 'Autor'
    },
    tags: tagNames,
    category: firstCategory?.name || 'Bez kategórie',
    isPublished: wpPost.status === 'publish',
    views: 0, // WordPress.com doesn't provide view count by default
    likes: wpPost.like_count || 0
  };
}

// Transform WordPress category to our BlogCategory format
export function transformWordPressCategory(wpCategory: WordPressCategory): BlogCategory {
  return {
    id: wpCategory.id.toString(),
    name: wpCategory.name,
    slug: wpCategory.slug,
    description: stripHtml(wpCategory.description),
    postCount: wpCategory.count,
    color: '#3B82F6' // Default blue color
  };
}

// WordPress API Client with performance optimizations
export class WordPressAPI {
  private baseUrl: string;
  private auth?: string;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes
  private readonly MAX_CACHE_SIZE = 100;

  constructor() {
    if (!WORDPRESS_API_URL) {
      throw new Error('WORDPRESS_API_URL environment variable is required');
    }
    
    this.baseUrl = WORDPRESS_API_URL;
    
    // Set up basic auth if credentials are provided
    if (process.env.WORDPRESS_USERNAME && process.env.WORDPRESS_APP_PASSWORD) {
      this.auth = Buffer.from(
        `${process.env.WORDPRESS_USERNAME}:${process.env.WORDPRESS_APP_PASSWORD}`
      ).toString('base64');
    }
  }

  // Cache management
  private getCacheKey(endpoint: string, params: Record<string, any> = {}): string {
    const sortedParams = Object.keys(params)
      .sort()
      .map(key => `${key}=${String(params[key] || '')}`)
      .join('&');
    return `${endpoint}?${sortedParams}`;
  }

  private getFromCache(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) return null;
    
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  private setCache(key: string, data: any, ttl: number = this.CACHE_TTL): void {
    // Implement LRU cache eviction
    if (this.cache.size >= this.MAX_CACHE_SIZE) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  private clearCache(): void {
    this.cache.clear();
  }

  private async fetchWithAuth(url: string, options: RequestInit = {}, retries: number = 3): Promise<Response> {
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'KranioFlow-Blog/1.0',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Requested-With': 'XMLHttpRequest',
      ...(this.auth && { Authorization: `Basic ${this.auth}` }),
      ...options.headers,
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          ...options,
          headers,
          // Add timeout for better error handling
          signal: AbortSignal.timeout(10000), // 10 second timeout
        });

        if (!response.ok) {
          // Handle WordPress.com specific errors
          if (response.status === 429) {
            const retryAfter = response.headers.get('Retry-After');
            const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : Math.pow(2, attempt) * 1000;
            
            if (attempt < retries) {
              console.warn(`Rate limit hit, waiting ${waitTime}ms before retry ${attempt + 1}/${retries}`);
              await new Promise(resolve => setTimeout(resolve, waitTime));
              continue;
            }
            throw new Error('Rate limit exceeded. Please try again later.');
          }
          
          if (response.status === 403) {
            throw new Error('Access forbidden. The blog might be private or require authentication.');
          }
          
          if (response.status === 404) {
            throw new Error('WordPress blog not found. Please check the URL.');
          }
          
          if (response.status >= 500) {
            if (attempt < retries) {
              console.warn(`Server error ${response.status}, retrying in ${Math.pow(2, attempt) * 1000}ms`);
              await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
              continue;
            }
          }
          
          throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
        }

        return response;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          throw new Error('Request timeout. Please check your internet connection.');
        }
        
        if (attempt === retries) {
          throw error;
        }
        
        console.warn(`Request failed, retrying in ${Math.pow(2, attempt) * 1000}ms (attempt ${attempt + 1}/${retries})`);
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }

    throw new Error('All retry attempts failed');
  }

  // Get all published posts with caching (no pagination - return all posts)
  async getPosts(params: {
    search?: string;
    categories?: number[];
    tags?: number[];
    author?: number;
    orderby?: 'date' | 'title' | 'modified' | 'id';
    order?: 'asc' | 'desc';
    per_page?: number;
  } = {}): Promise<{
    posts: BlogPost[];
    total: number;
  }> {
    // Check cache first
    const cacheKey = this.getCacheKey('posts', params);
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log('📦 Using cached posts data');
      return cached;
    }

    const searchParams = new URLSearchParams();
    
    // WordPress.com API - get ALL posts (no pagination)
    searchParams.set('status', 'publish');
    searchParams.set('number', '100'); // Get up to 100 posts (WordPress.com limit)
    
    if (params.search) searchParams.set('search', params.search);
    if (params.categories?.length) searchParams.set('category', params.categories.join(','));
    if (params.tags?.length) searchParams.set('tag', params.tags.join(','));
    if (params.author) searchParams.set('author', params.author.toString());
    if (params.orderby) searchParams.set('order_by', params.orderby);
    if (params.order) searchParams.set('order', params.order);

    console.log(`🔍 Fetching ALL posts from WordPress.com API: ${this.baseUrl}/posts`);
    const response = await this.fetchWithAuth(`${this.baseUrl}/posts?${searchParams}`);
    const data: { found: number; posts: WordPressComPost[]; meta: any } = await response.json();
    
    const total = data.found || 0;
    const posts = data.posts || [];
    
    console.log(`📊 API Response: found=${total}, posts=${posts.length}`);

    // Transform posts
    const transformedPosts = posts.map(post => transformWordPressComPost(post));

    const result = {
      posts: transformedPosts,
      total
    };

    // Cache the result with shorter TTL for search results
    const ttl = params.search ? this.CACHE_TTL / 2 : this.CACHE_TTL;
    this.setCache(cacheKey, result, ttl);

    console.log(`✅ Fetched ${transformedPosts.length} posts from WordPress.com API (${total} total)`);
    return result;
  }

  // Get all posts count for pagination calculation
  async getAllPostsCount(): Promise<number> {
    try {
      // Check cache first
      const cacheKey = this.getCacheKey('posts-count', {});
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log('📦 Using cached posts count');
        return cached;
      }

      const searchParams = new URLSearchParams();
      searchParams.set('status', 'publish');
      searchParams.set('number', '1'); // Only need count
      searchParams.set('page', '1');

      console.log('🔍 Fetching posts count from WordPress.com API');
      const response = await this.fetchWithAuth(`${this.baseUrl}/posts?${searchParams}`);
      const data: { found: number; posts: any[] } = await response.json();
      const total = data.found || 0;

      // Cache the count for longer time
      this.setCache(cacheKey, total, this.CACHE_TTL * 2);

      console.log(`✅ Total posts count: ${total}`);
      return total;
    } catch (error) {
      console.error('Error fetching posts count:', error);
      return 0;
    }
  }

  // Get single post by slug with caching
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      // WordPress.com API doesn't support slug parameter directly
      // We need to fetch all posts and find the one with matching slug
      console.log(`🔍 Fetching post by slug from WordPress.com API: ${slug}`);
      const response = await this.fetchWithAuth(`${this.baseUrl}/posts?status=publish&number=100`);
      const data: { found: number; posts: WordPressComPost[] } = await response.json();
      
      if (data.posts.length === 0) {
        console.log(`❌ No posts found`);
        return null;
      }

      console.log(`📊 Found ${data.posts.length} posts, looking for slug: ${slug}`);
      console.log(`📋 Available slugs: ${data.posts.map(p => p.slug).join(', ')}`);

      // Find the post with matching slug
      const post = data.posts.find(p => p.slug === slug);
      if (!post) {
        console.log(`❌ No post found with slug: ${slug}`);
        return null;
      }

      console.log(`✅ Found post with slug: ${post.slug}, title: ${post.title}`);

      const result = transformWordPressComPost(post);
      
      console.log(`✅ Fetched post from WordPress.com API: ${result.title}`);
      return result;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  }

  // Get post by ID with caching
  async getPostById(id: number): Promise<BlogPost | null> {
    try {
      // Check cache first
      const cacheKey = this.getCacheKey('post', { id });
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log(`📦 Using cached post data for ID: ${id}`);
        return cached;
      }

      console.log(`🔍 Fetching post by ID from WordPress.com API: ${id}`);
      const response = await this.fetchWithAuth(`${this.baseUrl}/posts/${id}`);
      const post: WordPressComPost = await response.json();
      
      if (!post) {
        console.log(`❌ No post found with ID: ${id}`);
        return null;
      }

      const result = transformWordPressComPost(post);
      
      // Cache the result with longer TTL for individual posts
      this.setCache(cacheKey, result, this.CACHE_TTL * 2);
      
      console.log(`✅ Fetched post from WordPress.com API: ${result.title}`);
      return result;
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      return null;
    }
  }

  // Get categories with caching
  async getCategories(): Promise<BlogCategory[]> {
    try {
      // Check cache first
      const cacheKey = this.getCacheKey('categories', {});
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log('📦 Using cached categories data');
        return cached;
      }

      console.log('🔍 Fetching categories from WordPress.com API');
      const response = await this.fetchWithAuth(`${this.baseUrl}/categories`);
      const data: { categories: Record<string, any> } = await response.json();
      
      // Transform WordPress.com categories format
      const result = Object.values(data.categories || {}).map((category: any) => ({
        id: category.ID.toString(),
        name: category.name,
        slug: category.slug,
        description: category.description || '',
        postCount: category.post_count || 0,
        color: '#3B82F6' // Default blue color
      }));
      
      // Cache categories for longer time as they change less frequently
      this.setCache(cacheKey, result, this.CACHE_TTL * 4);
      
      console.log(`✅ Fetched ${result.length} categories from WordPress.com API`);
      return result;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Get tags with caching
  async getTags(): Promise<{ id: string; name: string; slug: string }[]> {
    try {
      // Check cache first
      const cacheKey = this.getCacheKey('tags', {});
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log('📦 Using cached tags data');
        return cached;
      }

      console.log('🔍 Fetching tags from WordPress.com API');
      const response = await this.fetchWithAuth(`${this.baseUrl}/tags`);
      const data: { tags: Record<string, any> } = await response.json();
      
      // Transform WordPress.com tags format
      const result = Object.values(data.tags || {}).map((tag: any) => ({
        id: tag.ID.toString(),
        name: tag.name,
        slug: tag.slug
      }));
      
      // Cache tags for longer time as they change less frequently
      this.setCache(cacheKey, result, this.CACHE_TTL * 4);
      
      console.log(`✅ Fetched ${result.length} tags from WordPress.com API`);
      return result;
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  }

  // Get authors with caching
  async getAuthors(): Promise<Author[]> {
    try {
      // Check cache first
      const cacheKey = this.getCacheKey('authors', {});
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log('📦 Using cached authors data');
        return cached;
      }

      console.log('🔍 Fetching authors from WordPress.com API');
      const response = await this.fetchWithAuth(`${this.baseUrl}/users`);
      const data: { users: Record<string, any> } = await response.json();
      
      // Transform WordPress.com users format
      const result = Object.values(data.users || {}).map((user: any) => ({
        id: user.ID.toString(),
        name: user.name || user.display_name || 'Neznámy autor',
        avatar: user.avatar_URL || '/images/kika-photo-kranio.avif',
        bio: stripHtml(user.description || ''),
        role: 'Autor'
      }));
      
      // Cache authors for longer time as they change less frequently
      this.setCache(cacheKey, result, this.CACHE_TTL * 4);
      
      console.log(`✅ Fetched ${result.length} authors from WordPress.com API`);
      return result;
    } catch (error) {
      console.error('Error fetching authors:', error);
      return [];
    }
  }

  // Search posts with caching
  async searchPosts(query: string, params: {
    categories?: number[];
    tags?: number[];
  } = {}): Promise<{
    posts: BlogPost[];
    total: number;
  }> {
    // Check cache first for search results
    const cacheKey = this.getCacheKey('search', { query, ...params });
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      console.log(`📦 Using cached search results for query: ${query}`);
      return cached;
    }

    console.log(`🔍 Searching posts with query: ${query}`);
    const result = await this.getPosts({
      ...params,
      search: query
    });

    // Cache search results with shorter TTL
    this.setCache(cacheKey, result, this.CACHE_TTL / 2);
    
    return result;
  }

  // Get related posts (by category and tags) with caching
  async getRelatedPosts(
    currentPostId: string,
    categoryId: number,
    tagIds: number[],
    limit: number = 3
  ): Promise<BlogPost[]> {
    try {
      // Check cache first
      const cacheKey = this.getCacheKey('related', { currentPostId, categoryId, tagIds, limit });
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log(`📦 Using cached related posts for post: ${currentPostId}`);
        return cached;
      }

      console.log(`🔍 Fetching related posts for post: ${currentPostId}`);
      const { posts } = await this.getPosts({
        per_page: limit + 1, // Get one extra to exclude current post
        categories: [categoryId],
        orderby: 'date',
        order: 'desc'
      });

      // Filter out current post and limit results
      const result = posts
        .filter(post => post.id !== currentPostId)
        .slice(0, limit);

      // Cache related posts with shorter TTL
      this.setCache(cacheKey, result, this.CACHE_TTL / 2);
      
      console.log(`✅ Found ${result.length} related posts`);
      return result;
    } catch (error) {
      console.error('Error fetching related posts:', error);
      return [];
    }
  }

  // Cache management methods
  public clearCachePublic(): void {
    this.clearCache();
    console.log('🗑️ WordPress API cache cleared');
  }

  public getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }

  // Health check method
  public async healthCheck(): Promise<{
    status: 'healthy' | 'unhealthy';
    message: string;
    apiUrl: string;
    lastError?: string;
  }> {
    try {
      const response = await this.fetchWithAuth(`${this.baseUrl}/posts?per_page=1`, {}, 1);
      
      if (response.ok) {
        return {
          status: 'healthy',
          message: 'WordPress API is accessible',
          apiUrl: this.baseUrl
        };
      } else {
        return {
          status: 'unhealthy',
          message: `WordPress API returned ${response.status}`,
          apiUrl: this.baseUrl
        };
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        message: 'Failed to connect to WordPress API',
        apiUrl: this.baseUrl,
        lastError: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Lazy initialization of WordPress API
let _wordpressAPI: WordPressAPI | null = null;

export function getWordPressAPI(): WordPressAPI {
  if (!_wordpressAPI) {
    _wordpressAPI = new WordPressAPI();
  }
  return _wordpressAPI;
}

// Export function for backward compatibility
export const wordpressAPI = {
  getCategories: () => getWordPressAPI().getCategories(),
  getPosts: (params?: any) => getWordPressAPI().getPosts(params),
  getPostBySlug: (slug: string) => getWordPressAPI().getPostBySlug(slug),
  getPostById: (id: number) => getWordPressAPI().getPostById(id),
  getTags: () => getWordPressAPI().getTags(),
  getAuthors: () => getWordPressAPI().getAuthors(),
  searchPosts: (query: string, params?: any) => getWordPressAPI().searchPosts(query, params),
  getRelatedPosts: (currentPostId: string, categoryId: number, tagIds: number[], limit?: number) => 
    getWordPressAPI().getRelatedPosts(currentPostId, categoryId, tagIds, limit),
  clearCachePublic: () => getWordPressAPI().clearCachePublic(),
  getCacheStats: () => getWordPressAPI().getCacheStats(),
  healthCheck: () => getWordPressAPI().healthCheck()
};
