// EarthMend Instagram feed posts (1080x1350, 4:5). Real photos and the real
// pen cut-out only — nothing redrawn. Claims follow the website FAQ.
import { chromium } from "playwright-core";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const here = resolve(".");
const OUT = process.argv[2] || resolve("../posts");
const only = process.argv[3];
mkdirSync(OUT, { recursive: true });
const f = (p) => `file://${here}/${p}`;
const fs_ = (pkg, file) => f(`node_modules/@fontsource/${pkg}/files/${file}`);
const W = 1080, H = 1350;

const css = `
@font-face{font-family:Fraunces;font-weight:400;src:url(${fs_("fraunces", "fraunces-latin-400-normal.woff2")})}
@font-face{font-family:Fraunces;font-style:italic;font-weight:400;src:url(${fs_("fraunces", "fraunces-latin-400-italic.woff2")})}
@font-face{font-family:Fraunces;font-weight:500;src:url(${fs_("fraunces", "fraunces-latin-500-normal.woff2")})}
@font-face{font-family:Fraunces;font-weight:600;src:url(${fs_("fraunces", "fraunces-latin-600-normal.woff2")})}
@font-face{font-family:Inter;font-weight:400;src:url(${fs_("inter", "inter-latin-400-normal.woff2")})}
@font-face{font-family:Inter;font-weight:600;src:url(${fs_("inter", "inter-latin-600-normal.woff2")})}
@font-face{font-family:DMSerif;src:url(${fs_("dm-serif-display", "dm-serif-display-latin-400-normal.woff2")})}
@font-face{font-family:Brico;font-weight:700;src:url(${fs_("bricolage-grotesque", "bricolage-grotesque-latin-700-normal.woff2")})}
@font-face{font-family:Brico;font-weight:800;src:url(${fs_("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff2")})}
@font-face{font-family:Caveat;font-weight:700;src:url(${fs_("caveat", "caveat-latin-700-normal.woff2")})}
@font-face{font-family:Archivo;src:url(${fs_("archivo-black", "archivo-black-latin-400-normal.woff2")})}
@font-face{font-family:Abril;src:url(${fs_("abril-fatface", "abril-fatface-latin-400-normal.woff2")})}
@font-face{font-family:Space;font-weight:700;src:url(${fs_("space-grotesk", "space-grotesk-latin-700-normal.woff2")})}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}
.p{position:relative;width:${W}px;height:${H}px;overflow:hidden}
.a{position:absolute}
.ph{position:absolute;overflow:hidden}
.ph img{width:100%;height:100%;object-fit:cover;display:block}
.brand{position:absolute;display:flex;align-items:center;gap:12px;font:600 22px Inter;letter-spacing:.3em}
.brand img{width:34px}
.tag{display:inline-block;padding:10px 20px;border-radius:999px;font:600 20px Inter;letter-spacing:.14em;text-transform:uppercase}
.pen{position:absolute;filter:drop-shadow(0 22px 18px rgba(0,0,0,.25))}
`;

const ph = (src, x, y, w, h, pos = "50% 50%", r = 0, extra = "") =>
  `<div class="ph" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${r}px;${extra}"><img src="${f(src)}" style="object-position:${pos}"></div>`;
const t = (x, y, style, html) => `<div class="a" style="left:${x}px;top:${y}px;${style}">${html}</div>`;
const brand = (x, y, color, invert = false) =>
  `<div class="brand" style="left:${x}px;top:${y}px;color:${color}"><img src="${f("logo-mark.png")}" style="${invert ? "filter:invert(94%) sepia(10%) saturate(300%) hue-rotate(5deg)" : ""}">EARTHMEND</div>`;
const site = (x, y, color) => t(x, y, `font:600 22px Inter;letter-spacing:.12em;color:${color}`, "earthmend.com.au");
// pen cut-outs (native sizes, never distorted)
const PEN = { "pen-set.png": [1476, 182], "pen-set-full.png": [1962, 211], "pen-capsule.png": [247, 177] };
const pen = (src, cx, cy, L, rot = 0) => {
  const [w, h] = PEN[src], s = L / w;
  return `<div class="pen" style="left:${cx - (w * s) / 2}px;top:${cy - (h * s) / 2}px;width:${w * s}px;height:${h * s}px;transform:rotate(${rot}deg)"><img src="${f(src)}" style="width:100%;height:100%"></div>`;
};
const grad = (css) => `<div class="a" style="inset:0;background:${css}"></div>`;

const posts = [
  // 1 — hero, the bloom
  ["01-every-pen-tells-a-story", "#57623F", `
    ${ph("photo-22.jpg", 0, 0, W, H, "50% 42%")}
    ${grad("linear-gradient(180deg,rgba(87,98,63,0) 45%,rgba(30,25,20,.88) 82%)")}
    ${brand(64, 64, "#1E1914")}
    ${t(64, 930, "font:400 128px/0.92 Fraunces;color:#FFF4E6", "Every pen<br>tells a story.")}
    ${t(64, 1210, "font:italic 400 30px Fraunces;color:#D8C49A", "This one ended in a flower.")}`],

  // 2 — Write. Plant. Grow. strip
  ["02-write-plant-grow", "#D8C49A", `
    <div class="a" style="inset:0;background:#D8C49A"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 140, "font:500 144px/0.88 Fraunces;color:#1E1914;letter-spacing:-.03em", "Write.<br><span style='color:#57623F'>Plant.</span><br><span style='color:#635A4C'>Grow.</span>")}
    ${ph("photo-15.jpg", 64, 760, 300, 470, "45% 50%", 24)}
    ${ph("photo-17.jpg", 390, 760, 300, 470, "55% 60%", 24)}
    ${ph("photo-22.jpg", 716, 760, 300, 470, "50% 50%", 24)}
    ${t(64, 1250, "font:600 22px Inter;letter-spacing:.18em;color:#1E1914;width:952px;display:flex;justify-content:space-between", "<span>PLANTED</span><span>SPROUTING</span><span>BLOOMING</span>")}`],

  // 3 — product hero
  ["03-meet-the-pen", "#EEE4CC", `
    <div class="a" style="inset:0;background:radial-gradient(circle at 30% 20%,#F5F0E5,#E2D3AE)"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 170, "font:400 112px/0.95 Fraunces;color:#1E1914", "Meet the pen<br><i style='color:#57623F'>that gives back.</i>")}
    ${pen("pen-set-full.png", 540, 760, 1000, -14)}
    ${t(64, 1000, "font:400 34px/1.45 Inter;color:#1E1914;width:820px", "Kraft-paper barrel. Ballpoint tip.<br>A seed capsule made for planting.")}
    ${t(64, 1230, "", "<span class='tag' style='background:#1E1914;color:#EEE4CC'>Made in Australia</span>")}`],

  // 4 — don't bin it
  ["04-dont-bin-it", "#57623F", `
    <div class="a" style="inset:0;background:#57623F"></div>
    ${ph("photo-15.jpg", 540, 0, 540, H, "60% 50%")}
    ${brand(64, 64, "#F5F0E5")}
    ${t(64, 300, "font:600 124px/0.9 Fraunces;color:#F5F0E5;letter-spacing:-.02em", "DON’T<br>BIN<br>IT.")}
    ${t(64, 820, "font:italic 400 63px/0.9 Fraunces;color:#D8C49A", "Plant it.")}
    ${t(64, 980, "font:400 32px/1.45 Inter;color:#F5F0E5;width:420px", "When the ink runs out, the seed capsule gets a second life in soil.")}
    ${site(64, 1250, "#F5F0E5")}`],

  // 5 — grow stages, big numbers
  ["05-from-pen-to-plant", "#EEE4CC", `
    <div class="a" style="inset:0;background:#EEE4CC"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 140, "font:500 92px/0.95 Fraunces;color:#1E1914;letter-spacing:-.02em", "From pen<br>to plant.")}
    ${[["photo-15.jpg", "40% 50%", "01", "Plant the capsule"], ["photo-16.jpg", "50% 55%", "02", "Watch it sprout"], ["photo-18.jpg", "50% 45%", "03", "Let it grow"]]
      .map(([s, pos, n, l], i) => ph(s, 64, 410 + i * 300, 360, 270, pos, 20) +
        t(470, 440 + i * 300, "color:#1E1914", `<div style="font:400 110px/1 Fraunces;color:#57623F">${n}</div><div style="font:600 36px Inter;margin-top:6px">${l}</div>`)).join("")}`],

  // 6 — the capsule
  ["06-magic-in-the-capsule", "#D8C49A", `
    <div class="a" style="inset:0;background:linear-gradient(160deg,#EEE4CC,#D8C49A)"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 160, "font:400 120px/0.92 Fraunces;color:#1E1914", "The magic is<br>in the <i>capsule.</i>")}
    <div class="a" style="left:240px;top:520px;width:600px;height:600px;border-radius:50%;background:#F5F0E5"></div>
    ${pen("pen-capsule.png", 560, 800, 460)}
    ${t(64, 1180, "font:400 32px/1.45 Inter;color:#1E1914;width:950px", "A biodegradable capsule, filled with seeds, at the end of every pen.")}`],

  // 7 — how to plant (real card)
  ["07-how-to-plant", "#F5F0E5", `
    <div class="a" style="inset:0;background:#F5F0E5"></div>
    ${ph("photo-24.jpg", 600, 80, 420, 1190, "50% 50%", 18, "box-shadow:0 26px 40px rgba(0,0,0,.18)")}
    ${brand(64, 64, "#57623F")}
    ${t(64, 160, "font:500 88px/0.95 Fraunces;color:#57623F;letter-spacing:-.02em", "How to<br>plant<br>your pen")}
    ${[["1", "Find a pot with drainage and fill it with potting soil."], ["2", "Plant your pen at a 30° angle, covering the seed capsule with soil."], ["3", "Water regularly and place it in a sunny spot."]]
      .map(([n, s], i) => t(64, 520 + i * 230, "display:flex;gap:22px;width:500px", `<span style="flex:none;width:68px;height:68px;border-radius:50%;background:#57623F;color:#F5F0E5;font:500 34px/68px Fraunces;text-align:center">${n}</span><span style="font:400 30px/1.4 Inter;color:#57623F">${s}</span>`)).join("")}
    ${t(64, 1250, "font:italic 400 24px Fraunces;color:#57623F", "It’s printed on every card, too →")}`],

  // 8 — windowsill
  ["08-desk-to-windowsill", "#57623F", `
    ${ph("photo-16.jpg", 0, 0, W, H, "50% 40%")}
    ${grad("linear-gradient(180deg,rgba(30,25,20,.85) 0%,rgba(30,25,20,0) 38%)")}
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(64, 150, "font:500 73px/1 Fraunces;color:#F5F0E5;letter-spacing:-.02em", "From your desk<br>to the windowsill.")}
    ${t(64, 1240, "", "<span class='tag' style='background:#F5F0E5;color:#1E1914'>Sprouting now</span>")}`],

  // 9 — it bloomed
  ["09-it-bloomed", "#1E1914", `
    <div class="a" style="inset:0;background:#1E1914"></div>
    ${ph("photo-22.jpg", 300, 360, 480, 830, "50% 45%", 240, "border:10px solid #F5F0E5")}
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(0, 140, "width:1080px;text-align:center;font:400 168px/1 Fraunces;color:#F5F0E5", "It bloomed.")}
    ${t(0, 1210, "width:1080px;text-align:center;font:italic 400 37px Fraunces;color:#D8C49A", "Started as a pen.")}
`],

  // 10 — 5g claim
  ["10-5g-less-plastic", "#EEE4CC", `
    <div class="a" style="inset:0;background:#EEE4CC"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 180, "font:600 30px Inter;letter-spacing:.24em;color:#1E1914", "APPROX.")}
    ${t(50, 200, "font:600 470px/1 Fraunces;color:#1E1914;letter-spacing:-.06em", "5g<span style='font-size:180px;vertical-align:top'>*</span>")}
    ${t(64, 720, "font:500 71px/1 Fraunces;color:#57623F;letter-spacing:-.02em", "less plastic<br>per pen.")}
    ${pen("pen-set.png", 540, 1020, 900, -6)}
    ${t(64, 1160, "font:400 22px/1.5 Inter;color:#635A4C;width:952px", "*Based on our current material comparison, an Earthmend pen uses approximately 5g less plastic per pen against our defined conventional-pen baseline.")}`],

  // 11 — your brand (mockup)
  ["11-your-brand-planted", "#1E1914", `
    <div class="a" style="inset:0;background:#1E1914"></div>
    ${ph("photo-20.jpg", 560, 70, 460, 1210, "50% 50%", 16, "transform:rotate(3deg);box-shadow:0 30px 50px rgba(0,0,0,.4)")}
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(64, 230, "font:400 118px/0.92 Fraunces;color:#F5F0E5", "Your<br>brand,<br><i style='color:#D8C49A'>planted.</i>")}
    ${t(64, 720, "font:400 32px/1.45 Inter;color:#F5F0E5;width:440px", "Your logo printed on the kraft-paper barrel, with optional card packaging.")}
    ${t(64, 1150, "", "<span class='tag' style='background:#D8C49A;color:#1E1914'>Custom branding</span>")}
    ${t(64, 1230, "font:400 20px Inter;color:rgba(242,235,221,.6)", "Example mockup for a fictional client")}`],

  // 12 — made in Australia
  ["12-made-in-australia", "#57623F", `
    <div class="a" style="inset:0;background:linear-gradient(180deg,#57623F,#4A5435)"></div>
    <div class="a" style="right:-160px;top:-160px;width:560px;height:560px;border-radius:50%;background:#D8C49A"></div>
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(64, 260, "font:600 150px/0.86 Fraunces;color:#F5F0E5;letter-spacing:-.02em", "MADE<br>IN<br><span style='color:#D8C49A'>AUS</span>.")}
    ${pen("pen-set.png", 540, 900, 940, 0)}
    ${t(64, 1080, "font:italic 400 38px Fraunces;color:#D8C49A", "Grown here. Gifted here.")}
    ${site(64, 1250, "#F5F0E5")}`],

  // 13 — quote, editorial
  ["13-last-line-first-leaf", "#F5F0E5", `
    <div class="a" style="inset:0;background:#F5F0E5"></div>
    ${ph("photo-18.jpg", 64, 64, 952, 760, "50% 42%", 8)}
    ${t(64, 880, "font:400 70px/1.12 Fraunces;color:#1E1914;width:952px", "“The last line you write<br>is where something <i style='color:#57623F'>new begins.</i>”")}
    ${brand(64, 1250, "#1E1914")}`],

  // 14 — gifting
  ["14-a-gift-that-grows", "#EEE4CC", `
    <div class="a" style="inset:0;background:#EEE4CC"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 150, "font:500 123px/0.88 Fraunces;color:#1E1914;letter-spacing:-.03em", "A gift<br>that keeps<br><span style='color:#57623F'>growing.</span>")}
    ${ph("photo-22.jpg", 64, 660, 450, 600, "50% 45%", 28)}
    ${t(560, 680, "font:400 34px/1.45 Inter;color:#1E1914;width:460px", "For clients, teams and events — a giveaway people actually keep.")}
    ${t(560, 980, "", "<span class='tag' style='background:#1E1914;color:#EEE4CC'>Bulk from 50 pens</span>")}
    ${t(560, 1070, "", "<span class='tag' style='background:#F5F0E5;color:#1E1914'>Free sample</span>")}`],

  // 15 — seed options
  ["15-whats-inside", "#D8C49A", `
    <div class="a" style="inset:0;background:#D8C49A"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 160, "font:400 136px/0.9 Fraunces;color:#1E1914", "What’s<br>inside?")}
    ${pen("pen-capsule.png", 800, 330, 320, -8)}
    ${t(64, 520, "font:600 30px Inter;color:#1E1914", "You choose the seeds when you order:")}
    ${[["Australian native wildflowers", "#F5F0E5"], ["Herbs", "#1E1914"], ["Vegetables", "#F5F0E5"]].map(([s, c], i) =>
      t(64, 610 + i * 200, `width:952px;height:170px;border-radius:24px;background:${c};display:flex;align-items:center;padding:0 40px;font:500 56px Fraunces;color:${c === "#1E1914" ? "#D8C49A" : "#1E1914"}`, s)).join("")}`],

  // 16 — tag us
  ["16-tag-your-sprout", "#57623F", `
    ${ph("photo-17.jpg", 0, 0, W, H, "50% 55%")}
    ${grad("linear-gradient(0deg,rgba(30,25,20,.95) 0%,rgba(30,25,20,0) 45%)")}
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(64, 960, "font:italic 400 61px/0.95 Fraunces;color:#F5F0E5", "Sprouted yet?")}
    ${t(64, 1060, "font:500 56px/1.05 Fraunces;color:#F5F0E5;letter-spacing:-.01em", "Share it with<br><span style='color:#EEE4CC'>#EveryPenTellsAStory</span>")}`],

  // 17 — myth vs fact
  ["17-myth-vs-fact", "#1E1914", `
    <div class="a" style="inset:0;background:#1E1914"></div>
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(64, 200, "", "<span class='tag' style='background:#635A4C;color:#F5F0E5'>Myth</span>")}
    ${t(64, 280, "font:400 78px/1.05 Fraunces;color:#F5F0E5;width:952px", "“You plant the<br>whole pen.”")}
    ${t(64, 560, "", "<span class='tag' style='background:#D8C49A;color:#1E1914'>Fact</span>")}
    ${t(64, 640, "font:400 78px/1.05 Fraunces;color:#D8C49A;width:952px", "The seed capsule is<br>the part made for soil.")}
    ${pen("pen-set.png", 540, 1090, 920)}
    ${t(64, 1220, "font:400 26px Inter;color:#B5AB9A", "The barrel is kraft paper. Clear, honest, simple.")}`],

  // 18 — 30° tip
  ["18-planting-tip-30", "#EEE4CC", `
    <div class="a" style="inset:0;background:#EEE4CC"></div>
    ${brand(64, 64, "#1E1914")}
    ${t(64, 150, "font:italic 400 26px Fraunces;color:#1E1914", "Planting tip")}
    ${t(40, 180, "font:600 400px/1 Fraunces;color:#1E1914;letter-spacing:-.05em", "30°")}
    ${ph("photo-15.jpg", 540, 640, 476, 640, "35% 45%", 28)}
    ${t(64, 680, "font:500 54px/1.05 Fraunces;color:#1E1914;width:440px", "Plant your pen at an angle,")}
    ${t(64, 840, "font:400 32px/1.45 Inter;color:#1E1914;width:440px", "covering the seed capsule with soil. Water regularly and give it sun.")}`],

  // 19 — events
  ["19-events-conferences", "#1E1914", `
    <div class="a" style="inset:0;background:linear-gradient(135deg,#2A241D,#1E1914)"></div>
    ${brand(64, 64, "#F5F0E5", true)}
    ${t(64, 170, "font:500 88px/0.98 Fraunces;color:#F5F0E5;letter-spacing:-.03em", "Hand out<br>something they’ll<br><span style='color:#D8C49A'>keep.</span>")}
    ${pen("pen-set-full.png", 540, 720, 980, 8)}
    ${t(64, 930, "display:flex;flex-wrap:wrap;gap:16px;width:952px", ["Conferences", "Trade shows", "Universities", "Client gifts", "Staff gifts"].map((s) =>
      `<span class='tag' style='background:rgba(255,255,255,.14);color:#F5F0E5;font-size:26px'>${s}</span>`).join(""))}
    ${site(64, 1250, "#D8C49A")}`],

  // 20 — CTA
  ["20-request-a-free-sample", "#F5F0E5", `
    <div class="a" style="inset:0;background:#F5F0E5"></div>
    <div class="a" style="left:0;top:0;width:${W}px;height:22px;display:flex">${["#57623F", "#D8C49A", "#1E1914", "#647348", "#EEE4CC"].map((c) => `<div style="flex:1;background:${c}"></div>`).join("")}</div>
    ${brand(64, 80, "#1E1914")}
    ${t(64, 180, "font:500 119px/0.9 Fraunces;color:#1E1914;letter-spacing:-.03em", "Try one<br><span style='color:#57623F'>on us.</span>")}
    ${ph("photo-22.jpg", 600, 160, 416, 560, "50% 40%", 208)}
    ${t(64, 520, "font:400 34px/1.45 Inter;color:#4E4538;width:500px", "Request a free single-pen sample before you order.")}
    ${pen("pen-set.png", 540, 860, 900, -4)}
    ${t(64, 1010, "width:952px;height:150px;border-radius:999px;background:#1E1914;display:flex;align-items:center;justify-content:center;font:500 52px Fraunces;color:#D8C49A", "earthmend.com.au")}
    ${t(64, 1230, "font:italic 400 26px Fraunces;color:#57623F", "Write. Plant. Grow.")}`],
];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
const page = await browser.newPage({ viewport: { width: W, height: H } });
for (const [name, bg, body] of posts) {
  if (only && !name.startsWith(only)) continue;
  const file = `${here}/tmp-post-${name}.html`;
  writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body><div class="p" style="background:${bg}">${body}</div></body></html>`);
  await page.goto(`file://${file}`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/earthmend-post-${name}.png`, clip: { x: 0, y: 0, width: W, height: H } });
  console.log("rendered", name);
}
await browser.close();
