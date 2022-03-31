/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  plugins: [require("postcss-100vh-fix"), require("autoprefixer")],
};
