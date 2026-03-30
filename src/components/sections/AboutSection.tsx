"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "Dec 2021", label: "Founded" },
  { value: "5", label: "Integrated Sectors" },
  { value: "GHS 500K+", label: "Ministry Financial Class" },
  { value: "Accra", label: "Headquartered & Growing" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-sans font-bold text-charcoal mb-8 max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We Don&apos;t Just Build Structures.{" "}
          <span className="text-brand-green">We Build Legacies.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-warm-gray font-sans text-lg leading-relaxed mb-6">
              ZAN IMPEX LIMITED is a proudly Ghanaian-owned multi-disciplinary enterprise,
              incorporated in December 2021 to deliver integrated solutions across five strategic
              sectors. From importing quality materials to constructing residential homes, developing
              infrastructure, installing electrical systems, and creating sustainable properties —
              we are your single partner from concept to completion.
            </p>
            <p className="text-warm-gray font-sans text-base leading-relaxed mb-8">
              What distinguishes us is our comprehensive approach. Our leadership team combines
              international engineering experience from Canada, supply chain management expertise
              from GIMPA, and legal proficiency — ensuring every project meets the highest standards
              of quality, safety, and compliance.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Integrity", desc: "Transparent contracts, honest timelines, fair pricing." },
                { title: "Excellence", desc: "International standards with a Ghanaian heart." },
                { title: "Innovation", desc: "One partner for five sectors — no coordination overhead." },
                { title: "Sustainability", desc: "Building for now, planning for generations." },
              ].map((p) => (
                <div key={p.title} className="bg-brand-green-light rounded-xl p-4">
                  <h4 className="font-sans font-semibold text-brand-green text-sm mb-1">{p.title}</h4>
                  <p className="text-warm-gray text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats + Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Dummy image */}
            <div className="rounded-3xl overflow-hidden mb-8 aspect-[4/3] bg-brand-green-light flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=525&fit=crop"
                alt="ZAN IMPEX construction project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white p-5">
                  <p className="font-sans font-bold text-brand-green text-2xl mb-1">{s.value}</p>
                  <p className="text-warm-gray text-xs font-sans uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
