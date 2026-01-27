import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/citta-trad-logo.png";

const EASE_OUT: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

type Props = {
  className?: string;
};

export function HeroBrandMark({ className }: Props) {
  const reduced = useReducedMotion();

  const ring = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.9, ease: EASE_OUT },
    },
  };

  const mark = {
    initial: { opacity: 0, scale: 0.92, y: 18 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.9, delay: 0.08, ease: EASE_OUT },
    },
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[5] flex items-center justify-center",
        className,
      )}
      aria-hidden
    >
      <div className="relative grid place-items-center">
        {/* Modern tricolore aura field */}
        <motion.div
          variants={ring}
          initial="initial"
          animate="animate"
          className={cn(
            "absolute -inset-16 rounded-full blur-2xl",
            "bg-[radial-gradient(closest-side,hsl(var(--primary)/0.32),transparent_60%),radial-gradient(closest-side,hsl(var(--accent)/0.26),transparent_62%),radial-gradient(closest-side,hsl(var(--foreground)/0.12),transparent_58%)]",
            "opacity-70 md:opacity-80",
          )}
        />

        {/* Ribbon ring */}
        <motion.div
          variants={ring}
          initial="initial"
          animate="animate"
          className={cn(
            "absolute -inset-6 rounded-[999px]",
            "bg-[conic-gradient(from_210deg,hsl(var(--primary)/0.85),hsl(var(--foreground)/0.22),hsl(var(--accent)/0.85),hsl(var(--foreground)/0.18),hsl(var(--primary)/0.85))]",
            "opacity-60 blur-[1px]",
            "[mask-image:radial-gradient(circle,transparent_58%,black_62%)]",
          )}
        />

        {/* Brand core */}
        <motion.div
          variants={mark}
          initial="initial"
          animate="animate"
          className={cn(
            "surface-glass rounded-3xl border bg-card/30 px-6 py-5 text-center shadow-elegant",
            "backdrop-blur-xl",
            "w-[min(86vw,440px)]",
          )}
        >
          <div className="mx-auto grid w-fit place-items-center gap-3">
            <div className="relative">
              <div
                className={cn(
                  "absolute -inset-4 rounded-full",
                  "bg-[radial-gradient(closest-side,hsl(var(--accent)/0.22),transparent_65%)]",
                  "blur-xl",
                )}
              />
              <img
                src={logo}
                alt="شعار Citta‑Trad"
                className="relative h-20 w-auto md:h-24"
                loading="eager"
              />
            </div>

            <div className="leading-none">
              <div
                className={cn(
                  "text-3xl font-semibold tracking-tight md:text-4xl",
                  "text-foreground",
                )}
              >
                Citta‑Trad
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                إعداد ملفات الجنسية الإيطالية
              </div>
            </div>
          </div>

          {/* Subtle divider accent */}
          <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.55),hsl(var(--foreground)/0.18),hsl(var(--accent)/0.55),transparent)]" />
          <div className="mt-3 text-xs text-muted-foreground md:text-sm">
            تنظيم • ترجمة محلفة • أبوستيل • إرسال
          </div>
        </motion.div>

        {/* Reduce obstruction on very small screens */}
        <div className="absolute inset-0 rounded-[999px] opacity-0 max-sm:opacity-100" />
      </div>
    </div>
  );
}
