import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { SectionShell } from "@/components/citta/SectionShell";
import { Reveal } from "@/components/citta/Reveal";
import { Card } from "@/components/ui/card";

export default function Apostille() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        lang="ar"
        dir="rtl"
        title="الأبوستيل Apostille | تصديق الوثائق لإيطاليا — Citta‑Trad"
        description="الأبوستيل Apostille للمغاربة فالمغرب وبإيطاليا: توجيه واضح لتصديق الوثائق قبل استعمالها فإيطاليا + تنظيم الملف مع الترجمة المحلفة." 
        canonicalPath="/apostille"
        alternates={{ ar: "/ar", fr: "/fr", "x-default": "/" }}
        og={{ type: "website", imagePath: "/favicon.png" }}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Apostille / الأبوستيل",
            areaServed: ["MA", "IT"],
            provider: { "@type": "Organization", name: "Citta‑Trad" },
          },
        ]}
      />

      <SiteHeader />
      <main>
        <SectionShell eyebrow="✅ توثيق" title="الأبوستيل: باش الوثائق تولّي مقبولة فإيطاليا">
          <Reveal>
            <Card className="p-6 shadow-elegant">
              <h1 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">
                Apostille Maroc — تصديق الوثائق قبل الاستعمال فإيطاليا
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                الأبوستيل هو خطوة كتخلي وثيقتك “معترف بها” فبلد آخر فبعض الحالات. حنا كنوجهوك شنو كيتصدق، فين، وشنو خاصو
                يترتب فالدوسيي ديالك باش يمشي لإيطاليا بلا تعقيدات.
              </p>
              <div className="mt-5 text-sm">
                روابط: <a className="text-primary underline" href="/traduction-assermentee">الترجمة المحلفة</a> •{" "}
                <a className="text-primary underline" href="/services">الخدمات</a> •{" "}
                <a className="text-primary underline" href="/faq">FAQ</a>
              </div>
            </Card>
          </Reveal>
        </SectionShell>
      </main>
    </div>
  );
}
