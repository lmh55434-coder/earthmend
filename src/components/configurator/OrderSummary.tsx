import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { SEED_OPTIONS, getQuantityOption, calculateOrder, formatCurrency } from "../../data/pricing";
import type { OrderConfig } from "../../lib/orderConfig";

type OrderSummaryProps = {
  config: OrderConfig;
  variant?: "interactive" | "readonly";
  onContinue?: () => void;
  className?: string;
};

export default function OrderSummary({
  config,
  variant = "interactive",
  onContinue,
  className = "",
}: OrderSummaryProps) {
  const option = getQuantityOption(config.quantityKey);
  const calculation = calculateOrder(config.quantityKey, config.packaging);
  const seedLabels = SEED_OPTIONS.filter((s) => config.seedIds.includes(s.id)).map((s) => s.label);
  const canContinue = config.seedIds.length > 0;

  return (
    <div className={`border border-line-strong bg-ivory p-7 lg:p-9 ${className}`}>
      <SectionLabel>Your Order</SectionLabel>

      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-eyebrow">Quantity</dt>
          <dd className="text-h3 mt-1 tracking-normal">
            {option.key === "sample"
              ? "Free Sample — 1 pen"
              : option.key === "5000plus"
                ? "5,000+"
                : `${option.units!.toLocaleString("en-AU")} pens`}
          </dd>
        </div>

        <div>
          <dt className="text-eyebrow">Unit Price</dt>
          <dd className="text-body mt-1 text-ink-muted">
            {calculation.isCustom ? "Custom quote" : formatCurrency(calculation.unitPrice!)}
          </dd>
        </div>

        <div>
          <dt className="text-eyebrow">Seeds</dt>
          <dd className="text-body mt-1 text-ink-muted">
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
          <dt className="text-eyebrow">Packaging</dt>
          <dd className="text-body mt-1 text-ink-muted">
            {config.packaging
              ? `Single Card × ${option.units?.toLocaleString("en-AU") ?? "—"}`
              : "Not selected"}
          </dd>
        </div>

        <div>
          <dt className="text-eyebrow">Packaging Cost</dt>
          <dd className="text-body mt-1 text-ink-muted">
            {calculation.isCustom
              ? "To be confirmed"
              : formatCurrency(calculation.packagingCost ?? 0)}
          </dd>
        </div>
      </dl>

      <div className="mt-7 border-t border-line-strong pt-6">
        <p className="text-eyebrow">Estimated Total</p>
        <p className="text-h1 mt-1">
          {calculation.isCustom ? "To be confirmed" : formatCurrency(calculation.total!)}
        </p>
        <p className="text-small mt-2">Delivery charges, if applicable, will be confirmed separately.</p>
      </div>

      {variant === "interactive" && (
        <div className="mt-8">
          <Button
            type="button"
            onClick={onContinue}
            disabled={!canContinue}
            className="w-full justify-center"
          >
            Continue to Quote
          </Button>
          {!canContinue && (
            <p className="text-small mt-3">Select at least one seed option to continue.</p>
          )}
        </div>
      )}
    </div>
  );
}
