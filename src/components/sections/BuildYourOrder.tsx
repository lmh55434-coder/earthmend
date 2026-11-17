import { useEffect, useRef, useState, type FormEvent } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ZoomableImage from "../ui/ZoomableImage";
import seedVarieties from "../../assets/marketing/seed-varieties.jpg";

const PURPOSE_OPTIONS = [
  "Corporate Gifting",
  "Conferences and Seminars",
  "Exhibitions and Trade Shows",
  "Marketing Campaigns",
  "Employee Gifts",
  "Client Appreciation Gifts",
  "Promotional Merchandise",
  "Educational Institutions",
  "Other",
] as const;

const QUANTITY_RANGES = [
  "50–99",
  "100–249",
  "250–499",
  "500–999",
  "1,000–2,499",
  "2,500–4,999",
  "5,000+",
  "Not Sure Yet",
] as const;

const AU_STATES = ["QLD", "NSW", "VIC", "SA", "WA", "TAS", "NT", "ACT"] as const;

const LOGO_PLACEMENT_OPTIONS = [
  "On the Pen Barrel",
  "On the Card Holder",
  "On Both",
  "Not Sure – Recommend a Layout",
] as const;

const SEED_PREFERENCE_OPTIONS = [
  "Flower Seeds",
  "Australian Native Wildflowers",
  "Herb Seeds",
  "Vegetables and Fruits",
  "Specific Seed Variety",
  "Not Sure – Recommend an Option",
] as const;

const PACKAGING_PREFERENCE_OPTIONS = [
  "Individual Card Packaging",
  "Bulk Packaging",
  "Custom Branded Packaging",
  "Not Sure – Need Recommendations",
] as const;

const ACCEPTED_LOGO_EXTENSIONS = ["png", "jpg", "jpeg", "svg", "pdf"];
const MAX_LOGO_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_LOGO_FILES = 5;

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  purpose: string[];
  estimatedQuantity: string;
  deliveryDate: string;
  deliverySuburb: string;
  deliveryState: string;
  deliveryPostcode: string;
  logoPlacement: string;
  brandColours: string;
  brandPenMessage: string;
  brandCardMessage: string;
  seedPreferences: string[];
  specificSeedVariety: string;
  packagingPreferences: string[];
  additionalRequirements: string;
  designReferenceLink: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  purpose: [],
  estimatedQuantity: "",
  deliveryDate: "",
  deliverySuburb: "",
  deliveryState: "",
  deliveryPostcode: "",
  logoPlacement: "",
  brandColours: "",
  brandPenMessage: "",
  brandCardMessage: "",
  seedPreferences: [],
  specificSeedVariety: "",
  packagingPreferences: [],
  additionalRequirements: "",
  designReferenceLink: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.companyName.trim()) errors.companyName = "Please enter your company or organisation name.";
  if (!values.contactName.trim()) errors.contactName = "Please enter the contact person's full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter a business email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.estimatedQuantity) errors.estimatedQuantity = "Please select an estimated quantity.";
  if (values.deliveryPostcode.trim() && !/^\d{4}$/.test(values.deliveryPostcode.trim())) {
    errors.deliveryPostcode = "Please enter a valid 4-digit postcode.";
  }
  if (values.designReferenceLink.trim() && !/^https?:\/\/.+/i.test(values.designReferenceLink.trim())) {
    errors.designReferenceLink = "Please include the full link, starting with http:// or https://.";
  }
  return errors;
}

function validateLogoFiles(incoming: File[], existing: File[]): { accepted: File[]; rejections: string[] } {
  const rejections: string[] = [];
  const accepted = [...existing];

  for (const file of incoming) {
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ACCEPTED_LOGO_EXTENSIONS.includes(extension)) {
      rejections.push(`${file.name} — unsupported file type. Use PNG, JPG, SVG or PDF.`);
      continue;
    }
    if (file.size > MAX_LOGO_FILE_SIZE) {
      rejections.push(`${file.name} — file is larger than 5MB.`);
      continue;
    }
    if (accepted.length >= MAX_LOGO_FILES) {
      rejections.push(`${file.name} — maximum of ${MAX_LOGO_FILES} files reached.`);
      continue;
    }
    if (accepted.some((f) => f.name === file.name && f.size === file.size)) continue;
    accepted.push(file);
  }

  return { accepted, rejections };
}

const fieldClasses =
  "mt-2 w-full border-0 border-b border-line-inverted-strong bg-transparent py-3 text-body-lg !text-ivory placeholder:text-kraft/60 transition-colors duration-200 ease-editorial focus:border-kraft focus:outline-none";
const labelClasses = "text-eyebrow !text-kraft";
const errorClasses = "mt-1.5 text-small text-[#E8A0A0]";
const noteClasses = "text-small !text-kraft/80";

type TextFieldProps = {
  id: keyof FormState;
  label: string;
  type?: "text" | "email" | "tel" | "url";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  autoComplete?: string;
  placeholder?: string;
};

function TextField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  optional,
  autoComplete,
  placeholder,
}: TextFieldProps) {
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
        placeholder={placeholder}
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

type SelectFieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  optional?: boolean;
  placeholderOption?: string;
  error?: string;
};

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
  optional,
  placeholderOption,
  error,
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {optional && <span className="normal-case tracking-normal text-kraft/70"> (optional)</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
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
      {error && (
        <p id={`${id}-error`} className={errorClasses}>
          {error}
        </p>
      )}
    </div>
  );
}

type CheckboxOptionProps = {
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

// Shared dark checkbox treatment for every multi-select group in this form
// (purpose, seed preferences, packaging preferences) — the same visual
// language as the configurator's seed picker it replaces.
function CheckboxOption({ name, label, checked, onChange }: CheckboxOptionProps) {
  return (
    <label
      className={`group flex min-h-[44px] cursor-pointer items-center gap-4 border px-5 py-4 transition-colors duration-200 ease-editorial ${
        checked ? "border-moss bg-moss/15" : "border-line-inverted-strong bg-transparent hover:border-kraft"
      }`}
    >
      <input
        type="checkbox"
        name={name}
        value={label}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-200 ease-editorial peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-kraft ${
          checked ? "border-moss bg-moss" : "border-line-inverted-strong"
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
      <span
        className={`text-body-lg transition-colors duration-200 ease-editorial ${
          checked ? "!text-ivory" : "!text-kraft group-hover:!text-ivory"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

type LogoUploadProps = {
  files: File[];
  errors: string[];
  onPick: (fileList: FileList) => void;
  onRemove: (file: File) => void;
};

/**
 * Multi-file logo upload. Netlify Forms only detects a file field from the
 * hidden static snapshot in index.html at build time — the real submission
 * still has to carry actual File objects in FormData for Netlify to store
 * them. Native <input type="file" multiple> can't have its `files` list
 * assembled across several picks from React state directly, so a hidden
 * input's `.files` is kept in sync via a DataTransfer buffer: that's the
 * element `new FormData(form)` actually reads from at submit time.
 *
 * Validation (type, size, count) happens in the parent so rejected files
 * produce a visible message rather than being dropped silently — this
 * component only renders the picker and the accepted-file list it's given.
 */
function LogoUpload({ files, errors, onPick, onRemove }: LogoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    inputRef.current.files = dataTransfer.files;
  }, [files]);

  function handlePick(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    onPick(fileList);
  }

  return (
    <div>
      <label htmlFor="logo-upload-input" className={labelClasses}>
        Upload Your Company Logo <span className="normal-case tracking-normal text-kraft/70">(optional)</span>
      </label>
      <p className={`${noteClasses} mt-1.5`}>
        Upload your logo so we can explore how your brand could appear on your plantable pens and
        packaging.
      </p>

      <div className="mt-3 space-y-2">
        {files.map((file) => (
          <div
            key={`${file.name}-${file.size}`}
            className="flex items-center justify-between gap-4 border border-line-inverted-strong px-4 py-3"
          >
            <span className="text-body truncate !text-ivory">{file.name}</span>
            <button
              type="button"
              onClick={() => onRemove(file)}
              className="text-small shrink-0 !text-kraft underline decoration-line-inverted-strong underline-offset-2 transition-colors duration-200 ease-editorial hover:!text-ivory"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {files.length < MAX_LOGO_FILES && (
        <label
          htmlFor="logo-upload-input"
          className="mt-3 flex min-h-[44px] cursor-pointer items-center justify-center border border-dashed border-line-inverted-strong px-4 py-6 text-center transition-colors duration-200 ease-editorial hover:border-kraft"
        >
          <span className="text-body !text-kraft">
            Click to choose logo or artwork files — PNG, JPG, SVG or PDF
          </span>
        </label>
      )}

      <input
        ref={inputRef}
        id="logo-upload-input"
        name="logo"
        type="file"
        multiple
        accept=".png,.jpg,.jpeg,.svg,.pdf,image/png,image/jpeg,image/svg+xml,application/pdf"
        onChange={(e) => handlePick(e.target.files)}
        className="sr-only"
      />

      {errors.length > 0 && (
        <ul className="mt-2 space-y-1">
          {errors.map((message) => (
            <li key={message} className={errorClasses}>
              {message}
            </li>
          ))}
        </ul>
      )}

      <p className={`${noteClasses} mt-2`}>Up to {MAX_LOGO_FILES} files, 5MB each.</p>
    </div>
  );
}

function StepHeading({ number, label, supporting }: { number: string; label: string; supporting: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="text-h2 !text-kraft" aria-hidden="true">
        {number}
      </span>
      <div>
        <p className="text-h3 !text-ivory tracking-widest">{label.toUpperCase()}</p>
        <p className="text-body !text-kraft mt-1">{supporting}</p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-eyebrow !text-kraft">{label}</dt>
      <dd className="text-body mt-1 !text-kraft">{value}</dd>
    </div>
  );
}

/**
 * A personalised business gifting enquiry — replaces the old priced
 * quantity/seed/packaging configurator and its "Continue to Quote" handoff
 * with a single Netlify form submission, mirroring the Special Occasions
 * enquiry form's design language and never showing a price. EarthMend
 * confirms quantity-based pricing and delivery timing directly with each
 * business afterwards.
 */
export default function BuildYourOrder() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [logoFiles, setLogoFiles] = useState<File[]>([]);
  const [logoErrors, setLogoErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleListField(field: "purpose" | "seedPreferences" | "packagingPreferences", label: string, checked: boolean) {
    setForm((prev) => ({
      ...prev,
      [field]: checked ? [...prev[field], label] : prev[field].filter((value) => value !== label),
    }));
  }

  function handleLogoPick(fileList: FileList) {
    const { accepted, rejections } = validateLogoFiles(Array.from(fileList), logoFiles);
    setLogoFiles(accepted);
    setLogoErrors(rejections);
  }

  function handleLogoRemove(file: File) {
    setLogoFiles((prev) => prev.filter((f) => f !== file));
    setLogoErrors([]);
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
      // index.html. The logo input's real DOM `.files` (kept in sync with
      // `logoFiles` state) is what FormData actually reads here.
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

  if (submitted) {
    return (
      <Section id="build-your-order" tone="charcoal" spacing="lg">
        <Container size="narrow">
          <Reveal className="mx-auto max-w-content-text text-center">
            <p className="text-h3 !text-ivory tracking-normal">
              Thank you for considering Earthmend for your business gifting!
            </p>
            <p className="text-body-lg !text-kraft mt-4">
              We've received your enquiry and branding details. Our team will review your
              requirements and get back to you with personalised design ideas and a quotation.
            </p>
            <p className="text-body-lg !text-kraft mt-4">
              We look forward to creating something special for your brand.
            </p>
          </Reveal>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="build-your-order" tone="charcoal" spacing="lg">
      <Container size="narrow">
        <Reveal className="max-w-content-text">
          <SectionLabel tone="inverted">Business Gifting Enquiry</SectionLabel>
          <h2 className="text-h1 !text-ivory mt-4">Your Brand. A Gift That Gives Back.</h2>
          <p className="text-body-lg !text-kraft mt-5">
            Create personalised plantable pens for your business, event or campaign. Share your
            requirements and let us help bring your brand to life.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-x-16">
          <Reveal className="lg:col-span-7">
            <form
              name="business-gift-enquiry"
              onSubmit={handleSubmit}
              noValidate
              encType="multipart/form-data"
              className="space-y-12"
            >
              <input type="hidden" name="form-name" value="business-gift-enquiry" readOnly />
              <p hidden>
                <label>
                  Leave this field blank
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              {/* 01 — Business Details */}
              <div className="border-t border-line-inverted pt-8">
                <StepHeading
                  number="01"
                  label="Business Details"
                  supporting="Tell us who we're creating this for."
                />
                <div className="mt-6 space-y-8">
                  <TextField
                    id="companyName"
                    label="Company / Organisation Name"
                    value={form.companyName}
                    onChange={(v) => updateField("companyName", v)}
                    error={errors.companyName}
                    autoComplete="organization"
                  />
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <TextField
                      id="contactName"
                      label="Contact Person Full Name"
                      value={form.contactName}
                      onChange={(v) => updateField("contactName", v)}
                      error={errors.contactName}
                      autoComplete="name"
                    />
                    <TextField
                      id="email"
                      label="Business Email Address"
                      type="email"
                      value={form.email}
                      onChange={(v) => updateField("email", v)}
                      error={errors.email}
                      autoComplete="email"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <TextField
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => updateField("phone", v)}
                      optional
                      autoComplete="tel"
                    />
                    <TextField
                      id="website"
                      label="Company Website"
                      type="url"
                      value={form.website}
                      onChange={(v) => updateField("website", v)}
                      optional
                      autoComplete="url"
                    />
                  </div>
                </div>
              </div>

              {/* 02 — Order Requirements */}
              <div className="border-t border-line-inverted pt-8">
                <StepHeading
                  number="02"
                  label="Order Requirements"
                  supporting="What's this order for, and roughly how many?"
                />
                <div className="mt-6 space-y-3">
                  {PURPOSE_OPTIONS.map((option) => (
                    <CheckboxOption
                      key={option}
                      name="purpose"
                      label={option}
                      checked={form.purpose.includes(option)}
                      onChange={(checked) => toggleListField("purpose", option, checked)}
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <SelectField
                    id="estimatedQuantity"
                    label="Estimated Quantity"
                    value={form.estimatedQuantity}
                    options={QUANTITY_RANGES}
                    onChange={(v) => updateField("estimatedQuantity", v)}
                    placeholderOption="Select a range"
                    error={errors.estimatedQuantity}
                  />
                </div>

                <div className="mt-8">
                  <TextField
                    id="deliveryDate"
                    label="Required Delivery Date"
                    value={form.deliveryDate}
                    onChange={(v) => updateField("deliveryDate", v)}
                    optional
                  />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <TextField
                    id="deliverySuburb"
                    label="Delivery Suburb"
                    value={form.deliverySuburb}
                    onChange={(v) => updateField("deliverySuburb", v)}
                    optional
                    autoComplete="address-level2"
                  />
                  <SelectField
                    id="deliveryState"
                    label="Delivery State"
                    value={form.deliveryState}
                    options={AU_STATES}
                    onChange={(v) => updateField("deliveryState", v)}
                    optional
                    placeholderOption="Select State"
                  />
                  <TextField
                    id="deliveryPostcode"
                    label="Postcode"
                    value={form.deliveryPostcode}
                    onChange={(v) => updateField("deliveryPostcode", v)}
                    error={errors.deliveryPostcode}
                    optional
                    autoComplete="postal-code"
                  />
                </div>
              </div>

              {/* 03 — Company Branding */}
              <div className="border-t border-line-inverted pt-8">
                <StepHeading
                  number="03"
                  label="Company Branding"
                  supporting="Share your logo and how you'd like it to appear."
                />
                <div className="mt-6 space-y-8">
                  <LogoUpload
                    files={logoFiles}
                    errors={logoErrors}
                    onPick={handleLogoPick}
                    onRemove={handleLogoRemove}
                  />

                  <SelectField
                    id="logoPlacement"
                    label="Logo Placement"
                    value={form.logoPlacement}
                    options={LOGO_PLACEMENT_OPTIONS}
                    onChange={(v) => updateField("logoPlacement", v)}
                    optional
                    placeholderOption="Select a placement"
                  />

                  <TextField
                    id="brandColours"
                    label="Preferred Brand Colours"
                    value={form.brandColours}
                    onChange={(v) => updateField("brandColours", v)}
                    optional
                    placeholder="e.g. Navy and gold, matching our brand palette"
                  />

                  <TextAreaField
                    id="brandPenMessage"
                    label="Custom Pen Message"
                    value={form.brandPenMessage}
                    onChange={(v) => updateField("brandPenMessage", v)}
                    rows={2}
                    optional
                    placeholder="Enter your preferred message or branding text for the pen barrel."
                  />

                  <TextAreaField
                    id="brandCardMessage"
                    label="Custom Card Message"
                    value={form.brandCardMessage}
                    onChange={(v) => updateField("brandCardMessage", v)}
                    rows={2}
                    optional
                    placeholder="Enter your preferred message for the card holder."
                  />
                </div>
              </div>

              {/* 04 — Seed Preferences */}
              <div className="border-t border-line-inverted pt-8">
                <StepHeading
                  number="04"
                  label="Seed Preferences"
                  supporting="Select one or more — optional."
                />
                <div className="mt-6 space-y-3">
                  {SEED_PREFERENCE_OPTIONS.map((option) => (
                    <CheckboxOption
                      key={option}
                      name="seedPreferences"
                      label={option}
                      checked={form.seedPreferences.includes(option)}
                      onChange={(checked) => toggleListField("seedPreferences", option, checked)}
                    />
                  ))}
                </div>

                {form.seedPreferences.includes("Specific Seed Variety") && (
                  <div className="mt-6">
                    <TextField
                      id="specificSeedVariety"
                      label="Which flower, herb or vegetable would you prefer?"
                      value={form.specificSeedVariety}
                      onChange={(v) => updateField("specificSeedVariety", v)}
                      optional
                      placeholder="e.g. Basil, Sunflower, Cherry Tomato"
                    />
                  </div>
                )}

                <p className={`${noteClasses} mt-4`}>
                  Have a particular seed variety in mind? Let us know. We'll confirm availability
                  and suitability for our plantable pens.
                </p>

                <div className="mt-8 bg-ivory p-4 sm:p-6">
                  <ZoomableImage
                    src={seedVarieties}
                    alt="A catalogue of seed varieties available in the EarthMend seed capsule: herbs (basil, thyme, sage, parsley, rucola), flowers (sunflower, forget-me-not, wildflower, daisy, eternity flower), and vegetables and fruit (cherry tomato, cucumber, melon, strawberry, chili)"
                    className="w-full"
                    desktopZoomable
                  />
                </div>
              </div>

              {/* 05 — Packaging Preferences */}
              <div className="border-t border-line-inverted pt-8">
                <StepHeading
                  number="05"
                  label="Packaging Preferences"
                  supporting="Select one or more — optional."
                />
                <div className="mt-6 space-y-3">
                  {PACKAGING_PREFERENCE_OPTIONS.map((option) => (
                    <CheckboxOption
                      key={option}
                      name="packagingPreferences"
                      label={option}
                      checked={form.packagingPreferences.includes(option)}
                      onChange={(checked) => toggleListField("packagingPreferences", option, checked)}
                    />
                  ))}
                </div>
              </div>

              {/* 06 — Additional Information */}
              <div className="border-t border-line-inverted pt-8">
                <StepHeading
                  number="06"
                  label="Additional Information"
                  supporting="Anything else that would help us prepare your quotation."
                />
                <div className="mt-6 space-y-8">
                  <TextAreaField
                    id="additionalRequirements"
                    label="Additional Requirements"
                    value={form.additionalRequirements}
                    onChange={(v) => updateField("additionalRequirements", v)}
                    rows={4}
                    optional
                    placeholder="Tell us about your campaign, event, branding requirements or any other preferences."
                  />
                  <TextField
                    id="designReferenceLink"
                    label="Design Inspiration / Reference Link"
                    type="url"
                    value={form.designReferenceLink}
                    onChange={(v) => updateField("designReferenceLink", v)}
                    error={errors.designReferenceLink}
                    optional
                    placeholder="e.g. a link to a Pinterest board or brand guidelines"
                  />
                </div>
              </div>

              {submitError && (
                <p className="text-body text-[#E8A0A0]">
                  Something went wrong sending your enquiry. Please try again in a moment.
                </p>
              )}

              <p className={noteClasses}>
                Every project is different. We'll review your requirements and provide a
                personalised quotation.
              </p>

              <Button type="submit" variant="primary-inverted" disabled={submitting}>
                {submitting ? "Sending…" : "Request a Personalised Quote"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="border border-line-inverted-strong bg-[#26211B] p-7 lg:p-9">
              <SectionLabel tone="inverted">Your Business Enquiry</SectionLabel>
              <div className="mt-4 border-t border-line-inverted-strong" />

              <dl className="mt-6 space-y-5">
                <SummaryRow
                  label="Estimated Quantity"
                  value={form.estimatedQuantity || "Not selected yet"}
                />
                <SummaryRow
                  label="Purpose"
                  value={form.purpose.length > 0 ? form.purpose.join(", ") : "Not selected yet"}
                />
                <SummaryRow
                  label="Branding"
                  value={
                    logoFiles.length > 0 || form.logoPlacement || form.brandColours
                      ? [
                          logoFiles.length > 0
                            ? `${logoFiles.length} file${logoFiles.length > 1 ? "s" : ""} attached`
                            : null,
                          form.logoPlacement || null,
                          form.brandColours || null,
                        ]
                          .filter(Boolean)
                          .join(" · ")
                      : "No branding details yet"
                  }
                />
                <SummaryRow
                  label="Seed Preferences"
                  value={form.seedPreferences.length > 0 ? form.seedPreferences.join(", ") : "Not selected yet"}
                />
                <SummaryRow
                  label="Packaging Preferences"
                  value={
                    form.packagingPreferences.length > 0
                      ? form.packagingPreferences.join(", ")
                      : "Not selected yet"
                  }
                />
              </dl>

              <div className="mt-7 border-t border-line-inverted-strong pt-6">
                <p className="text-body !text-kraft">
                  Every project is different. We'll review your requirements and provide a
                  personalised quotation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
