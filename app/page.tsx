import HeroSection from "@/components/hero-section"
import MissionVisionSection from "@/components/mission-vision-section"
import AboutSection from "@/components/about-section"
import ResearchSection from "@/components/research-section"
import WhySection from "@/components/why-section"
import TrainingSection from "@/components/training-section"
import TeamSection from "@/components/team-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import FieldsSection from "@/components/fields-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import Float from "@/components/floating"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Float/>
      <HeroSection />
      <MissionVisionSection />
      <AboutSection />
      <ResearchSection />
      <WhySection />
      <TrainingSection />
      <TeamSection />
      {/* <GallerySection /> */}
      {/* <TestimonialsSection /> */}
      <FieldsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
