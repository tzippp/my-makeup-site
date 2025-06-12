/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourdomain.com"], // Add allowed image domains
    formats: ["image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;