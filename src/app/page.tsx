import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesSection } from "@/components/services-section"
import { TrustSignals } from "@/components/trust-signals"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesSection />
        <TrustSignals />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  )
}
