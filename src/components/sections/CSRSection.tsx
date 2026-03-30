"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Leaf, Wrench } from "lucide-react";

const initiatives = [
  {
    icon: Heart,
    title: "Future Stars International",
    description:
      "ZAN IMPEX has supported Future Stars International orphanage since 2019 — predating the company's own incorporation. Ghana's children are our investment in the future.",
    tag: "Since 2019",
  },
  {
    icon: Users,
    title: "Community Apprenticeship",
    description:
      "We train young Ghanaians in construction trades, electrical installation, and civil engineering. Every project is an opportunity to build skills alongside structures.",
    tag: "Skills Development",
  },
  {
    icon: Leaf,
    title: "Sustainable Construction",
    description:
      "Energy-efficient design, sustainable materials, and responsible waste management are built into every ZAN IMPEX project specification — not added as an afterthought.",
    tag: "Green Building",
  },
  {
    icon: Wrench,
    title: "Local Procurement",
    description:
      "Where materials and labour can be sourced locally, we do. Supporting Ghana's economy is not a policy — it's how we operate.",
    tag: "Made in Ghana",
  },
];

export function CSRSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="csr" className="py-24 bg-brand-green-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
              Corporate Social Responsibility
            </p>
            <h2
              className="font-sans font-bold text-charcoal mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Building Ghana.{" "}
              <span className="text-brand-green">Beyond the Contract.</span>
            </h2>
            <p className="text-warm-gray font-sans text-lg leading-relaxed mb-8">
              ZAN IMPEX believes Ghana&apos;s development is not just a business opportunity — it is a
              responsibility. Every project we complete contributes to a stronger, more skilled, and
              more sustainable Ghana.
            </p>

            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                alt="Community development"
                className="w-full h-56 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Initiatives — plain rows, no card styling */}
          <div className="space-y-5">
            {initiatives.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-4 border-l-2 border-brand-green pl-4 py-1"
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-sans font-semibold text-charcoal text-sm">{item.title}</h3>
                      <span className="bg-brand-green-light text-brand-green text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-warm-gray text-sm font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
