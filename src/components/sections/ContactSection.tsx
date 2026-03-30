"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+233 (0) 245 064-806",
    href: "tel:+233245064806",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kuyiwe12@gmail.com",
    href: "mailto:kuyiwe12@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Olebu Ablekuma, Accra, Ghana\nP.O. BOX OD.700, Odorkor, Accra\nGPS: GC-123-1742",
    href: "https://maps.google.com/?q=Olebu+Ablekuma+Accra+Ghana",
  },
];

const serviceOptions = [
  "Import / Export",
  "Building Construction",
  "Civil Engineering",
  "Electrical Works",
  "Real Estate",
  "Other",
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Wire to Resend or EmailJS before launch
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
            Get in Touch
          </p>
          <h2
            className="font-sans font-bold text-charcoal mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Start Your Project{" "}
            <span className="text-brand-green">Today</span>
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-xl mx-auto">
            Tell us what you need. We&apos;ll tell you how we can deliver it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-5 mb-8">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border hover:border-brand-green hover:shadow-card transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                      <Icon size={18} className="text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-charcoal font-sans text-sm whitespace-pre-line leading-relaxed">
                        {c.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Google Maps embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-56 bg-brand-green-light flex items-center justify-center">
              <div className="text-center px-6">
                <MapPin size={28} className="text-brand-green mx-auto mb-2" />
                <p className="font-sans text-sm text-warm-gray">
                  Olebu Ablekuma, Accra, Ghana
                </p>
                <p className="font-mono text-xs text-brand-gold mt-1">GPS: GC-123-1742</p>
                <a
                  href="https://maps.google.com/?q=Olebu+Ablekuma+Accra+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-brand-green underline font-sans"
                >
                  View on Google Maps →
                </a>
                <p className="text-warm-gray text-xs mt-2 italic">
                  [Replace with Google Maps iframe before launch]
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-brand-green text-white rounded-2xl p-10 flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <Send size={28} className="text-white" />
                </div>
                <h3 className="font-sans font-bold text-2xl mb-3">Message Received!</h3>
                <p className="text-white/80 font-sans">
                  Thank you for reaching out. The ZAN IMPEX team will respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 bg-white text-brand-green rounded-lg text-sm font-medium hover:bg-brand-green-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-off-white text-charcoal text-sm font-sans placeholder:text-warm-gray/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company / Organisation"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-off-white text-charcoal text-sm font-sans placeholder:text-warm-gray/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 XXX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-off-white text-charcoal text-sm font-sans placeholder:text-warm-gray/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-off-white text-charcoal text-sm font-sans placeholder:text-warm-gray/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1.5">
                    Service Interest
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-border bg-off-white text-charcoal text-sm font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-warm-gray mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-off-white text-charcoal text-sm font-sans placeholder:text-warm-gray/50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-sans font-medium text-base flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-btn"
                  style={{ background: "#1B6B35" }}
                >
                  Send Message
                  <Send size={16} />
                </button>

                <p className="text-xs text-warm-gray font-sans text-center">
                  We respond within one business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
