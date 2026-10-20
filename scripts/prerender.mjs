// Snapshots every route in the sitemap into static HTML inside dist/, after
// `vite build` has produced the production bundle.
//
// This is a pure client-rendered React SPA: every route serves the same
// index.html until React mounts and usePageMeta() sets the real title and
// description client-side. Search engines see that first, generic HTML on
// their initial crawl, and only get the real per-page content on a slower,
// resource-limited second rendering pass — which is a common reason pages
// sit in "Discovered - currently not indexed" for weeks.
//
// To fix that without a framework migration, this script serves the built
// dist/ locally, visits each sitemap URL with a real browser, waits for
// React (and usePageMeta) to finish, and writes the fully-rendered HTML to
// dist/<route>/index.html. Netlify resolves a request for /the-pen to that
// file automatically (pretty-URL resolution happens before `_redirects` is
// consulted), so crawlers and users both get real content immediately, with
// no change needed to public/_redirects. React still mounts over the top on
// the client for interactivity — this is prerendering, not true SSR
// hydration, so a brief re-render on load is expected and fine.
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const SITE_URL = "https://earthmend.com.au";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".webm": "video/webm",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

function readSitemapRoutes(xml) {
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs.map((loc) => {
    const path = loc.replace(SITE_URL, "").replace(/^\//, "").replace(/\/$/, "");
    return path; // "" for the homepage, "the-pen", "blog/some-slug", ...
  });
}

// Minimal static server with Netlify-style SPA fallback: serve a matching
// file from dist/ when one exists, otherwise fall back to index.html. This
// mirrors public/_redirects (`/* /index.html 200`) closely enough for the
// prerender crawl, which only ever requests real sitemap routes anyway.
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      const candidates = [
        join(distDir, urlPath),
        join(distDir, urlPath, "index.html"),
        join(distDir, "index.html"),
      ];
      for (const candidate of candidates) {
        if (existsSync(candidate) && candidate.startsWith(distDir)) {
          try {
            const stat = await import("node:fs/promises").then((fs) => fs.stat(candidate));
            if (stat.isDirectory()) continue;
            const body = await readFile(candidate);
            const type = MIME_TYPES[extname(candidate)] ?? "application/octet-stream";
            res.writeHead(200, { "Content-Type": type });
            res.end(body);
            return;
          } catch {
            continue;
          }
        }
      }
      res.writeHead(404);
      res.end("Not found");
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  const sitemapXml = await readFile(join(root, "public/sitemap.xml"), "utf-8");
  const routes = readSitemapRoutes(sitemapXml);

  const server = await startServer();
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  // This sandbox pre-caches a Chromium build at a fixed path that can lag
  // behind the `playwright` npm package's expected revision; prefer it when
  // present so local/sandbox builds don't need a fresh download. CI hosts
  // (Netlify) have no such path and fall back to Playwright's own browser,
  // fetched via its postinstall step during `npm install`.
  const sandboxChromium = "/opt/pw-browsers/chromium";
  const browser = await chromium.launch(
    existsSync(sandboxChromium) ? { executablePath: sandboxChromium } : {},
  );
  const page = await browser.newPage();

  console.log(`Prerendering ${routes.length} routes...`);
  for (const route of routes) {
    const url = `${baseUrl}/${route}`;
    await page.goto(url, { waitUntil: "networkidle" });
    // usePageMeta runs in a useEffect on mount, which has already flushed
    // by the time the app settles; this extra tick covers any route (e.g.
    // BlogPost looking up its slug) that needs one more microtask turn.
    await page.waitForTimeout(50);
    const html = await page.content();

    const outDir = route ? join(distDir, route) : distDir;
    const outFile = join(outDir, "index.html");
    await mkdir(outDir, { recursive: true });
    await writeFile(outFile, html);
    console.log(`  /${route}  ->  ${outFile.replace(root + "/", "")}`);
  }

  await browser.close();
  server.close();
  console.log("Prerendering complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
