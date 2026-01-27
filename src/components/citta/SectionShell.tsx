import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, children, className }: Props) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      {/* Subtle modern Italian-flag ambience (backgrounds) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-flag-field opacity-70"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      />
      <div className="relative container">
        <motion.header
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1 text-xs text-muted-foreground shadow-elegant">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </motion.header>

        {children}
      </div>
    </section>
  );
}
