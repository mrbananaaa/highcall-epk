// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: "standalone",
  allowedDevOrigins: ["dev.banana.com"],
  images: {
    dangerouslyAllowSVG: true,
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
