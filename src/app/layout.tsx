import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "YARA | Young Africans Research Academy",
    template: "%s | YARA",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "YARA",
    "Young Africans Research Academy",
    "African research",
    "research talent",
    "artificial intelligence",
    "climate research",
    "public health",
    "STEM fellowship",
    "research mentorship",
    "Ghana",
    "Africa",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    images: [{ url: "/page-image.png", width: 1200, height: 630, alt: "YARA – Young Africans Research Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yara_research",
    creator: "@yara_research",
    images: ["/page-image.png"],
  },
  other: {
    "GPTBot": "index, follow",
    "ClaudeBot": "index, follow",
    "Google-Extended": "index, follow",
    "PerplexityBot": "index, follow",
    "CCBot": "index, follow",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDFA",
  viewportFit: "cover",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  email: site.email,
  logo: `${site.url}/images/yara-logo-dark.png`,
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  sameAs: [
    "https://www.linkedin.com/company/yararesearch/",
    "https://www.instagram.com/yara_research/",
    "https://x.com/yara_research",
    "https://www.youtube.com/@weareyara",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
