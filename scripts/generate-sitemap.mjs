// Generates public/sitemap.xml from the real routes plus every blog post
// slug/date in src/data/blog.ts. Reads that file as text rather than
// importing it, since it's TypeScript and this is a plain Node script with
// no build step of its own — a slug/date regex is all this needs.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://earthmend.com.au";

const STATIC_ROUTES = [
  "",
  "the-pen",
  "why-it-matters",
  "for-business",
  "our-story",
  "blog",
  "faq",
  "privacy",
  "terms",
];

const blogSource = readFileSync(join(root, "src/data/blog.ts"), "utf-8");
const postsSection = blogSource.slice(blogSource.indexOf("export const BLOG_POSTS"));

const slugPattern = /slug:\s*"([^"]+)"/g;
const today = new Date().toISOString().slice(0, 10);

const blogRoutes = [];
let match;
while ((match = slugPattern.exec(postsSection))) {
  const slug = match[1];
  const nearby = postsSection.slice(match.index, match.index + 400);
  const dateMatch = nearby.match(/date:\s*"([^"]+)"/);
  blogRoutes.push({ path: `blog/${slug}`, lastmod: dateMatch ? dateMatch[1] : today });
}

const routes = [
  ...STATIC_ROUTES.map((path) => ({ path, lastmod: today })),
  ...blogRoutes,
];

const urls = routes
  .map(({ path, lastmod }) => {
    const loc = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`Generated public/sitemap.xml with ${routes.length} URLs.`);
