import OccasionsHero from "../components/sections/OccasionsHero";
import OccasionCategories from "../components/sections/OccasionCategories";
import PersonalisationSection from "../components/sections/PersonalisationSection";
import OccasionsHowItWorks from "../components/sections/OccasionsHowItWorks";
import WhyChooseOccasions from "../components/sections/WhyChooseOccasions";
import OccasionsEnquiry from "../components/sections/OccasionsEnquiry";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * EarthMend's second customer journey alongside For Business — personalised
 * plantable gifts for individual celebrations (weddings, birthdays, baby
 * showers) rather than corporate/promotional buyers. Same brand, same
 * design system, a distinct top-level destination so the two audiences
 * don't collide in the same page's messaging.
 */
export default function SpecialOccasions() {
  usePageMeta(
    "Personalised Wedding Favours & Occasion Gifts",
    "Discover personalised plantable pen favours for weddings, birthdays and baby showers. Create thoughtful gifts for your guests with EarthMend.",
  );

  return (
    <>
      <OccasionsHero />
      <OccasionCategories />
      <PersonalisationSection />
      <OccasionsHowItWorks />
      <WhyChooseOccasions />
      <OccasionsEnquiry />
    </>
  );
}
