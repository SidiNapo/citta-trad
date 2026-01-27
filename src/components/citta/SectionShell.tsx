import * as React from "react";
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
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <header className="mb-10 max-w-3xl">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1 text-xs text-muted-foreground shadow-elegant">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </header>

        {children}
      </div>
    </section>
  );
}
