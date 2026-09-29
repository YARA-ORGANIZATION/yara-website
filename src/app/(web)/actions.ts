"use server";

import { site } from "@/lib/site";

export type FormState = { status: "idle" | "success" | "error"; message?: string };

export type FormKind = "newsletter" | "interest-list" | "contact" | "mentor" | "partner";

const subjects: Record<FormKind, string> = {
  newsletter: "Newsletter subscription",
  "interest-list": "Opportunities interest list",
  contact: "Website enquiry",
  mentor: "Mentor interest",
  partner: "Partnership enquiry",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Delivers a website form submission.
 *
 * Configure one or both of:
 *   FORMS_WEBHOOK_URL – receives a JSON POST ({ form, submittedAt, fields }).
 *                       Works with Zapier, Make, n8n, Google Apps Script, Formspree, etc.
 *   RESEND_API_KEY    – emails the submission to FORMS_NOTIFY_EMAIL (defaults to info@yarafrica.org)
 *                       from FORMS_FROM_EMAIL (must be a verified Resend sender).
 */
async function deliver(kind: FormKind, fields: Record<string, string>) {
  const webhook = process.env.FORMS_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const payload = { form: kind, submittedAt: new Date().toISOString(), fields };
  const tasks: Promise<Response>[] = [];

  if (webhook) {
    tasks.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
  }

  if (resendKey) {
    const text = Object.entries(fields)
      .map(([k, v]) => `${k}:\n${v || "—"}`)
      .join("\n\n");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.FORMS_FROM_EMAIL ?? `YARA Website <website@yarafrica.org>`,
          to: [process.env.FORMS_NOTIFY_EMAIL ?? site.email],
          reply_to: fields.email || undefined,
          subject: `[yarafrica.org] ${subjects[kind]}`,
          text,
        }),
      }),
    );
  }

  if (tasks.length === 0) {
    if (process.env.NODE_ENV === "production") {
      console.error(`[forms] No delivery configured; dropped ${kind} submission.`);
      throw new Error("Form delivery is not configured");
    }
    console.info(`[forms] (dev) ${kind}`, payload);
    return;
  }

  const results = await Promise.all(tasks);
  const failed = results.find((r) => !r.ok);
  if (failed) throw new Error(`Form delivery failed with ${failed.status}`);
}

export async function submitForm(
  kind: FormKind,
  required: string[],
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Honeypot: real people never fill this field.
  if (formData.get("company_website")) return { status: "success" };

  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("$") || key === "company_website" || typeof value !== "string") continue;
    fields[key] = value.trim().slice(0, 5000);
  }

  const missing = required.filter((k) => !fields[k]);
  if (missing.length) {
    return { status: "error", message: "Please complete the required fields." };
  }
  if (fields.email && !EMAIL.test(fields.email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await deliver(kind, fields);
    return { status: "success" };
  } catch (err) {
    console.error("[forms]", err);
    return {
      status: "error",
      message: `Something went wrong sending your submission. Please try again, or email ${site.email}.`,
    };
  }
}
