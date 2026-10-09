import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/images/:file*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Starter-template routes were replaced by the Paseo Village site.
      { source: "/docs/:path*", destination: "/", permanent: true },
      { source: "/examples/:path*", destination: "/", permanent: true },
      { source: "/about", destination: "/about-dr-jan-duffy", permanent: true },
      { source: "/README.md", destination: "/", permanent: true },
      { source: "/README-zh.md", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
