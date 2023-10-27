const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '' : '';
const assetPrefix = isProduction ? '/' : '/';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: basePath,
  assetPrefix: assetPrefix,
  // Enable static HTML export

  // other configurations...
};

module.exports = nextConfig;

