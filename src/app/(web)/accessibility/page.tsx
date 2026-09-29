import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "YARA wants its website and public information to be usable by as many people as possible.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      aside={
        <div className="rounded-[var(--radius-panel)] bg-forest p-7 text-white md:p-10">
          <h2 className="text-xl font-medium tracking-tight text-lime">Report a problem</h2>
          <p className="mt-3 leading-relaxed text-white/85">
            Tell us which page or material you were trying to access and what difficulty you experienced.
          </p>
          <a href="mailto:info@yarafrica.org" className="mt-5 inline-block text-lg font-medium text-lime hover:underline">
            info@yarafrica.org
          </a>
        </div>
      }
    >
      <p>YARA wants its website and public information to be usable by as many people as possible.</p>
      <p>We are working to make pages clear to navigate, readable across different screen sizes and usable with common assistive technologies.</p>
      <p>If you encounter an accessibility problem or need YARA information in another format, contact <a href="mailto:info@yarafrica.org">info@yarafrica.org</a>.</p>
      <p>Please tell us which page or material you were trying to access and what difficulty you experienced. We will use reported issues to improve the site.</p>
    </LegalPage>
  );
}
