import { QUANTITY_OPTIONS, getQuantityOption, formatCurrency, type QuantityKey } from "../../data/pricing";

type QuantitySelectorProps = {
  value: QuantityKey;
  onChange: (key: QuantityKey) => void;
};

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  const selected = getQuantityOption(value);

  return (
    <div className="mt-6">
      <div role="radiogroup" aria-label="Quantity" className="flex flex-wrap gap-x-7 gap-y-4">
        {QUANTITY_OPTIONS.map((option) => {
          const isSelected = option.key === value;
          return (
            <button
              key={option.key}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(option.key)}
              className={`text-h3 border-b-2 pb-1 tracking-widest transition-colors duration-200 ease-editorial ${
                isSelected
                  ? "border-moss text-ink"
                  : "border-transparent text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {option.label.toUpperCase()}
            </button>
          );
        })}
      </div>

      <p className="text-small mt-5">
        {selected.key === "5000plus"
          ? "Custom quote for orders above 5,000 — we'll confirm pricing with you directly."
          : selected.key === "sample"
            ? "One free sample pen."
            : `${formatCurrency(selected.unitPrice!)} each`}
      </p>
    </div>
  );
}
