/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
    ],
  },
};

module.exports = nextConfig;
