export type BlogCategory = "Sustainability" | "For Business" | "Product" | "Behind the Brand";

export type BlogBodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  /** Omitted while a post is still a placeholder. */
  body?: BlogBodyBlock[];
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
    slug: "how-to-reduce-your-plastic-footprint",
    title: "How to Reduce Your Plastic Footprint? (10 Easy Ways You Forgot)",
    category: "Sustainability",
    excerpt:
      "Ten small, practical swaps — from reusable bottles to buying in bulk — that add up to a real drop in your everyday plastic use.",
    date: "2026-09-23",
    readingTime: "3 min read",
    body: [
      {
        type: "paragraph",
        text: "You can reduce your plastic footprint by taking small steps, from your home to your buying practices. For example, you can carry small tote bags instead of single-use plastic bags.",
      },
      {
        type: "paragraph",
        text: "Did you know that the lifespan of plastic products averages about 10 years? It can also take up to 500 years to decompose, depending on composition and disposal. (Source: Statista)",
      },
      {
        type: "paragraph",
        text: "In this guide, we will discuss the easy 10 best practices for reducing your plastic footprint today!",
      },
      { type: "heading", text: "What Are 10 Ways To Reduce Plastic Footprint?" },
      { type: "heading", text: "1. Use Reusable Products" },
      {
        type: "paragraph",
        text: "So, what reusable products can you use to reduce your plastic footprint? Here are they:",
      },
      {
        type: "list",
        items: [
          "Reusable bottles instead of single-use plastic bottles.",
          "Reusable hot drink cups instead of single-use hot drink cups.",
        ],
      },
      { type: "paragraph", text: "Invest in the above products and carry them with you." },
      { type: "heading", text: "2. Why Use Soap Bars (Instead Of Shower Gel)?" },
      {
        type: "paragraph",
        text: "Shower gels are not a healthy option, so replace them with soap bars, shampoos, or liquids. However, if you dislike soap, consider opting for refill bags or shower gel.",
      },
      { type: "paragraph", text: "So, it will cut down your monthly overall plastic use." },
      { type: "heading", text: "3. Avoid Disposable Cutlery And Straws" },
      { type: "paragraph", text: "You can avoid using disposable cutlery and straws." },
      {
        type: "paragraph",
        text: "So, what can you use instead? Carry reusable cutlery sets, metal sets, bamboo straws, and more!",
      },
      { type: "heading", text: "4. Do You Carry A Tote Bag?" },
      { type: "paragraph", text: "Instead of using single-use plastic bags, invest in tote bags." },
      {
        type: "paragraph",
        text: "Absolutely, sellers love it when you carry a tote bag or a foldable shopping bag.",
      },
      { type: "heading", text: "5. How Long Have You Been Using Plastic Containers?" },
      { type: "paragraph", text: "If you use plastic containers in your kitchenware, stop it from today!" },
      {
        type: "paragraph",
        text: "You can switch to glass or stainless steel containers. They are not harmful and don't impact your food like plastic containers.",
      },
      { type: "heading", text: "6. Which One Should You Pick, Loose Tea Or Teabags?" },
      {
        type: "paragraph",
        text: "Since tea bags contain a plastic footprint, why don't you switch to loose tea?",
      },
      { type: "paragraph", text: "There are high-quality brews you can purchase from loose tea providers." },
      { type: "heading", text: "7. How Many Days A Week Do You Order Food?" },
      {
        type: "paragraph",
        text: "You can order food fewer times in a month instead of purchasing prepackaged meals or takeaways. When you do so, the food is packaged in plastic, which is not suitable for your health.",
      },
      { type: "paragraph", text: "So, consider cooking more at home (and ordering less food outdoors)." },
      { type: "heading", text: "8. Have You Reused Old Garments?" },
      { type: "paragraph", text: "One of the most polluting products is clothes, as they are made of plastic." },
      {
        type: "paragraph",
        text: "So, instead of throwing away your old clothes, you can reuse them even as surface wipes.",
      },
      { type: "heading", text: "9. How Many Paper Napkin Packages Did You Buy?" },
      {
        type: "paragraph",
        text: "Did you know that paper napkins also contribute to plastic usage? Hence, it's time to replace them with disposable paper napkins or cloth towels.",
      },
      { type: "heading", text: "10. Why Buy In Bulk?" },
      {
        type: "paragraph",
        text: "Instead of buying several small containers of products such as nuts, yogurt, curd, rice, pasta, jars, and packaging, consider purchasing bigger containers.",
      },
      {
        type: "paragraph",
        text: "Also, you can look for nonplastic packages such as glass jars to practice eco-friendly packaging as well.",
      },
      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "In conclusion, it is essential to reduce your plastic footprint, and you can start with small practices.",
      },
      {
        type: "paragraph",
        text: "So, are you ready to switch to eco-friendly products and contribute to a healthy environment for the future generation? Let's start practicing today!",
      },
    ],
  },
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
