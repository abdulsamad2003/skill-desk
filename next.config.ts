import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Font optimization is enabled by default in Next.js 13+
  images: {
    domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
  },
};

export default nextConfig;
