type PackagingSelectorProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  unitCount: number | null;
};

export default function PackagingSelector({ checked, onChange, unitCount }: PackagingSelectorProps) {
  return (
    <div className="mt-6 border-y border-line">
      <label className="group flex min-h-[44px] cursor-pointer items-center justify-between gap-6 py-4 transition-transform duration-200 ease-editorial hover:translate-x-2">
        <span className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="peer sr-only"
          />
          <span
            aria-hidden="true"
            className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-200 ease-editorial peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-moss ${
              checked ? "border-moss bg-moss" : "border-line-strong"
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
              checked ? "text-ink" : "text-ink-muted group-hover:text-ink"
            }`}
          >
            Add single card packaging
          </span>
        </span>
        <span className="text-small shrink-0 whitespace-nowrap">
          A$0.25{unitCount ? ` × ${unitCount.toLocaleString("en-AU")}` : " per card"}
        </span>
      </label>
    </div>
  );
}
