// Renders the EarthMend Instagram Story FAQ series (1080x1920 PNGs).
// The pen is always the real product photo (pen.png, cut from the supplied
// reference) — never redrawn — so its proportions stay exact.
import { chromium } from "playwright-core";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const here = resolve(".");
const OUT = process.argv[2] || resolve("out");
mkdirSync(OUT, { recursive: true });
const f = (p) => `file://${here}/${p}`;
const font = (p) => f(`node_modules/@fontsource/${p}`);

const PEN_W = 1578, PEN_H = 86; // native cut-out size, never distorted

const C = {
  ivory: "#F5F0E5", cream: "#EEE4CC", kraft: "#D8C49A", charcoal: "#1E1914",
  muted: "#635A4C", moss: "#57623F", mossSoft: "#647348", paper: "#FBF8F1",
};

const css = `
@font-face{font-family:Fraunces;font-weight:400;font-style:normal;src:url(${font("fraunces/files/fraunces-latin-400-normal.woff2")})}
@font-face{font-family:Fraunces;font-weight:500;font-style:normal;src:url(${font("fraunces/files/fraunces-latin-500-normal.woff2")})}
@font-face{font-family:Fraunces;font-weight:400;font-style:italic;src:url(${font("fraunces/files/fraunces-latin-400-italic.woff2")})}
@font-face{font-family:Fraunces;font-weight:500;font-style:italic;src:url(${font("fraunces/files/fraunces-latin-500-italic.woff2")})}
@font-face{font-family:Inter;font-weight:400;src:url(${font("inter/files/inter-latin-400-normal.woff2")})}
@font-face{font-family:Inter;font-weight:500;src:url(${font("inter/files/inter-latin-500-normal.woff2")})}
@font-face{font-family:Inter;font-weight:600;src:url(${font("inter/files/inter-latin-600-normal.woff2")})}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:1920px}
body{font-family:Inter,sans-serif;color:${C.charcoal};-webkit-font-smoothing:antialiased;font-feature-settings:"kern" 1,"liga" 1}
.story{position:relative;width:1080px;height:1920px;overflow:hidden;background:var(--bg)}
.grain{position:absolute;inset:0;background:url(${f("grain.png")});mix-blend-mode:soft-light;opacity:var(--grain,.55);pointer-events:none}
.dark .grain{opacity:.35}
.top{position:absolute;top:150px;left:96px;right:96px;display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:16px;font-weight:600;font-size:24px;letter-spacing:.34em}
.brand img{width:38px;height:auto}
.dark .brand img,.moss .brand img{filter:invert(94%) sepia(8%) saturate(300%) hue-rotate(5deg)}
.chap{font-size:22px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.foot{position:absolute;bottom:150px;left:96px;right:96px;display:flex;justify-content:space-between;align-items:flex-end;font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:500}
.rule{height:1px;background:var(--line)}
.eyebrow{font-size:24px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--muted)}
.serif{font-family:Fraunces,serif;font-weight:400;letter-spacing:-.015em}
.pen-wrap{position:absolute;filter:drop-shadow(0 26px 22px rgba(30,25,20,.20)) drop-shadow(0 4px 4px rgba(30,25,20,.22))}
.dark .pen-wrap{filter:drop-shadow(0 26px 26px rgba(0,0,0,.55)) drop-shadow(0 4px 4px rgba(0,0,0,.5))}
.pen-wrap img{display:block;transform-origin:center center}
/* Q&A chat language */
.q{position:relative;background:var(--bubble);color:var(--qfg);border:1px solid var(--line);border-radius:3px;padding:40px 46px 44px;max-width:820px}
.q::after{content:"";position:absolute;left:46px;bottom:-15px;width:28px;height:28px;background:var(--bubble);border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}
.q .lbl{font-size:21px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--qmuted);margin-bottom:18px;display:block}
.q p{font-family:Fraunces,serif;font-style:italic;font-size:58px;line-height:1.12;letter-spacing:-.01em}
.a{border-left:2px solid var(--accent);padding:6px 0 6px 40px;max-width:840px}
.a .lbl{display:flex;align-items:center;gap:14px;font-size:21px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;margin-bottom:22px}
.a .lbl img{width:30px}
.dark .a .lbl img,.moss .a .lbl img{filter:invert(94%) sepia(8%) saturate(300%) hue-rotate(5deg)}
.a p{font-size:42px;line-height:1.36;font-weight:400}
.a p + p{margin-top:22px}
.hl{color:var(--accent);font-weight:500}
`;

const themes = {
  ivory: { bg: C.ivory, muted: C.muted, line: "rgba(30,25,20,.14)", bubble: C.paper, accent: C.moss, cls: "" },
  cream: { bg: C.cream, muted: C.muted, line: "rgba(30,25,20,.16)", bubble: C.ivory, accent: C.moss, cls: "" },
  kraft: { bg: C.kraft, muted: "#4E4538", line: "rgba(30,25,20,.2)", bubble: C.ivory, accent: C.charcoal, cls: "", grain: .7 },
  dark: { bg: C.charcoal, muted: "#B5AB9A", line: "rgba(245,240,229,.18)", bubble: "#2A241D", accent: C.kraft, cls: "dark", fg: C.ivory, qfg: C.ivory, qmuted: "#B5AB9A" },
  moss: { bg: C.moss, muted: "#DCD8C2", line: "rgba(245,240,229,.24)", bubble: C.ivory, accent: C.ivory, cls: "moss", fg: C.ivory },
};

// pen: centre (cx,cy), length L (px, along the pen), rotation deg (0 = tip left)
function pen({ cx, cy, L, rot = 0, cls = "" }) {
  const s = L / PEN_W, w = PEN_W * s, h = PEN_H * s;
  return `<div class="pen-wrap ${cls}" style="left:${cx - w / 2}px;top:${cy - h / 2}px;width:${w}px;height:${h}px">
    <img src="${f("pen.png")}" style="width:${w}px;height:${h}px;transform:rotate(${rot}deg)"></div>`;
}

const top = (chapter) => `<div class="top"><div class="brand"><img src="${f("logo-mark.png")}">EARTHMEND</div><div class="chap">${chapter}</div></div>`;
const foot = (l = "earthmend.com.au", r = "") => `<div class="foot"><span>${l}</span><span>${r}</span></div>`;
const Q = (t) => `<div class="q"><span class="lbl">You asked</span><p>${t}</p></div>`;
const A = (...ps) => `<div class="a"><div class="lbl"><img src="${f("logo-mark.png")}">Earthmend</div>${ps.map((p) => `<p>${p}</p>`).join("")}</div>`;
const abs = (style, html) => `<div style="position:absolute;${style}">${html}</div>`;
const opener = (n, title, fg) => `<div class="eyebrow">Chapter ${n}</div><h1 class="serif" style="font-size:112px;line-height:1.0;margin-top:26px;${fg ? `color:${fg}` : ""}">${title}</h1>`;

const CH = ["01 / Meet Earthmend", "02 / Write. Plant. Grow.", "03 / What it’s made of", "04 / A small difference", "05 / Make it yours"];

const stories = [
  // ───────── Chapter 01 — Meet Earthmend (ivory)
  ["01-1-cover", "ivory", `
    ${top(CH[0])}
    ${abs("left:96px;top:330px;right:96px", opener("01", "Meet<br>Earthmend"))}
    ${abs("left:96px;top:700px;right:96px", `<p class="serif" style="font-size:64px;font-style:italic;line-height:1.1;color:${C.muted}">A pen that gives back.</p>`)}
    ${pen({ cx: 540, cy: 1070, L: 1000, rot: -8 })}
    ${abs("left:96px;right:96px;top:1330px", `<div class="rule"></div>
      <div style="display:flex;justify-content:space-between;margin-top:34px;font-size:30px;font-weight:600;letter-spacing:.3em">
      <span>WRITE</span><span style="color:${C.moss}">→</span><span>PLANT</span><span style="color:${C.moss}">→</span><span>GROW</span></div>`)}
    ${abs("left:96px;right:96px;top:1500px", `<p style="font-size:30px;line-height:1.45;color:${C.muted}">Your questions, answered. Tap through ›</p>`)}
    ${foot("earthmend.com.au", "Made in Australia")}`],

  ["01-2-what-is-it", "ivory", `
    ${top(CH[0])}
    ${abs("left:96px;top:330px", Q("So… what is it,<br>exactly?"))}
    ${abs("left:96px;top:690px", A("A kraft-paper pen with a small <span class='hl'>seed capsule</span> at the end.", "Write with it first. Plant it after."))}
    ${pen({ cx: 540, cy: 1400, L: 960 })}
    ${abs("left:96px;right:96px;top:1500px;display:flex;justify-content:space-between;font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:" + C.muted, "<span>← Ballpoint tip</span><span>Seed capsule →</span>")}
    ${foot()}`],

  ["01-3-anatomy", "ivory", `
    ${top(CH[0])}
    ${abs("left:96px;top:300px;right:96px", `<div class="eyebrow">Anatomy</div><h2 class="serif" style="font-size:84px;line-height:1.02;margin-top:22px;white-space:nowrap">Three parts.<br><em>One second life.</em></h2>`)}
    ${pen({ cx: 830, cy: 1160, L: 1060, rot: 90 })}
    ${abs("left:96px;top:640px;width:600px", `<div style="display:flex;align-items:center;gap:0"><div><div class="eyebrow" style="color:${C.moss}">01</div><p class="serif" style="font-size:46px;margin-top:8px">Ballpoint tip</p><p style="font-size:30px;line-height:1.4;color:${C.muted};margin-top:8px">Writes like the pen<br>you already know.</p></div></div>`)}
    ${abs("left:96px;top:660px;width:698px", `<div class="rule" style="margin-left:420px;background:${C.charcoal};opacity:.35"></div>`)}
    ${abs("left:96px;top:1060px;width:600px", `<div class="eyebrow" style="color:${C.moss}">02</div><p class="serif" style="font-size:46px;margin-top:8px">Kraft-paper barrel</p><p style="font-size:30px;line-height:1.4;color:${C.muted};margin-top:8px">Natural kraft paper —<br>and room for your logo.</p>`)}
    ${abs("left:96px;top:1080px;width:698px", `<div class="rule" style="margin-left:470px;background:${C.charcoal};opacity:.35"></div>`)}
    ${abs("left:96px;top:1480px;width:600px", `<div class="eyebrow" style="color:${C.moss}">03</div><p class="serif" style="font-size:46px;margin-top:8px">Seed capsule</p><p style="font-size:30px;line-height:1.4;color:${C.muted};margin-top:8px">Biodegradable, filled with<br>seeds, made for planting.</p>`)}
    ${abs("left:96px;top:1500px;width:698px", `<div class="rule" style="margin-left:400px;background:${C.charcoal};opacity:.35"></div>`)}
    ${foot()}`],

  // ───────── Chapter 02 — Write. Plant. Grow. (cream)
  ["02-1-ink-runs-out", "cream", `
    ${top(CH[1])}
    ${abs("left:96px;top:320px;right:96px", opener("02", "Write.<br>Plant. Grow."))}
    ${abs("left:96px;top:720px", Q("What happens when<br>the ink runs out?"))}
    ${abs("left:96px;top:1080px", A("Don’t throw it away just yet.", "The <span class='hl'>seed capsule</span> at the end<br>can be planted."))}
    ${pen({ cx: 540, cy: 1560, L: 940, rot: 0 })}
    ${foot()}`],

  ["02-2-how-to-plant", "cream", `
    ${top(CH[1])}
    ${abs("left:96px;top:320px;right:96px", `<div class="eyebrow">How it works</div><h2 class="serif" style="font-size:88px;line-height:1.02;margin-top:22px">From desk<br><em>to soil.</em></h2>`)}
    ${pen({ cx: 540, cy: 800, L: 900, rot: -4 })}
    ${abs("left:96px;right:96px;top:960px", [
      ["01", "Write", "Use it like any ballpoint pen."],
      ["02", "Plant", "Remove the seed capsule and plant<br>it in suitable soil."],
      ["03", "Grow", "Give it sunlight, water and time."],
    ].map(([n, h, t], i) => `<div style="display:flex;gap:44px;padding:34px 0;${i ? "border-top:1px solid rgba(30,25,20,.16)" : ""}">
        <span class="serif" style="font-size:76px;line-height:.9;color:${C.moss};width:110px">${n}</span>
        <div><p class="serif" style="font-size:50px">${h}</p><p style="font-size:32px;line-height:1.4;color:${C.muted};margin-top:8px">${t}</p></div></div>`).join(""))}
    ${foot()}`],

  ["02-3-what-grows", "cream", `
    ${top(CH[1])}
    ${abs("left:96px;top:330px", Q("What actually<br>grows from it?"))}
    ${abs("left:96px;top:690px", A("You choose the seeds when you order."))}
    ${abs(`left:96px;right:96px;top:960px;height:330px;overflow:hidden;border-radius:2px;background:${C.ivory}`, `
      <div style="position:absolute;right:70px;top:50%;transform:translateY(-58%);filter:drop-shadow(0 22px 20px rgba(30,25,20,.22))">
        <img src="${f("pen.png")}" style="display:block;width:${PEN_W * 2.2}px;height:${PEN_H * 2.2}px"></div>
      <span style="position:absolute;left:44px;bottom:36px;font-size:21px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.muted}">The seed capsule</span>`)}
    ${abs("left:96px;right:96px;top:1350px", ["Australian native wildflowers", "Herbs", "Vegetables"].map((t, i) =>
      `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:22px 0;border-top:1px solid rgba(30,25,20,.16)"><span class="serif" style="font-size:44px">${t}</span><span style="font-size:24px;color:${C.muted};letter-spacing:.12em">0${i + 1}</span></div>`).join(""))}
    ${foot()}`],

  // ───────── Chapter 03 — What it's made of (charcoal)
  ["03-1-biodegradable", "dark", `
    ${top(CH[2])}
    ${abs("left:96px;top:320px;right:96px", opener("03", "What it’s<br>made of", C.ivory))}
    ${abs("left:96px;top:720px", Q("Is the whole pen<br>biodegradable?"))}
    ${abs("left:96px;top:1080px;color:" + C.ivory, A("No — and we’d rather be clear.", "The <span class='hl'>seed capsule</span> is the part designed to go into soil. The barrel is kraft paper."))}
    ${pen({ cx: 540, cy: 1620, L: 940 })}
    ${foot()}`],

  ["03-2-materials", "dark", `
    ${top(CH[2])}
    ${abs("left:96px;top:320px;right:96px;color:" + C.ivory, `<div class="eyebrow">The honest breakdown</div><h2 class="serif" style="font-size:88px;line-height:1.02;margin-top:22px">Simple parts.<br><em>Clearly explained.</em></h2>`)}
    ${pen({ cx: 540, cy: 850, L: 960, rot: 0 })}
    ${abs("left:96px;right:96px;top:1000px;color:" + C.ivory, [
      ["Barrel", "Kraft paper"],
      ["Tip", "Standard ballpoint"],
      ["Capsule", "Biodegradable, seed-filled"],
      ["Made in", "Australia"],
    ].map(([k, v]) => `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:40px;padding:30px 0;border-top:1px solid rgba(245,240,229,.18)">
        <span style="font-size:24px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#B5AB9A">${k}</span>
        <span class="serif" style="font-size:44px;text-align:right">${v}</span></div>`).join("") + `<div style="border-top:1px solid rgba(245,240,229,.18)"></div>`)}
    ${abs("left:96px;right:96px;top:1560px", `<p style="font-size:28px;line-height:1.45;color:#B5AB9A">No clip. No plastic barrel. Nothing extra.</p>`)}
    ${foot()}`],

  // ───────── Chapter 04 — A small material difference (kraft)
  ["04-1-5g", "kraft", `
    ${top(CH[3])}
    ${abs("left:96px;top:320px;right:96px", opener("04", "A small material<br>difference"))}
    ${abs("left:96px;top:690px", Q("How much less plastic<br>are we talking?"))}
    ${abs("left:96px;right:96px;top:1010px", `<div class="eyebrow">Approx.</div>
      <p class="serif" style="font-size:280px;line-height:1;letter-spacing:-.04em;margin-top:0">5g<span style="font-size:120px;vertical-align:top;line-height:1.4">*</span></p>
      <p style="font-size:34px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;margin-top:70px">less plastic per pen</p>`)}
    ${abs("left:96px;right:96px;top:1500px", `<div class="rule"></div><p style="font-size:24px;line-height:1.5;color:#4E4538;margin-top:22px">*Based on our current material comparison, an Earthmend pen uses approximately 5g less plastic per pen against our defined conventional-pen baseline.</p>`)}
    ${foot()}`],

  ["04-2-greenwashing", "kraft", `
    ${top(CH[3])}
    ${abs("left:96px;top:330px", Q("Isn’t this just<br>greenwashing?"))}
    ${abs("left:96px;top:690px", A("We try hard not to overstate what one pen can do.", "It isn’t zero impact, and it won’t fix climate change. It’s one specific material choice — <span class='hl'>clearly explained</span>."))}
    ${pen({ cx: 560, cy: 1440, L: 1000, rot: -6 })}
    ${foot()}`],

  // ───────── Chapter 05 — Make it yours (moss)
  ["05-1-your-logo", "moss", `
    ${top(CH[4])}
    ${abs("left:96px;top:320px;right:96px", opener("05", "Make it<br>yours", C.ivory))}
    ${abs("left:96px;top:720px", Q("Can we put our<br>logo on it?"))}
    ${abs("left:96px;top:1080px;color:" + C.ivory, A("Yes. Your logo is printed directly onto the <span class='hl'>kraft-paper barrel</span>."))}
    ${pen({ cx: 540, cy: 1520, L: 960 })}
    ${abs("left:497px;top:1556px;width:2px;height:64px;background:" + C.ivory, "")}
    ${abs("left:513px;top:1596px;font-size:22px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:" + C.ivory, "Your logo here")}
    ${foot()}`],

  ["05-2-who-orders", "moss", `
    ${top(CH[4])}
    ${abs("left:96px;top:330px", Q("Who orders<br>Earthmend pens?"))}
    ${abs("left:96px;top:690px;color:" + C.ivory, A("Teams who want their giveaway to <span class='hl'>outlast the event</span>."))}
    ${abs("left:96px;right:96px;top:1000px;color:" + C.ivory, ["Corporate gifting", "Events &amp; conferences", "Universities", "Client &amp; staff gifts"].map((t) =>
      `<div style="padding:24px 0;border-top:1px solid rgba(245,240,229,.24)"><span class="serif" style="font-size:48px">${t}</span></div>`).join("") + `<div style="border-top:1px solid rgba(245,240,229,.24)"></div>`)}
    ${abs("left:96px;right:96px;top:1560px;color:" + C.ivory, `<p style="font-size:30px;line-height:1.45">Bulk orders from 50 pens · Free sample available</p>`)}
    ${foot()}`],

  ["05-3-end", "ivory", `
    ${top("Earthmend FAQ")}
    ${pen({ cx: 540, cy: 960, L: 1180, rot: 90 })}
    ${abs("left:96px;top:330px;width:380px", `<h2 class="serif" style="font-size:96px;line-height:1.0">A pen<br>that<br><em>gives<br>back.</em></h2>`)}
    ${abs("left:640px;top:1100px;width:360px", `<div style="font-size:26px;font-weight:600;letter-spacing:.28em;line-height:2.2">WRITE<br><span style="color:${C.moss}">↓</span><br>PLANT<br><span style="color:${C.moss}">↓</span><br>GROW</div>`)}
    ${abs("left:96px;top:1300px;width:400px", `<p style="font-size:30px;line-height:1.45;color:${C.muted}">Still curious? Send us a DM or request a free sample.</p>`)}
    ${abs("left:96px;right:96px;top:1600px", `<div class="rule"></div><p class="serif" style="font-size:48px;margin-top:26px">earthmend.com.au</p>`)}
    <div class="foot"><span></span><span>Made in Australia</span></div>`],
];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" }).catch(() =>
  chromium.launch());
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
const only = process.argv[3];
for (const [name, theme, body] of stories) {
  if (only && !name.startsWith(only)) continue;
  const t = themes[theme];
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
    <div class="story ${t.cls}" style="--bg:${t.bg};--muted:${t.muted};--line:${t.line};--bubble:${t.bubble};--accent:${t.accent};--qfg:${t.qfg ?? C.charcoal};--qmuted:${t.qmuted ?? C.muted};--grain:${t.grain ?? .55};color:${t.fg ?? C.charcoal}">
    ${body}<div class="grain"></div></div></body></html>`;
  const file = `${here}/tmp-${name}.html`;
  writeFileSync(file, html);
  await page.goto(`file://${file}`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/earthmend-story-${name}.png`, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
  console.log("rendered", name);
}
await browser.close();
