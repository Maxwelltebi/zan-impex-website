"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FilterKey = "All" | "Construction" | "Civil" | "Electrical" | "Real Estate" | "Import/Export";

const projects = [
  {
    id: 1,
    title: "Asakina Ga-West Development",
    category: "Construction",
    tag: "Residential",
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=600&h=450&fit=crop",
    description: "Multi-unit residential development in Ga-West, Greater Accra.",
  },
  {
    id: 2,
    title: "Road Infrastructure Works",
    category: "Civil",
    tag: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop",
    description: "Road construction and drainage systems for community access.",
  },
  {
    id: 3,
    title: "Commercial Power Installation",
    category: "Electrical",
    tag: "Electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=450&fit=crop",
    description: "Full electrical fit-out for industrial facility in Spintex.",
  },
  {
    id: 4,
    title: "Executive Townhouses",
    category: "Real Estate",
    tag: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=450&fit=crop",
    description: "Luxury townhouse development targeting mid-to-high income buyers.",
  },
  {
    id: 5,
    title: "General Goods Import",
    category: "Import/Export",
    tag: "Trade",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=450&fit=crop",
    description: "High-volume tyre and automotive parts import operations.",
  },
  {
    id: 6,
    title: "Community Drainage Project",
    category: "Civil",
    tag: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop",
    description: "Storm drain construction improving flood resilience in Accra suburbs.",
  },
];

const filters: FilterKey[] = ["All", "Construction", "Civil", "Electrical", "Real Estate", "Import/Export"];

export function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<FilterKey>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
            Our Work
          </p>
          <h2
            className="font-sans font-bold text-charcoal mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Projects That{" "}
            <span className="text-brand-green">Speak for Themselves</span>
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            From Asakina to Spintex — built to last, delivered with pride.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
                active === f
                  ? "bg-brand-green text-white"
                  : "bg-brand-green-light text-brand-green hover:bg-brand-green hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid — flip cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              className="group cursor-pointer"
              style={{ perspective: "1000px", height: "360px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className="relative w-full h-full transition-[transform] duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-sans font-bold text-white text-lg leading-snug">{p.title}</h3>
                    <p className="text-white/60 text-xs mt-1 font-mono uppercase tracking-widest">Hover to learn more</p>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-3xl bg-brand-green flex flex-col justify-between p-7"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div>
                    <span className="inline-block bg-white/20 text-brand-gold-light text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                      {p.tag}
                    </span>
                    <h3 className="font-sans font-bold text-white text-xl mb-3 leading-snug">{p.title}</h3>
                    <p className="text-white/80 text-sm font-sans leading-relaxed">{p.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-brand-gold-light text-xs font-mono uppercase tracking-widest mt-4">
                    <span>View Project</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-warm-gray text-sm font-sans italic">
            More project photography coming soon — real ZAN IMPEX site photos to replace placeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
