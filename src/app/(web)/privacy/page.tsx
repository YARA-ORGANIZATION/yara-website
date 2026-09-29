import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How YARA collects and uses personal information you provide.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <p>YARA collects personal information when you choose to provide it through forms such as programme applications, event registrations, newsletter subscriptions, mentorship enquiries and partnership enquiries.</p>
      <p>We use that information to administer the relevant programme or request, communicate with you and operate YARA’s activities.</p>
      <p>We do not sell personal information.</p>
      <p>Some forms, event registrations, mailing lists or website functions may use third-party services. Where they do, information may also be processed under the terms of those services.</p>
      <p>If you would like to ask about personal information you have provided to YARA, request a correction or make another privacy enquiry, contact <a href="mailto:info@yarafrica.org">info@yarafrica.org</a>.</p>
    </LegalPage>
  );
}
