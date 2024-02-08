const withMDX = require("@next/mdx")();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
