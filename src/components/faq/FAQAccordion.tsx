import { useId, useState } from "react";
import type { FAQItem } from "../../data/faq";

type FAQAccordionProps = {
  items: FAQItem[];
};

/**
 * Independent expand/collapse per item — no single-open-at-a-time
 * restriction, since someone comparing two answers shouldn't lose the
 * first one when they open the second.
 */
export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <FAQRow key={item.question} item={item} />
      ))}
    </ul>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[44px] w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-h3 tracking-normal">{item.question}</span>
        <span
          aria-hidden="true"
          className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ease-editorial ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
          <span
            className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink transition-opacity duration-200 ease-editorial ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </button>

      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-editorial ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-body max-w-content-text pb-6 text-ink-muted">{item.answer}</p>
        </div>
      </div>
    </li>
  );
}
