/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['static.tvmaze.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
