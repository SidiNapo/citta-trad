import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HeroBrandMark } from "@/components/citta/HeroBrandMark";
import { HeroSlideshow } from "@/components/citta/HeroSlideshow";
type HeroImage = {
  src: string;
  alt: string;
};

export type HeroFeatureKey = "organize" | "translate" | "ship";
type Props = {
  images: HeroImage[];
  logoSrc: string;
  className?: string;
  onFeatureSelect?: (key: HeroFeatureKey) => void;
};
export function HeroSection({
  images,
  logoSrc,
  className,
  onFeatureSelect
}: Props) {
  const reduced = useReducedMotion();
  const heroRef = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    const el = heroRef.current;
    if (!el || reduced) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * 100;
      const y = (e.clientY - r.top) / r.height * 100;
      el.style.setProperty("--mx", `${x.toFixed(2)}%`);
      el.style.setProperty("--my", `${y.toFixed(2)}%`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduced]);
  return <section id="home" ref={n => {
    heroRef.current = n;
  }} className={cn("relative isolate overflow-hidden", className)} aria-label="الواجهة الرئيسية">
      <div className="relative min-h-[96vh]">
        <HeroSlideshow images={images} intervalMs={5000} className="fade-mask" />

        {/* Strong cinematic overlays (token-based) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]" style={{
        background: "radial-gradient(800px circle at var(--mx, 50%) var(--my, 40%), hsl(var(--background) / 0.20), transparent 55%), linear-gradient(to bottom, hsl(var(--background) / 0.25), hsl(var(--background) / 0.70) 65%, hsl(var(--background) / 0.92))"
      }} />

        {!reduced && <motion.div aria-hidden className="pointer-events-none absolute -left-24 top-24 z-[1] h-72 w-72 rounded-full blur-3xl" style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.22), transparent 60%)"
      }} animate={{
        x: [0, 40, 0],
        y: [0, -18, 0],
        opacity: [0.45, 0.8, 0.45]
      }} transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }} />}

        {!reduced && <motion.div aria-hidden className="pointer-events-none absolute -right-24 bottom-24 z-[1] h-72 w-72 rounded-full blur-3xl" style={{
        background: "radial-gradient(circle, hsl(var(--accent) / 0.20), transparent 60%)"
      }} animate={{
        x: [0, -40, 0],
        y: [0, 18, 0],
        opacity: [0.35, 0.75, 0.35]
      }} transition={{
        duration: 7.6,
        repeat: Infinity,
        ease: "easeInOut"
      }} />}

        <div className="relative z-10">
          <div className="container pt-20 md:pt-28">
            <div className="mx-auto grid max-w-5xl items-center gap-10">
              <motion.div initial={reduced ? undefined : {
              opacity: 0,
              y: 24,
              filter: "blur(10px)"
            }} animate={reduced ? undefined : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }} transition={reduced ? undefined : {
              duration: 0.9,
              ease: [0.2, 0.8, 0.2, 1]
             }} className="mx-auto max-w-3xl text-center">
                {/* Brand */}
                <div className="mb-6 flex justify-center">
                  <HeroBrandMark logoSrc={logoSrc} tagline="" logoClassName="h-16 sm:h-20 md:h-24" nameClassName="text-lg sm:text-xl md:text-2xl" className="px-5 py-4"
                // make it clearly bigger inside hero
                />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Badge className="rounded-full" variant="secondary">
                    خدمة شاملة للمغاربة المقيمين بإيطاليا
                  </Badge>
                  <Badge className="rounded-full" variant="outline">
                    تنظيم • ترجمة محلفة • أبوستيل • إرسال
                  </Badge>
                </div>

                <h1 className="headline-premium mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                  <span className="block">بوابتك نحو الجنسية الإيطالية</span>
                </h1>

                <p className="mt-4 text-lg leading-relaxed md:text-xl text-muted-foreground">
                  خدمة شاملة للمغاربة المقيمين بإيطاليا
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Button asChild variant="hero" size="pill" className="gap-2">
                    <a href="#contact" aria-label="تواصل معنا الآن">
                      
                      تواصل معنا
                    </a>
                  </Button>

                  <Button asChild variant="premium" size="pill" className="gap-2 surface-glass">
                    <a href="#service" aria-label="تفاصيل الخدمة">
                      <span>داباشنو كنقدمّو؟</span>
                      <span aria-hidden className="text-muted-foreground">
                        •
                      </span>
                      <span className="font-semibold">الخدمة كاملة</span>
                    </a>
                  </Button>
                </div>

                {/* Micro-features: clean, small, creative */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[{
                  title: "تنظيم احترافي",
                  desc: "ترتيب الملف خطوة بخطوة"
                }, {
                  title: "ترجمة محلفة",
                  desc: "خالية من الأخطاء"
                }, {
                  title: "إرسال آمن",
                  desc: "بالبريد السريع"
                }].map((f, idx) => <motion.button type="button" key={f.title} aria-label={`تفاصيل: ${f.title}`} onClick={() => onFeatureSelect?.(([
                "organize",
                "translate",
                "ship"
              ][idx] as HeroFeatureKey))} className="h-full text-right sm:text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" initial={reduced ? undefined : {
                  opacity: 0,
                  y: 14,
                  scale: 0.98
                }} animate={reduced ? undefined : {
                  opacity: 1,
                  y: 0,
                  scale: 1
                }} whileHover={reduced ? undefined : {
                  y: -6,
                  scale: 1.02
                }} whileTap={reduced ? undefined : {
                  scale: 0.99
                }} transition={reduced ? undefined : {
                  duration: 0.6,
                  delay: 0.15 + idx * 0.08,
                  ease: [0.2, 0.8, 0.2, 1]
                }}>
                      <Card className="surface-glass group relative h-full overflow-hidden p-4 text-right transition-[transform,box-shadow] duration-300 hover:shadow-elegant sm:text-center">
                        {/* premium gradient border illusion */}
                        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80" style={{
                      background: "linear-gradient(135deg, hsl(var(--primary) / 0.16), transparent 40%), linear-gradient(315deg, hsl(var(--accent) / 0.14), transparent 45%)"
                    }} />

                        {/* tricolore ribbon */}
                        <div aria-hidden className="pointer-events-none absolute -top-10 left-0 right-0 h-14 opacity-90" style={{
                      background: "linear-gradient(90deg, hsl(var(--primary) / 0.40), hsl(var(--background) / 0.10), hsl(var(--accent) / 0.35))"
                    }} />

                        <div className="relative">
                          <div className="flex items-start justify-between gap-3 sm:flex-col sm:items-center sm:justify-center sm:gap-2">
                            <div>
                              <div className="text-sm font-semibold text-foreground">{f.title}</div>
                              <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                            </div>

                            <div className="shrink-0 sm:order-first">
                              <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                                <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{
                              background: "hsl(var(--primary))"
                            }} />
                                <span>{String(idx + 1).padStart(2, "0")}</span>
                              </div>
                            </div>
                          </div>

                          <div aria-hidden className="mt-3 h-1 w-full overflow-hidden rounded-full bg-secondary">
                            <div className="h-full w-full translate-x-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                          background: "linear-gradient(to left, hsl(var(--primary)), hsl(var(--background)), hsl(var(--accent)))"
                        }} />
                          </div>
                        </div>
                      </Card>
                    </motion.button>)}
                </div>
              </motion.div>

              {/* Right side: elegant “promise” preview card (kept compact) */}
              <motion.div className="mx-auto w-full max-w-xl" initial={reduced ? undefined : {
              opacity: 0,
              y: 26,
              scale: 0.98,
              filter: "blur(10px)"
            }} animate={reduced ? undefined : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)"
            }} transition={reduced ? undefined : {
              duration: 0.85,
              delay: 0.1,
              ease: [0.2, 0.8, 0.2, 1]
            }}>
                <Card className="surface-glass p-6 text-center">
                  <div className="text-sm font-semibold">وعد Citta‑Trad</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    الخدمة ديالك بلا ما تحرك من دارك: كنراجعو الوثائق، كنصلحو المعطيات، كنجهزو الملف بحال اللي غادي يتقدم
                    لجهة رسمية… ومن بعد كنرسلوه بأمان.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}