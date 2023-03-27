/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tacobell.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
