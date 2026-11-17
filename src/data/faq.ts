export type FAQCategory =
  | "The Pen & Planting"
  | "Ordering for Business"
  | "Special Occasions & Personal Gifts"
  | "Shipping & Delivery"
  | "Sustainability";

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
          "You can choose from flower seeds (including Australian native wildflowers), herb seeds, or vegetables and fruit — or let us know if you have a specific variety in mind and we'll confirm availability and suitability.",
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
          "Our minimum order is 20 units, with bulk orders available up to 5,000+ pcs. If you'd like to try one first, let us know in your enquiry and we'll arrange a free sample.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Pricing depends on your quantity, branding and packaging, so we don't display fixed prices online. Submit a business enquiry with your requirements and our team will follow up with a personalised quotation.",
      },
      {
        question: "Can I add my logo or branding to the pen?",
        answer:
          "Yes — upload your logo and artwork in the Company Branding section of our business enquiry, along with your preferred placement and colours, and our team will review it and come back with design ideas.",
      },
      {
        question: "How long does a branded order take to arrive?",
        answer:
          "Turnaround depends on your quantity, customisation and delivery date. Let us know your required delivery date in your enquiry and we'll confirm timing with you directly.",
      },
      {
        question: "Is there a packaging option for gifting or events?",
        answer:
          "Yes — you can select individual card packaging or bulk packaging as part of your enquiry, which suits gifting, conferences and client hand-outs. We'll confirm packaging costs along with your quotation.",
      },
      {
        question: "What kinds of businesses order EarthMend pens?",
        answer:
          "Corporate gifting, events and conferences, trade shows, client and employee gifts, brand activations, and universities and organisations all use EarthMend as a branded giveaway with a second purpose.",
      },
    ],
  },
  {
    category: "Special Occasions & Personal Gifts",
    items: [
      {
        question: "Can I order plantable pens for a wedding, birthday or baby shower?",
        answer:
          "Yes — visit our Special Occasions page to personalise plantable pen favours for weddings, birthdays, baby showers and other celebrations, with your own names, dates and messages.",
      },
      {
        question: "What's the difference between a business order and a Special Occasions order?",
        answer:
          "Business enquiries are for corporate gifting, branding and bulk orders. Special Occasions enquiries are for personal celebrations, with a simpler personalisation flow for your names, message and seed preferences.",
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
