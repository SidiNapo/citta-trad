import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { HeroFeatureKey } from "@/components/citta/HeroSection";

import docsImg from "@/assets/section-documents.jpg";
import translationImg from "@/assets/section-translation.jpg";
import courierImg from "@/assets/section-courier.jpg";

type Item = {
  key: HeroFeatureKey;
  title: string;
  micro: string;
  imageSrc: string;
  imageAlt: string;
};

const ITEMS: Item[] = [
  {
    key: "organize",
    title: "تنظيم احترافي",
    micro: "كنرتّبو الملف خطوة بخطوة باش يكون جاهز ومقبول بلا رجوع ولا تصحيح.",
    imageSrc: docsImg,
    imageAlt: "وثائق مرتبة بعناية داخل ملف",
  },
  {
    key: "translate",
    title: "ترجمة محلفة",
    micro: "ترجمة محلفة + مراجعة دقيقة للأسماء والتواريخ باش تكون مطابقة للوثائق الأصلية.",
    imageSrc: translationImg,
    imageAlt: "ترجمة وثائق رسمية",
  },
  {
    key: "ship",
    title: "إرسال آمن",
    micro: "كنرسلو الوثائق بالبريد السريع وبطريقة آمنة مع تتبّع واضح حتى توصل.",
    imageSrc: courierImg,
    imageAlt: "إرسال وثائق بالبريد السريع",
  },
];

type Props = {
  selected: HeroFeatureKey;
  onSelect: (key: HeroFeatureKey) => void;
  className?: string;
};

export function ServiceQuickFocus({ selected, onSelect, className }: Props) {
  const reduced = useReducedMotion();
  const current = React.useMemo(() => ITEMS.find((i) => i.key === selected) ?? ITEMS[0], [selected]);

  return (
    <div className={cn("mx-auto w-full max-w-4xl", className)}>
      {/* compact tab row (centered) */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {ITEMS.map((it) => {
          const active = it.key === selected;
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => onSelect(it.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                active ? "bg-primary text-primary-foreground" : "bg-card/60 text-foreground hover:bg-card",
              )}
              aria-current={active ? "true" : undefined}
            >
              {it.title}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={reduced ? undefined : { opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={reduced ? undefined : { opacity: 0, y: -10, scale: 0.99, filter: "blur(10px)" }}
          transition={reduced ? undefined : { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-4"
        >
          <Card className="surface-glass overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative">
                <img
                  src={current.imageSrc}
                  alt={current.imageAlt}
                  loading="lazy"
                  className="h-44 w-full object-cover md:h-full"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--background) / 0.45), transparent 55%), radial-gradient(500px circle at 30% 30%, hsl(var(--primary) / 0.18), transparent 55%)",
                  }}
                />
              </div>

              <div className="p-5 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>تفاصيل سريعة</span>
                </div>

                <h3 className="headline-premium mt-3 text-xl font-semibold">{current.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.micro}</p>

                <div aria-hidden className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
