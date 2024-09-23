/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "valiant-partridge-243.convex.cloud" },
      { hostname: "oaidalleapiprodscus.blob.core.windows.net" },
      { hostname: "avid-avocet-76.convex.cloud" },
    ],
  },
};

export default nextConfig;
