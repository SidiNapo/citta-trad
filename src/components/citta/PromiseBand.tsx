import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";
type Props = {
  className?: string;
};
export function PromiseBand({
  className
}: Props) {
  const reduced = useReducedMotion();
  return <section aria-label="وعد Citta‑Trad" className={className}>
      <div className="container py-10 md:py-14">
        <motion.div initial={reduced ? undefined : {
        opacity: 0,
        y: 18,
        filter: "blur(10px)"
      }} whileInView={reduced ? undefined : {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }} viewport={{
        once: true,
        amount: 0.35
      }} transition={reduced ? undefined : {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1]
      }}>
          <Card className="surface-glass relative overflow-hidden p-6 md:p-8">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{
            background: "radial-gradient(700px circle at 15% 20%, hsl(var(--primary) / 0.16), transparent 60%), radial-gradient(700px circle at 85% 60%, hsl(var(--accent) / 0.14), transparent 60%), linear-gradient(180deg, transparent, hsl(var(--background) / 0.25))"
          }} />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground">وعد Citta‑Trad</div>
                </div>

                {!reduced && <motion.div aria-hidden className="h-2 w-40 overflow-hidden rounded-full bg-secondary" initial={{
                opacity: 0,
                scaleX: 0.7
              }} whileInView={{
                opacity: 1,
                scaleX: 1
              }} viewport={{
                once: true,
                amount: 0.4
              }} transition={{
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1]
              }} style={{
                transformOrigin: "right"
              }}>
                    <motion.div className="h-full w-full bg-gradient-to-l from-primary via-background to-accent" initial={{
                  x: "-35%"
                }} animate={{
                  x: ["-35%", "0%", "-15%"]
                }} transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: [0.2, 0.8, 0.2, 1]
                }} />
                  </motion.div>}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                الخدمة ديالك بلا ما تحرك من دارك: كنراجعو الوثائق، كنصلحو المعطيات، كنجهزو الملف بحال اللي غادي يتقدم لجهة رسمية.
              </p>

              <Separator className="my-6" />

              <div className="grid gap-3 md:grid-cols-3">
                {["حنا معاك خطوة بخطوة", "غير تهنى، كلشي عندنا", "الوقت ديالك محفوظ، الخدمة بلا صداع"].map((t, idx) => <motion.div key={t} initial={reduced ? undefined : {
                opacity: 0,
                y: 10
              }} whileInView={reduced ? undefined : {
                opacity: 1,
                y: 0
              }} viewport={{
                once: true,
                amount: 0.5
              }} transition={reduced ? undefined : {
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.2, 0.8, 0.2, 1]
              }} className="flex items-start gap-2 rounded-xl border bg-card/60 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <div className="text-sm font-semibold">{t}</div>
                  </motion.div>)}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>;
}