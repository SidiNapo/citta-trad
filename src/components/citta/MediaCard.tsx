import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  align?: "left" | "right";
};

export function MediaCard({ imageSrc, imageAlt, title, description, className, align = "left" }: Props) {
  return (
    <Card className={cn("surface-glass overflow-hidden", className)}>
      <div className={cn("grid gap-0", "lg:grid-cols-2")}> 
        <div className={cn("relative", align === "right" ? "lg:order-2" : "lg:order-1")}>
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="h-64 w-full object-cover lg:h-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
        </div>

        <div className={cn("p-6", align === "right" ? "lg:order-1" : "lg:order-2")}>
          <h3 className="headline-premium text-xl font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}
