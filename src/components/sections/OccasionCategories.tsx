import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import ImageBlock from "../product/ImageBlock";
import weddingFavoursCard from "../../assets/occasions/wedding-favours-card.jpg";
import birthdayFavoursCard from "../../assets/occasions/birthday-favours-card.jpg";
import babyShowerFavoursCard from "../../assets/occasions/baby-shower-favours-card.jpg";

type Category = {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  image?: string;
  alt: string;
  placeholderLabel: string;
  cta: string;
};

const CATEGORIES: Category[] = [
  {
    id: "wedding",
    eyebrow: "Wedding Favours",
    headline: "A Little Thank-You That Grows.",
    description:
      "Make your wedding day even more memorable with personalised plantable pen favours. Add your names, wedding date and a special thank-you message for your guests.",
    image: weddingFavoursCard,
    alt: "Three personalised EarthMend wedding favour pens for Emma & Daniel, laid out on linen with fresh flowers and eucalyptus",
    placeholderLabel: "Wedding favour photography — to be supplied",
    cta: "Explore Wedding Favours",
  },
  {
    id: "birthday",
    eyebrow: "Birthday Celebrations",
    headline: "A Little Gift. A Lasting Memory.",
    description:
      "Celebrate another year with a thoughtful gift that goes beyond the occasion. Personalise plantable pens for birthday parties, milestone celebrations and special gatherings.",
    image: birthdayFavoursCard,
    alt: "Three personalised EarthMend birthday favour pens printed with 'Happy Birthday', laid out on a table with a birthday cake, candles and roses",
    placeholderLabel: "Birthday celebration photography — to be supplied",
    cta: "Explore Birthday Gifts",
  },
  {
    id: "baby-shower",
    eyebrow: "Baby Showers",
    headline: "A Little Gift for a New Beginning.",
    description:
      "Celebrate new beginnings with thoughtful plantable gifts for baby showers. Create personalised favours to thank family and friends for sharing this special moment.",
    image: babyShowerFavoursCard,
    alt: "Three personalised EarthMend baby shower favour pens printed with 'Oh Baby!', laid out on a table with a teddy bear, knitted booties and a naked cake",
    placeholderLabel: "Baby shower photography — to be supplied",
    cta: "Explore Baby Shower Favours",
  },
];

/**
 * The three occasion categories, presented as even cards rather than the
 * site's usual alternating editorial rows — this is the page's browsing
 * moment, where someone picks the celebration closest to their own. Every
 * CTA lands on the shared enquiry form below rather than a separate page,
 * since there's one personalisation and enquiry flow behind all three.
 */
export default function OccasionCategories() {
  return (
    <Section id="occasions" tone="ivory" spacing="lg">
      <Container size="narrow">
        <Reveal className="mx-auto max-w-content-text text-center">
          <div className="flex justify-center">
            <SectionLabel>Choose Your Occasion</SectionLabel>
          </div>
          <h2 className="text-h1 mt-4">A gift for every celebration.</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={i * 120} className="flex flex-col">
              <ImageBlock
                src={category.image}
                alt={category.alt}
                placeholderLabel={category.placeholderLabel}
                aspect="4 / 5"
              />
              <p className="text-eyebrow mt-6 text-accent">{category.eyebrow}</p>
              <h3 className="text-h3 mt-2 tracking-normal">{category.headline}</h3>
              <p className="text-body mt-3 flex-1 text-ink-muted">{category.description}</p>
              <a
                href="#enquiry"
                className="text-body mt-5 inline-flex min-h-[44px] items-center border-b border-transparent py-1 text-ink transition-colors duration-200 ease-editorial hover:border-moss hover:text-moss"
              >
                {category.cta} &rarr;
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
