/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add these options to help with path issues
  trailingSlash: true,
  assetPrefix: './', // Use relative paths for assets
}

export default nextConfig

