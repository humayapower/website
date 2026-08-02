/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Allows testing the dev server from a phone on the same network.
  allowedDevOrigins: ["192.168.0.3:"],
};

export default nextConfig;
