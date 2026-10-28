import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src https://widgetbe.com https://*.widgetbe.com 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://va.vercel-scripts.com https://www.googletagmanager.com",
  "connect-src https://widgetbe.com https://*.widgetbe.com 'self' https://em.realscout.com https://www.realscout.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.google-analytics.com https://region1.google-analytics.com",
  "img-src https://widgetbe.com https://*.widgetbe.com 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src https://widgetbe.com https://*.widgetbe.com https://www.google.com https://maps.google.com https://www.realscout.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async rewrites() {
    return [{ source: "/:path+\\.md", destination: "/md/:path+" }];
  },
  async redirects() {
    return [
      { source: "/docs/:path*", destination: "/", permanent: true },
      { source: "/examples/:path*", destination: "/", permanent: true },
      { source: "/README.md", destination: "/", permanent: true },
      { source: "/README-zh.md", destination: "/", permanent: true },
      { source: "/buy-homes-in-the-paseos-summerlin", destination: "/buy", permanent: true },
      { source: "/sell-your-paseos-summerlin-home", destination: "/sell", permanent: true },
      { source: "/relocate-to-the-paseos-summerlin", destination: "/living-in-the-paseos", permanent: true },
      { source: "/the-paseos-village-guide", destination: "/living-in-the-paseos", permanent: true },
      { source: "/about-dr-jan-duffy", destination: "/about", permanent: true },
      { source: "/paseos-village-faq", destination: "/faq", permanent: true },
      { source: "/book-a-consultation", destination: "/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
