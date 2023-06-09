/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    incrementalCacheHandlerPath: '../cache-handler.js'
  }
}

module.exports = nextConfig
