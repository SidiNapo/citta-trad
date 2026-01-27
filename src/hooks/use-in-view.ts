import * as React from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends Element>(
  opts: Options = { rootMargin: "-10% 0px -10% 0px", threshold: 0.12, once: true },
) {
  const { root = null, rootMargin = "-10% 0px -10% 0px", threshold = 0.12, once = true } = opts;
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const next = entries.some((e) => e.isIntersecting);
        if (next) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, root, rootMargin, threshold]);

  return { ref, inView };
}
