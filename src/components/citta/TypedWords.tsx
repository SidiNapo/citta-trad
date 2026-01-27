import * as React from "react";

type Props = {
  words: string[];
  className?: string;
  typingMs?: number;
  deletingMs?: number;
  holdMs?: number;
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

export function TypedWords({
  words,
  className,
  // kept for backwards-compatibility; animation is intentionally disabled
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  typingMs = 34,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deletingMs = 22,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  holdMs = 1100,
}: Props) {
  // Animation removed by request: keep a stable, premium static line in the hero.
  // Still respects reduced motion and avoids any client-side timers.
  // (We keep usePrefersReducedMotion to avoid future regressions if animation is reintroduced.)
  usePrefersReducedMotion();
  const text = React.useMemo(() => words[0] ?? "", [words]);

  return (
    <span className={className}>
      <span>{text}</span>
    </span>
  );
}
