import type { Metadata } from "next";
import { EnquiryForm, type FieldDef } from "@/components/Forms";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mentor with YARA",
  description: "YARA mentors work directly with emerging researchers as they develop an original project.",
  alternates: { canonical: "/get-involved/mentor" },
};

const fields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "institution", label: "Institution or organisation", required: true, autoComplete: "organization" },
  { name: "role", label: "Role", required: true, autoComplete: "organization-title" },
  { name: "field", label: "Field / discipline", required: true },
  { name: "country", label: "Country / time zone", required: true },
  { name: "research_interests", label: "Current research interests", type: "textarea", required: true },
  { name: "profile", label: "Short professional profile", type: "textarea", required: true },
  { name: "time", label: "How much time can you offer?", required: true, wide: true },
  { name: "profile_url", label: "LinkedIn / institutional profile", type: "url", wide: true },
];

export default function MentorPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentor"
        title="Mentor with YARA"
        lede={
          <>
            <p>YARA mentors work directly with emerging researchers as they develop an original project.</p>
            <p className="text-base md:text-lg">
              A mentor may help a Fellow refine the research question, think through methods, review work in progress,
              respond to problems that emerge during the project and strengthen the final research.
            </p>
            <p className="text-base md:text-lg">
              We match mentors with researchers based on field, project needs and availability.
            </p>
          </>
        }
      >
        <ButtonLink href="#mentor-form">Submit mentor interest</ButtonLink>
      </PageHero>
      <Section tone="cream-deep" id="mentor-form" labelledBy="mentor-form-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div>
            <h2 id="mentor-form-heading">
              <Eyebrow>Express interest in mentoring</Eyebrow>
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-ink">
              Tell us about your field, current research interests and the kind of guidance you can offer.
            </p>
          </div>
          <div className="rounded-[var(--radius-panel)] bg-white p-6 ring-1 ring-line md:p-10">
            <EnquiryForm
              kind="mentor"
              fields={fields}
              submitLabel="Submit mentor interest"
              confirmation="Thank you. The YARA team will review your information and contact you if there is a suitable research match."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
