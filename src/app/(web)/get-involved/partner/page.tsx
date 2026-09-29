import type { Metadata } from "next";
import { EnquiryForm, type FieldDef } from "@/components/Forms";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partner with YARA",
  description:
    "YARA works with universities, research institutions, companies and public organisations that can strengthen research or create a credible route for it to go further.",
  alternates: { canonical: "/get-involved/partner" },
};

const fields: FieldDef[] = [
  { name: "organisation", label: "Organisation", required: true, autoComplete: "organization" },
  { name: "name", label: "Contact name", required: true, autoComplete: "name" },
  { name: "role", label: "Role", required: true, autoComplete: "organization-title" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  {
    name: "organisation_type",
    label: "Type of organisation",
    type: "select",
    required: true,
    wide: true,
    options: [
      "University",
      "Research institution",
      "Company",
      "Public institution",
      "Funder or foundation",
      "Non-profit or civil society",
      "Other",
    ],
  },
  { name: "proposal", label: "What would you like to work with YARA on?", type: "textarea", required: true },
  { name: "contribution", label: "What can your organisation contribute?", type: "textarea", required: true },
  { name: "links", label: "Relevant links or supporting information", type: "textarea" },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner"
        tone="forest"
        title="Partner with YARA"
        lede={
          <>
            <p>
              YARA works with universities, research institutions, companies, public organisations and other
              organisations that can strengthen a piece of research or create a credible route for it to go further.
            </p>
            <p className="text-base md:text-lg">
              A partnership might give a researcher access to data, technical expertise, a laboratory or field site,
              research supervision, an industry problem, institutional knowledge or a setting in which research can be
              tested or used.
            </p>
          </>
        }
      />

      <Section labelledBy="routes">
        <h2 id="routes" className="sr-only">
          Ways to partner
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div id="research-opportunity" className="flex flex-col rounded-[var(--radius-card)] bg-lime p-8 text-forest-deep md:p-10">
            <Eyebrow className="text-forest-deep">Bring a research opportunity</Eyebrow>
            <p className="mt-4 flex-1 text-lg leading-relaxed">
              If your organisation has a research question, dataset, field site or area of active inquiry that could
              support a well-scoped project, tell us about it.
            </p>
            <ButtonLink href="#partnership-form" className="mt-7 self-start">
              Propose a research opportunity
            </ButtonLink>
          </div>
          <div className="flex flex-col rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-line md:p-10">
            <Eyebrow>Build a wider partnership</Eyebrow>
            <p className="mt-4 flex-1 text-lg leading-relaxed text-ink/85">
              For collaborations involving programmes, research infrastructure, institutional exchange or longer-term
              work with YARA:
            </p>
            <ButtonLink href="#partnership-form" variant="outline" className="mt-7 self-start text-forest">
              Start a partnership conversation
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="cream-deep" id="partnership-form" labelledBy="partnership-form-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <h2 id="partnership-form-heading">
            <Eyebrow>Partnership form</Eyebrow>
          </h2>
          <div className="rounded-[var(--radius-panel)] bg-white p-6 ring-1 ring-line md:p-10">
            <EnquiryForm
              kind="partner"
              fields={fields}
              submitLabel="Send enquiry"
              confirmation="Thank you. We will review the enquiry and contact you where there is a clear basis for further discussion."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
