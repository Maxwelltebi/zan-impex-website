"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Shield, Award, FileText } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Ministry of Works & Housing",
    detail: "Category D — General Building Works\nCategory K — Civil Works\nFinancial Class: Over GHS 500,000",
    badge: "Valid to 22 April 2026",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Company Registration",
    detail: "CS249821221\nIncorporated 30 December 2021\nCompanies Act 2019 (Act 992)",
    badge: "TIN: C0061476412",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Tax Compliance",
    detail: "Registered with Ghana Revenue Authority\nCorporate income tax, VAT & withholding tax\nGood standing status",
    badge: "GRA Compliant",
    highlight: false,
  },
  {
    icon: CheckCircle,
    title: "Legally Governed",
    detail: "Company Secretary is a qualified Private Legal Practitioner (LLB, BL)\nEvery operation ethically and legally governed",
    badge: "Ghana School of Law",
    highlight: false,
  },
];

const differentiators = [
  "Single-contract accountability across all five sectors",
  "International engineering credentials (Canada-trained Director)",
  "GIMPA-trained CEO for procurement and logistics",
  "Legal practitioner as Company Secretary",
  "Ministry certified for public contracts over GHS 500,000",
  "Active CSR — Future Stars International since 2019",
];

export function CredentialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
            Why ZAN IMPEX
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Certified. Compliant.{" "}
            <span className="text-brand-gold">Committed.</span>
          </h2>
          <p className="text-white/60 font-sans text-lg max-w-2xl mx-auto">
            Real credentials. Real facts. Not vague promises — proof.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Credentials cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  className={`rounded-2xl p-5 border ${
                    c.highlight
                      ? "bg-brand-green border-brand-green-mid"
                      : "bg-white/5 border-white/10"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Icon size={22} className={c.highlight ? "text-brand-gold-light" : "text-brand-gold"} />
                  <h3 className="font-sans font-semibold text-sm mt-3 mb-2">{c.title}</h3>
                  <p className="text-white/60 text-xs font-sans leading-relaxed whitespace-pre-line mb-3">
                    {c.detail}
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light text-[10px] font-mono uppercase tracking-wide">
                    {c.badge}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Why list + cert image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Ministry cert placeholder */}
            <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
              <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-2">
                <Award size={16} className="text-brand-gold" />
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                  Ministry Certificate
                </span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-green/20 to-brand-green-dark/40 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Award size={28} className="text-brand-gold" />
                  </div>
                  <p className="font-display font-bold text-white text-lg mb-1">
                    Ministry of Works & Housing
                  </p>
                  <p className="text-white/60 text-sm mb-3">Certificate of Registration</p>
                  <p className="text-brand-gold font-mono text-xs uppercase tracking-widest">
                    Category D & K · GHS 500,000+
                  </p>
                  <p className="text-white/40 text-xs mt-4 italic">
                    [Replace with scanned certificate image]
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiators */}
            <h3 className="font-display font-bold text-xl mb-5 text-brand-gold-light">
              What Sets Us Apart
            </h3>
            <ul className="space-y-3">
              {differentiators.map((d, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/80 font-sans"
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                >
                  <CheckCircle size={16} className="text-brand-green-mid flex-shrink-0 mt-0.5" />
                  {d}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
