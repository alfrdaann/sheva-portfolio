import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow serving local images from public dir (default) + future remote sources
    formats: ["image/webp", "image/avif"],
    deviceSizes: [390, 430, 640, 768, 1024, 1280, 1440, 1920],
  },
};

export default nextConfig;
