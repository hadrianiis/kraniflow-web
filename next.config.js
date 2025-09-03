/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Temporarily removing experimental features to test
  // experimental: {
  //   optimizePackageImports: ['styled-components'],
  // },
  // Pre lepšiu kompatibilitu s Vercelom
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    // Pridanie podpory pre statické súbory
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
}

module.exports = nextConfig
