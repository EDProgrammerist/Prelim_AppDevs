import { HeroSection } from "@/components/features/home/hero-section";
import { HighlightsSection } from "@/components/features/home/highlights-section";
import { ProfileSection } from "@/components/features/home/profile-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ProfileSection />
    </>
  )
}