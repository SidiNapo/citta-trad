import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Home, Info, Phone, Workflow } from "lucide-react";
import logo from "@/assets/citta-trad-logo.png";
import { MobileNav } from "@/components/citta/MobileNav";
import { useLocation } from "react-router-dom";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: NavItem[] = [
  { href: "#home", label: "الرئيسية", icon: Home },
  { href: "#about", label: "من نحن", icon: Info },
  { href: "#service", label: "الخدمة", icon: Workflow },
  { href: "#contact", label: "تواصل معنا", icon: Phone },
];

export function SiteHeader() {
  const location = useLocation();
  const isFr = location.pathname.startsWith("/fr");
  const langHref = isFr ? "/ar" : "/fr";
  const langLabel = isFr ? "AR" : "FR";

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container h-18 md:h-16">
        {/* Mobile layout: CTA (left) • Logo (center) • Menu (right) */}
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 md:hidden">
          <Button
            asChild
            variant="hero"
            size="pill"
            className="justify-self-start rounded-full shadow-elegant h-9 px-4 text-sm"
          >
            <a href="#service" aria-label="اكتشف الخدمة">
              <FileText className="h-4 w-4" />
              <span className="font-semibold">ابدأ دابا</span>
            </a>
          </Button>

          <a href="#home" className="justify-self-center" aria-label="Citta-Trad">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="شعار Citta-Trad"
                className="h-16 w-auto"
                loading="eager"
              />
              <Button
                asChild
                variant="premium"
                size="sm"
                className="rounded-full"
                aria-label={isFr ? "Passer en arabe" : "Passer en français"}
              >
                <a href={langHref}>{langLabel}</a>
              </Button>
            </div>
          </a>

          <MobileNav items={items} className="justify-self-end" />
        </div>

        {/* Desktop layout */}
        <div className="hidden h-full items-center justify-between gap-4 md:flex">
          <a href="#home" className="flex items-center gap-3" aria-label="Citta-Trad">
            <img
              src={logo}
              alt="شعار Citta-Trad"
              className="h-11 w-auto"
              loading="eager"
            />
            <div>
              <div className="text-sm font-semibold">Citta‑Trad</div>
              <div className="text-xs text-muted-foreground">خدمة إعداد ملفات الجنسية الإيطالية</div>
            </div>
          </a>

          <nav className="flex items-center gap-1" aria-label="القائمة الرئيسية">
            {items.map((it) => (
              <Button key={it.href} asChild variant="ghost" className="rounded-full">
                <a href={it.href} className={cn("flex items-center gap-2")}>
                  <it.icon className="h-4 w-4" />
                  <span className="text-sm">{it.label}</span>
                </a>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="premium" size="sm" className="rounded-full" aria-label={isFr ? "Passer en arabe" : "Passer en français"}>
              <a href={langHref}>{isFr ? "العربية" : "Français"}</a>
            </Button>
            <Button asChild variant="hero" size="pill" className="rounded-full shadow-elegant">
              <a href="#service" aria-label="اكتشف الخدمة">
                <FileText className="h-4 w-4" />
                <span className="font-semibold">ابدأ دابا</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
