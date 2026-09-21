import { useState } from "react";
import AustraliaMap from "./AustraliaMap";
import { AUSTRALIA_TEMPERATURE, CLIMATE_SOURCES } from "../../data/climate";

const LOW_COLOR = { r: 0xed, g: 0xe0, b: 0xc3 }; // warm sand — the coolest year shown
const HIGH_COLOR = { r: 0x8b, g: 0x3e, b: 0x27 }; // deep terracotta — the warmest year shown

function mix(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function toHex(n: number) {
  return n.toString(16).padStart(2, "0");
}

/**
 * Maps a year's anomaly to a colour between the coolest and warmest years in
 * this five-year window — not an absolute scale, so the disclosure line
 * beneath the map says so explicitly.
 */
function colorForAnomaly(anomaly: number, min: number, max: number) {
  const t = max === min ? 0.5 : (anomaly - min) / (max - min);
  const r = mix(LOW_COLOR.r, HIGH_COLOR.r, t);
  const g = mix(LOW_COLOR.g, HIGH_COLOR.g, t);
  const b = mix(LOW_COLOR.b, HIGH_COLOR.b, t);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const anomalies = AUSTRALIA_TEMPERATURE.map((d) => d.anomaly);
const MIN_ANOMALY = Math.min(...anomalies);
const MAX_ANOMALY = Math.max(...anomalies);

export default function TemperatureExplorer() {
  const [selectedYear, setSelectedYear] = useState(
    AUSTRALIA_TEMPERATURE[AUSTRALIA_TEMPERATURE.length - 1].year,
  );

  const selected = AUSTRALIA_TEMPERATURE.find((d) => d.year === selectedYear)!;
  const fillColor = colorForAnomaly(selected.anomaly, MIN_ANOMALY, MAX_ANOMALY);

  return (
    <div>
      <div role="radiogroup" aria-label="Year" className="flex flex-wrap gap-2">
        {AUSTRALIA_TEMPERATURE.map((d) => {
          const isSelected = d.year === selectedYear;
          return (
            <button
              key={d.year}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelectedYear(d.year)}
              className={`text-small border px-4 py-2 tabular-nums transition-colors duration-200 ease-editorial ${
                isSelected
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-line-strong bg-transparent text-ink-muted hover:border-charcoal hover:text-ink"
              }`}
            >
              {d.year}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <AustraliaMap fillColor={fillColor} className="w-full max-w-xs" />
      </div>

      <div className="mt-6 text-center">
        <p className="text-display" style={{ fontSize: "clamp(2.5rem, 2rem + 3vw, 4rem)" }}>
          +{selected.anomaly.toFixed(2)}&deg;C
        </p>
        <p className="text-small mt-1">Above the 1961&ndash;1990 average</p>
        <p className="text-eyebrow mt-2">{selected.rank}</p>
      </div>

      <p className="text-small mx-auto mt-6 max-w-xs text-center">
        Colour reflects where each year sits within this five-year range, not an absolute scale.
      </p>

      <details className="mt-4 text-center">
        <summary className="text-small inline cursor-pointer">Sources</summary>
        <ul className="mt-2 space-y-1">
          {CLIMATE_SOURCES.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="text-small border-b border-transparent hover:border-moss hover:text-moss"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
