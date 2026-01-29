import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { SectionShell } from "@/components/citta/SectionShell";
import { Reveal } from "@/components/citta/Reveal";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "شنو هي الترجمة المحلفة؟",
    a: "هي ترجمة رسمية كتكون مقبولة فالإجراءات الإدارية. الأهم: الدقة فالأسماء والتواريخ وترتيب الوثائق.",
  },
  {
    q: "Traduction assermentée ولا traduction jurée: شنو الفرق؟",
    a: "فالغالب نفس المعنى فنية البحث. المهم هو تكون ترجمة رسمية/assermentée ومطابقة للوثيقة الأصلية.",
  },
  {
    q: "واش كاين apostille لكل الوثائق؟",
    a: "ماشي ديما. كاين وثائق كتحتاج تصديق/أبوستيل و وثائق أخرى كتحتاج مسار مختلف. كنحددوها حسب الحالة ديالك.",
  },
  {
    q: "كتخدمو مع المغرب وبإيطاليا؟",
    a: "نعم: كنستهدفو المغاربة فالمغرب وكذا المغاربة المقيمين فإيطاليا، مع إرسال آمن وتواصل واضح.",
  },
];

export default function Faq() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        lang="ar"
        dir="rtl"
        title="FAQ | أسئلة شائعة حول الترجمة المحلفة والأبوستيل — Citta‑Trad"
        description="أسئلة شائعة للمغاربة فالمغرب وبإيطاليا حول الترجمة المحلفة (traduction assermentée)، الأبوستيل، وتجهيز الوثائق لإيطاليا."
        canonicalPath="/faq"
        alternates={{ ar: "/ar", fr: "/fr", "x-default": "/" }}
        og={{ type: "website", imagePath: "/favicon.png" }}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <SiteHeader />
      <main>
        <SectionShell eyebrow="❓ FAQ" title="أسئلة شائعة (باش نجاوبوك بسرعة)">
          <Reveal>
            <Card className="p-6 shadow-elegant">
              <h1 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">
                أسئلة شائعة حول الترجمة المحلفة والأبوستيل
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                هاد الأسئلة كتغطي النية الأكثر بحثًا فالمغرب وبإيطاليا: traduction assermentée، apostille، وتجهيز الوثائق.
              </p>

              <div className="mt-6">
                <Accordion type="single" collapsible>
                  {faqs.map((f) => (
                    <AccordionItem key={f.q} value={f.q}>
                      <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-6 text-sm">
                روابط: <a className="text-primary underline" href="/traduction-assermentee">الترجمة المحلفة</a> •{" "}
                <a className="text-primary underline" href="/apostille">الأبوستيل</a> •{" "}
                <a className="text-primary underline" href="/services">الخدمات</a>
              </div>
            </Card>
          </Reveal>
        </SectionShell>
      </main>
    </div>
  );
}
