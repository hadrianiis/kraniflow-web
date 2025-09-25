/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Transpile styled-components for better compatibility
  transpilePackages: ['styled-components'],
  // Server external packages (moved from experimental)
  serverExternalPackages: [],
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
  // Disable development-only features in production
  ...(process.env.NODE_ENV === 'production' && {
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  }),
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Mobile optimization
    loader: 'default',
    // Image quality configuration
    qualities: [25, 50, 75, 85, 90, 100],
    // SVG optimization
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.wp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's1.wp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's2.wp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kranioflow.wordpress.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['styled-components', 'lucide-react', 'framer-motion', '@radix-ui/react-select', '@radix-ui/react-slot'],
    // Optimize CSS loading
    optimizeCss: true,
    // Enable modern bundling
    esmExternals: true,
  },
  // Development server configuration
  devIndicators: {
    position: 'bottom-right',
  },
  // Performance optimizations
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Enhanced headers for performance and security
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        // CORS headers for network access
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET, POST, PUT, DELETE, OPTIONS',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization, X-Requested-With',
        },
      ],
    },
    {
      source: '/fonts/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/images/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/svgs/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
        {
          key: 'Content-Type',
          value: 'image/svg+xml',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
    {
      source: '/sw.js',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
        {
          key: 'Service-Worker-Allowed',
          value: '/',
        },
      ],
    },
  ],
  webpack: (config, { dev, isServer }) => {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Production optimizations
    if (!isServer && process.env.NODE_ENV === 'production') {
      // Optimize critical path
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Critical path optimization
          critical: {
            name: 'critical',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            priority: 50,
            reuseExistingChunk: true,
          },
          // Styled-components chunk
          styledComponents: {
            name: 'styled-components',
            test: /[\\/]node_modules[\\/]styled-components[\\/]/,
            chunks: 'all',
            priority: 40,
            reuseExistingChunk: true,
          },
          // Mobile-specific chunk
          mobile: {
            name: 'mobile',
            test: /[\\/]node_modules[\\/](framer-motion|@radix-ui)[\\/]/,
            chunks: 'all',
            priority: 30,
            reuseExistingChunk: true,
          },
          // Default vendor chunk
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };

      // Optimize module resolution - removed problematic aliases
    }
    
    return config;
  },
}

module.exports = nextConfig
