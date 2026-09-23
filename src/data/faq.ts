export type FAQCategory = "The Pen & Planting" | "Ordering for Business" | "Shipping & Delivery" | "Sustainability";

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_SECTIONS: { category: FAQCategory; items: FAQItem[] }[] = [
  {
    category: "The Pen & Planting",
    items: [
      {
        question: "What is the pen actually made of?",
        answer:
          "The barrel is kraft paper, the ink is a standard ballpoint fill, and the cap holds a biodegradable seed capsule — everything needed for the pen's first life, and its second.",
      },
      {
        question: "How do I plant the seed capsule?",
        answer:
          "Once the ink runs out, remove the seed capsule from the cap and plant it in suitable soil. Give it sunlight, water and time, and it's on its way.",
      },
      {
        question: "What seeds come with the pen?",
        answer:
          "You can choose from Australian native wildflower seeds, herb seeds, or vegetable seeds when you place your order.",
      },
      {
        question: "Does the whole pen break down once it's planted?",
        answer:
          "The seed capsule is the part that's designed to go into soil — it's biodegradable and built for planting. The barrel is kraft paper, a renewable, low-impact material in its own right, but planting is specifically about the capsule.",
      },
    ],
  },
  {
    category: "Ordering for Business",
    items: [
      {
        question: "What's the minimum order quantity?",
        answer:
          "Bulk pricing starts at 50 pens. If you'd like to try one first, a free single-pen sample is available any time.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Pricing is volume-based — the more you order, the lower the price per pen. Use the order builder on the For Business page to see live pricing for your quantity, or request a custom quote for orders of 5,000 or more.",
      },
      {
        question: "Can I add my logo or branding to the pen?",
        answer:
          "Yes — your logo or brand artwork is printed directly onto the kraft-paper barrel. Upload your artwork when you build your order and our team will review it.",
      },
      {
        question: "How long does a branded order take to arrive?",
        answer: "Typical turnaround is 1–2 weeks from order confirmation, depending on quantity and customisation.",
      },
      {
        question: "Is there a packaging option for gifting or events?",
        answer:
          "Yes — single card packaging can be added to your order for a small additional cost per pen, which suits gifting, conferences and client hand-outs.",
      },
      {
        question: "What kinds of businesses order EarthMend pens?",
        answer:
          "Corporate gifting, events and conferences, trade shows, client and employee gifts, brand activations, and universities and organisations all use EarthMend as a branded giveaway with a second purpose.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        question: "Where do you ship?",
        answer: "We currently ship Australia-wide.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Not at the moment — for now, we ship within Australia only.",
      },
    ],
  },
  {
    category: "Sustainability",
    items: [
      {
        question: "Why choose EarthMend over a standard promotional pen?",
        answer:
          "Most promotional pens are made to be handed out, not kept — plastic, disposable, and destined for landfill once the ink runs dry. EarthMend gives that same everyday object a second purpose: plant the seed capsule, and something new gets to grow.",
      },
      {
        question: "Are EarthMend pens made in Australia?",
        answer: "Yes — EarthMend pens are made in Australia.",
      },
      {
        question: "Is this just greenwashing?",
        answer:
          "We try hard not to overstate what one pen can do. EarthMend isn't a solution to climate change, and it isn't a claim of zero environmental impact — it's a biodegradable seed capsule, a specific material choice, clearly explained, and one thoughtful option among many.",
      },
    ],
  },
];
