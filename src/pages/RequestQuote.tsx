import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import OrderSummary from "../components/configurator/OrderSummary";
import FileUpload from "../components/configurator/FileUpload";
import { SEED_OPTIONS, getQuantityOption, calculateOrder, formatCurrency } from "../data/pricing";
import { loadOrderConfig, type OrderConfig } from "../lib/orderConfig";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.company.trim()) errors.company = "Please enter your company name.";
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.address.trim()) errors.address = "Please enter your address.";
  return errors;
}

type TextFieldProps = {
  id: keyof FormState;
  label: string;
  type?: "text" | "email" | "tel";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
};

function TextField({ id, label, type = "text", value, onChange, error, autoComplete }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-eyebrow">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full border-0 border-b border-line-strong bg-transparent py-3 text-body-lg text-ink placeholder:text-ink-muted/60 transition-colors duration-200 ease-editorial focus:border-moss focus:outline-none"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-small text-[#9B2C2C]">
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
  error?: string;
  rows?: number;
  optional?: boolean;
};

function TextAreaField({ id, label, value, onChange, error, rows = 4, optional }: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-eyebrow">
        {label}
        {optional && <span className="normal-case tracking-normal text-ink-muted"> (optional)</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full resize-none border border-line-strong bg-transparent px-4 py-3 text-body-lg text-ink placeholder:text-ink-muted/60 transition-colors duration-200 ease-editorial focus:border-moss focus:outline-none"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-small text-[#9B2C2C]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function RequestQuote() {
  const location = useLocation();
  const [config] = useState<OrderConfig | null>(
    () => (location.state as OrderConfig | null) ?? loadOrderConfig(),
  );
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!config) return;

    const validationErrors = validate(form);
    setErrors(validationErrors);

    const firstInvalidField = Object.keys(validationErrors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    const calculation = calculateOrder(config.quantityKey, config.packaging);
    const option = getQuantityOption(config.quantityKey);

    const submission = {
      customerName: form.name,
      companyName: form.company,
      phone: form.phone,
      email: form.email,
      address: form.address,
      brandImage: file,
      message: form.message,
      quantity: option.key === "5000plus" ? "5,000+" : option.units,
      unitPrice: calculation.isCustom ? "Custom quote" : calculation.unitPrice,
      seeds: SEED_OPTIONS.filter((s) => config.seedIds.includes(s.id)).map((s) => s.label),
      packaging: config.packaging,
      packagingUnitPrice: 0.25,
      packagingTotal: calculation.isCustom ? "To be confirmed" : calculation.packagingCost,
      penTotal: calculation.isCustom ? "To be confirmed" : calculation.penCost,
      estimatedTotal: calculation.isCustom ? "To be confirmed" : calculation.total,
    };

    console.info("EarthMend enquiry submission", submission);
    setSubmitted(true);
  }

  if (!config) {
    return (
      <Section tone="ivory" spacing="lg">
        <Container size="narrow">
          <Reveal className="mx-auto max-w-content-text text-center">
            <div className="flex justify-center">
              <SectionLabel>Request a Quote</SectionLabel>
            </div>
            <h1 className="text-h1 mt-4">Let's build your order first.</h1>
            <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
              We don't have an order configuration yet. Head back to For Business to choose your
              quantity, seeds and packaging.
            </p>
            <Button href="/for-business#build-your-order" variant="primary" className="mt-8">
              Build Your Order
            </Button>
          </Reveal>
        </Container>
      </Section>
    );
  }

  if (submitted) {
    const calculation = calculateOrder(config.quantityKey, config.packaging);
    const option = getQuantityOption(config.quantityKey);
    const seedLabels = SEED_OPTIONS.filter((s) => config.seedIds.includes(s.id)).map((s) => s.label);

    return (
      <Section tone="ivory" spacing="lg">
        <Container size="narrow">
          <Reveal className="mx-auto max-w-content-text text-center">
            <div className="flex justify-center">
              <SectionLabel>Enquiry Received</SectionLabel>
            </div>
            <h1 className="text-h1 mt-4">Your Earthmend enquiry is on its way.</h1>
            <p className="text-body-lg mx-auto mt-5 max-w-xl text-ink-muted">
              Thank you. We've received your requirements and will be in touch with the next
              steps.
            </p>

            <dl className="mx-auto mt-10 max-w-sm space-y-4 border-t border-line pt-8 text-left">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-eyebrow">Quantity</dt>
                <dd className="text-body text-ink-muted">
                  {option.key === "sample"
                    ? "Free Sample"
                    : option.key === "5000plus"
                      ? "5,000+"
                      : option.units!.toLocaleString("en-AU")}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-eyebrow">Seeds</dt>
                <dd className="text-body text-right text-ink-muted">{seedLabels.join(", ")}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-eyebrow">Packaging</dt>
                <dd className="text-body text-ink-muted">
                  {config.packaging ? "Single Card" : "Not selected"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
                <dt className="text-eyebrow">Estimated Total</dt>
                <dd className="text-h3 tracking-normal">
                  {calculation.isCustom ? "To be confirmed" : formatCurrency(calculation.total!)}
                </dd>
              </div>
            </dl>

            <Button href="/for-business" variant="primary" className="mt-10">
              Back to For Business
            </Button>
          </Reveal>
        </Container>
      </Section>
    );
  }

  return (
    <Section tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="max-w-content-text">
          <SectionLabel>Request a Quote</SectionLabel>
          <h1 className="text-h1 mt-4">Let's build your Earthmend order.</h1>
          <p className="text-body-lg mt-5 text-ink-muted">
            We've saved your selections. Tell us a little about your requirements and we'll get
            back to you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-x-16">
          <Reveal delay={80} className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <TextField
                id="name"
                label="Full Name"
                value={form.name}
                onChange={(v) => updateField("name", v)}
                error={errors.name}
                autoComplete="name"
              />
              <TextField
                id="company"
                label="Company Name"
                value={form.company}
                onChange={(v) => updateField("company", v)}
                error={errors.company}
                autoComplete="organization"
              />
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <TextField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => updateField("phone", v)}
                  error={errors.phone}
                  autoComplete="tel"
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
              <TextAreaField
                id="address"
                label="Address"
                value={form.address}
                onChange={(v) => updateField("address", v)}
                error={errors.address}
                rows={3}
              />

              <FileUpload file={file} onChange={setFile} />

              <TextAreaField
                id="message"
                label="Message"
                value={form.message}
                onChange={(v) => updateField("message", v)}
                rows={5}
                optional
              />

              <Button type="submit" variant="primary">
                Submit Enquiry
              </Button>
            </form>
          </Reveal>

          <Reveal delay={140} className="lg:sticky lg:top-32 lg:col-span-5">
            <OrderSummary config={config} variant="readonly" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
