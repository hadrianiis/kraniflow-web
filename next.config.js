/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    optimizePackageImports: ['styled-components'],
  },
  // Pre lepšiu kompatibilitu s Vercelom
  reactStrictMode: true,
}

module.exports = nextConfig
