import * as React from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

type Props = {
  title: string;
  description: string;
  bullets: string[];
  steps: Array<{ t: string; d: string }>;
  images: Array<{ src: string; alt: string }>;
  className?: string;
};

export function AboutShowcase({ title, description, bullets, steps, images, className }: Props) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-[1.1fr_0.9fr]", className)}>
      {/* Copy */}
      <Card className="surface-glass overflow-hidden p-6">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>فريق مختص • خدمة منظمة</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>دقة الأسماء والتواريخ</span>
          </div>
        </div>

        <h3 className="headline-premium mt-4 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <Separator className="my-5" />

        <div className="grid gap-3 sm:grid-cols-2">
          {bullets.map((s) => (
            <div key={s} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
              <span className="text-sm">{s}</span>
            </div>
          ))}
        </div>

        <Separator className="my-5" />

        <div className="grid gap-3">
          {steps.map((x) => (
            <div
              key={x.t}
              className="rounded-xl border bg-card/60 p-4 shadow-elegant"
            >
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Visual collage */}
      <Card className="surface-glass relative overflow-hidden p-4">
        <div className="pointer-events-none absolute inset-0 bg-hero-field opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60" />

        <div className="relative grid gap-4">
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              className="col-span-7 overflow-hidden rounded-2xl border bg-card/40"
              initial={{ opacity: 0, y: 14, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <img
                src={images[0]?.src}
                alt={images[0]?.alt}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="col-span-5 overflow-hidden rounded-2xl border bg-card/40"
              initial={{ opacity: 0, y: 18, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <img
                src={images[1]?.src}
                alt={images[1]?.alt}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <motion.div
              className="col-span-5 overflow-hidden rounded-2xl border bg-card/40"
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <img
                src={images[2]?.src}
                alt={images[2]?.alt}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
            </motion.div>

            <div className="col-span-7 grid gap-4">
              <motion.div
                className="rounded-2xl border bg-card/60 p-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="text-sm font-semibold">منهجية واضحة</div>
                <div className="mt-1 text-sm text-muted-foreground">تدقيق → ملاءمة → أبوستيل → ترجمة → ترتيب → إرسال</div>
              </motion.div>

              <motion.div
                className="rounded-2xl border bg-card/60 p-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="text-sm font-semibold">نتيجة مرتبة</div>
                <div className="mt-1 text-sm text-muted-foreground">ملف كيبان رسمي ومُحكَم من أول نظرة</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
