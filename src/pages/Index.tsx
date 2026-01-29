import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, MessageCircle, Send, ShieldCheck, Timer } from "lucide-react";
import { Seo } from "@/components/Seo";
import heroVenice from "@/assets/hero-venice.jpg";
import heroRome from "@/assets/hero-rome.jpg";
import heroFlorence from "@/assets/hero-florence.jpg";
import heroMilan from "@/assets/hero-milan.jpg";
import heroAmalfi from "@/assets/hero-amalfi.jpg";
import heroTuscany from "@/assets/hero-tuscany.jpg";
import aboutOfficeImg from "@/assets/about-office.jpg";
import aboutDocsImg from "@/assets/about-documents.jpg";
import apostilleImg from "@/assets/section-apostille.jpg";
import { AboutShowcase } from "@/components/citta/AboutShowcase";
import { Reveal } from "@/components/citta/Reveal";
import { ScrollArrows } from "@/components/citta/ScrollArrows";
import { SectionShell } from "@/components/citta/SectionShell";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { WhatsappFloat } from "@/components/citta/WhatsappFloat";
import logo from "@/assets/citta-trad-logo.png";
import { HeroSection, type HeroFeatureKey } from "@/components/citta/HeroSection";
import { PromiseBand } from "@/components/citta/PromiseBand";
import { ServiceQuickFocus } from "@/components/citta/ServiceQuickFocus";
const WHATSAPP_PHONE = "+212725989892";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في الاستفادة من خدمة إعداد ملفات الجنسية الإيطالية.";

export function HomeLanding({ canonicalPath = "/" }: { canonicalPath?: string }) {
  const [serviceFocus, setServiceFocus] = React.useState<HeroFeatureKey>("organize");
  const serviceFocusRef = React.useRef<HTMLDivElement | null>(null);
  const onHeroFeatureSelect = React.useCallback((key: HeroFeatureKey) => {
    setServiceFocus(key);
    // redirect داخل نفس الصفحة + scroll
    window.history.replaceState(null, "", "#service");
    window.setTimeout(() => {
      serviceFocusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 50);
  }, []);
  const heroImages = React.useMemo(() => [{
    src: heroVenice,
    alt: "البندقية – إيطاليا (قنوات وجسور)"
  }, {
    src: heroRome,
    alt: "روما – إيطاليا (معالم تاريخية)"
  }, {
    src: heroFlorence,
    alt: "فلورنسا – إيطاليا (منظر بانورامي)"
  }, {
    src: heroMilan,
    alt: "ميلانو – إيطاليا (أفق المدينة)"
  }, {
    src: heroAmalfi,
    alt: "ساحل أمالفي – إيطاليا (البحر والجبال)"
  }, {
    src: heroTuscany,
    alt: "توسكانا – إيطاليا (تلال وسرو)"
  }], []);
  return <div className="min-h-screen bg-background">
      <Seo
        lang="ar"
        dir="rtl"
        title="Citta-Trad | الترجمة المحلفة + إعداد ملفات الجنسية الإيطالية"
        description="Citta‑Trad كتعاون المغاربة فالمغرب وبإيطاليا: ترجمة محلفة/assermentée، أبوستيل، وتجهيز ملفات الجنسية الإيطالية بدقة وإرسال آمن."
        canonicalPath={canonicalPath}
        alternates={{
          ar: "/ar",
          fr: "/fr",
          "x-default": "/"
        }}
        og={{
          type: "website",
          imagePath: "/favicon.png"
        }}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Citta‑Trad",
            url: "https://citta-trad.com/",
            logo: "https://citta-trad.com/favicon.png"
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Citta‑Trad",
            url: "https://citta-trad.com/"
          }
        ]}
      />
      <SiteHeader />

      <main>
        {/* HERO (rebuilt) */}
        <HeroSection images={heroImages} logoSrc={logo} onFeatureSelect={onHeroFeatureSelect} />

        {/* PROMISE (under hero) */}
        <PromiseBand />

        {/* ABOUT */}
        <SectionShell id="about" eyebrow="ℹ️ من نحن" title="نحن فريق مختص في الاستشارة القانونية للحصول على الجنسية الإيطالية">
          <Reveal>
            <AboutShowcase title="علاش Citta‑Trad؟" description="حنا فريق مختص فالمساعدة الإدارية والاستشارة، كنواكب المغاربة المقيمين بإيطاليا فإعداد ملفات الجنسية الإيطالية: جمع الوثائق، ترتيبها، ترجمتها ترجمة محلفة، والمصادقة عليها، مع إرسالها مباشرة إلى إيطاليا بكل أمان واحترافية. لأن إعداد ملف الجنسية الإيطالية كيحتاج دقة فالأسماء، التواريخ، وترتيب الوثائق. أي خطأ بسيط يقدر يضيع الوقت ديالك." bullets={["حنا معاك خطوة بخطوة", "غير تهنى، كلشي عندنا", "الخدمة ديالك بلا صداع راس", "تنسيق واضح ومواعيد محترمة"]} steps={[{
            t: "تدقيق المعطيات",
            d: "كنطابقو المعلومات الشخصية مع الوثائق"
          }, {
            t: "مرافقة احترافية",
            d: "تواصل واضح وشفاف"
          }, {
            t: "نتيجة مرتبة",
            d: "ملف جاهز باش يمشي للمرحلة الموالية"
          }]} images={[{
            src: aboutOfficeImg,
            alt: "مكتب إيطالي راقي مع وثائق رسمية"
          }, {
            src: apostilleImg,
            alt: "توثيق وأبوستيل للوثائق بشكل رسمي"
          }, {
            src: aboutDocsImg,
            alt: "ملف جنسية إيطالية مرتب بختم ذهبي"
          }]} />
          </Reveal>
        </SectionShell>

        {/* SERVICE */}
        <SectionShell id="service" eyebrow="🗂️ الخدمة" title="إعداد ملفات الجنسية الإيطالية — الخدمة كاملة من الألف للياء">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <Card className="p-6 shadow-elegant">
              <h3 className="text-lg font-semibold">🔹 تشمل الخدمة:</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {["جمع الوثائق المطلوبة", "تصحيحها وملاءمتها للمعلومات الشخصية", "المصادقة عليها بشهادة الأبوستيل لدى العمالة", "ترتيب الملف", "ترجمة الوثائق ترجمة محلفة خالية من الأخطاء", "المصادقة على الترجمة بشهادة الأبوستيل بالمحكمة الابتدائية", "إعادة ترتيب الملف", "إرسال الوثائق مباشرة للزبون عبر البريد السريع"].map(item => <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>)}
              </ul>

              <Separator className="my-6" />
              <div className="grid gap-3 sm:grid-cols-3">
                {["الخدمة ديالك بلا ما تحرك من دارك", "كلشي بين يديك غير بكليك واحد", "الوقت ديالك محفوظ، الخدمة بلا صداع"].map(t => <div key={t} className="rounded-xl border bg-card p-4">
                      <div className="text-sm font-semibold">{t}</div>
                    </div>)}
              </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="surface-glass p-6">
              <h3 className="text-lg font-semibold">كيفاش كنخدمو؟ (روتين واضح)</h3>
              <ol className="mt-4 space-y-3">
                {[{
                  t: "التشخيص",
                  d: "كنحددو شنو ناقص وشنو خاص يتصلّح"
                }, {
                  t: "التجهيز",
                  d: "ملاءمة الوثائق + ترتيب منطقي"
                }, {
                  t: "التوثيق",
                  d: "الأبوستيل حيث لازم"
                }, {
                  t: "الترجمة",
                  d: "ترجمة محلفة + مراجعة"
                }, {
                  t: "التسليم",
                  d: "إرسال سريع وآمن"
                }].map((s, idx) => <li key={s.t} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{s.t}</div>
                      <div className="text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </li>)}
              </ol>
              <Separator className="my-5" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                هاد الصفحة معمولة باش تعاون الناس يفهمو الخدمة، وفيها كلمات مفتاحية مرتبطة بملف الجنسية الإيطالية، الترجمة المحلفة، الأبوستيل، وتجهيز الوثائق للمغاربة المقيمين بإيطاليا. 
              </p>
              </Card>
            </Reveal>
          </div>

          {/* Focus details (small + modern) */}
          <div ref={n => {
          serviceFocusRef.current = n;
        }} className="mt-10">
            <ServiceQuickFocus selected={serviceFocus} onSelect={setServiceFocus} />
          </div>
        </SectionShell>

        {/* CONTACT */}
        <SectionShell id="contact" eyebrow="📞 تواصل معنا" title="تواصل معنا — واتساب سريع وواضح">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="surface-glass relative overflow-hidden p-6">
                {/* subtle accent */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      تواصل مباشر وسريع — كنردّو عليك بأوضح طريقة وبلا تعقيد.
                    </p>
                  </div>

                  <div className="hidden shrink-0 sm:flex">
                    <div className="rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold">
                      ردّ سريع
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {[{
                  icon: Timer,
                  t: "سريع"
                }, {
                  icon: ShieldCheck,
                  t: "آمن"
                }, {
                  icon: Send,
                  t: "مباشر"
                }].map(it => <div key={it.t} className="flex items-center gap-2 rounded-xl border bg-background/50 px-3 py-2">
                      <it.icon className="h-4 w-4" />
                      <span className="text-xs font-semibold">{it.t}</span>
                    </div>)}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button asChild variant="whatsapp" size="pill" className="w-full justify-center gap-2 sm:w-auto">
                    <a href={`https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer" aria-label="فتح واتساب للتواصل">
                      <MessageCircle className="h-4 w-4" />
                      فتح واتساب الآن
                    </a>
                  </Button>

                  
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="surface-glass p-6">
              <h3 className="text-lg font-semibold">⚖️ نقطة قانونية</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                هذه الخدمة تقتصر على المساعدة الإدارية، جمع الوثائق وترجمتها حصريًا في إطار ملفات الجنسية الإيطالية، ولا
                تُعتبر استشارة قانونية.
              </p>
              <Separator className="my-5" />
              <h3 className="text-lg font-semibold">🔒 حماية الفكرة</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                © 2026 – جميع الحقوق محفوظة. يحظر نسخ أو إعادة استعمال محتوى هذه الصفحة بدون إذن.
              </p>
              </Card>
            </Reveal>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t py-10">
        <div className="container">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <div>© 2026 – Citta‑Trad</div>
            <div>إعداد ملفات الجنسية الإيطالية • خدمة إدارية للمغاربة المقيمين بإيطاليا</div>
          </div>
        </div>
      </footer>

      {/* Floating UX */}
      <WhatsappFloat phoneE164={WHATSAPP_PHONE} message={WHATSAPP_MESSAGE} />
      <ScrollArrows />
    </div>;
};

const Index = () => {
  return <HomeLanding canonicalPath="/" />;
};

export default Index;