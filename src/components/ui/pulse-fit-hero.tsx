"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavigationItem {
  label: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

interface ProgramCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
}

interface PulseFitHeroProps {
  logo?: string;
  navigation?: NavigationItem[];
  ctaButton?: { label: string; onClick: () => void };
  title: string;
  subtitle: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  disclaimer?: string;
  socialProof?: { avatars: string[]; text: string };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
}

function AutoScrollCarousel({ cards }: { cards: ProgramCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const CARD_WIDTH = 240;
  const GAP = 16;
  const STEP = CARD_WIDTH + GAP;
  const totalWidth = cards.length * STEP;

  useAnimationFrame((_, delta) => {
    xRef.current -= (delta / 1000) * 50; // 50px/s
    if (Math.abs(xRef.current) >= totalWidth) {
      xRef.current = 0;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  const doubled = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade left */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F8F6F1, transparent)" }} />
      {/* Fade right */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F8F6F1, transparent)" }} />

      <div ref={trackRef} className="flex" style={{ gap: `${GAP}px`, willChange: "transform" }}>
        {doubled.map((card, i) => (
          <div
            key={i}
            onClick={card.onClick}
            className="flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group relative"
            style={{ width: `${CARD_WIDTH}px`, height: "320px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-gold-light mb-1">
                {card.category}
              </p>
              <p className="text-sm font-sans font-semibold leading-tight">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PulseFitHero({
  logo = "ZAN IMPEX",
  navigation = [],
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
}: PulseFitHeroProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section
      id="hero"
      className={cn("relative min-h-screen flex flex-col", className)}
      style={{
        background: "linear-gradient(180deg, #E8F4EC 0%, #F8F6F1 50%, #FFFFFF 100%)",
      }}
    >
      {/* Navbar */}
      <motion.header
        className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
            <span className="text-white font-bold text-xs">ZI</span>
          </div>
          <span className="font-sans font-bold text-charcoal text-lg tracking-tight">
            {logo}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="text-sm font-sans font-medium text-warm-gray hover:text-brand-green transition-colors duration-200 flex items-center gap-1"
            >
              {item.label}
              {item.hasDropdown && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {ctaButton && (
            <button
              onClick={ctaButton.onClick}
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-sans font-medium text-white transition-all duration-200 hover:opacity-90 shadow-btn"
              style={{ background: "#1B6B35" }}
            >
              {ctaButton.label}
            </button>
          )}
          <button
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-brand-green-light transition-colors"
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      {mobileNavOpen && (
        <motion.div
          className="lg:hidden absolute top-[72px] left-0 right-0 z-40 bg-white border-b border-border shadow-card px-6 py-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navigation.map((item) => (
            <button
              key={item.label}
              onClick={() => { item.onClick?.(); setMobileNavOpen(false); }}
              className="text-left text-base font-sans font-medium text-charcoal hover:text-brand-green transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          {ctaButton && (
            <button
              onClick={() => { ctaButton.onClick(); setMobileNavOpen(false); }}
              className="mt-2 px-5 py-3 rounded-lg text-sm font-medium text-white w-full"
              style={{ background: "#1B6B35" }}
            >
              {ctaButton.label}
            </button>
          )}
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8 pb-12 text-center">
        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-5xl"
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-sans font-black text-charcoal leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
              {title}
            </h1>
            <p className="text-warm-gray font-sans max-w-2xl mx-auto"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}>
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* CTA Buttons */}
        {(primaryAction || secondaryAction) && (
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {primaryAction && (
              <button
                onClick={primaryAction.onClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-sans font-medium text-base transition-all hover:opacity-90 shadow-btn"
                style={{ background: "#1B6B35" }}
              >
                {primaryAction.label}
                <span>→</span>
              </button>
            )}
            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-brand-green text-brand-green font-sans font-medium text-base hover:bg-brand-green-light transition-all"
              >
                {secondaryAction.label}
              </button>
            )}
          </motion.div>
        )}

        {/* Social Proof */}
        {socialProof && (
          <motion.div
            className="flex items-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <div className="flex -space-x-2">
              {socialProof.avatars.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-warm-gray font-sans">{socialProof.text}</p>
          </motion.div>
        )}

        {disclaimer && (
          <motion.p
            className="mt-4 text-xs text-warm-gray font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            {disclaimer}
          </motion.p>
        )}
      </div>

      {/* Card Carousel */}
      {programs.length > 0 && (
        <motion.div
          className="pb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <AutoScrollCarousel cards={programs} />
        </motion.div>
      )}
    </section>
  );
}
