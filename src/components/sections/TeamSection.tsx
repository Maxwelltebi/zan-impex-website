"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Zangwio Kuyiwe Joseph",
    role: "Chief Executive Officer",
    credentials: ["Procurement, Logistics & Supply Chain Management", "GIMPA (Ghana Institute of Management and Public Administration)"],
    focus: "Oversees procurement strategy, logistics operations, and supply chain excellence across all five sectors.",
    avatar: "https://i.pravatar.cc/300?img=3",
    initials: "ZK",
    color: "bg-brand-green",
  },
  {
    name: "Faustina Abajei Wemoki",
    role: "Director",
    credentials: [
      "BSc Biomedical Engineering — University of Ghana",
      "Electrical Engineering Technician — Niagara College, Canada",
    ],
    focus: "Leads technical engineering operations and ensures all electrical and construction works meet international standards.",
    avatar: "https://i.pravatar.cc/300?img=5",
    initials: "FA",
    color: "bg-brand-gold",
  },
  {
    name: "Wisdom Akandige Atuguba",
    role: "Company Secretary",
    credentials: [
      "BSc Business Administration — KNUST",
      "LLB — GIMPA",
      "BL — Ghana School of Law",
      "Private Legal Practitioner",
    ],
    focus: "Ensures every ZAN IMPEX operation is ethically and legally governed. Compliance, contracts, and corporate governance.",
    avatar: "https://i.pravatar.cc/300?img=7",
    initials: "WA",
    color: "bg-charcoal",
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
            Leadership
          </p>
          <h2
            className="font-sans font-bold text-charcoal mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The People Behind{" "}
            <span className="text-brand-green">ZAN IMPEX</span>
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            International education. Ghanaian commitment. A leadership team that proves we don&apos;t
            promise excellence — we credential it.
          </p>
        </motion.div>

        {/* Team flip cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group cursor-pointer"
              style={{ perspective: "1000px", height: "440px" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="relative w-full h-full transition-[transform] duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 rounded-3xl bg-white border border-border overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Colored header */}
                  <div className={`${member.color} h-44 flex items-end justify-center relative overflow-hidden`}>
                    <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden mb-[-40px] relative z-10 shadow-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="absolute top-4 right-4 font-sans font-black text-6xl text-white/10 pointer-events-none select-none">
                      {member.initials}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="pt-14 px-6 pb-6 text-center">
                    <h3 className="font-sans font-bold text-charcoal text-lg mb-1">{member.name}</h3>
                    <p className="text-brand-green font-sans text-sm font-medium mb-6">{member.role}</p>
                    <p className="text-warm-gray/70 text-xs font-sans italic font-mono uppercase tracking-widest">Hover for credentials →</p>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-3xl bg-charcoal flex flex-col justify-center p-7"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-1">{member.role}</p>
                  <h3 className="font-sans font-bold text-white text-xl mb-3">{member.name}</h3>
                  <p className="text-white/70 text-sm font-sans leading-relaxed mb-5">{member.focus}</p>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2">Credentials</p>
                    <ul className="space-y-2">
                      {member.credentials.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-white/80 font-sans">
                          <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
