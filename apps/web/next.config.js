/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['@healthcare/ui', '@healthcare/types', '@healthcare/shared'],
  },
};

module.exports = nextConfig;
