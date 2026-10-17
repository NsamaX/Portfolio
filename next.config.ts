import type { NextConfig } from "next";

// Shared by link only: readable by any visitor or bot that is given the URL, but kept out of search results.
// The header also covers files that cannot carry a meta tag (resume.pdf, llms.txt, images).
const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }];
  },
};

export default nextConfig;
