"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Shield, Award, FileText } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const credentials = [
  {
    number: "01",
    icon: Award,
    title: "Ministry of Works & Housing",
    detail: "Category D — General Building Works\nCategory K — Civil Works\nFinancial Class: Over GHS 500,000",
    badge: "Valid to 22 April 2026",
    highlight: true,
  },
  {
    number: "02",
    icon: FileText,
    title: "Company Registration",
    detail: "CS249821221\nIncorporated 30 December 2021\nCompanies Act 2019 (Act 992)",
    badge: "TIN: C0061476412",
    highlight: false,
  },
  {
    number: "03",
    icon: Shield,
    title: "Tax Compliance",
    detail: "Registered with Ghana Revenue Authority\nCorporate income tax, VAT & withholding tax\nGood standing status",
    badge: "GRA Compliant",
    highlight: false,
  },
  {
    number: "04",
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
    <section id="why" className="w-full py-16 md:py-24 lg:py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-brand-green px-3 py-1 text-sm text-white font-mono uppercase tracking-widest">
            Why ZAN IMPEX
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Certified. Compliant.{" "}
            <span className="text-brand-gold">Committed.</span>
          </h2>
          <p className="max-w-2xl text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Real credentials. Real facts. Not vague promises — proof.
          </p>
        </motion.div>

        {/* 4 Credential Cards — ordered 2x2 full width */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {credentials.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className={`flex flex-col h-full border-0 ${
                  c.highlight ? "bg-brand-green" : "bg-white/5"
                }`}>
                  <CardHeader className="pb-3 pt-6 px-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          c.highlight ? "bg-white/20" : "bg-white/10"
                        }`}>
                          <Icon size={20} className={c.highlight ? "text-brand-gold-light" : "text-brand-gold"} />
                        </div>
                        <p className="text-base font-semibold text-white leading-snug">{c.title}</p>
                      </div>
                      <span className={`font-mono text-2xl font-bold flex-shrink-0 ${
                        c.highlight ? "text-white/20" : "text-white/10"
                      }`}>
                        {c.number}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 px-6 pb-4">
                    <p className={`text-sm leading-relaxed whitespace-pre-line ${
                      c.highlight ? "text-white/80" : "text-white/60"
                    }`}>
                      {c.detail}
                    </p>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 pt-0">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wide ${
                      c.highlight
                        ? "bg-brand-gold/30 text-brand-gold-light"
                        : "bg-brand-gold/20 text-brand-gold-light"
                    }`}>
                      {c.badge}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row: Ministry cert + What Sets Us Apart */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Ministry Certificate card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Card className="border-0 bg-white/5 text-white h-full overflow-hidden">
              <CardHeader className="border-b border-white/10 py-4 px-6">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-brand-gold" />
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                    Ministry Certificate
                  </span>
                </div>
              </CardHeader>
              <CardContent className="py-10 px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-5">
                    <Award size={28} className="text-brand-gold" />
                  </div>
                  <p className="font-bold text-white text-lg mb-1">Ministry of Works & Housing</p>
                  <p className="text-white/50 text-sm mb-4">Certificate of Registration</p>
                  <p className="text-brand-gold font-mono text-xs uppercase tracking-widest">
                    Category D & K · GHS 500,000+
                  </p>
                  <p className="text-white/25 text-xs mt-5 italic">
                    [Replace with scanned certificate image]
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Card className="border-0 bg-white/5 text-white h-full">
              <CardHeader className="border-b border-white/10 py-4 px-6">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-green-mid" />
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                    What Sets Us Apart
                  </span>
                </div>
              </CardHeader>
              <CardContent className="py-6 px-6">
                <ul className="space-y-4">
                  {differentiators.map((d, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/75"
                      initial={{ opacity: 0, x: 12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                    >
                      <CheckCircle size={15} className="text-brand-green-mid flex-shrink-0 mt-0.5" />
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
