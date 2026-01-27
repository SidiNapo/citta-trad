import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return;
    const onChange = () => setReduced(Boolean(mql.matches));
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export function HeroVideo({ src, poster, className }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.3]);

  return (
    <div ref={ref} className={cn("absolute inset-0", className)} aria-hidden>
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        {!reduced ? (
          <video
            className="absolute inset-0 h-full w-full object-contain md:object-cover"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0 bg-hero-field" />
        )}

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/80" />
        <div className="absolute inset-0 hero-noise" />
        <div className="absolute inset-0 bg-hero-field opacity-70" />
      </motion.div>
    </div>
  );
}
