import AboutSection from "@/components/about-section";
import CtaSection from "@/components/cta-section";
import FaqSection from "@/components/faq-section";
import FieldsSection from "@/components/fields-section";
import HeroSection from "@/components/hero-section";
import MissionVisionSection from "@/components/mission-vision-section";
import ResearchSection from "@/components/research-section";
import TeamSection from "@/components/team-section";
import WhySection from "@/components/why-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MissionVisionSection />
      <AboutSection />
      <ResearchSection />
      <WhySection />
      {/* <TrainingSection /> */}
      <TeamSection />
      {/* <GallerySection /> */}
      {/* <TestimonialsSection /> */}
      <FieldsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
