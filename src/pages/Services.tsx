import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { SectionShell } from "@/components/citta/SectionShell";
import { Reveal } from "@/components/citta/Reveal";
import { Card } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        lang="ar"
        dir="rtl"
        title="خدمات Citta‑Trad | الترجمة المحلفة + الأبوستيل + ترتيب الوثائق"
        description="خدمات موجهة للمغاربة فالمغرب وبإيطاليا: ترجمة محلفة/assermentée، أبوستيل، ترتيب الوثائق، وتجهيز ملفات الجنسية الإيطالية مع إرسال سريع وآمن."
        canonicalPath="/services"
        alternates={{ ar: "/ar", fr: "/fr", "x-default": "/" }}
        og={{ type: "website", imagePath: "/favicon.png" }}
      />

      <SiteHeader />
      <main>
        <SectionShell eyebrow="🧩 الخدمات" title="شنو كنقدمو ليك؟ خدمات مركّزة بكلمات مفتاحية واضحة">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="p-6 shadow-elegant">
                <h1 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">
                  خدمات الترجمة المحلفة والأبوستيل للمغرب وإيطاليا
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  هاد الصفحة كتجمع الخدمات الرئيسية ديالنا باش تسهّل على Google يفهم التخصص: <strong>الترجمة المحلفة</strong>
                  (traduction assermentée)، <strong>الأبوستيل</strong>، وتجهيز الوثائق لملفات <strong>الجنسية الإيطالية</strong>.
                </p>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="surface-glass p-6">
                <h2 className="text-lg font-semibold">روابط سريعة</h2>
                <ul className="mt-3 grid gap-2 text-sm">
                  <li>
                    <a className="text-primary underline" href="/traduction-assermentee">
                      الترجمة المحلفة / Traduction assermentée
                    </a>
                  </li>
                  <li>
                    <a className="text-primary underline" href="/apostille">
                      الأبوستيل Apostille
                    </a>
                  </li>
                  <li>
                    <a className="text-primary underline" href="/faq">
                      أسئلة شائعة FAQ
                    </a>
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[{
              t: "ترجمة محلفة",
              d: "ترجمة محلفة/assermentée للوثائق (actes, certificats) مع مراجعة دقيقة للأسماء والتواريخ.",
              href: "/traduction-assermentee",
            }, {
              t: "أبوستيل",
              d: "إجراءات الأبوستيل/التصديق حسب الحالة باش الوثائق تكون مقبولة فإيطاليا.",
              href: "/apostille",
            }, {
              t: "تجهيز ملف الجنسية",
              d: "ترتيب الوثائق، توحيد المعلومات، وتوجيه واضح باش ملف الجنسية الإيطالية يكون منظم.",
              href: "/ar",
            }].map((c) => (
              <Reveal key={c.t}>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  <div className="mt-3">
                    <a className="text-primary underline" href={c.href}>
                      قرا التفاصيل
                    </a>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </main>
    </div>
  );
}
