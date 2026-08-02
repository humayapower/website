import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: { formats: ["image/avif", "image/webp"] },
  allowedDevOrigins: ["192.168.0.3", "*.local"], // hostname only, no port, no colon
};

export default nextConfig;
