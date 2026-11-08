// EarthMend Christmas gifting posts (1080x1350). Uses the Christmas card
// mockup/artwork, the user's real growth photos and the real pen cut-out.
import { chromium } from "playwright-core";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const here = resolve(".");
const OUT = process.argv[2] || resolve("../xmas-posts");
const only = process.argv[3];
mkdirSync(OUT, { recursive: true });
const f = (p) => `file://${here}/${p}`;
const fs_ = (pkg, file) => f(`node_modules/@fontsource/${pkg}/files/${file}`);
const W = 1080, H = 1350;
const C = { green: "#1D3A2B", green2: "#24483A", gold: "#C9A24A", cream: "#F3ECDD", berry: "#A8322D", ivory: "#F5F0E5", charcoal: "#1E1914", muted: "#635A4C" };

const css = `
@font-face{font-family:Fraunces;font-weight:400;src:url(${fs_("fraunces", "fraunces-latin-400-normal.woff2")})}
@font-face{font-family:Fraunces;font-weight:500;src:url(${fs_("fraunces", "fraunces-latin-500-normal.woff2")})}
@font-face{font-family:Fraunces;font-style:italic;font-weight:400;src:url(${fs_("fraunces", "fraunces-latin-400-italic.woff2")})}
@font-face{font-family:Inter;font-weight:400;src:url(${fs_("inter", "inter-latin-400-normal.woff2")})}
@font-face{font-family:Inter;font-weight:600;src:url(${fs_("inter", "inter-latin-600-normal.woff2")})}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}
.p{position:relative;width:${W}px;height:${H}px;overflow:hidden}
.a{position:absolute}
.ph{position:absolute;overflow:hidden}
.ph img{width:100%;height:100%;object-fit:cover;display:block}
.serif{font-family:Fraunces,serif}
.brand{position:absolute;display:flex;align-items:center;gap:12px;font:600 22px Inter;letter-spacing:.3em}
.brand img{width:34px}
.eyebrow{font:600 22px Inter;letter-spacing:.26em;text-transform:uppercase}
.tag{display:inline-block;padding:10px 20px;border-radius:999px;font:600 20px Inter;letter-spacing:.14em;text-transform:uppercase}
.pen{position:absolute;filter:drop-shadow(0 22px 18px rgba(0,0,0,.35))}
.snow{position:absolute;inset:0;pointer-events:none}
`;
const ph = (src, x, y, w, h, pos = "50% 50%", r = 0, extra = "") =>
  `<div class="ph" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${r}px;${extra}"><img src="${f(src)}" style="object-position:${pos}"></div>`;
const t = (x, y, style, html) => `<div class="a" style="left:${x}px;top:${y}px;${style}">${html}</div>`;
const brand = (x, y, color, light = true) =>
  `<div class="brand" style="left:${x}px;top:${y}px;color:${color}"><img src="${f("logo-mark.png")}" style="${light ? "filter:invert(94%) sepia(10%) saturate(300%) hue-rotate(5deg)" : ""}">EARTHMEND</div>`;
const PEN = { "pen-set.png": [1476, 182], "pen-set-full.png": [1962, 211] };
const pen = (src, cx, cy, L, rot = 0) => { const [w, h] = PEN[src], s = L / w;
  return `<div class="pen" style="left:${cx - (w * s) / 2}px;top:${cy - (h * s) / 2}px;width:${w * s}px;height:${h * s}px;transform:rotate(${rot}deg)"><img src="${f(src)}" style="width:100%;height:100%"></div>`; };
let seed = 11; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const snow = (n = 120, col = C.cream) => `<svg class="snow" width="${W}" height="${H}">${[...Array(n)].map(() =>
  `<circle cx="${rnd() * W}" cy="${rnd() * H}" r="${1.5 + rnd() * 4}" fill="${col}" opacity="${0.12 + rnd() * 0.35}"/>`).join("")}</svg>`;
const star = (x, y, r, c = C.gold) => `<svg class="a" style="left:${x - r}px;top:${y - r}px" width="${2 * r}" height="${2 * r}"><polygon fill="${c}" points="${[...Array(10)].map((_, k) => {
  const a = (k * Math.PI) / 5 - Math.PI / 2, rr = k % 2 ? r * 0.42 : r; return `${r + Math.cos(a) * rr},${r + Math.sin(a) * rr}`; }).join(" ")}"/></svg>`;
const greenBg = `<div class="a" style="inset:0;background:${C.green}"></div>`;

const posts = [
  // 1 — the hook
  ["01-a-gift-that-grows", `
    ${greenBg}${snow()}
    ${ph("xmas-mockup.png", 520, 0, 560, H, "50% 50%")}
    <div class="a" style="left:520px;top:0;width:120px;height:${H}px;background:linear-gradient(90deg,${C.green},rgba(29,58,43,0))"></div>
    ${brand(64, 64, C.cream)}
    ${t(64, 200, `color:${C.gold}`, "<div class='eyebrow'>This Christmas</div>")}
    ${t(64, 260, `font:400 104px/0.98 Fraunces;color:${C.cream};width:480px`, "Give a gift<br>that <i style='color:#C9A24A'>grows.</i>")}
    ${t(64, 720, `font:400 32px/1.5 Inter;color:${C.cream};width:430px;opacity:.9`, "A plantable pen in a Christmas card. Write with it, then plant the seed capsule.")}
    ${t(64, 1220, `font:600 22px Inter;letter-spacing:.12em;color:${C.gold}`, "earthmend.com.au")}`],

  // 2 — the problem / the story
  ["02-most-gifts-are-forgotten", `
    <div class="a" style="inset:0;background:${C.cream}"></div>
    ${brand(64, 64, C.green, false)}
    ${t(64, 170, `font:400 92px/1.02 Fraunces;color:${C.green};width:952px`, "Most gifts are<br>forgotten by January.")}
    ${t(64, 400, `font:400 92px/1.02 Fraunces;font-style:italic;color:${C.berry};width:952px`, "This one keeps<br>growing.")}
    ${[["photo-15.jpg", "40% 50%", "Planted"], ["photo-17.jpg", "55% 60%", "Sprouting"], ["photo-22.jpg", "50% 45%", "Blooming"]].map(([s, p, l], i) =>
      ph(s, 64 + i * 326, 680, 300, 470, p, 20) + t(64 + i * 326, 1172, `font:600 20px Inter;letter-spacing:.2em;color:${C.green}`, l.toUpperCase())).join("")}
    ${t(64, 1240, `font:400 28px Inter;color:${C.muted}`, "A Christmas gift with a second life.")}`],

  // 3 — who to give it to
  ["03-for-everyone-on-your-list", `
    ${greenBg}${snow(90)}
    ${brand(64, 64, C.cream)}
    ${t(64, 160, `font:400 96px/1 Fraunces;color:${C.cream}`, "For everyone<br>on your <i style='color:#C9A24A'>list.</i>")}
    ${ph("xmas-card-crop.png", 650, 380, 366, 900, "50% 50%", 10, "box-shadow:0 30px 50px rgba(0,0,0,.4);transform:rotate(3deg)")}
    ${t(64, 470, `width:540px;color:${C.cream}`, [["Your team", "who made the year happen"], ["Your clients", "who trusted you with their work"], ["Event guests", "who came to celebrate with you"], ["Secret Santa", "the gift nobody expects"]].map(([h, s], i) =>
      `<div style="padding:26px 0;border-top:1px solid rgba(243,236,221,.22)"><div class="serif" style="font-size:46px">${h}</div><div style="font-size:26px;opacity:.75;margin-top:6px">${s}</div></div>`).join("") + `<div style="border-top:1px solid rgba(243,236,221,.22)"></div>`)}
    ${star(990, 110, 20)}${star(940, 200, 12)}`],

  // 4 — how it works
  ["04-unwrap-write-plant", `
    <div class="a" style="inset:0;background:${C.green2}"></div>${snow(80)}
    ${brand(64, 64, C.cream)}
    ${t(64, 160, `font:400 100px/0.98 Fraunces;color:${C.cream}`, "Unwrap.<br>Write.<br><i style='color:#C9A24A'>Plant.</i>")}
    ${pen("pen-set-full.png", 540, 640, 980, -8)}
    ${t(64, 780, `width:952px;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;color:${C.cream}`, [["01", "Unwrap", "Open the Christmas card."], ["02", "Write", "Use it like any ballpoint pen."], ["03", "Plant", "When the ink runs out, plant the seed capsule."]].map(([n, h, s]) =>
      `<div><div class="serif" style="font-size:72px;color:${C.gold};line-height:1">${n}</div><div class="serif" style="font-size:44px;margin-top:10px">${h}</div><div style="font-size:26px;line-height:1.45;opacity:.85;margin-top:8px">${s}</div></div>`).join(""))}
    ${t(64, 1230, `font:400 italic 34px Fraunces;color:${C.gold}`, "The gift keeps going long after Christmas.")}`],

  // 5 — call to action
  ["05-order-christmas-edition", `
    <div class="a" style="inset:0;background:${C.ivory}"></div>
    <div class="a" style="left:0;top:0;width:${W}px;height:18px;display:flex">${[C.green, C.gold, C.berry, C.gold, C.green].map((c) => `<div style="flex:1;background:${c}"></div>`).join("")}</div>
    ${brand(64, 76, C.green, false)}
    ${ph("xmas-card-crop.png", 610, 150, 406, 1000, "50% 50%", 10, "box-shadow:0 26px 44px rgba(0,0,0,.25)")}
    ${t(64, 190, `color:${C.berry}`, "<div class='eyebrow'>Christmas edition</div>")}
    ${t(64, 250, `font:400 96px/0.98 Fraunces;color:${C.green};width:520px`, "Gifting<br>made<br><i style='color:#A8322D'>meaningful.</i>")}
    ${t(64, 640, `font:400 30px/1.5 Inter;color:${C.muted};width:500px`, "Plantable pens in Christmas card packaging, with your logo printed on the barrel.")}
    ${t(64, 840, "display:flex;flex-direction:column;gap:16px;align-items:flex-start", `<span class='tag' style='background:${C.green};color:${C.cream}'>Bulk from 50 pens</span><span class='tag' style='background:${C.gold};color:${C.charcoal}'>Free sample available</span><span class='tag' style='background:${C.berry};color:${C.cream}'>Made in Australia</span>`)}
    ${t(64, 1190, `width:952px;height:110px;border-radius:999px;background:${C.green};display:flex;align-items:center;justify-content:center;font:500 44px Fraunces;color:${C.gold}`, "Order at earthmend.com.au")}`],
];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
const page = await browser.newPage({ viewport: { width: W, height: H } });
for (const [name, body] of posts) {
  if (only && !name.startsWith(only)) continue;
  const file = `${here}/tmp-xpost-${name}.html`;
  writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body><div class="p">${body}</div></body></html>`);
  await page.goto(`file://${file}`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/earthmend-xmas-post-${name}.png`, clip: { x: 0, y: 0, width: W, height: H } });
  console.log("rendered", name);
}
await browser.close();
