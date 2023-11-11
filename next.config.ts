/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apollo.code-village.ro',
        // You can specify a pathname pattern here if needed
      },
    ],
  },
  // Include other Next.js configurations here if necessary
};

module.exports = nextConfig;

