import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ warnings won't block Vercel builds
  },
};

export default nextConfig;
