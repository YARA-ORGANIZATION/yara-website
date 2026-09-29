import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const neue = localFont({
  src: [
    { path: "./fonts/NeueHaasDisplayLight.ttf", weight: "300", style: "normal" },
    { path: "./fonts/NeueHaasDisplayRoman.ttf", weight: "400", style: "normal" },
    { path: "./fonts/NeueHaasDisplayMedium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/NeueHaasDisplayBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "YARA | Young Africans Research Academy",
    template: "%s | YARA",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
  },
  twitter: { card: "summary_large_image", site: "@yara_research" },
};

export const viewport: Viewport = {
  themeColor: "#fcf8ee",
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
    <html lang="en-GB" className={neue.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
