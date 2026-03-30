"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "@/components/ui/modern-timeline";
import type { TimelineItem } from "@/components/ui/modern-timeline";

const services: TimelineItem[] = [
  {
    title: "Import & Export",
    description:
      "We source and supply quality goods across Ghana's diverse markets. Our CEO's GIMPA-trained logistics expertise means your supply chain runs on time, every time. General goods & commodities, tyre & automotive imports, end-to-end logistics, and customs clearance.",
    date: "Est. 2021",
    category: "ZAN IMPEX Trading",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "Building Construction",
    description:
      "From single-family homes to multi-storey commercial builds, we deliver structures that stand for generations. Ministry of Works & Housing certified — Category D: General Building Works. Residential homes, commercial buildings, renovation & refurbishment, and full project management.",
    date: "Category D Certified",
    category: "ZAN IMPEX Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "Civil Engineering",
    description:
      "Roads, drainage, bridges, and infrastructure that connect and grow communities. Ministry certified Category K: Civil Works — Financial Class over GHS 500,000. Road construction, drainage & culverts, site preparation, and infrastructure works.",
    date: "Category K Certified",
    category: "ZAN IMPEX Civil Works",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "Electrical Engineering",
    description:
      "Safe, code-compliant electrical installations led by our Director — a dual-qualified Biomedical and Electrical Engineering Technician trained in Ghana and Canada. Power distribution, industrial installations, residential wiring, and safety inspections.",
    date: "Active",
    category: "ZAN IMPEX Electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=150&h=150&fit=crop",
    status: "current",
  },
  {
    title: "Real Estate Development",
    description:
      "We develop, manage, and invest in sustainable properties across Greater Accra. From land acquisition through to property management — one partner, full lifecycle. Property development, land acquisition, property management, and investor partnerships.",
    date: "Expanding",
    category: "ZAN IMPEX Realty",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=150&h=150&fit=crop",
    status: "upcoming",
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Timeline items={services} className="max-w-3xl" />
        </motion.div>

        {/* Why One Partner callout */}
        <motion.div
          className="mt-12 rounded-2xl bg-charcoal px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-gold-light mb-1">
              Why One Partner?
            </p>
            <p className="font-sans font-bold text-white text-lg">
              Eliminate the Coordination Tax
            </p>
            <p className="text-white/60 text-sm mt-1 max-w-xl">
              Most clients pay a hidden tax managing multiple contractors who don&apos;t communicate.
              ZAN IMPEX integrates every discipline under one accountable roof — so your project
              stays on time and on budget.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 px-6 py-3 bg-brand-green rounded-lg text-white text-sm font-medium hover:bg-brand-green-dark transition-colors whitespace-nowrap"
          >
            Start Your Project →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
