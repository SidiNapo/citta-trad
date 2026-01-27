import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({ children, className, as = "div" }: Props) {
  const MotionComp = React.useMemo(() => {
    const m: any = motion as any;
    return (m[as] ?? m.div) as React.ComponentType<any>;
  }, [as]);

  return (
    <MotionComp
      className={cn(className)}
      initial={{ opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </MotionComp>
  );
}
