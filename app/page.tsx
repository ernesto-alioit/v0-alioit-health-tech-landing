import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import CTASection from "@/components/cta-section"
import ClientLogos from "@/components/client-logos"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
