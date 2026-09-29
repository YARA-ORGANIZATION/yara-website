import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "YARA wants its website and public information to be usable by as many people as possible.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility">
      <p>YARA wants its website and public information to be usable by as many people as possible.</p>
      <p>We are working to make pages clear to navigate, readable across different screen sizes and usable with common assistive technologies.</p>
      <p>If you encounter an accessibility problem or need YARA information in another format, contact <a href="mailto:info@yarafrica.org">info@yarafrica.org</a>.</p>
      <p>Please tell us which page or material you were trying to access and what difficulty you experienced. We will use reported issues to improve the site.</p>
    </LegalPage>
  );
}
