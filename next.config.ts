import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/workshop-samples",
        destination: "/leadership-experiences",
        permanent: true,
      },
      {
        source: "/workshop-samples/:path*",
        destination: "/leadership-experiences/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
