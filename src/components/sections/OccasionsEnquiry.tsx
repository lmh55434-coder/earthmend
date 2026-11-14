import { useState, type FormEvent } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const OCCASION_TYPES = ["Wedding", "Birthday", "Baby Shower", "Other"] as const;

type FormState = {
  name: string;
  email: string;
  occasionType: (typeof OCCASION_TYPES)[number];
  eventDate: string;
  quantity: string;
  personalisation: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  occasionType: "Wedding",
  eventDate: "",
  quantity: "",
  personalisation: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

const fieldClasses =
  "mt-2 w-full border-0 border-b border-line-inverted-strong bg-transparent py-3 text-body-lg !text-ivory placeholder:text-kraft/60 transition-colors duration-200 ease-editorial focus:border-kraft focus:outline-none";
const labelClasses = "text-eyebrow !text-kraft";
const errorClasses = "mt-1.5 text-small text-[#E8A0A0]";

type TextFieldProps = {
  id: keyof FormState;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  autoComplete?: string;
};

function TextField({ id, label, type = "text", value, onChange, error, optional, autoComplete }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {optional && <span className="normal-case tracking-normal text-kraft/70"> (optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClasses}
      />
      {error && (
        <p id={`${id}-error`} className={errorClasses}>
          {error}
        </p>
      )}
    </div>
  );
}

type TextAreaFieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  optional?: boolean;
  placeholder?: string;
};

function TextAreaField({ id, label, value, onChange, rows = 4, optional, placeholder }: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {optional && <span className="normal-case tracking-normal text-kraft/70"> (optional)</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldClasses} resize-none border border-line-inverted-strong px-4`}
      />
    </div>
  );
}

/**
 * The page's closing section and the actual conversion point — a Netlify
 * form, separate from the corporate "quote-request" form since the fields
 * differ (occasion type and event date instead of seeds and packaging).
 * Deliberately asks for an estimated quantity rather than a fixed one, and
 * never states a price or delivery timeline — EarthMend confirms both
 * directly with the customer.
 */
export default function OccasionsEnquiry() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    const firstInvalidField = Object.keys(validationErrors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setSubmitError(false);
    setSubmitting(true);

    try {
      // Netlify Forms identifies the submission by the "form-name" field and
      // the fields present, matched against the hidden static form in
      // index.html — not by which page or component posted it.
      const body = new FormData(event.currentTarget);
      const response = await fetch("/", { method: "POST", body });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section id="enquiry" tone="charcoal" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel tone="inverted">Get in Touch</SectionLabel>
          </div>
          <h2 className="text-h1 !text-ivory mt-4">Let's Make Your Occasion More Meaningful.</h2>
          <p className="text-body-lg !text-kraft mx-auto mt-5 max-w-xl">
            Tell us about your celebration and we'll help you create personalised plantable gifts
            for your guests.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-content-text lg:mt-16">
          {submitted ? (
            <Reveal className="border-t border-line-inverted pt-10 text-center">
              <p className="text-h3 !text-ivory tracking-normal">
                Thank you — your enquiry is on its way.
              </p>
              <p className="text-body !text-kraft mt-3">
                We've received your details and will be in touch to talk through your occasion,
                design and quantity.
              </p>
            </Reveal>
          ) : (
            <Reveal delay={80}>
              <form
                name="occasion-enquiry"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8 border-t border-line-inverted pt-10"
              >
                <input type="hidden" name="form-name" value="occasion-enquiry" readOnly />
                <p hidden>
                  <label>
                    Leave this field blank
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <TextField
                    id="name"
                    label="Full Name"
                    value={form.name}
                    onChange={(v) => updateField("name", v)}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="occasionType" className={labelClasses}>
                    Occasion Type
                  </label>
                  <select
                    id="occasionType"
                    name="occasionType"
                    value={form.occasionType}
                    onChange={(e) => updateField("occasionType", e.target.value as FormState["occasionType"])}
                    className={`${fieldClasses} cursor-pointer`}
                  >
                    {OCCASION_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-charcoal text-ivory">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <TextField
                    id="eventDate"
                    label="Event Date"
                    value={form.eventDate}
                    onChange={(v) => updateField("eventDate", v)}
                    optional
                  />
                  <TextField
                    id="quantity"
                    label="Estimated Quantity"
                    value={form.quantity}
                    onChange={(v) => updateField("quantity", v)}
                    optional
                  />
                </div>

                <TextAreaField
                  id="personalisation"
                  label="Personalisation Requirements"
                  value={form.personalisation}
                  onChange={(v) => updateField("personalisation", v)}
                  placeholder="Names, event date, your thank-you message, preferred card design…"
                  rows={4}
                  optional
                />

                <TextAreaField
                  id="message"
                  label="Additional Message"
                  value={form.message}
                  onChange={(v) => updateField("message", v)}
                  rows={4}
                  optional
                />

                {submitError && (
                  <p className="text-body text-[#E8A0A0]">
                    Something went wrong sending your enquiry. Please try again in a moment.
                  </p>
                )}

                <p className="text-small !text-kraft/80">
                  Let us know your preferred quantity and design — we'll confirm pricing and
                  timing with you directly.
                </p>

                <Button type="submit" variant="primary-inverted" disabled={submitting}>
                  {submitting ? "Sending…" : "Request a Personalised Quote"}
                </Button>
              </form>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
