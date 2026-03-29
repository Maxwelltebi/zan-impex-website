import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CSRSection } from "@/components/sections/CSRSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CredentialsSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <CSRSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
