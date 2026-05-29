import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 't4.ftcdn.net' },
      { protocol: 'https', hostname: 'cdn.dribbble.com' },
    ],
  },
};

export default nextConfig;
