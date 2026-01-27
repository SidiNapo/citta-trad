import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type MobileNavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function MobileNav({ items, className }: { items: MobileNavItem[]; className?: string }) {
  return (
    <div className={cn("md:hidden", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full shadow-elegant"
            aria-label="فتح القائمة"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="p-0">
          <div className="p-6">
            <div className="text-base font-semibold">القائمة</div>
            <div className="mt-1 text-sm text-muted-foreground">تنقل سريع داخل الصفحة</div>
          </div>
          <Separator />

          <nav className="p-3" aria-label="روابط الموبايل">
            <ul className="grid gap-1">
              {items.map((it) => (
                <li key={it.href}>
                  <SheetClose asChild>
                    <a
                      href={it.href}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <it.icon className="h-4 w-4" />
                      <span>{it.label}</span>
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
