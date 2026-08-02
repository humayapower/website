/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Allows testing the dev server from a phone on the same network. Entries
  // are hostnames without scheme, port or trailing punctuation. A malformed
  // value here does not error: the page still renders, but dev-only client
  // requests are blocked, so the app never hydrates and nothing is clickable.
  allowedDevOrigins: ["192.168.0.3", "*.local"],
};

export default nextConfig;
