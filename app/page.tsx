import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import HighlightStrip from "@/components/sections/HighlightStrip";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import ReferralSection from "@/components/sections/ReferralSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightStrip />
      <IntroSection />
      <DifferentiatorsSection />
      <ReferralSection />
    </main>
  );
}