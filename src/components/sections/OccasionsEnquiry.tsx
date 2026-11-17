import { useEffect, useRef, useState, type FormEvent } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const OCCASION_TYPES = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Baby Shower",
  "Bridal Shower",
  "Graduation",
  "Anniversary",
  "Christening / Naming Ceremony",
  "Corporate Event",
  "Other",
] as const;

const SEED_PREFERENCE_OPTIONS = [
  "Flower Seeds",
  "Australian Native Wildflowers",
  "Herb Seeds",
  "Vegetable Seeds",
  "Specific Seed Variety",
  "Not Sure Yet – Recommend an Option",
] as const;

const AU_STATES = ["QLD", "NSW", "VIC", "SA", "WA", "TAS", "NT", "ACT"] as const;

type FormState = {
  name: string;
  email: string;
  occasionType: (typeof OCCASION_TYPES)[number];
  eventDate: string;
  quantity: string;
  brideName: string;
  groomName: string;
  weddingDateConfirm: string;
  namesToPrint: string;
  penBarrelMessage: string;
  cardMessage: string;
  seedPreferences: string[];
  specificSeedVariety: string;
  designPreferences: string;
  recipientName: string;
  streetAddress: string;
  aptUnit: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  occasionType: "Wedding",
  eventDate: "",
  quantity: "",
  brideName: "",
  groomName: "",
  weddingDateConfirm: "",
  namesToPrint: "",
  penBarrelMessage: "",
  cardMessage: "",
  seedPreferences: [],
  specificSeedVariety: "",
  designPreferences: "",
  recipientName: "",
  streetAddress: "",
  aptUnit: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "Australia",
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
  if (!values.occasionType) errors.occasionType = "Please select an occasion type.";
  if (values.postcode.trim() && !/^\d{4}$/.test(values.postcode.trim())) {
    errors.postcode = "Please enter a valid 4-digit postcode.";
  }
  return errors;
}

// Dark-form colour hierarchy, scoped to this component only (the Business
// Gifting form and every other dark section keep their own existing
// colours untouched):
//  - headings (SubsectionHeading)      -> kraft, a warm muted gold
//  - field labels                      -> ivory, a light warm cream
//  - entered values                    -> paper, bright white
//  - placeholder text                  -> MUTED_GREY, a neutral muted grey
//  - supporting/instructional text     -> SOFT_GREY, a dimmer version of it
//  - required-field marker             -> kraft at reduced opacity
//  - input borders (resting / focus)   -> MUTED_BORDER / kraft
// Tailwind's content scanner reads this file's raw text statically, so
// every arbitrary-value class below is written out in full wherever it's
// used — interpolating a hex into a `text-[${...}]` bracket at the call
// site wouldn't be seen by the scanner and would silently fail to generate
// any CSS. A full, already-formed utility string (like these two) is safe
// to reuse via a constant; a bracket built from pieces is not.
const MUTED_PLACEHOLDER_CLASS = "placeholder:text-[#8C8678]";
const MUTED_OPTION_TEXT_CLASS = "text-[#8C8678]";
const SOFT_GREY_CLASS = "text-[#8C8678]/75";
const MUTED_BORDER = "border-[#6E6858]/55";

const fieldClasses =
  `mt-2 w-full border-0 border-b ${MUTED_BORDER} bg-transparent py-3 text-body-lg !text-paper ${MUTED_PLACEHOLDER_CLASS} transition-colors duration-200 ease-editorial focus:border-kraft focus:outline-none`;
const labelClasses = "text-eyebrow !text-sm !text-ivory";
const requiredMarkClasses = "ml-0.5 !text-kraft/90";
const errorClasses = "mt-1.5 text-small text-[#E8A0A0]";
const noteClasses = `text-small ${SOFT_GREY_CLASS}`;

type TextFieldProps = {
  id: keyof FormState;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  readOnly?: boolean;
};

function TextField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  optional,
  required,
  autoComplete,
  placeholder,
  readOnly,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && (
          <span aria-hidden="true" className={requiredMarkClasses}>
            *
          </span>
        )}
        {optional && <span className="normal-case tracking-normal text-kraft/70"> (optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClasses} ${readOnly ? "cursor-not-allowed opacity-70" : ""}`}
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

type SelectFieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  optional?: boolean;
  required?: boolean;
  placeholderOption?: string;
};

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
  optional,
  required,
  placeholderOption,
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && (
          <span aria-hidden="true" className={requiredMarkClasses}>
            *
          </span>
        )}
        {optional && <span className="normal-case tracking-normal text-kraft/70"> (optional)</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldClasses} cursor-pointer`}
      >
        {placeholderOption && (
          <option value="" className="bg-charcoal text-ivory">
            {placeholderOption}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-charcoal text-ivory">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

type SeedMultiSelectProps = {
  selected: string[];
  onToggle: (label: string, checked: boolean) => void;
};

const SEED_PANEL_ID = "seed-preferences-panel";

/**
 * A compact multi-select dropdown for seed preferences — a custom
 * disclosure (button + absolutely-positioned panel) rather than a native
 * <select multiple>, so it can show removable chips when closed and a
 * checkbox per option when open, on both desktop and mobile. The real
 * checkbox inputs inside the panel still carry `name="seedPreferences"`
 * and each option's exact value, so Netlify Forms submission is
 * unaffected by this being a custom control — it's the same data, just a
 * different interaction shell around it.
 */
function SeedMultiSelect({ selected, onToggle }: SeedMultiSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <label className={labelClasses}>
        Your Seed Preferences <span className="normal-case tracking-normal text-kraft/70">(optional)</span>
      </label>

      <div
        role="button"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={SEED_PANEL_ID}
        aria-label="Your Seed Preferences, optional"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        className={`${fieldClasses} flex min-h-[52px] cursor-pointer flex-wrap items-center justify-between gap-2`}
      >
        <span className="flex flex-1 flex-wrap gap-2">
          {selected.length === 0 ? (
            <span className={MUTED_OPTION_TEXT_CLASS}>Choose your seed preferences</span>
          ) : (
            selected.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 border border-kraft/40 bg-kraft/10 px-2.5 py-1 text-small !text-paper"
              >
                {label}
                <button
                  type="button"
                  aria-label={`Remove ${label}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle(label, false);
                  }}
                  className="ml-0.5 !text-kraft transition-colors duration-150 ease-editorial hover:!text-paper"
                >
                  ×
                </button>
              </span>
            ))
          )}
        </span>
        <svg
          aria-hidden="true"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={`shrink-0 transition-transform duration-200 ease-editorial ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#D8C49A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/*
        Always mounted, never conditionally rendered: these checkboxes are
        the real form fields FormData reads from at submit time, and the
        panel is normally closed by then — unmounting them on close would
        silently drop every selected seed preference from the submission.
        `hidden` only affects display, not form data.
      */}
      <div
        id={SEED_PANEL_ID}
        hidden={!open}
        className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 overflow-y-auto border border-[#6E6858]/55 bg-charcoal p-2 shadow-xl"
      >
        {SEED_PREFERENCE_OPTIONS.map((option) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className={`flex min-h-[44px] cursor-pointer items-center gap-3 px-3 transition-colors duration-150 ease-editorial ${
                checked ? "bg-moss/15" : "hover:bg-white/5"
              }`}
            >
              <input
                type="checkbox"
                name="seedPreferences"
                value={option}
                checked={checked}
                onChange={(e) => onToggle(option, e.target.checked)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-150 ease-editorial peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-kraft ${
                  checked ? "border-moss bg-moss" : "border-[#6E6858]/70"
                }`}
              >
                {checked && (
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                    <path
                      d="M1 4.5L4 7.5L10 1"
                      stroke="#F5F0E5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className={`text-body-lg ${checked ? "!text-paper" : MUTED_OPTION_TEXT_CLASS}`}>{option}</span>
            </label>
          );
        })}
        <div className="mt-1 flex justify-end border-t border-[#6E6858]/40 pt-2">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-3 py-2 text-small !text-kraft transition-colors duration-150 ease-editorial hover:!text-paper"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

function SubsectionHeading({ title, supporting }: { title: string; supporting?: string }) {
  return (
    <div className="border-t border-line-inverted pt-8">
      <p className="text-h3 !text-kraft tracking-normal">{title}</p>
      {supporting && <p className={`text-body ${SOFT_GREY_CLASS} mt-2`}>{supporting}</p>}
    </div>
  );
}

/**
 * The page's closing section and the actual conversion point — a Netlify
 * form, separate from the corporate "quote-request" form since the fields
 * differ (occasion type and event date instead of seeds and packaging).
 * Deliberately asks for an estimated quantity rather than a fixed one, and
 * never states a price or delivery timeline — EarthMend confirms both
 * directly with the customer. Only name, email and occasion type are
 * required; everything else (personalisation, seeds, design, delivery) is
 * optional at enquiry stage, so EarthMend can follow up on whatever a
 * customer chooses to share rather than blocking the enquiry on it.
 */
export default function OccasionsEnquiry() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const isWedding = form.occasionType === "Wedding";

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleSeedPreference(label: string, checked: boolean) {
    setForm((prev) => ({
      ...prev,
      seedPreferences: checked
        ? [...prev.seedPreferences, label]
        : prev.seedPreferences.filter((value) => value !== label),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

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
          <p className={`text-body-lg ${SOFT_GREY_CLASS} mx-auto mt-5 max-w-xl`}>
            Tell us about your celebration and we'll help you create personalised plantable gifts
            for your guests.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-content-text lg:mt-16">
          {submitted ? (
            <Reveal className="border-t border-line-inverted pt-10 text-center">
              <p className="text-h3 !text-ivory tracking-normal">Thank you for your enquiry!</p>
              <p className={`text-body ${SOFT_GREY_CLASS} mt-3`}>
                We've received your details and look forward to creating something special for
                your occasion.
              </p>
              <p className={`text-body ${SOFT_GREY_CLASS} mt-3`}>
                Our team will review your preferences and get back to you with personalised
                design ideas and a quotation.
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

                {/* 1. Customer Details */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <TextField
                    id="name"
                    label="Full Name"
                    value={form.name}
                    onChange={(v) => updateField("name", v)}
                    error={errors.name}
                    autoComplete="name"
                    required
                  />
                  <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                    error={errors.email}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* 2. Occasion Details */}
                <SelectField
                  id="occasionType"
                  label="Occasion Type"
                  value={form.occasionType}
                  options={OCCASION_TYPES}
                  onChange={(v) => updateField("occasionType", v as FormState["occasionType"])}
                  required
                />

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

                {/* 3. Personalisation Details */}
                <SubsectionHeading
                  title="Let's Personalise Your Favours"
                  supporting="All optional — share as much or as little as you'd like at this stage."
                />

                {isWedding ? (
                  <>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <TextField
                        id="brideName"
                        label="Bride's Name"
                        value={form.brideName}
                        onChange={(v) => updateField("brideName", v)}
                        optional
                      />
                      <TextField
                        id="groomName"
                        label="Groom's Name"
                        value={form.groomName}
                        onChange={(v) => updateField("groomName", v)}
                        optional
                      />
                    </div>
                    <TextField
                      id="weddingDateConfirm"
                      label="Wedding Date Confirmation"
                      value={form.weddingDateConfirm}
                      onChange={(v) => updateField("weddingDateConfirm", v)}
                      optional
                    />
                  </>
                ) : (
                  <TextField
                    id="namesToPrint"
                    label="Name(s) to Be Printed"
                    value={form.namesToPrint}
                    onChange={(v) => updateField("namesToPrint", v)}
                    optional
                    placeholder="e.g. Sarah, or Sarah & Family"
                  />
                )}

                <TextAreaField
                  id="penBarrelMessage"
                  label="Preferred Message for the Pen Barrel"
                  value={form.penBarrelMessage}
                  onChange={(v) => updateField("penBarrelMessage", v)}
                  rows={2}
                  optional
                  placeholder="e.g. Thank you for celebrating with us."
                />

                <TextAreaField
                  id="cardMessage"
                  label="Preferred Message for the Favour Card"
                  value={form.cardMessage}
                  onChange={(v) => updateField("cardMessage", v)}
                  rows={3}
                  optional
                  placeholder="e.g. Thank you for sharing in our special day."
                />

                {/* 4. Seed Preferences */}
                <SubsectionHeading
                  title="Your Seed Preferences"
                  supporting="Optional — choose as many as you like."
                />

                <SeedMultiSelect selected={form.seedPreferences} onToggle={toggleSeedPreference} />

                {form.seedPreferences.includes("Specific Seed Variety") && (
                  <TextField
                    id="specificSeedVariety"
                    label="Which flower, herb or vegetable would you prefer?"
                    value={form.specificSeedVariety}
                    onChange={(v) => updateField("specificSeedVariety", v)}
                    optional
                    placeholder="e.g. Basil, Sunflower, Cherry Tomato"
                  />
                )}

                <p className={noteClasses}>
                  Have a particular seed variety in mind? Let us know. We'll confirm availability
                  and suitability for our plantable pens.
                </p>

                {/* 5. Design Preferences */}
                <div>
                  <TextAreaField
                    id="designPreferences"
                    label="Do you have a preferred colour scheme or event theme?"
                    value={form.designPreferences}
                    onChange={(v) => updateField("designPreferences", v)}
                    rows={3}
                    optional
                    placeholder="e.g. Sage green and ivory, rustic, botanical, minimalist, or share any design inspiration."
                  />
                  <p className={`${noteClasses} mt-2`}>
                    Feel free to include a link to a Pinterest board or other inspiration.
                  </p>
                </div>

                {/* 6. Delivery Details */}
                <SubsectionHeading
                  title="Delivery Information"
                  supporting="Optional — share these details and we'll include delivery in your quotation."
                />

                <TextField
                  id="recipientName"
                  label="Recipient's Full Name"
                  value={form.recipientName}
                  onChange={(v) => updateField("recipientName", v)}
                  optional
                  autoComplete="name"
                />
                <TextField
                  id="streetAddress"
                  label="Street Address"
                  value={form.streetAddress}
                  onChange={(v) => updateField("streetAddress", v)}
                  optional
                  autoComplete="address-line1"
                />
                <TextField
                  id="aptUnit"
                  label="Apartment / Unit"
                  value={form.aptUnit}
                  onChange={(v) => updateField("aptUnit", v)}
                  optional
                  autoComplete="address-line2"
                />

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <TextField
                    id="suburb"
                    label="Suburb"
                    value={form.suburb}
                    onChange={(v) => updateField("suburb", v)}
                    optional
                    autoComplete="address-level2"
                  />
                  <SelectField
                    id="state"
                    label="State"
                    value={form.state}
                    options={AU_STATES}
                    onChange={(v) => updateField("state", v)}
                    optional
                    placeholderOption="Select State"
                  />
                  <TextField
                    id="postcode"
                    label="Postcode"
                    value={form.postcode}
                    onChange={(v) => updateField("postcode", v)}
                    error={errors.postcode}
                    optional
                    autoComplete="postal-code"
                  />
                </div>

                <TextField
                  id="country"
                  label="Country"
                  value={form.country}
                  onChange={(v) => updateField("country", v)}
                  readOnly
                />
                <p className={noteClasses}>We currently deliver within Australia.</p>

                {/* 7. Additional Message */}
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

                <p className={noteClasses}>
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
