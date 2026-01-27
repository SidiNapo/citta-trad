import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({ children, className, as = "div" }: Props) {
  const Comp = as as any;
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Comp ref={ref} className={cn("reveal", className)} data-revealed={inView ? "true" : "false"}>
      {children}
    </Comp>
  );
}
