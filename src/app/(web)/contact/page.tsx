import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { EnquiryForm, type FieldDef } from "@/components/Forms";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "For general enquiries about YARA, our research or programmes, contact info@yarafrica.org.",
  alternates: { canonical: "/contact" },
};

const fields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "organisation", label: "Organisation", autoComplete: "organization" },
  {
    name: "reason",
    label: "Reason for contacting us",
    type: "select",
    required: true,
    options: ["General enquiry", "Research", "Programmes", "Partnership", "Donation", "Media", "Symposium"],
  },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        tone="lime"
        title="For general enquiries about YARA, our research or programmes:"
      />
      <Section labelledBy="contact-form-heading" id="contact-form">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div className="space-y-5">
            <div className="rounded-[var(--radius-card)] bg-forest p-7 text-white">
              <Mail aria-hidden className="size-6 text-lime" />
              <a href={`mailto:${site.email}`} className="mt-4 block text-2xl font-medium tracking-tight hover:underline">
                {site.email}
              </a>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <MapPin aria-hidden className="size-6 text-forest" />
              <p className="mt-4 text-lg leading-relaxed">
                {site.name}
                <br />
                {site.location}
              </p>
            </div>
          </div>
          <div className="rounded-[var(--radius-panel)] bg-white p-6 ring-1 ring-line md:p-10">
            <h2 id="contact-form-heading" className="mb-8">
              <Eyebrow>Send an enquiry</Eyebrow>
            </h2>
            <EnquiryForm
              kind="contact"
              fields={fields}
              submitLabel="Send enquiry"
              confirmation="Thank you. Your message has reached the YARA team. We will respond through the email address you provided."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
