import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Home, Info, Phone, Workflow } from "lucide-react";
import logo from "@/assets/citta-trad-logo.png";
import { MobileNav } from "@/components/citta/MobileNav";

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
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container h-18 md:h-16">
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3 md:flex md:justify-between">
          {/* Mobile: left spacer for perfect centering */}
          <div className="hidden md:block" />

          {/* Logo: centered on mobile, start on desktop */}
          <a href="#home" className="justify-self-center md:justify-self-auto" aria-label="Citta-Trad">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="شعار Citta-Trad"
                className="h-16 w-auto sm:h-12 md:h-11"
                loading="eager"
              />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold">Citta‑Trad</div>
                <div className="text-xs text-muted-foreground">خدمة إعداد ملفات الجنسية الإيطالية</div>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="القائمة الرئيسية">
            {items.map((it) => (
              <Button key={it.href} asChild variant="ghost" className="rounded-full">
                <a href={it.href} className={cn("flex items-center gap-2")}>
                  <it.icon className="h-4 w-4" />
                  <span className="text-sm">{it.label}</span>
                </a>
              </Button>
            ))}
          </nav>

          {/* Right side actions (mobile stays right, never overlaps logo) */}
          <div className="flex items-center justify-self-end gap-2">
            <MobileNav items={items} />
            <Button
              asChild
              variant="hero"
              size="pill"
              className="rounded-full shadow-elegant h-9 px-4 text-sm md:h-11 md:px-6 md:text-base"
            >
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
