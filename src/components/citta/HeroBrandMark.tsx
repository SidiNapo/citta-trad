import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  logoSrc: string;
  brandName?: string;
  tagline?: string;
  className?: string;
};

export function HeroBrandMark({
  logoSrc,
  brandName = "Citta‑Trad",
  tagline = "خدمة إعداد ملفات الجنسية الإيطالية",
  className,
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative inline-flex w-fit items-center gap-3 rounded-2xl border px-4 py-3 surface-glass",
        className,
      )}
      initial={reduced ? undefined : { opacity: 0, y: 22, scale: 0.98, filter: "blur(10px)" }}
      animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={reduced ? undefined : { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* ambient glow */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] blur-2xl"
          style={{
            background:
              "radial-gradient(600px circle at 30% 30%, hsl(var(--primary) / 0.25), transparent 55%), radial-gradient(600px circle at 70% 60%, hsl(var(--accent) / 0.20), transparent 55%)",
          }}
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <motion.img
        src={logoSrc}
        alt="شعار Citta‑Trad"
        loading="eager"
        className="h-12 w-auto sm:h-14 md:h-16"
        animate={
          reduced
            ? undefined
            : {
                y: [0, -6, 0],
                rotate: [0, -1.2, 0],
              }
        }
        transition={reduced ? undefined : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <div className="truncate text-base font-semibold leading-none text-foreground sm:text-lg md:text-xl">
            {brandName}
          </div>
          <span className="hidden text-xs font-semibold text-muted-foreground sm:inline">•</span>
          <div className="hidden text-xs font-medium text-muted-foreground sm:block">Italy</div>
        </div>
        <div className="mt-1 line-clamp-1 text-xs text-muted-foreground sm:text-sm">{tagline}</div>

        {/* tricolore signature line */}
        <motion.div
          aria-hidden
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
        >
          <motion.div
            className="h-full w-full bg-gradient-to-l from-primary via-background to-accent"
            initial={reduced ? undefined : { x: "-35%" }}
            animate={reduced ? undefined : { x: ["-35%", "0%", "-15%"] }}
            transition={reduced ? undefined : { duration: 2.2, ease: [0.2, 0.8, 0.2, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
