import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { SectionShell } from "@/components/citta/SectionShell";
import { Reveal } from "@/components/citta/Reveal";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SwornTranslation() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        lang="ar"
        dir="rtl"
        title="الترجمة المحلفة | Traduction assermentée للمغرب وإيطاليا — Citta‑Trad"
        description="خدمة الترجمة المحلفة (traduction assermentée) للمغاربة فالمغرب وبإيطاليا: ترجمة دقيقة للوثائق + مراجعة الأسماء والتواريخ + توجيه للملف الموجّه لإيطاليا."
        canonicalPath="/traduction-assermentee"
        alternates={{ ar: "/ar", fr: "/fr", "x-default": "/" }}
        og={{ type: "website", imagePath: "/favicon.png" }}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction assermentée / الترجمة المحلفة",
            areaServed: ["MA", "IT"],
            provider: { "@type": "Organization", name: "Citta‑Trad" },
          },
        ]}
      />

      <SiteHeader />
      <main>
        <SectionShell eyebrow="⚖️ خدمة أساسية" title="الترجمة المحلفة (Traduction assermentée) — بلا أخطاء">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="p-6 shadow-elegant">
                <h1 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">
                  ترجمة محلفة للوثائق الموجهة لإيطاليا
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  كنخدمو على وثائق بحال: عقود الازدياد، عقود الزواج، السوابق، الشهادات… مع تدقيق فالأسماء والتواريخ باش ما
                  يكون حتى خطأ يقدر يعرقل الملف.
                </p>
                <Separator className="my-6" />
                <h2 className="text-lg font-semibold">Keywords FR (باش نزيدو وضوح لنية البحث)</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <strong>Traduction assermentée</strong>, <strong>traduction jurée</strong>, documents pour l’Italie,
                  apostille, dossier nationalité italienne marocains.
                </p>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="surface-glass p-6">
                <h2 className="text-lg font-semibold">شنو كنضمنو؟</h2>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <li>• مطابقة الأسماء: العربية/اللاتينية</li>
                  <li>• تدقيق التواريخ والأماكن</li>
                  <li>• ترتيب منطقي للوثائق قبل الإرسال</li>
                  <li>• تواصل واضح (WhatsApp)</li>
                </ul>
                <div className="mt-5 text-sm">
                  زيد قرا: <a className="text-primary underline" href="/apostille">الأبوستيل</a> •{" "}
                  <a className="text-primary underline" href="/services">الخدمات</a> •{" "}
                  <a className="text-primary underline" href="/faq">FAQ</a>
                </div>
              </Card>
            </Reveal>
          </div>
        </SectionShell>
      </main>
    </div>
  );
}
