// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "standalone",
  allowedDevOrigins: ["dev.banana.com"],
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
