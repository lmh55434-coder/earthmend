import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { SEED_OPTIONS, getQuantityOption, calculateOrder, formatCurrency } from "../../data/pricing";
import type { OrderConfig } from "../../lib/orderConfig";

type OrderSummaryProps = {
  config: OrderConfig;
  variant?: "interactive" | "readonly";
  tone?: "light" | "dark";
  onContinue?: () => void;
  className?: string;
};

export default function OrderSummary({
  config,
  variant = "interactive",
  tone = "light",
  onContinue,
  className = "",
}: OrderSummaryProps) {
  const option = getQuantityOption(config.quantityKey);
  const calculation = calculateOrder(config.quantityKey, config.packaging);
  const seedLabels = SEED_OPTIONS.filter((s) => config.seedIds.includes(s.id)).map((s) => s.label);
  const canContinue = config.seedIds.length > 0;
  const dark = tone === "dark";

  const dtClass = `text-eyebrow ${dark ? "!text-kraft" : ""}`;
  const ddClass = `text-body mt-1 ${dark ? "!text-kraft" : "text-ink-muted"}`;

  return (
    <div
      className={`border p-7 lg:p-9 ${
        dark ? "border-line-inverted-strong bg-[#26211B]" : "border-line-strong bg-ivory"
      } ${className}`}
    >
      <SectionLabel tone={dark ? "inverted" : "default"}>Your Order</SectionLabel>
      <div className={`mt-4 border-t ${dark ? "border-line-inverted-strong" : "border-line-strong"}`} />

      <dl className="mt-6 space-y-5">
        <div>
          <dt className={dtClass}>Quantity</dt>
          <dd className={`text-h3 mt-1 tracking-normal ${dark ? "!text-ivory" : ""}`}>
            {option.key === "sample"
              ? "Free Sample — 1 pen"
              : option.key === "5000plus"
                ? "5,000+"
                : `${option.units!.toLocaleString("en-AU")} pens`}
          </dd>
        </div>

        <div>
          <dt className={dtClass}>Unit Price</dt>
          <dd className={ddClass}>
            {calculation.isCustom
              ? "Custom quote"
              : option.key === "sample"
                ? formatCurrency(calculation.unitPrice!)
                : `${formatCurrency(calculation.unitPrice!)} / each`}
          </dd>
        </div>

        <div>
          <dt className={dtClass}>Seeds</dt>
          <dd className={ddClass}>
            {seedLabels.length > 0 ? (
              seedLabels.map((label) => (
                <span key={label} className="block">
                  {label}
                </span>
              ))
            ) : (
              <span className="italic">No seeds selected yet</span>
            )}
          </dd>
        </div>

        <div>
          <dt className={dtClass}>Packaging</dt>
          <dd className={ddClass}>
            {config.packaging
              ? `Single Card × ${option.units?.toLocaleString("en-AU") ?? "—"}`
              : "Not selected"}
          </dd>
        </div>

        <div>
          <dt className={dtClass}>Packaging Cost</dt>
          <dd className={ddClass}>
            {calculation.isCustom
              ? "To be confirmed"
              : formatCurrency(calculation.packagingCost ?? 0)}
          </dd>
        </div>
      </dl>

      <div
        className={`mt-7 border-t pt-6 ${dark ? "border-line-inverted-strong" : "border-line-strong"}`}
      >
        <p className={dtClass}>Estimated Total</p>
        <p className={`text-h1 mt-2 leading-none ${dark ? "!text-ivory" : ""}`}>
          {calculation.isCustom ? "To be confirmed" : formatCurrency(calculation.total!)}
        </p>
        <p className={`text-small mt-3 ${dark ? "!text-kraft" : ""}`}>Prices exclude delivery charges.</p>
      </div>

      {variant === "interactive" && (
        <div className="mt-8">
          <Button
            type="button"
            onClick={onContinue}
            disabled={!canContinue}
            variant={dark ? "primary-inverted" : "primary"}
            className="w-full justify-center"
          >
            Continue to Quote
          </Button>
          {!canContinue && (
            <p className={`text-small mt-3 ${dark ? "!text-kraft" : ""}`}>
              Select at least one seed option to continue.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
