export type BlogCategory = "Sustainability" | "For Business" | "Product" | "Behind the Brand";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  /** One entry per paragraph. Omitted while a post is still a placeholder. */
  body?: string[];
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Sustainability",
  "For Business",
  "Product",
  "Behind the Brand",
];

/**
 * Placeholder posts — realistic titles, excerpts and metadata so the page
 * can be designed and reviewed end to end. Swap these for real posts by
 * editing this array; every component downstream reads from it.
 */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-happens-after-its-used",
    title: "What Happens After It's Used?",
    category: "Sustainability",
    excerpt:
      "It's the question that started EarthMend. A look at why we think it's worth asking about every product a business hands out — not just the pen.",
    date: "2026-09-08",
    readingTime: "5 min read",
  },
  {
    slug: "what-our-logo-means",
    title: "What Our Logo Means (And Why It Took So Long to Get Right)",
    category: "Behind the Brand",
    excerpt:
      "Air, water, fire and earth, crossed into one mark. The thinking behind the symbol on every EarthMend pen.",
    date: "2026-08-19",
    readingTime: "4 min read",
  },
  {
    slug: "problem-with-most-promotional-products",
    title: "The Problem With Most Promotional Products",
    category: "For Business",
    excerpt:
      "Most branded merchandise is designed to be handed out, not kept. We look at why — and what a second purpose changes.",
    date: "2026-08-03",
    readingTime: "6 min read",
  },
  {
    slug: "inside-the-seed-capsule",
    title: "Inside the Seed Capsule: How a Pen Becomes a Plant",
    category: "Product",
    excerpt:
      "From ink to soil: a close look at the small biodegradable capsule that gives an EarthMend pen its second life.",
    date: "2026-07-22",
    readingTime: "4 min read",
  },
  {
    slug: "greenwashing-101",
    title: "Greenwashing 101: What “Eco-Friendly” Actually Means",
    category: "Sustainability",
    excerpt:
      "Vague claims are easy to make and hard to trust. Why we're careful about the words “sustainable” and “eco-friendly” — including our own.",
    date: "2026-07-05",
    readingTime: "7 min read",
  },
  {
    slug: "questions-before-branding-your-giveaway",
    title: "5 Questions to Ask Before Branding Your Next Giveaway",
    category: "For Business",
    excerpt:
      "Before your logo goes on anything, a short list of questions worth asking about what happens to it after.",
    date: "2026-06-18",
    readingTime: "5 min read",
  },
  {
    slug: "why-we-chose-kraft-paper",
    title: "Why We Chose Kraft Paper Over Plastic",
    category: "Product",
    excerpt:
      "A simple material choice, and the thinking behind it — practicality, cost, and what it means for the pen's second life.",
    date: "2026-06-02",
    readingTime: "4 min read",
  },
  {
    slug: "corporate-gifting-that-gets-kept",
    title: "Corporate Gifting That Doesn't End Up in a Drawer",
    category: "For Business",
    excerpt:
      "Gifts that get used, then remembered. Some thoughts on choosing corporate gifts people actually want to keep.",
    date: "2026-05-14",
    readingTime: "5 min read",
  },
  {
    slug: "australias-changing-climate",
    title: "Australia's Changing Climate, in Plain Language",
    category: "Sustainability",
    excerpt:
      "No jargon, no alarm bells — just a plain-language look at how Australia's climate conversation is shifting, and why it matters to business.",
    date: "2026-05-01",
    readingTime: "6 min read",
  },
  {
    slug: "beginners-guide-to-planting-your-capsule",
    title: "A Beginner's Guide to Planting Your Seed Capsule",
    category: "Product",
    excerpt:
      "Soil, sunlight, water, time. Everything you need to know to plant the seed capsule from your EarthMend pen.",
    date: "2026-04-16",
    readingTime: "3 min read",
  },
  {
    slug: "small-business-smaller-footprint",
    title: "Small Business, Smaller Footprint: Where to Start",
    category: "For Business",
    excerpt:
      "You don't need a sustainability department to make better choices. A few practical starting points for small teams.",
    date: "2026-04-02",
    readingTime: "6 min read",
  },
  {
    slug: "real-cost-of-free-promotional-merchandise",
    title: "The Real Cost of “Free” Promotional Merchandise",
    category: "Sustainability",
    excerpt:
      "Giveaways aren't really free — someone pays, eventually. A look at the true cost of disposable branded products.",
    date: "2026-03-11",
    readingTime: "5 min read",
  },
];
