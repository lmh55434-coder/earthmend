import { SINGLE_CARD_PRICE, formatCurrency } from "../../data/pricing";

type PackagingSelectorProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  unitCount: number | null;
  /** True for the Free Sample tier, where packaging is included at no charge. */
  free?: boolean;
};

export default function PackagingSelector({
  checked,
  onChange,
  unitCount,
  free = false,
}: PackagingSelectorProps) {
  const cost = checked ? (free ? 0 : unitCount ? unitCount * SINGLE_CARD_PRICE : null) : null;

  return (
    <div className="mt-6">
      <label
        className={`group flex min-h-[44px] cursor-pointer items-center justify-between gap-6 border px-5 py-4 transition-colors duration-200 ease-editorial ${
          checked
            ? "border-moss bg-moss/15"
            : "border-line-inverted-strong bg-transparent hover:border-kraft"
        }`}
      >
        <span className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="peer sr-only"
          />
          <span
            aria-hidden="true"
            className={`flex h-6 w-6 shrink-0 items-center justify-center border text-base leading-none transition-colors duration-200 ease-editorial peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-kraft ${
              checked ? "border-moss bg-moss !text-ivory" : "border-line-inverted-strong !text-kraft"
            }`}
          >
            {checked ? (
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                <path
                  d="M1 4.5L4 7.5L10 1"
                  stroke="#F5F0E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span aria-hidden="true">+</span>
            )}
          </span>
          <span>
            <span
              className={`text-body-lg block transition-colors duration-200 ease-editorial ${
                checked ? "!text-ivory" : "!text-kraft group-hover:!text-ivory"
              }`}
            >
              {checked ? "Single Card Packaging" : "Add Single Card Packaging"}
            </span>
            <span className="text-small !text-kraft mt-0.5 block">
              {free
                ? "Included free with your sample"
                : checked && unitCount
                  ? `${formatCurrency(SINGLE_CARD_PRICE)} × ${unitCount.toLocaleString("en-AU")}`
                  : `${formatCurrency(SINGLE_CARD_PRICE)} per pen`}
            </span>
          </span>
        </span>

        {cost !== null && (
          <span className="text-h3 !text-ivory shrink-0 tracking-normal">{formatCurrency(cost)}</span>
        )}
      </label>
    </div>
  );
}
