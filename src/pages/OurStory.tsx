import OurStoryHero from "../components/sections/OurStoryHero";
import TheBeginning from "../components/sections/TheBeginning";
import WhatWeBelieve from "../components/sections/WhatWeBelieve";
import WhatTheSymbolMeans from "../components/sections/WhatTheSymbolMeans";
import MadeInAustralia from "../components/sections/MadeInAustralia";
import StoryBridge from "../components/sections/StoryBridge";
import CTASection from "../components/sections/CTASection";

/**
 * The brand's own voice — why EarthMend exists, what it believes, and what
 * its mark stands for. Narrative rather than argument (that's Why It
 * Matters' job), and honest about what it can and can't claim.
 */
export default function OurStory() {
  return (
    <>
      <OurStoryHero />
      <TheBeginning />
      <WhatWeBelieve />
      <WhatTheSymbolMeans />
      <MadeInAustralia />
      <StoryBridge />
      <CTASection
        heading="Come back to something small."
        supporting="A pen that gets used, then gets planted. That's the whole story."
        quoteHref="/the-pen"
        sampleHref="/for-business"
        quoteLabel="Explore the Pen"
        sampleLabel="For Business"
      />
    </>
  );
}
