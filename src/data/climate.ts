export type YearlyTemperature = {
  year: number;
  /** Degrees Celsius above the Bureau of Meteorology's 1961–1990 reference average. */
  anomaly: number;
  rank: string;
};

/**
 * Australia's area-averaged mean temperature anomaly for each of the last
 * five calendar years, relative to the Bureau of Meteorology's 1961–1990
 * reference period. Sourced from the Bureau's Annual Climate Statements —
 * real, published figures, not estimates. Do not extend this list with
 * invented or extrapolated years.
 */
export const AUSTRALIA_TEMPERATURE: YearlyTemperature[] = [
  { year: 2021, anomaly: 0.56, rank: "19th-warmest year on record" },
  { year: 2022, anomaly: 0.5, rank: "Equal-22nd-warmest year on record" },
  { year: 2023, anomaly: 0.98, rank: "Equal-8th-warmest year on record" },
  { year: 2024, anomaly: 1.46, rank: "2nd-warmest year on record" },
  { year: 2025, anomaly: 1.23, rank: "4th-warmest year on record" },
];

export const CLIMATE_SOURCES = [
  { label: "BOM Annual Climate Statement 2025", href: "http://www.bom.gov.au/climate/current/annual/aus/" },
  { label: "BOM Annual Climate Statement 2024", href: "http://www.bom.gov.au/climate/current/annual/aus/2024/" },
  { label: "BOM Annual Climate Statement 2023", href: "http://www.bom.gov.au/climate/current/annual/aus/2023/" },
  { label: "BOM Annual Climate Statement 2022", href: "http://www.bom.gov.au/climate/current/annual/aus/2022/" },
  { label: "BOM Annual Climate Statement 2021", href: "http://www.bom.gov.au/climate/current/annual/aus/2021/" },
];
