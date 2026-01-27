import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
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

export function HeroSlideshow({ images, intervalMs = 8000, className }: Props) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (reduced || images.length <= 1) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => window.clearInterval(t);
  }, [images.length, intervalMs, reduced]);

  return (
    <div className={cn("absolute inset-0", className)} aria-hidden>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* vignette + readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background/70" />
      <div className="absolute inset-0 bg-hero-field" />
    </div>
  );
}
