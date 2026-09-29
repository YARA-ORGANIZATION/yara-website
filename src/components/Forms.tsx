"use client";

import { useActionState, useId, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitForm, type FormKind, type FormState } from "@/app/(web)/actions";
import { cx } from "./ui";

const initial: FormState = { status: "idle" };

function SubmitButton({ children, tone }: { children: ReactNode; tone: "light" | "dark" }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cx(
        "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors disabled:opacity-60",
        tone === "dark" ? "bg-lime text-forest-deep hover:bg-[#cdeb57]" : "bg-forest text-lime hover:bg-forest-deep",
      )}
    >
      {pending ? "Sending…" : children}
      {!pending && <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}

function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function Confirmation({ children, tone }: { children: ReactNode; tone: "light" | "dark" }) {
  return (
    <div
      role="status"
      className={cx(
        "flex items-start gap-3 rounded-[var(--radius-card)] p-5",
        tone === "dark" ? "bg-white/10 text-white" : "bg-lime-soft text-forest-deep",
      )}
    >
      <CheckCircle2 aria-hidden className={cx("mt-0.5 size-5 shrink-0", tone === "dark" ? "text-lime" : "text-forest")} />
      <p>{children}</p>
    </div>
  );
}

function ErrorNote({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-sm font-medium text-red-700">
      {message}
    </p>
  );
}

export function NewsletterForm({
  kind = "newsletter",
  tone = "dark",
  buttonLabel = "Subscribe",
  confirmation = "You’re subscribed. We’ll send you updates from YARA at the email address provided.",
}: {
  kind?: Extract<FormKind, "newsletter" | "interest-list">;
  tone?: "light" | "dark";
  buttonLabel?: string;
  confirmation?: string;
}) {
  const [state, action] = useActionState(submitForm.bind(null, kind, ["email"]), initial);
  const id = useId();

  if (state.status === "success") return <Confirmation tone={tone}>{confirmation}</Confirmation>;

  return (
    <form action={action} className="relative w-full max-w-xl">
      <Honeypot />
      <label htmlFor={`${id}-email`} className={cx("mb-2 block text-sm", tone === "dark" ? "text-white/80" : "text-muted")}>
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={cx(
            "min-w-0 flex-1 rounded-full px-5 py-3 text-base outline-none transition focus:ring-2",
            tone === "dark"
              ? "bg-white text-ink placeholder:text-ink/40 focus:ring-lime"
              : "bg-white text-ink ring-1 ring-line placeholder:text-ink/40 focus:ring-forest",
          )}
        />
        <SubmitButton tone={tone}>{buttonLabel}</SubmitButton>
      </div>
      <div className="mt-3">
        <ErrorNote message={state.message} />
      </div>
    </form>
  );
}

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  autoComplete?: string;
  wide?: boolean;
  hint?: string;
};

export function EnquiryForm({
  kind,
  fields,
  submitLabel,
  confirmation,
}: {
  kind: Extract<FormKind, "contact" | "mentor" | "partner">;
  fields: FieldDef[];
  submitLabel: string;
  confirmation: string;
}) {
  const required = fields.filter((f) => f.required).map((f) => f.name);
  const [state, action] = useActionState(submitForm.bind(null, kind, required), initial);
  const id = useId();

  if (state.status === "success") return <Confirmation tone="light">{confirmation}</Confirmation>;

  const inputCls =
    "w-full rounded-xl bg-cream px-4 py-3 text-base text-ink ring-1 ring-line outline-none transition placeholder:text-ink/40 focus:bg-white focus:ring-2 focus:ring-forest";

  return (
    <form action={action} className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot />
      {fields.map((f) => {
        const fid = `${id}-${f.name}`;
        return (
          <div key={f.name} className={cx(f.wide || f.type === "textarea" ? "sm:col-span-2" : "")}>
            <label htmlFor={fid} className="mb-2 block text-sm font-medium text-ink">
              {f.label}
              {!f.required && <span className="font-normal text-muted"> (optional)</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea id={fid} name={f.name} required={f.required} rows={5} className={inputCls} />
            ) : f.type === "select" ? (
              <select id={fid} name={f.name} required={f.required} defaultValue="" className={inputCls}>
                <option value="" disabled>
                  Select one
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={fid}
                type={f.type ?? "text"}
                name={f.name}
                required={f.required}
                autoComplete={f.autoComplete}
                className={inputCls}
              />
            )}
            {f.hint && <p className="mt-1.5 text-sm text-muted">{f.hint}</p>}
          </div>
        );
      })}
      <div className="flex flex-col items-start gap-3 sm:col-span-2">
        <ErrorNote message={state.message} />
        <SubmitButton tone="light">{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
