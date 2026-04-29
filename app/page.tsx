import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import HighlightStrip from "@/components/sections/HighlightStrip";
import AboutSplitSection from "@/components/sections/AboutSplitSection";
import ServicesSection from "@/components/sections/ServiceSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import ReferralSection from "@/components/sections/ReferralSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightStrip />
      <IntroSection />
      <AboutSplitSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <ReferralSection />
    </main>
  );
}