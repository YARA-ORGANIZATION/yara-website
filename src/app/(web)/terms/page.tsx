import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Young Africans Research Academy website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>The information on this website is provided by the Young Africans Research Academy for general information about YARA, its programmes, research and activities.</p>
      <p>Research described on the website may be at different stages of development. Where relevant, YARA will distinguish between ongoing research, work under review and published outputs.</p>
      <p>Unless otherwise stated, website text, graphics and YARA materials may not be reproduced for commercial use without permission.</p>
      <p>Research datasets, publications and other research materials may have their own licences or terms of use. Those terms take precedence for the relevant material.</p>
      <p>Links to external websites are provided for reference. YARA is not responsible for the content or availability of external websites.</p>
      <p>For questions about use of YARA materials, contact <a href="mailto:info@yarafrica.org">info@yarafrica.org</a>.</p>
    </LegalPage>
  );
}
