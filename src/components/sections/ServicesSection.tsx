"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Building2, Shovel, Zap, Home } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const services = [
  {
    icon: Package,
    sector: "ZAN IMPEX Trading",
    title: "Import & Export",
    tagline: "Global Sourcing. Ghanaian Delivery.",
    description:
      "We source and supply quality goods across Ghana's diverse markets. Our CEO's GIMPA-trained logistics expertise means your supply chain runs on time, every time.",
    highlights: ["General goods & commodities", "Tyre & automotive imports", "End-to-end logistics", "Customs clearance"],
    variant: "gold",
  },
  {
    icon: Building2,
    sector: "ZAN IMPEX Construction",
    title: "Building Construction",
    tagline: "Your Vision. Our Craft. Ghana's Standard.",
    description:
      "From single-family homes to multi-storey commercial builds, we deliver structures that stand for generations. Ministry of Works & Housing certified — Category D: General Building Works.",
    highlights: ["Residential homes", "Commercial buildings", "Renovation & refurbishment", "Project management"],
    variant: "green",
  },
  {
    icon: Shovel,
    sector: "ZAN IMPEX Civil Works",
    title: "Civil Engineering",
    tagline: "Certified. Compliant. Committed.",
    description:
      "Roads, drainage, bridges, and infrastructure that connect and grow communities. Ministry certified Category K: Civil Works — Financial Class over GHS 500,000.",
    highlights: ["Road construction", "Drainage & culverts", "Site preparation", "Infrastructure works"],
    variant: "green",
  },
  {
    icon: Zap,
    sector: "ZAN IMPEX Electrical",
    title: "Electrical Engineering",
    tagline: "Power. Precision. Performance.",
    description:
      "Safe, code-compliant electrical installations led by our Director — a dual-qualified Biomedical and Electrical Engineering Technician trained in Ghana and Canada.",
    highlights: ["Power distribution", "Industrial installations", "Residential wiring", "Safety inspections"],
    variant: "gold",
  },
  {
    icon: Home,
    sector: "ZAN IMPEX Realty",
    title: "Real Estate Development",
    tagline: "From Land to Legacy.",
    description:
      "We develop, manage, and invest in sustainable properties across Greater Accra. From land acquisition through to property management — one partner, full lifecycle.",
    highlights: ["Property development", "Land acquisition", "Property management", "Investor partnerships"],
    variant: "green",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>

        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-mono uppercase tracking-widest">
            What We Do
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-charcoal">
            Five Sectors.{" "}
            <span className="text-brand-green">One Partner.</span>
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We build what Ghana needs — houses, roads, electrical systems, and the infrastructure
            that lets communities grow. No coordination overhead. No gaps.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isGold = s.variant === "gold";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="flex flex-col h-full border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${
                      isGold ? "bg-brand-gold-pale" : "bg-brand-green-light"
                    }`}>
                      <Icon size={20} className={isGold ? "text-brand-gold" : "text-brand-green"} />
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.sector}
                    </p>
                    <h3 className={`text-xl font-bold leading-snug ${
                      isGold ? "text-brand-gold" : "text-brand-green"
                    }`}>
                      {s.title}
                    </h3>
                    <p className="text-xs italic text-muted-foreground">{s.tagline}</p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {s.description}
                    </p>
                    <ul className="space-y-1.5">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-charcoal">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isGold ? "bg-brand-gold" : "bg-brand-green"
                          }`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {/* Why One Partner card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
          >
            <Card className="flex flex-col h-full bg-charcoal border-0 text-white">
              <CardHeader className="pb-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-brand-gold-light">
                  Why One Partner?
                </p>
                <h3 className="text-xl font-bold leading-snug text-white">
                  Eliminate the Coordination Tax
                </h3>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-white/70 text-sm leading-relaxed">
                  Most clients pay a hidden tax managing multiple contractors who don&apos;t communicate.
                  ZAN IMPEX integrates every discipline under one accountable roof — so your project
                  stays on time and on budget.
                </p>
              </CardContent>

              <CardFooter>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-3 bg-brand-green rounded-lg text-white text-sm font-medium hover:bg-brand-green-dark transition-colors text-center"
                >
                  Start Your Project →
                </button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
