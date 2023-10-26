/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/reactportfolio', // Specify the base path
    assetPrefix: '/reactportfolio/', // Specify the asset prefix
  
    output: 'export', // Enable static HTML export
    experimental: {
      images: true,
      // other experimental options...
    },
    // other configurations...
  };
  
  module.exports = nextConfig;