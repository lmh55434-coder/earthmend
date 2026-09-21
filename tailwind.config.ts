import type { Config } from "tailwindcss";

/**
 * Earthmend design tokens.
 * Palette values are contrast-checked against WCAG AA (4.5:1) for the
 * `muted` and `green` roles when used as text on `ivory`/`cream`.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F0E5",
        cream: "#EEE4CC",
        kraft: "#D8C49A",
        charcoal: "#1E1914",
        muted: "#635A4C",
        moss: "#57623F",
        "moss-soft": "#647348",
        paper: "#FFFFFF",

        // semantic aliases used throughout components
        background: "#F5F0E5",
        surface: "#EEE4CC",
        "surface-strong": "#D8C49A",
        ink: "#1E1914",
        "ink-muted": "#635A4C",
        accent: "#57623F",
        "accent-soft": "#647348",
        line: "rgba(30, 25, 20, 0.12)",
        "line-strong": "rgba(30, 25, 20, 0.22)",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        "content-wide": "1240px",
      },
      spacing: {
        "section-sm": "4rem",
        section: "6rem",
        "section-lg": "7.5rem",
        "gutter-mobile": "1.25rem",
        "gutter-tablet": "2rem",
        "gutter-desktop": "0px",
      },
      letterSpacing: {
        wide: "0.04em",
        widest: "0.12em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
