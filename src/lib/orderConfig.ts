import type { QuantityKey } from "../data/pricing";

export type OrderConfig = {
  quantityKey: QuantityKey;
  seedIds: string[];
  packaging: boolean;
};

const STORAGE_KEY = "earthmend:order-config";

export function saveOrderConfig(config: OrderConfig) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // sessionStorage can throw in private-browsing contexts; the config
    // still reaches /request-quote via router state for this navigation.
  }
}

export function loadOrderConfig(): OrderConfig | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as OrderConfig) : null;
  } catch {
    return null;
  }
}
