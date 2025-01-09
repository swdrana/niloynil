import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['askproject.net'], // Add the allowed domain here
  },
};

export default nextConfig;
