import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Routes from the previous version of the site.
    return [
      { source: "/get-to-know-us", destination: "/about", permanent: true },
      { source: "/who-we-are", destination: "/about/team", permanent: true },
      { source: "/mission-purpose", destination: "/about", permanent: true },
      { source: "/fellowship-program", destination: "/programmes/stem-research-fellowship", permanent: true },
      { source: "/for-fellows", destination: "/opportunities", permanent: true },
      { source: "/for-mentors", destination: "/get-involved/mentor", permanent: true },
      { source: "/trainings-workshops", destination: "/programmes", permanent: true },
      { source: "/whats-new", destination: "/stories", permanent: true },
      { source: "/blog/:slug*", destination: "/stories", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/team", destination: "/about/team", permanent: true },
      { source: "/yara-2031", destination: "/strategy", permanent: true },
      { source: "/apply", destination: "/opportunities", permanent: false },
    ];
  },
};

export default nextConfig;
