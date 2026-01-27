import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Home, Info, Phone, Workflow } from "lucide-react";
import logo from "@/assets/citta-trad-logo.png";

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
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Citta-Trad">
          <img src={logo} alt="شعار Citta-Trad" className="h-10 w-auto" loading="eager" />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">Citta‑Trad</div>
            <div className="text-xs text-muted-foreground">خدمة إعداد ملفات الجنسية الإيطالية</div>
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

        <div className="flex items-center gap-2">
          <Button asChild variant="premium" size="pill" className="rounded-full">
            <a href="#service" aria-label="اكتشف الخدمة">
              <FileText className="h-4 w-4" />
              <span className="font-semibold">ابدأ دابا</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
