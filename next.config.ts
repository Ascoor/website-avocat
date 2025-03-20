import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // السماح بالصور من Sanity CDN
      },
      {
        protocol: 'http',
        hostname: 'localhost', // السماح بالصور من localhost
      },
    ],
  },
};

export default nextConfig;
