"use client";

const navLinks = [
  { label: "About", anchor: "#about" },
  { label: "Services", anchor: "#services" },
  { label: "Why ZAN IMPEX", anchor: "#why" },
  { label: "Portfolio", anchor: "#portfolio" },
  { label: "Team", anchor: "#team" },
  { label: "Testimonials", anchor: "#testimonials" },
  { label: "CSR", anchor: "#csr" },
  { label: "Contact", anchor: "#contact" },
];

const sectors = [
  "ZAN IMPEX Trading — Import & Export",
  "ZAN IMPEX Construction",
  "ZAN IMPEX Civil Works",
  "ZAN IMPEX Electrical",
  "ZAN IMPEX Realty",
];

export function Footer() {
  const scrollTo = (anchor: string) => {
    const el = document.getElementById(anchor.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">ZI</span>
              </div>
              <span className="font-sans font-bold text-white text-xl tracking-tight">
                ZAN IMPEX LIMITED
              </span>
            </div>
            <p className="font-sans text-brand-gold-light text-lg italic mb-4">
              Building Tomorrow Today
            </p>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-sm mb-6">
              Ghana&apos;s integrated development partner — delivering trade, construction, civil
              engineering, electrical works, and real estate under one accountable roof.
            </p>
            <div className="space-y-1.5 text-sm font-sans text-white/50">
              <p>Reg. No: CS249821221</p>
              <p>TIN: C0061476412</p>
              <p>GPS: GC-123-1742</p>
              <p>Olebu Ablekuma, Accra, Ghana</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.anchor)}
                    className="text-sm font-sans text-white/60 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors + Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-4">
              Our Sectors
            </h4>
            <ul className="space-y-2 mb-8">
              {sectors.map((s) => (
                <li key={s} className="text-xs font-sans text-white/50 leading-snug">
                  {s}
                </li>
              ))}
            </ul>

            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-3">
              Contact
            </h4>
            <div className="space-y-1.5 text-xs font-sans text-white/50">
              <p>+233 (0) 245 064-806</p>
              <p>kuyiwe12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry cert bar */}
      <div className="border-t border-white/10 bg-brand-green/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-brand-gold uppercase tracking-widest">
            Ministry of Works & Housing Certified · Category D & K · GHS 500,000+
          </p>
          <p className="text-xs font-sans text-white/40">Valid to 22 April 2026</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-sans text-white/30">
            © {new Date().getFullYear()} ZAN IMPEX LIMITED. All rights reserved.
          </p>
          <p className="text-xs font-sans text-white/30">
            Incorporated under Companies Act 2019 (Act 992) · Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
