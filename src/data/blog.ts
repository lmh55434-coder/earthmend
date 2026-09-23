export type BlogCategory = "Sustainability" | "For Business" | "Product" | "Behind the Brand";

/** A run of text, optionally an external link. Plain strings still work everywhere this is used. */
export type InlineSegment = { text: string; href?: string };
export type InlineContent = string | InlineSegment[];

export type BlogBodyBlock =
  | { type: "paragraph"; text: InlineContent }
  | { type: "heading"; text: InlineContent }
  | { type: "list"; items: InlineContent[] };

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
    slug: "environmental-impact-of-single-use-products",
    title: "The Environmental Impact Of Single-Use Products (29+ Alternatives)",
    category: "Sustainability",
    excerpt:
      "Why single-use products are such an environmental problem — and more than 30 reusable alternatives to swap in instead.",
    date: "2026-09-23",
    readingTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "What are the environmental impacts of single-use products? These products are less biodegradable, contribute to pollution, get contaminated in landfills and more!",
      },
      {
        type: "paragraph",
        text: "Do you want to learn more about how it affects the environment? Read ahead!",
      },
      { type: "heading", text: "How Do Single-Use Products Affect The Environment?" },
      {
        type: "paragraph",
        text: "The following are the key reasons indicating why single-use products affect the environment:",
      },
      {
        type: "list",
        items: [
          "Affect climatic changes: When single-use products are produced, greenhouse gases, including carbon dioxide, are emitted. These gases are harmful and diversely affect climatic changes.",
          "Damage to the ecosystem: Plastic single-use products affect the land, wildlife, oceans, and even humans. Microplastic items may also enter food chains.",
          "Harms wildlife: Eating single-use plastic products harms more than 260 species, including turtles, invertebrates, seabirds, fish, mammals, coral reefs, and more!",
          "Loss of valuable resources: When single-use products are produced, additional natural resources such as oil, energy, and more are used. Thus, valuable resources are also discarded in the environment!",
          "Not biodegradable: Disposable plastics have a lifetime of about hundreds of years and are not biodegradable.",
          [
            { text: "Pollution of the waterways: " },
            {
              text: "Studies",
              href: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52018DC0028&from=NL",
            },
            {
              text: " indicate that around 13 million tons of plastic join the oceans annually. This plastic creates marine debris and pollutes the waterways.",
            },
          ],
          "Transfer pathogens: In certain instances, reusing single-use products may spread pathogens such as the COVID-19 virus, germs, viruses, and more.",
          [
            { text: "Very rarely recycled: " },
            { text: "Studies", href: "https://www.mdpi.com/2313-4321/6/1/12" },
            {
              text: " indicate that approximately 14% of plastic packaging is only collected and recycled. So, what happens to the rest? They end up occupying the natural environment.",
            },
          ],
        ],
      },
      { type: "heading", text: "Why Should We Use Alternative Products Rather Than Single-Use Products?" },
      {
        type: "paragraph",
        text: "Here are the key reasons why you should make a move towards alternative products rather than using single-use products:",
      },
      {
        type: "list",
        items: [
          "Avoid land and water pollution.",
          "Avoid the transfer of harmful toxins and pathogens.",
          "Contribute to marine biodiversity.",
          "Contribute to waste management systems.",
          "Help wildlife lead a healthy lifestyle.",
          "Prevent the accumulation of single-use products in landfills.",
          "Protect the natural resources for future generations.",
          "Provide a healthy environment for water species.",
          "Reduce single-use product wastage.",
          "Reduce the impacts on the ecosystems.",
          "Support to have effective climatic changes.",
        ],
      },
      { type: "heading", text: "What Are The Alternatives To Single-Use Products?" },
      { type: "paragraph", text: "Here are the top alternatives to single-use products:" },
      {
        type: "list",
        items: [
          "Bamboo toothbrush holders",
          "Bamboo utensils",
          "Beeswax food wraps",
          "Cloth diapers",
          "Cloth napkins",
          "Cloth tea bags",
          "Compostable dish sponges",
          "Glass food storage containers",
          "Glass spray bottles",
          "Mesh produce bags",
          "Metal straws",
          "Rechargeable batteries",
          "Refillable cleaning bottles",
          "Refillable pens",
          "Refillable shampoo and conditioner bottles",
          "Reusable baking sheets",
          "Reusable cloth sandwich wraps",
          "Reusable coffee cups",
          "Reusable cotton rounds",
          "Reusable cotton swabs",
          "Reusable facial tissues",
          "Reusable makeup remover pads",
          "Reusable shopping bags",
          "Reusable silicone baking mats",
          "Reusable silicone snack bags",
          "Silicone food covers",
          "Stainless steel razors",
          "Stainless steel water bottles",
          "Wooden toothbrushes",
          "Wool dryer balls",
        ],
      },
      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "In conclusion, single-use products negatively impact the environment. Hence, if you want to consider the well-being of the environment and your future generation, it's time to switch to single-use alternatives.",
      },
      {
        type: "paragraph",
        text: "We hope this guide helped you understand how single-use products affect the environment!",
      },
    ],
  },
  {
    slug: "sustainable-gift-ideas-for-every-occasion",
    title: "Sustainable Gift Ideas For Every Occasion (25+ Best Options)",
    category: "Sustainability",
    excerpt:
      "Over 50 sustainable gift picks across home, fashion, beauty, travel and more — organized by occasion so you can find something for everyone on your list.",
    date: "2026-09-23",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Are you looking for sustainable gift ideas suitable for every occasion? We have hand-picked more than 25 products that are ideal for various occasions.",
      },
      {
        type: "paragraph",
        text: "Hence, you can choose the best gift product based on what your loved one would love!",
      },
      { type: "heading", text: "Best Sustainable Gift Ideas" },

      { type: "heading", text: "Best Home & Kitchen Gifts" },
      {
        type: "paragraph",
        text: "If your loved one loves home or kitchen items, many sustainable gift items exist. Eco-friendly home gift items are handy to create an effective environment. Here are the best home and kitchen gift options for you:",
      },
      {
        type: "list",
        items: [
          [{ text: "Bauhaus Enamel Colander", href: "https://www.madetrade.com/products/darling-spring-bauhaus-enamel-colander" }],
          [{ text: "Blueland The Natural Hand Soap Collection", href: "https://www.blueland.com/products/natural-collection" }],
          [{ text: "Bread Warmer + Basket", href: "https://www.madetrade.com/search?q=Bread+Warmer+%2B+Basket&type=product" }],
          [{ text: "Brightly Sustainable Chef Gift Set", href: "https://shop.brightly.eco/collections/november-2021/products/the-chef-kit" }],
          [{ text: "Cast Iron 15″ Lean Grill Pan", href: "https://www.madetrade.com/products/finex-cast-iron-15-lean-grill-pan" }],
          [{ text: "Glass Votive Candle Bundle", href: "https://www.madetrade.com/products/ritual-and-fancy-glass-votive-candle-bundle" }],
          [{ text: "Handcrafted Furniture From Reclaimed Wood", href: "https://www.etsy.com/market/reclaimed_wood_furniture" }],
          [{ text: "Homemade Candles", href: "https://www.etsy.com/uk/market/homemade_candles" }],
          [{ text: "Minimal Ikebana Raw Stoneware Vase", href: "https://www.madetrade.com/products/convivial-ikebana-handmade-raw-stoneware-vase" }],
          [{ text: "Personalized Recipe Book", href: "https://www.amazon.co.uk/personalised-recipe-book/s?k=personalised+recipe+book" }],
          [{ text: "Rachio Smart Sprinkler Controller", href: "https://rachio.com/rachio-3/" }],
          [{ text: "Recycled Copper Kitchen Compost Canisters", href: "https://www.madetrade.com/products/sertodo-copper-copper-compost-kitchen-canisters" }],
          [{ text: "Utopia Kitchen Compost Bin", href: "https://www.amazon.com/Utopia-Kitchen-Stainless-Compost-Countertop/dp/B015DRQ36E/" }],
        ],
      },

      { type: "heading", text: "Best Fashion & Accessories Gifts" },
      {
        type: "paragraph",
        text: "Are you planning to give fashion or accessories-related gifts? We understand finding eco-friendly fashion products is daunting. However, many brands promote sustainability and eco-friendliness. Therefore, there is a wide range of best fashion or accessories gift items that are sustainable. Here are the best picks:",
      },
      {
        type: "list",
        items: [
          [{ text: "Agave Wool Convertible Clutch", href: "https://www.madetrade.com/products/mz-made-agave-convertible-clutch" }],
          [{ text: "Boody Cozy Knit Wrap", href: "https://boodywear.com/products/cozy-knit-wrap" }],
          [{ text: "Dainty Polaris Choker Necklace", href: "https://www.madetrade.com/products/altar-polaris-choker" }],
          [{ text: "Fellowship Cork Wallet", href: "https://www.madetrade.com/products/tiradia-cork-fellowship-wallet" }],
          [{ text: "Girlfriend Collective Please Recycle Backpack", href: "https://girlfriend.com/products/quartz-backpack-1" }],
          [{ text: "Gold Recycled Hoop In White Topaz", href: "https://www.madetrade.com/products/sara-patino-jewelry-gold-hoop-with-white-topaz" }],
          [{ text: "Hand-Knit Scarf", href: "https://www.etsy.com/uk/market/hand_knitted_scarf" }],
          [{ text: "Knitted Unisex Beanie", href: "https://www.madetrade.com/products/terra-thread-organic-cotton-beanie" }],
          [{ text: "Kooshoo Compostable Scrunchies", href: "https://www.kooshoo.com/collections/organic-cotton-plastic-free-scrunchies/products/blue-scrunchies" }],
          [{ text: "Linen Waffle Blanket", href: "https://www.madetrade.com/products/amourlinen-linen-waffle-blanket" }],
          [{ text: "Men's Owen Belt In Brandy", href: "https://www.madetrade.com/products/nisolo-leather-belt-brandy" }],
          [{ text: "Natural Dye Silk Bandana", href: "https://www.madetrade.com/products/last-chance-textiles-natural-dye-silk-bandana" }],
          [{ text: "Nixon Light-Wave Watch", href: "https://www.nixon.com/products/light-wave-all-black" }],
          [{ text: "Pela Phone Case", href: "https://pelacase.com/products/seashell-little-yellow-flowers-eco-friendly-iphone-13-case" }],
          [{ text: "Rattan Clutch Bag", href: "https://www.madetrade.com/products/village-thrive-rattan-clutch-bag" }],
          [{ text: "Signature Cork Backpack", href: "https://www.madetrade.com/products/tiradia-cork-signature-backpack" }],
          [{ text: "The Foggy Dog Bandana", href: "https://www.thefoggydog.com/collections/dog-bandanas/products/upcycled-denim-stripe-dog-bandana" }],
          [{ text: "Upcycled Blankets", href: "https://www.madetrade.com/search?q=Upcycled+Blankets&type=product" }],
          [{ text: "Vrai Pave Huggie Hoops", href: "https://www.vrai.com/jewelry/earrings/pave-huggie-hoops" }],
          [{ text: "Wildred The Cloud Puff", href: "https://www.aritzia.com/us/en/product/the-cloud-puff/84952.html" }],
        ],
      },

      { type: "heading", text: "Best Beauty & Personal Care Gifts" },
      {
        type: "paragraph",
        text: "Finding compelling eco-friendly beauty and personal care items should be carefully selected. Since these products relate to one's well-being, you should be very informed about your decisions. However, based on our research, we hand-picked the top beauty and personal care items as follows:",
      },
      {
        type: "list",
        items: [
          [{ text: "Durango Waxed Canvas Dopp Kit", href: "https://www.madetrade.com/products/nisolo-mens-dopp-kit-bag-waxed-canvas" }],
          [{ text: "Earth Mama Organics Baby Gift Set", href: "https://earthmamaorganics.com/products/a-little-something-for-baby.html" }],
          [{ text: "Masque Bar Natural Beauty Kit", href: "https://masque.bar/collections/best-sellers/products/all-naturals-value-set" }],
          [{ text: "Men's Eucalyptus Tee", href: "https://www.madetrade.com/products/sijo-mens-short-sleeve-tee" }],
          [{ text: "Pima Pajama Sets", href: "https://www.madetrade.com/search?q=Pima+Pajama+Sets&type=product" }],
          [{ text: "Principle Beauty Eyeshadow Palette", href: "https://principlebeauty.com/collections/palettes/products/principle-beauty-desert-nomad-palette" }],
          [{ text: "Siblings Scent No 1 Bundle", href: "https://siblings.co/products/scent-no-01" }],
          [{ text: "Solstice Chemise", href: "https://www.madetrade.com/products/coyuchi-solstice-chemise-rosehip" }],
          [{ text: "Unisex Waffle Robe", href: "https://www.madetrade.com/products/coyuchi-unisex-organic-waffle-robe-shadow" }],
          [{ text: "Unisex Wool Slipper with Rubber Sole", href: "https://www.madetrade.com/products/baabushka-wool-slipper-rubber-sole" }],
        ],
      },

      { type: "heading", text: "Best Travel & Outdoor Gifts" },
      {
        type: "paragraph",
        text: "They are beneficial picks if you decide to give travel or outdoor gift items. They always come in handy as most people travel in their daily lives. Hence, here are the best helpful travel and outdoor gift items:",
      },
      {
        type: "list",
        items: [
          [{ text: "Allbirds Wool Runners", href: "https://www.allbirds.com/products/womens-wool-runners" }],
          [{ text: "Bumi Duffel Bag", href: "https://www.madetrade.com/products/terra-thread-eco-friendly-duffel-bag" }],
          [{ text: "Executive Work Tote Bag", href: "https://www.madetrade.com/products/terra-thread-executive-work-tote-bag" }],
          [{ text: "Keepcup Reusable Cup", href: "https://www.amazon.com/KeepCup-Reusable-Glass-Large-454mls/dp/B089QSBF7D" }],
          [{ text: "Paravel Aviator Carry-On", href: "https://tourparavel.com/products/the-aviator-carry-on" }],
          [{ text: "Scoria Yoga Mat", href: "https://www.scoriaworld.com/collections/artist-cork-yoga-mats/products/blossom-cork-yoga-mat" }],
          [{ text: "To-Go Ware Bamboo Utensil Set", href: "https://www.rei.com/product/186201/to-go-ware-premium-bamboo-utensil-set" }],
        ],
      },

      { type: "heading", text: "Best Gifts & Specialty Items Gifts" },
      {
        type: "paragraph",
        text: "Apart from the usual products like home, fashion, kitchen, and beauty, there are some unique gift options. For someone crazy as you, you can check out these special gift items:",
      },
      {
        type: "list",
        items: [
          [{ text: "Bamboo Cutlery Sets", href: "https://jungleculture.eco/collections/bamboo-cutlery" }],
          [{ text: "Chopvalue Dominos", href: "https://chopvalue.com/products/domino-stones" }],
          [{ text: "Furoshiki Reusable Gift Wrapping Cloth", href: "https://www.anthropologie.com/shop/furoshiki-reusable-gift-wrapping-cloth" }],
          [{ text: "Indoor Herb Garden Starter Kit", href: "https://www.amazon.com/gp/product/B07HHMJBG2/" }],
          [{ text: "Jewelry Made Out Of Recycled Materials", href: "https://www.etsy.com/market/recycled_jewelry" }],
          [{ text: "Outdoor Lights With Renewable Energy", href: "https://www.powerbee.co.uk/outdoor-lighting.html" }],
          [{ text: "Stainless Steel Straws", href: "https://www.kleankanteen.co.uk/collections/straws" }],
        ],
      },

      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "Finding the ideal sustainable gift idea based on your loved ones' preferences is daunting. Hence, we have categorized and hand-picked the best gift options for your requirements!",
      },
      { type: "paragraph", text: "Happy gifting!" },
    ],
  },
  {
    slug: "eco-friendly-alternatives-to-common-household-items",
    title: "Eco-Friendly Alternatives To Common Household Items",
    category: "Sustainability",
    excerpt:
      "Nearly 30 easy swaps for everyday household items — from rechargeable batteries to beeswax wraps — that cut down on waste around the home.",
    date: "2026-09-23",
    readingTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "How can we make our household more eco-friendly? You can make your household more eco-friendly by replacing some items with eco-friendly alternatives.",
      },
      { type: "paragraph", text: "Read ahead to find out more!" },
      { type: "heading", text: "Are There Eco-Friendly Alternatives?" },
      {
        type: "paragraph",
        text: "Yes, there are many eco-friendly alternatives you can use. Here are the top picks for you:",
      },
      {
        type: "list",
        items: [
          "Batteries to Rechargeable Batteries: Rechargeable batteries produce less waste and are even a good investment for long-term usage.",
          "Conventional toilet brush to a reusable toilet brush: Did you know that reusable toilet brush comes with a handle? So, why do you use a conventional toilet brush with throwaway pads?",
          "Disposable coffee cups with reusable coffee cups: Disposable coffee cups are difficult to recycle. So, remember to use a reusable coffee cup, and you can even get a discount at cafes!",
          "Disposable razors to safety razors: Invest in a good-quality razor while saving your pennies on replacing 2, 4, or even 5 whole head blades.",
          "Plastic food containers to glass steel containers: Glass steel containers are eco-friendly, healthy, contain no chemicals, and can even be stored in the freezer.",
          "Makeup remover wipes to makeup remover towel: Use a makeup remover towel to get rid of water or makeup removers while using it repeatedly.",
          "Paper towels for reusable paper towels: Many reusable paper towels, such as disposable bamboo “paper” towels and reusable dish clothes, help reduce paper waste.",
          "Plastic bottle to reusable water bottle: Plastic or cardboard water bottles are unhealthy, so switch to reusable water bottles while being stylish.",
          "Plastic nail brush to wooden nail brush: Wooden nail brushes with nylon bristles are the best care for your nails. They have an extended lifespan than plastic nail brushes.",
          "Plastic saran wrap to beeswax wraps: Use reusable food wraps, including beeswax wraps, which are made from cotton, beeswax, and tree oil.",
          "Plastic spray bottles to reusable glass spray bottles: Plastic spray bottles do not have clean concentrates, but a reusable or glass spray bottle helps!",
          "Plastic straws to reusable straws: Did you know that plastic straws backlash in every country? Hence, a reusable straw is an easy swap.",
          "Single-use shopping bags to reusable shopping bags: Single-use or paper shopping bags are a breeze for paper bag consumption. So, make you turn to reusable shopping bags.",
        ],
      },
      { type: "heading", text: "How To Make Eco-Friendly Products At Home?" },
      {
        type: "paragraph",
        text: "By replacing some products with eco-friendly products, you can create a better environment at home. Here are some:",
      },
      {
        type: "list",
        items: [
          "Clothes are made from synthetic materials to sustainable, natural materials.",
          "Cotton buds to 100% biodegradable cotton buds.",
          "Disposable notepad or journal to infinitely reusable one.",
          "Dryer sheets for wool dryer balls.",
          "Lint rollers for a reusable lint brush.",
          "Liquid soap to bars of soap.",
          "Paper towels to old rags.",
          "Plastic deodorant for reusable deodorant holders with plastic-free refills.",
          "Plastic dog poo bags to biodegradable dog poo bags.",
          "Plastic lotion bottles for reusable lotion holders with plastic-free refills.",
          "Plastic picnic ware to compostable wooden picnic ware.",
          "Plastic produce bags to organic cotton mesh bags.",
          "Plastic product bags for reusable produce bags.",
          "Shampoo bottles to shampoo bars.",
          "Tampons or sanitary towels to menstrual cups/cloth pads.",
          "Toothpaste to natural toothpaste in a glass jar.",
        ],
      },
      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "In conclusion, there are many eco-friendly alternatives that you can swap for. This would create a better environment for you and your kids.",
      },
      { type: "paragraph", text: "Let's get started today!" },
    ],
  },
  {
    slug: "top-sustainable-fashion-brands",
    title: "Top Sustainable Fashion Brands (Leading Brands)",
    category: "Sustainability",
    excerpt:
      "A look at six standout sustainable fashion brands — what makes each one different — plus a longer list of others worth knowing.",
    date: "2026-09-23",
    readingTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "In the current era, there is vast growth in the market for sustainable fashion brands. These brands use ethical practices, eco-friendly products, designs, and more to contribute to the environment.",
      },
      {
        type: "paragraph",
        text: "In this guide, you will learn the top 5 and more sustainable fashion brands.",
      },
      { type: "heading", text: "5 Best Sustainable Fashion Brands" },

      { type: "heading", text: [{ text: "Wholesome Culture", href: "https://www.wholesomeculture.com/" }] },
      { type: "paragraph", text: "Location: USA · Products: Casual wear, Activewear, Accessories" },
      {
        type: "list",
        items: [
          "They carry the mission to create a sustainable location via eco-friendly apparel products.",
          "Use eco-friendly water-based ink.",
          "Products are made from 100% organic cotton, recycled plastic bottles, and bamboo.",
          "The shipping orders are packed based on biodegradable or recycled packages.",
          "Donate 10% of their company profits to animal rescues and environmental sustainability organizations.",
        ],
      },

      { type: "heading", text: [{ text: "Christy Dawn", href: "https://christydawn.com/" }] },
      {
        type: "paragraph",
        text: "Location: Los Angeles, USA · Products: Women's & Kid's apparel, Accessories, Footwear",
      },
      {
        type: "list",
        items: [
          "Use deadstock fabrics to create sustainable dresses.",
          "Adapted a farm-closet initiative to use sustainable regenerative processes.",
          "Collaborated with Oshadi Collective, a community of traditional farmers who grow cotton using regenerative processes.",
        ],
      },

      {
        type: "heading",
        text: [{ text: "The Classic T-Shirt Company", href: "https://theclassictshirt.com/" }],
      },
      { type: "paragraph", text: "Location: California, USA · Products: T-shirts" },
      {
        type: "list",
        items: [
          "Provide premium ethical t-shirts of top-notch quality for men and women.",
          "They use only 100% organic cotton to make their t-shirt products.",
          "Coordinate with farmers to obtain 100% organic cotton, ensuring that the cotton is produced organically without pesticides or fertilizers.",
        ],
      },

      { type: "heading", text: [{ text: "Kitdo", href: "https://kitdo.co/" }] },
      { type: "paragraph", text: "Location: Hong Kong · Products: Accessories" },
      {
        type: "list",
        items: [
          "Offer chic and functional accessories.",
          "The materials used in production are lightweight aluminum and strong magnet inserts.",
          "Ensure to plate the accessories with waterless coating via the CNC machine process.",
        ],
      },

      {
        type: "heading",
        text: [{ text: "Stella McCartney", href: "https://www.stellamccartney.com/gb/en/" }],
      },
      {
        type: "paragraph",
        text: "Location: London, UK · Products: Women's and kid's fashion, Accessories, Bags, Footwear",
      },
      {
        type: "list",
        items: [
          "It adheres to the critical practices of eco-friendliness by using eco-conscious materials, non-toxic dyes, and polyester recycled from plastic bottles.",
          "One key aim is to replace nylon with eco-nylon, which are recycled fishing nets.",
          "It uses organic cotton obtained from farmers who do not use toxic chemicals.",
          "Ensure to use less oil-based synthetics.",
        ],
      },

      { type: "heading", text: [{ text: "BEEN London", href: "https://been.london/" }] },
      { type: "paragraph", text: "Location: London, UK · Products: Bags, Accessories" },
      {
        type: "list",
        items: [
          [
            { text: "Only takes " },
            { text: "materials destined for landfills", href: "https://been.london/pages/materials" },
          ],
          "Single-use plastic bottles are turned to be used to make silky linings and zips",
          "Use pineapple leaves and apple peels to make vegan leather.",
          "Practice shipping materials by sea to reduce the carbon footprint of transportation.",
          "Collaborated with Peru-based NGO Camino Verde to support the reforestation process of the Amazon Rainforest.",
        ],
      },

      { type: "heading", text: "Other Sustainable Fashion Brands You Must Know" },
      {
        type: "paragraph",
        text: "Here is the list of other sustainable fashion brands you must keep an eye on:",
      },
      {
        type: "list",
        items: [
          [{ text: "Pact", href: "https://kotn.com/" }],
          [{ text: "Kotn", href: "https://kotn.com/" }],
          [{ text: "Quince", href: "https://www.quince.com/" }],
          [{ text: "tentree", href: "https://www.tentree.com/" }],
          [{ text: "Fair Indigo", href: "https://www.fairindigo.com/" }],
          [{ text: "Everlane", href: "https://www.everlane.com/" }],
          [{ text: "Allbirds", href: "https://www.allbirds.com/" }],
          [{ text: "Sézane", href: "https://www.sezane.com/choose-country-region/" }],
          [{ text: "Etsy", href: "https://www.etsy.com/" }],
          [{ text: "Reformation", href: "https://www.thereformation.com/" }],
          [{ text: "Warp + Weft", href: "https://warpweftworld.com/" }],
          [{ text: "Yes Friends", href: "https://yesfriends.co/" }],
          [{ text: "Jungmaven", href: "https://jungmaven.com/" }],
          [{ text: "Boody", href: "https://boody.com/" }],
          [{ text: "Colored Organics", href: "https://coloredorganics.com/" }],
          [{ text: "MagicLinen", href: "https://magiclinen.com/" }],
          [{ text: "Vege Threads", href: "https://www.vegethreads.com/" }],
          [{ text: "Haverdash", href: "https://www.haverdash.com/" }],
          [{ text: "Fair Trade Winds", href: "https://www.fairtradewinds.net/" }],
          [{ text: "LA RELAXED", href: "https://larelaxed.com/" }],
          [{ text: "Oliver Logan", href: "https://oliverlogan.com/" }],
        ],
      },

      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "In conclusion, many sustainable fashion brands are evolving the market. If you want to adapt to sustainability, it's time to learn about these products and contribute.",
      },
      {
        type: "paragraph",
        text: "We hope this guide helped you understand the critical sustainable fashion brands!",
      },
    ],
  },
  {
    slug: "how-to-create-a-zero-waste-kitchen",
    title: "How To Create A Zero-Waste Kitchen (Secrets That Worked)",
    category: "Sustainability",
    excerpt:
      "Eight practical swaps for a lower-waste kitchen — from planning meals and composting to ditching disposable party ware.",
    date: "2026-09-23",
    readingTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "Implementing some best practices in your kitchen can easily create a zero-waste kitchen. For example, you can have a compost bin, avoid wasting food, be aware of your energy consumption, and more!",
      },
      {
        type: "paragraph",
        text: "So, do you want to learn more ways to reduce kitchen wastage? Learn more!",
      },
      { type: "heading", text: "Steps To Create A Zero Waste Kitchen" },
      { type: "heading", text: "#1. Do Not Waste Food" },
      {
        type: "paragraph",
        text: "If you waste food, it's time to say “NO” to create a zero-waste kitchen. So, how can you stop wasting food? Here's how:",
      },
      {
        type: "list",
        items: [
          "Plan your meals based on the necessary quantities",
          "Buy only the food you require",
          "Order the foods that are closer to expiry and use in order",
          "Use the leftovers to create unique dishes (you can turn overripe fruits into a smoothie).",
        ],
      },
      { type: "heading", text: "#2. Think About Your Energy & Water Consumption" },
      {
        type: "paragraph",
        text: "Two key consumptions when managing a kitchen are energy and water. You should be conscious of how you use your dishwasher, fridge, and energy and water.",
      },
      {
        type: "paragraph",
        text: "Also, you must learn and follow best practices when using these items. For example, if you are baking and want the cookies to be crunchy, you do not need to preheat the oven (best practice).",
      },
      { type: "heading", text: "#3. Switch To Eco-Friendly Products" },
      {
        type: "paragraph",
        text: "While you reduce your use of plastic items, you can also use eco-friendly products to replace them. For example, use tote bags and reusable tea bags, pick products with recyclable packaging, and more!",
      },
      {
        type: "paragraph",
        text: "Moreover, many cleaning products on the market are not healthy options. Hence, you can use eco-friendly cleaning items made from natural ingredients.",
      },
      { type: "heading", text: "#4. Opt For Bar Soap" },
      {
        type: "paragraph",
        text: "If you are using liquid soap, it's time to switch to bar soap, as it is long-lasting. Also, you will no longer have liquid plastic containers to fill your bin.",
      },
      {
        type: "paragraph",
        text: "However, if you still want to use liquid soap, consider refilling liquid soap. They will at least help you remove the plastic waste in your kitchen.",
      },
      { type: "heading", text: "#5. Use Reusable Kitchen Swaps" },
      {
        type: "paragraph",
        text: "Instead of utilizing disposable paper towels, you can replace them with reusable clothes or even your old rags. Also, replace plastic sponges with loofah or silicone dish scrubs, greener sponges, or coconut fiber scrubbing pads.",
      },
      {
        type: "paragraph",
        text: "These alternatives are washable, reusable, save money, and promote zero waste swaps.",
      },
      { type: "heading", text: "#6. Have A Compost Bin" },
      {
        type: "paragraph",
        text: "A compost bin helps you save a lot of kitchen waste to the compost bin.",
      },
      {
        type: "paragraph",
        text: "Here are the items to drop into the compost bin: food scraps, coffee grounds, fruit peels, veggie scraps, tea bags, eggshells, and more organic waste products.",
      },
      { type: "heading", text: "#7. Do Not Use Disposable Party Ware" },
      {
        type: "paragraph",
        text: "You may use disposable plates, cups, straws, and other party items when hosting a party. However, in such instances, many items will be used.",
      },
      {
        type: "paragraph",
        text: "Thus, you can use regular plates, cutlery, cups, forks, and spoons instead of wasting significant time during your celebration.",
      },
      { type: "heading", text: "#8. Use Less Plastic" },
      {
        type: "paragraph",
        text: "Avoid using single-use plastic items like cling wraps, plastic bags, and more!",
      },
      {
        type: "paragraph",
        text: "Switch to reusable products such as bags, beeswax wraps, stainless steel utensils, glass containers, metal, bamboo, or wood, and more!",
      },
      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "In conclusion, implementing these practices can promote a zero-waste kitchen.",
      },
      {
        type: "paragraph",
        text: "So, are you ready to embrace this challenge? Get started now!",
      },
    ],
  },
  {
    slug: "best-eco-friendly-certifications",
    title: "Best Eco-Friendly Certifications (What They Mean And Why They Matter)",
    category: "Sustainability",
    excerpt:
      "A plain-language guide to eight of the most common eco-friendly certifications — Energy Star, Fair Trade, FSC and more — and what each one actually signals.",
    date: "2026-09-23",
    readingTime: "3 min read",
    body: [
      {
        type: "paragraph",
        text: "What do eco-friendly certifications promote? Eco-friendly certifications promote the product, service, or company that meets specified standards, ensuring environmental sustainability.",
      },
      {
        type: "paragraph",
        text: "In this guide, we will walk through the top 8 eco-friendly certifications and their importance in detail.",
      },
      { type: "heading", text: "What Is An Eco-Friendly Certificate?" },
      {
        type: "paragraph",
        text: "An eco-friendly certificate is a product that is certified by ideal authorities as environmentally friendly by meeting the certification standards. This scheme was implemented to identify environmentally friendly products on the market.",
      },
      {
        type: "paragraph",
        text: "However, each certificate focuses on different aspects of building eco-friendly, sustainable, or green certificates.",
      },
      { type: "heading", text: "Top 8 Eco-Friendly Certifications" },
      { type: "heading", text: "Energy Star" },
      {
        type: "paragraph",
        text: "Energy Star certification ensures the products are energy efficient. Thus, they meet the stringent efficiency guidelines set by the EPA.",
      },
      {
        type: "paragraph",
        text: "Importance: Energy Star certification focuses on energy efficiency to reduce your carbon footprint.",
      },
      { type: "heading", text: "Fair Trade Certified" },
      {
        type: "paragraph",
        text: "Fair Trade Certified is a certification given if the products receive fair payment and are considered safe. Hence, purchasing products with this certification ensures that you support ethical business practices worldwide.",
      },
      {
        type: "paragraph",
        text: "Importance: Fair Trade certification highlights the environmental sustainability criteria.",
      },
      { type: "heading", text: "Cradle To Cradle (C2C)" },
      {
        type: "paragraph",
        text: "Products that meet material recyclability, health, water stewardship, renewable energy use, and social fairness criteria are granted Cradle to Cradle (C2C) certification. The overall aim of this certification is to reduce waste and promote recycling.",
      },
      {
        type: "paragraph",
        text: "Importance: The C2C certificate highlights the product promoting eco-friendliness.",
      },
      { type: "heading", text: "Organic" },
      {
        type: "paragraph",
        text: "Organic certification ensures that the products are grown without the usage of synthetic pesticides and other fertilizers. However, organic standards are based on each country, ensuring a lower impact on the earth.",
      },
      {
        type: "paragraph",
        text: "Importance: Organic certification highlights the sustainability and safety criteria.",
      },
      { type: "heading", text: "Global Organic Textile Standard (GOTS)" },
      {
        type: "paragraph",
        text: "Global Organic Textile Standard (GOTS) certification ensures that the products are made using organic fibers by meeting stringent criteria in the manufacturing process.",
      },
      {
        type: "paragraph",
        text: "Importance: GOTS certification highlights that the products are made organically during the manufacturing process.",
      },
      { type: "heading", text: "Carbon Neutral Certification" },
      {
        type: "paragraph",
        text: "Carbon-neutral certification ensures that the company's product or service practices offset carbon emissions. For example, such companies invest in renewable energy or carbon offset projects.",
      },
      {
        type: "paragraph",
        text: "Importance: Carbon neutral certification highlights the product, service, or companies that use carbon offset practices.",
      },
      { type: "heading", text: "Leadership In Energy And Environmental Design (LEED)" },
      {
        type: "paragraph",
        text: "LEED (Leadership in Energy and Environmental Design) certification applies to buildings and construction that meet environmental performance standards and have sustainable designs.",
      },
      {
        type: "paragraph",
        text: "Importance: LEED-certified buildings highlight the need to provide a healthy environment for residents.",
      },
      { type: "heading", text: "Forest Stewardship Council (FSC)" },
      {
        type: "paragraph",
        text: "Forest Stewardship Council (FSC) certification is given to products that arrive from effectively managed forests. Thus, such companies tend to maintain sustainable forestry practices.",
      },
      {
        type: "paragraph",
        text: "Importance: FSC highlights the products coming from managed forests.",
      },
      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "If you want to stand out in the market and follow the trend, you need to use eco-friendly practices and gain eco-friendly certifications.",
      },
      {
        type: "paragraph",
        text: "These certifications build trust and reliability for consumers who purchase your products.",
      },
      {
        type: "paragraph",
        text: "We hope this guide was helpful for you in understanding eco-friendly certifications and their importance in detail!",
      },
    ],
  },
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
