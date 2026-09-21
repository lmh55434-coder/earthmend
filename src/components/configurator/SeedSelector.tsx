import { SEED_OPTIONS } from "../../data/pricing";

type SeedSelectorProps = {
  selected: string[];
  onChange: (ids: string[]) => void;
};

export default function SeedSelector({ selected, onChange }: SeedSelectorProps) {
  function toggle(id: string) {
    onChange(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);
  }

  return (
    <div className="mt-6">
      <ul className="space-y-3">
        {SEED_OPTIONS.map((seed) => {
          const checked = selected.includes(seed.id);
          return (
            <li key={seed.id}>
              <label
                className={`group flex min-h-[44px] cursor-pointer items-center gap-4 border px-5 py-4 transition-colors duration-200 ease-editorial ${
                  checked
                    ? "border-moss bg-moss/15"
                    : "border-line-inverted-strong bg-transparent hover:border-kraft"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(seed.id)}
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
                  {seed.label}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <p className="text-small !text-kraft mt-4">
        Choose one or more seed options — no additional charge.
      </p>
    </div>
  );
}
