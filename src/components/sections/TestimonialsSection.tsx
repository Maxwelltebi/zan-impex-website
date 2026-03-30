"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "ZAN IMPEX handled everything from the foundation to the electrical. Having one team meant zero coordination issues and the project finished two weeks early.",
    by: "Kwame A., Private Developer, East Legon",
    imgSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    tempId: 1,
    testimonial:
      "Their Ministry of Works & Housing certification gave our procurement committee the confidence to award the contract. Compliance was never a question.",
    by: "Procurement Office, Municipal Assembly",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    tempId: 2,
    testimonial:
      "We built our family home with ZAN IMPEX. Every detail was handled with care. The Director personally inspected the electrical work before handover.",
    by: "Abena M., Homeowner, Tema",
    imgSrc: "https://i.pravatar.cc/150?img=13",
  },
  {
    tempId: 3,
    testimonial:
      "The electrical installation for our facility was completed ahead of schedule. The team understood industrial requirements from day one — exceptional.",
    by: "Operations Manager, Manufacturing Firm, Spintex",
    imgSrc: "https://i.pravatar.cc/150?img=14",
  },
  {
    tempId: 4,
    testimonial:
      "Our tyre imports arrived on time, every time. ZAN IMPEX is now our preferred procurement partner for all automotive supplies.",
    by: "Logistics Director, Accra Trading Co.",
    imgSrc: "https://i.pravatar.cc/150?img=15",
  },
  {
    tempId: 5,
    testimonial:
      "The road construction project delivered by ZAN IMPEX Civil Works has transformed access to our community. Built to last.",
    by: "Community Development Officer, Ga-West",
    imgSrc: "https://i.pravatar.cc/150?img=16",
  },
  {
    tempId: 6,
    testimonial:
      "We needed a partner with both engineering expertise and legal integrity. ZAN IMPEX has all three — CEO, Director, and a qualified legal Secretary.",
    by: "CEO, Real Estate Investment Firm, Ridge",
    imgSrc: "https://i.pravatar.cc/150?img=17",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
            Client Stories
          </p>
          <h2
            className="font-sans font-bold text-charcoal mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What Our Clients{" "}
            <span className="text-brand-green">Say</span>
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-xl mx-auto">
            From homeowners to government agencies — ZAN IMPEX delivers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StaggerTestimonials testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
