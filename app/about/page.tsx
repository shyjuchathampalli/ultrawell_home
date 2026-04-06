import AboutHero from "@/components/about/AboutHero";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutMission from "@/components/about/AboutMission";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutFeatures />
    </main>
  );
}