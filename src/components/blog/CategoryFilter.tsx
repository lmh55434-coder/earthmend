import { BLOG_CATEGORIES, type BlogCategory } from "../../data/blog";

export type CategoryFilterValue = "All" | BlogCategory;

type CategoryFilterProps = {
  value: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
};

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  const options: CategoryFilterValue[] = ["All", ...BLOG_CATEGORIES];

  return (
    <div role="radiogroup" aria-label="Filter by category" className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = option === value;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(option)}
            className={`text-small border px-4 py-2 transition-colors duration-200 ease-editorial ${
              isSelected
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-line-strong bg-transparent text-ink-muted hover:border-charcoal hover:text-ink"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
