"use client";

import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

const zanNavigation = [
  { label: "About",     onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Services",  hasDropdown: true, onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Portfolio", onClick: () => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Team",      onClick: () => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Contact",   onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
];

const zanSectorCards = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop",
    category: "CONSTRUCTION",
    title: "Residential & Commercial Builds",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    category: "CIVIL ENGINEERING",
    title: "Roads, Drainage & Infrastructure",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=500&fit=crop",
    category: "ELECTRICAL",
    title: "Power Distribution & Installations",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=500&fit=crop",
    category: "REAL ESTATE",
    title: "Sustainable Property Development",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=500&fit=crop",
    category: "IMPORT / EXPORT",
    title: "General Goods & Supply Chain",
  },
];

const socialProofAvatars = [
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=7",
];

export function HeroSection() {
  return (
    <PulseFitHero
      logo="ZAN IMPEX LIMITED"
      navigation={zanNavigation}
      ctaButton={{
        label: "Get a Quote",
        onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
      }}
      title=""
      subtitle=""
      primaryAction={{
        label: "Explore Our Services",
        onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
      }}
      secondaryAction={{
        label: "View Portfolio",
        onClick: () => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }),
      }}
      socialProof={{
        avatars: socialProofAvatars,
        text: "Ministry of Works & Housing Certified Since 2021",
      }}
      programs={zanSectorCards}
    >
      <HandWrittenTitle
        title="Building Tomorrow Today"
        subtitle="Ghana's Integrated Development Partner — Trade, Construction, Engineering, Electrical & Real Estate"
      />
    </PulseFitHero>
  );
}
