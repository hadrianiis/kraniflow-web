/**
 * Constants for blog functionality - centralized for better maintainability
 */

// Animation configurations
export const ANIMATION_CONFIG = {
  // Framer Motion variants
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
        duration: 0.3,
      },
    },
  },
  
  cardVariants: {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },
  
  // Transition durations
  durations: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },
  
  // Easing functions
  easing: {
    easeOut: [0.4, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
} as const;

// Blog configuration
export const BLOG_CONFIG = {
  // Pagination
  defaultPageSize: 10,
  maxPageSize: 50,
  
  // Related posts
  maxRelatedPosts: 3,
  
  // Reading time calculation
  wordsPerMinute: 200,
  
  // Cache settings
  cacheTTL: {
    posts: 60 * 5, // 5 minutes
    post: 60 * 10, // 10 minutes
    related: 60 * 15, // 15 minutes
  },
  
  // Image settings
  imageSettings: {
    featuredImage: {
      width: 800,
      height: 400,
      quality: 85,
    },
    authorAvatar: {
      width: 40,
      height: 40,
      quality: 90,
    },
    blogCard: {
      width: 400,
      height: 250,
      quality: 80,
    },
  },
} as const;

// SEO and metadata
export const SEO_CONFIG = {
  siteName: 'KranioFlow',
  defaultTitle: 'KranioFlow - Kraniosakrálna terapia',
  defaultDescription: 'Objavte silu biodynamickej kraniosakrálnej terapie (BCST) v Bratislave. Uvoľnite stres, zmiernite bolesť a obnovte vnútorný pokoj.',
  defaultKeywords: 'kraniosakrálna terapia, BCST, biodynamická terapia, Bratislava, zdravie, wellness',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    siteName: 'KranioFlow',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    creator: '@kranioflow',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  postNotFound: 'Článok nenájdený',
  postsNotFound: 'Žiadne články nie sú k dispozícii',
  loadingError: 'Nastala chyba pri načítaní článku',
  imageLoadError: 'Obrázok sa nepodarilo načítať',
  networkError: 'Chyba siete - skúste to znova',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  postLoaded: 'Článok bol úspešne načítaný',
  postsLoaded: 'Články boli úspešne načítané',
} as const;

// Loading states
export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
} as const;

// Blog post variants
export const BLOG_VARIANTS = {
  default: 'default',
  compact: 'compact',
  featured: 'featured',
} as const;

// Image contexts for optimization
export const IMAGE_CONTEXTS = {
  BLOG_CARD: 'BLOG_CARD',
  FEATURED_IMAGE: 'FEATURED_IMAGE',
  AUTHOR_AVATAR: 'AUTHOR_AVATAR',
  DEFAULT: 'DEFAULT',
} as const;

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  // Intersection Observer
  intersectionThreshold: 0.1,
  intersectionRootMargin: '50px',
  
  // Scroll optimization
  scrollThrottleDelay: 16, // ~60fps
  scrollDebounceDelay: 150,
  
  // Animation performance
  maxAnimationsPerFrame: 10,
  animationFrameBudget: 16, // ms
  
  // Memory management
  maxCacheSize: 100,
  cacheCleanupInterval: 5 * 60 * 1000, // 5 minutes
} as const;
