/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = withMDX({
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

module.exports = nextConfig;
