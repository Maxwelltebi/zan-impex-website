"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000); // ≈70.7 — tied to clip-path geometry, do not change

interface Testimonial {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

interface StaggerTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function StaggerTestimonials({ testimonials, className }: StaggerTestimonialsProps) {
  const [list, setList] = useState(testimonials);

  const handleMove = (direction: number) => {
    setList((prev) => {
      const next = [...prev];
      if (direction > 0) {
        const first = next.shift()!;
        first.tempId = Math.random();
        next.push(first);
      } else {
        const last = next.pop()!;
        last.tempId = Math.random();
        next.unshift(last);
      }
      return next;
    });
  };

  const cardSize = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches
    ? 290
    : 365;

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <div className="relative w-full" style={{ height: "600px" }}>
        {list.map((t, i) => {
          const position = i - Math.floor(list.length / 2);
          const isCenter = position === 0;
          const absPos = Math.abs(position);
          const zIndex = list.length - absPos;
          const scale = 1 - absPos * 0.06;
          const xOffset = position * (cardSize * 0.55);
          const yOffset = absPos * 12;
          const opacity = absPos > 3 ? 0 : 1 - absPos * 0.18;

          return (
            <div
              key={t.tempId}
              onClick={() => !isCenter && handleMove(position)}
              className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out"
              style={{
                width: `${cardSize}px`,
                height: `${cardSize * 1.4}px`,
                transform: `translate(-50%, -50%) translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale})`,
                zIndex,
                opacity,
                cursor: isCenter ? "default" : "pointer",
                clipPath: `polygon(0 0, calc(100% - ${SQRT_5000 * 0.7}px) 0, 100% ${SQRT_5000 * 0.7}px, 100% 100%, 0 100%)`,
              }}
            >
              <div
                className={cn(
                  "w-full h-full rounded-2xl flex flex-col justify-between p-6 shadow-card",
                  isCenter
                    ? "bg-brand-green text-white"
                    : "bg-white text-charcoal border border-border"
                )}
              >
                {/* Quote mark */}
                <div className={cn("text-5xl font-display leading-none mb-2",
                  isCenter ? "text-brand-gold-light opacity-60" : "text-brand-green opacity-20")}>
                  &ldquo;
                </div>

                <p className={cn("font-sans text-sm leading-relaxed flex-1",
                  isCenter ? "text-white" : "text-warm-gray")}>
                  {t.testimonial}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.imgSrc}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <p className={cn("text-xs font-sans font-medium",
                    isCenter ? "text-brand-gold-light" : "text-charcoal")}>
                    {t.by}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => handleMove(-1)}
          className="w-12 h-12 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-dark transition-all duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
