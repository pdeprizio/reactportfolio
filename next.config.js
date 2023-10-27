const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '' : ''; // For production, basePath is empty
const assetPrefix = isProduction ? '/' : '/'; // For production, assetPrefix is '/'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: basePath,
  assetPrefix: assetPrefix,
  // Enable static HTML export
  experimental: {
    images: true,
    // other experimental options...
  },
  // other configurations...
};

module.exports = nextConfig;
