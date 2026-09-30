export const site = {
  name: "Young Africans Research Academy",
  shortName: "YARA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yarafrica.org",
  description:
    "YARA identifies promising African researchers early and gives them rigorous training and sustained mentorship to produce evidence that can inform policy and strengthen institutions.",
  email: "info@yarafrica.org",
  location: "Accra, Ghana",
};

/**
 * Links that are switched on only when confirmed. Leave as null to keep the
 * related buttons hidden (copy master: "Application and donation buttons
 * remain hidden or non-actionable until the relevant external form/payment
 * link is confirmed").
 */
export const liveLinks = {
  aiEthicsApplication: process.env.NEXT_PUBLIC_AI_ETHICS_APPLY_URL || null,
  aiEthicsStatus: process.env.NEXT_PUBLIC_AI_ETHICS_STATUS || null,
  donation: process.env.NEXT_PUBLIC_DONATION_URL || null,
};

export const symposium = {
  registerUrl: "https://luma.com/u4ssvfm4",
  date: "30 September 2026",
  time: "9:00 AM–5:00 PM GMT",
  venue: "Google AI Community Center, Accra",
  registrationDeadline: "25 September 2026",
  // End of event day in Accra (GMT). After this the page shows the archive block first.
  endsAt: new Date("2026-09-30T17:00:00Z"),
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/yararesearch/" },
  { label: "Instagram", href: "https://www.instagram.com/yara_research/" },
  { label: "X", href: "https://x.com/yara_research" },
  { label: "YouTube", href: "https://www.youtube.com/@weareyara" },
];

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Programmes", href: "/programmes" },
  { label: "Symposium 2026", href: "/symposium-2026" },
  { label: "Stories", href: "/stories" },
];

export const footerNav = {
  explore: [
    { label: "Research", href: "/research" },
    { label: "Programmes", href: "/programmes" },
    { label: "Symposium 2026", href: "/symposium-2026" },
    { label: "Stories", href: "/stories" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  organisation: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "For media", href: "/media" },
    { label: "Get involved", href: "/get-involved" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

/** Add a `logo` path (in /public) as each logo file is supplied; without one the name renders as text. */
export const partners: { name: string; logo?: string }[] = [
  { name: "CABI", logo: "/images/partners/cabi.png" },
  { name: "Emerging Climate Frontiers", logo: "/images/partners/emerging-climate-frontiers.png" },
  { name: "Telecel Ghana", logo: "/images/partners/telecel.png" },
];
