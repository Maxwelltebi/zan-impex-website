"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Package,
  Building2,
  Shovel,
  Zap,
  Home,
} from "lucide-react";

const services = [
  {
    icon: Package,
    sector: "ZAN IMPEX Trading",
    title: "Import & Export",
    tagline: "Global Sourcing. Ghanaian Delivery.",
    description:
      "We source and supply quality goods across Ghana's diverse markets. Our CEO's GIMPA-trained logistics expertise means your supply chain runs on time, every time.",
    highlights: ["General goods & commodities", "Tyre & automotive imports", "End-to-end logistics", "Customs clearance"],
    color: "bg-brand-gold-pale border-brand-gold",
    iconColor: "text-brand-gold",
    accentColor: "text-brand-gold",
  },
  {
    icon: Building2,
    sector: "ZAN IMPEX Construction",
    title: "Building Construction",
    tagline: "Your Vision. Our Craft. Ghana's Standard.",
    description:
      "From single-family homes to multi-storey commercial builds, we deliver structures that stand for generations. Ministry of Works & Housing certified — Category D: General Building Works.",
    highlights: ["Residential homes", "Commercial buildings", "Renovation & refurbishment", "Project management"],
    color: "bg-brand-green-light border-brand-green",
    iconColor: "text-brand-green",
    accentColor: "text-brand-green",
  },
  {
    icon: Shovel,
    sector: "ZAN IMPEX Civil Works",
    title: "Civil Engineering",
    tagline: "Certified. Compliant. Committed.",
    description:
      "Roads, drainage, bridges, and infrastructure that connect and grow communities. Ministry certified Category K: Civil Works — Financial Class over GHS 500,000.",
    highlights: ["Road construction", "Drainage & culverts", "Site preparation", "Infrastructure works"],
    color: "bg-brand-green-light border-brand-green",
    iconColor: "text-brand-green",
    accentColor: "text-brand-green",
  },
  {
    icon: Zap,
    sector: "ZAN IMPEX Electrical",
    title: "Electrical Engineering",
    tagline: "Power. Precision. Performance.",
    description:
      "Safe, code-compliant electrical installations led by our Director — a dual-qualified Biomedical and Electrical Engineering Technician trained in Ghana and Canada.",
    highlights: ["Power distribution", "Industrial installations", "Residential wiring", "Safety inspections"],
    color: "bg-brand-gold-pale border-brand-gold",
    iconColor: "text-brand-gold",
    accentColor: "text-brand-gold",
  },
  {
    icon: Home,
    sector: "ZAN IMPEX Realty",
    title: "Real Estate Development",
    tagline: "From Land to Legacy.",
    description:
      "We develop, manage, and invest in sustainable properties across Greater Accra. From land acquisition through to property management — one partner, full lifecycle.",
    highlights: ["Property development", "Land acquisition", "Property management", "Investor partnerships"],
    color: "bg-brand-green-light border-brand-green",
    iconColor: "text-brand-green",
    accentColor: "text-brand-green",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
            What We Do
          </p>
          <h2
            className="font-display font-bold text-charcoal mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Five Sectors.{" "}
            <span className="text-brand-green">One Partner.</span>
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            We build what Ghana needs — houses, roads, electrical systems, and the infrastructure
            that lets communities grow. No coordination overhead. No gaps.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className={`rounded-2xl border-2 p-6 ${s.color} group hover:shadow-card-hover transition-all duration-300`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm ${s.iconColor}`}>
                  <Icon size={22} />
                </div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1">
                  {s.sector}
                </p>
                <h3 className={`font-display font-bold text-xl mb-1 ${s.accentColor}`}>
                  {s.title}
                </h3>
                <p className="font-sans text-xs italic text-warm-gray mb-3">{s.tagline}</p>

                <p className="text-warm-gray font-sans text-sm leading-relaxed mb-4">
                  {s.description}
                </p>

                <ul className="space-y-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-charcoal font-sans">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.iconColor === "text-brand-green" ? "bg-brand-green" : "bg-brand-gold"}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Why one partner card */}
          <motion.div
            className="rounded-2xl bg-charcoal text-white p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-gold-light mb-3">
                Why One Partner?
              </p>
              <h3 className="font-display font-bold text-2xl mb-4 leading-tight">
                Eliminate the Coordination Tax
              </h3>
              <p className="text-white/70 font-sans text-sm leading-relaxed">
                Most clients pay a hidden tax managing multiple contractors who don&apos;t communicate.
                ZAN IMPEX integrates every discipline under one accountable roof — so your project
                stays on time and on budget.
              </p>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 px-5 py-3 bg-brand-green rounded-lg text-white text-sm font-sans font-medium hover:bg-brand-green-dark transition-colors w-full text-center"
            >
              Start Your Project →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
