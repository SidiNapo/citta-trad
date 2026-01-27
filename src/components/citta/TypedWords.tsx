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
  typingMs = 34,
  deletingMs = 22,
  holdMs = 1100,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [phase, setPhase] = React.useState<"typing" | "holding" | "deleting">("typing");

  const activeRef = React.useRef(true);
  React.useEffect(() => {
    activeRef.current = true;
    return () => {
      activeRef.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }

    const current = words[wordIndex] ?? "";
    let t: number | undefined;

    // Guard against StrictMode double-invocation timing overlaps
    const safeSetText = (v: string) => {
      if (activeRef.current) setText(v);
    };
    const safeSetPhase = (v: "typing" | "holding" | "deleting") => {
      if (activeRef.current) setPhase(v);
    };
    const safeSetWordIndex = (fn: (i: number) => number) => {
      if (activeRef.current) setWordIndex(fn);
    };

    if (phase === "typing") {
      if (text.length < current.length) {
        t = window.setTimeout(() => safeSetText(current.slice(0, text.length + 1)), typingMs);
      } else {
        safeSetPhase("holding");
      }
    } else if (phase === "holding") {
      t = window.setTimeout(() => safeSetPhase("deleting"), holdMs);
    } else {
      if (text.length > 0) {
        t = window.setTimeout(() => safeSetText(text.slice(0, -1)), deletingMs);
      } else {
        safeSetPhase("typing");
        safeSetWordIndex((i) => (i + 1) % Math.max(words.length, 1));
      }
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [deletingMs, holdMs, phase, reduced, text, typingMs, wordIndex, words]);

  return (
    <span className={className}>
      <span>{text}</span>
      {!reduced && (
        <span
          aria-hidden
          className="inline-block w-[0.6ch] translate-y-[0.1em] animate-[blink_1s_steps(2,end)_infinite]"
          style={{
            background: "currentColor",
            height: "1.05em",
            marginInlineStart: "0.1em",
          }}
        />
      )}
      <style>{"@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}"}</style>
    </span>
  );
}
