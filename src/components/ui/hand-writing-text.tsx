"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4">
      {/* SVG loop that draws itself */}
      <div className="relative inline-block">
        <svg
          viewBox="0 0 1200 200"
          className="absolute inset-0 w-full h-full text-brand-green pointer-events-none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 60 100 C 60 40, 200 10, 600 10 C 1000 10, 1140 40, 1140 100 C 1140 160, 1000 190, 600 190 C 200 190, 60 160, 60 100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.5, ease: [0.33, 1, 0.68, 1] },
              opacity: { duration: 0.3 },
            }}
          />
        </svg>

        {/* Title */}
        <motion.h1
          className="relative z-10 font-display font-black text-charcoal leading-tight py-6 px-12"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-warm-gray font-sans max-w-2xl"
        style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
