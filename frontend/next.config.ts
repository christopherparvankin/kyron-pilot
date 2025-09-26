import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: "/Users/chrisparvankin/Desktop/kryon-updated/kyron-pilot/frontend",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [75, 80, 85, 90, 95],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
