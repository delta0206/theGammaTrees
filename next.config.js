/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')({
  dest: './public',
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = process.env.NODE_ENV === 'production' ? withPlugins([withPWA, withAnalyzer], nextConfig) : nextConfig;
