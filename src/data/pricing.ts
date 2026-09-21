export type QuantityKey = "sample" | "50" | "100" | "250" | "500" | "1000" | "2500" | "5000" | "5000plus";

export type QuantityOption = {
  key: QuantityKey;
  label: string;
  /** null marks the custom-quote tier (5,000+), where there is no fixed unit count. */
  units: number | null;
  /** null marks the custom-quote tier (5,000+), where there is no fixed unit price. */
  unitPrice: number | null;
};

export const QUANTITY_OPTIONS: QuantityOption[] = [
  { key: "sample", label: "Free Sample", units: 1, unitPrice: 0 },
  { key: "50", label: "50", units: 50, unitPrice: 5.5 },
  { key: "100", label: "100", units: 100, unitPrice: 4.3 },
  { key: "250", label: "250", units: 250, unitPrice: 4.0 },
  { key: "500", label: "500", units: 500, unitPrice: 3.7 },
  { key: "1000", label: "1,000", units: 1000, unitPrice: 3.1 },
  { key: "2500", label: "2,500", units: 2500, unitPrice: 2.8 },
  { key: "5000", label: "5,000", units: 5000, unitPrice: 2.4 },
  { key: "5000plus", label: "5,000+", units: null, unitPrice: null },
];

export const SINGLE_CARD_PRICE = 0.25;

export type SeedOption = { id: string; label: string };

export const SEED_OPTIONS: SeedOption[] = [
  { id: "wildflower", label: "Australian Native Wildflower Seeds" },
  { id: "herb", label: "Herb Seeds" },
  { id: "vegetable", label: "Vegetable Seeds" },
];

export function getQuantityOption(key: QuantityKey): QuantityOption {
  const option = QUANTITY_OPTIONS.find((o) => o.key === key);
  if (!option) throw new Error(`Unknown quantity key: ${key}`);
  return option;
}

export type OrderCalculation = {
  units: number | null;
  unitPrice: number | null;
  penCost: number | null;
  packagingCost: number | null;
  total: number | null;
  isCustom: boolean;
};

export function calculateOrder(quantityKey: QuantityKey, packaging: boolean): OrderCalculation {
  const option = getQuantityOption(quantityKey);

  if (option.units === null || option.unitPrice === null) {
    return {
      units: null,
      unitPrice: null,
      penCost: null,
      packagingCost: null,
      total: null,
      isCustom: true,
    };
  }

  const penCost = option.units * option.unitPrice;
  const packagingCost = packaging && quantityKey !== "sample" ? option.units * SINGLE_CARD_PRICE : 0;

  return {
    units: option.units,
    unitPrice: option.unitPrice,
    penCost,
    packagingCost,
    total: penCost + packagingCost,
    isCustom: false,
  };
}

export function formatCurrency(value: number): string {
  return `A$${value.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
