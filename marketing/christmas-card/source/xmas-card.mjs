// Flat Christmas card artwork for the EarthMend pen card (front).
// Layout is built around the pen: nothing important sits in the pen's
// column (x 40–60%) or under the posted cap (x 36–64%, top 30%); the
// brand sits on the paper tab that holds the pen (x 34–70%, y 40–56%).
import { chromium } from "playwright-core";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const here = resolve(".");
const OUT = process.argv[2] || "xmas-card.png";
const f = (p) => `file://${here}/${p}`;
const font = (p) => f(`node_modules/@fontsource/${p}`);
const W = 1140, H = 3420;

const C = { green: "#1D3A2B", green2: "#24483A", leaf: "#6E8F6A", leaf2: "#93AE85", leafDark: "#46664A",
  cream: "#F3ECDD", gold: "#C9A24A", berry: "#A8322D" };

// seeded random for repeatable art
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

// gum-leaf wreath: leaves around a ring, with wattle dots and berries
function wreath(cx, cy, R) {
  let out = "";
  const n = 46;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, jitter = (rnd() - 0.5) * 0.08;
    const r = R + (rnd() - 0.5) * 34;
    const x = cx + Math.cos(a + jitter) * r, y = cy + Math.sin(a + jitter) * r;
    const rot = (a * 180) / Math.PI + 90 + (i % 2 ? 38 : -38) + (rnd() - 0.5) * 20;
    const len = 92 + rnd() * 40, wid = 26 + rnd() * 10;
    const col = [C.leaf, C.leaf2, C.leafDark][i % 3];
    out += `<g transform="translate(${x},${y}) rotate(${rot})">
      <path d="M0,${-len / 2} C${wid},${-len / 4} ${wid * 0.8},${len / 4} 0,${len / 2} C${-wid * 0.8},${len / 4} ${-wid},${-len / 4} 0,${-len / 2}Z" fill="${col}"/>
      <path d="M0,${-len / 2 + 6} L0,${len / 2 - 6}" stroke="${C.green}" stroke-opacity=".35" stroke-width="2"/></g>`;
  }
  for (let i = 0; i < 70; i++) { // wattle
    const a = rnd() * Math.PI * 2, r = R + (rnd() - 0.5) * 70;
    out += `<circle cx="${cx + Math.cos(a) * r}" cy="${cy + Math.sin(a) * r}" r="${6 + rnd() * 6}" fill="${C.gold}" opacity=".95"/>`;
  }
  for (let i = 0; i < 16; i++) { // berries in small clusters
    const a = (i / 16) * Math.PI * 2 + 0.2, r = R + 18;
    for (let k = 0; k < 3; k++)
      out += `<circle cx="${cx + Math.cos(a) * r + (k - 1) * 13}" cy="${cy + Math.sin(a) * r + (k % 2) * 12}" r="9" fill="${C.berry}"/>`;
  }
  return out;
}

function snow() {
  let s = "";
  for (let i = 0; i < 260; i++) {
    const x = rnd() * W, y = rnd() * H, r = 1.5 + rnd() * 4.5;
    s += `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.cream}" opacity="${0.12 + rnd() * 0.4}"/>`;
  }
  for (let i = 0; i < 26; i++) { // small gold stars
    const x = rnd() * W, y = rnd() * H, r = 7 + rnd() * 9;
    const pts = [...Array(10)].map((_, k) => { const a = (k * Math.PI) / 5 - Math.PI / 2, rr = k % 2 ? r * 0.42 : r;
      return `${x + Math.cos(a) * rr},${y + Math.sin(a) * rr}`; }).join(" ");
    s += `<polygon points="${pts}" fill="${C.gold}" opacity=".85"/>`;
  }
  return s;
}

// seed-paper flecks
function flecks() {
  let s = "";
  for (let i = 0; i < 520; i++) {
    const x = rnd() * W, y = rnd() * H, rx = 1.5 + rnd() * 3.5, ry = rx * (0.4 + rnd() * 0.6);
    const light = rnd() > 0.55;
    s += `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${rnd() * 180} ${x} ${y})" fill="${light ? "#EFE6D0" : "#0F1F17"}" opacity="${light ? 0.35 : 0.45}"/>`;
  }
  return s;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="position:absolute;inset:0">
  <defs>
    <filter id="paper" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="4" result="n"/>
      <feColorMatrix type="saturate" values="0" in="n" result="g"/>
      <feComponentTransfer in="g"><feFuncA type="table" tableValues="0 .10"/></feComponentTransfer>
    </filter>
    <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="3" seed="9"/><feDisplacementMap in="SourceGraphic" scale="26"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.green}"/>
  <rect width="${W}" height="${H}" filter="url(#paper)"/>
  ${snow()}
  ${wreath(W * 0.52, H * 0.48, W * 0.40)}
  ${flecks()}
  <!-- deckled seed-paper border -->
  <rect x="-6" y="-6" width="${W + 12}" height="${H + 12}" fill="none" stroke="#E9E1CC" stroke-width="40" filter="url(#rough)"/>
</svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Fraunces;font-weight:400;src:url(${font("fraunces/files/fraunces-latin-400-normal.woff2")})}
@font-face{font-family:Fraunces;font-weight:400;font-style:italic;src:url(${font("fraunces/files/fraunces-latin-400-italic.woff2")})}
@font-face{font-family:Inter;font-weight:500;src:url(${font("inter/files/inter-latin-500-normal.woff2")})}
@font-face{font-family:Inter;font-weight:600;src:url(${font("inter/files/inter-latin-600-normal.woff2")})}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;position:relative;overflow:hidden;color:${C.cream};font-family:Inter,sans-serif}
.t{position:absolute;text-align:center}
.caps{font-weight:600;text-transform:uppercase}
.serif{font-family:Fraunces,serif}
</style></head><body>${svg}
  <!-- top: split greeting either side of the posted cap -->
  <div class="t caps" style="left:0;width:${W * 0.36}px;top:${H * 0.05}px;font-size:30px;letter-spacing:.3em;color:${C.gold}">Season’s</div>
  <div class="t caps" style="left:${W * 0.64}px;width:${W * 0.36}px;top:${H * 0.05}px;font-size:30px;letter-spacing:.3em;color:${C.gold}">Greetings</div>
  <div class="t serif" style="left:0;width:${W * 0.36}px;top:${H * 0.215}px;font-size:100px;line-height:1">Merry</div>
  <div class="t serif" style="left:${W * 0.62}px;width:${W * 0.34}px;top:${H * 0.215}px;font-size:92px;line-height:1.08;font-style:italic">&amp;<br>Bright</div>
  <!-- the paper tab that holds the pen carries the brand -->
  <div class="t" style="left:${W * 0.336}px;width:${W * 0.367}px;top:${H * 0.403}px;height:${H * 0.153}px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px">
    <img src="${f("logo-mark.png")}" style="width:118px;filter:invert(94%) sepia(10%) saturate(300%) hue-rotate(5deg)">
    <div class="caps" style="font-size:34px;letter-spacing:.32em;padding-left:.32em">Earthmend</div>
    <div style="width:120px;height:2px;background:${C.gold}"></div>
    <div class="caps" style="font-size:22px;letter-spacing:.28em;color:${C.gold};padding-left:.28em">Christmas edition</div>
  </div>
  <!-- lower message, split either side of the pen -->
  <div class="t caps" style="left:0;width:${W * 0.4}px;top:${H * 0.66}px;font-size:92px;letter-spacing:.06em">Plant</div>
  <div class="t caps" style="left:${W * 0.6}px;width:${W * 0.4}px;top:${H * 0.66}px;font-size:92px;letter-spacing:.06em;color:${C.gold}">Joy.</div>
  <div class="t serif" style="left:0;width:${W * 0.4}px;top:${H * 0.705}px;font-size:58px;font-style:italic">this</div>
  <div class="t serif" style="left:${W * 0.6}px;width:${W * 0.4}px;top:${H * 0.705}px;font-size:58px;font-style:italic">season</div>
  <!-- bottom -->
  <div class="t" style="left:0;width:${W * 0.4}px;top:${H * 0.935}px;font-size:24px;letter-spacing:.06em">earthmend.com.au</div>
  <div class="t caps" style="left:${W * 0.6}px;width:${W * 0.4}px;top:${H * 0.937}px;font-size:19px;letter-spacing:.22em">Made in Australia</div>
</body></html>`;

writeFileSync(`${here}/tmp-xmas.html`, html);
const browser = await chromium.launch({ executablePath: process.env.CHROME || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
const page = await browser.newPage({ viewport: { width: W, height: H } });
await page.goto(`file://${here}/tmp-xmas.html`, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: OUT, clip: { x: 0, y: 0, width: W, height: H } });
await browser.close();
console.log("wrote", OUT);
