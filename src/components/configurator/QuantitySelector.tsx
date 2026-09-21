import { QUANTITY_OPTIONS, formatCurrency, type QuantityKey, type QuantityOption } from "../../data/pricing";

type QuantitySelectorProps = {
  value: QuantityKey;
  onChange: (key: QuantityKey) => void;
};

function quantityMeta(option: QuantityOption): { qualifier: string; price: string | null } {
  if (option.key === "sample") {
    return { qualifier: "1 Pen", price: "A$0.00" };
  }
  if (option.key === "5000plus") {
    return { qualifier: "Custom Quote", price: null };
  }
  return { qualifier: "Pens", price: `${formatCurrency(option.unitPrice!)} / each` };
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div role="radiogroup" aria-label="Quantity" className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {QUANTITY_OPTIONS.map((option) => {
        const isSelected = option.key === value;
        const isSpecial = option.key === "sample";
        const meta = quantityMeta(option);

        return (
          <button
            key={option.key}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(option.key)}
            className={`flex flex-col items-start gap-1 border px-5 py-4 text-left transition-colors duration-200 ease-editorial ${
              isSelected
                ? "border-ivory bg-ivory"
                : isSpecial
                  ? "border-moss/60 bg-transparent hover:border-moss hover:bg-moss/10"
                  : "border-line-inverted-strong bg-transparent hover:border-kraft hover:bg-ivory/5"
            }`}
          >
            <span className={`text-h3 tracking-normal ${!isSelected ? "!text-ivory" : ""}`}>
              {option.label}
            </span>
            <span className={`text-eyebrow ${!isSelected ? "!text-kraft" : ""}`}>{meta.qualifier}</span>
            {meta.price && (
              <span className={`text-small ${!isSelected ? "!text-kraft" : ""}`}>{meta.price}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
