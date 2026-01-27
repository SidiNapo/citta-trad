import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Send, ShieldCheck, Sparkles } from "lucide-react";

import venice from "@/assets/hero-venice.jpg";
import rome from "@/assets/hero-rome.jpg";
import greece from "@/assets/hero-greece.jpg";

import { HeroSlideshow } from "@/components/citta/HeroSlideshow";
import { ScrollArrows } from "@/components/citta/ScrollArrows";
import { SectionShell } from "@/components/citta/SectionShell";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { TypedWords } from "@/components/citta/TypedWords";
import { WhatsappFloat } from "@/components/citta/WhatsappFloat";

const WHATSAPP_PHONE = "+212725989892";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في الاستفادة من خدمة إعداد ملفات الجنسية الإيطالية.";

const Index = () => {
  const heroRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x.toFixed(2)}%`);
      el.style.setProperty("--my", `${y.toFixed(2)}%`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section
          id="home"
          ref={(n) => {
            heroRef.current = n;
          }}
          className="relative overflow-hidden"
          aria-label="الواجهة الرئيسية"
        >
          <div className="relative min-h-[92vh]">
            <HeroSlideshow
              images={[
                { src: venice, alt: "قناة فينيسيا وقت الغروب" },
                { src: rome, alt: "الكولوسيوم روما وقت الغروب" },
                { src: greece, alt: "سانتوريني اليونان بإطلالة بحرية" },
              ]}
              intervalMs={8000}
            />

            <div className="relative z-10">
              <div className="container pt-20 md:pt-28">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full" variant="secondary">
                        خدمة موجهة للمغاربة المقيمين بإيطاليا
                      </Badge>
                      <Badge className="rounded-full" variant="outline">
                        ترتيب • ترجمة محلفة • أبوستيل • إرسال
                      </Badge>
                    </div>

                    <h1 className="headline-premium mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                      إعداد ملفات الجنسية الإيطالية
                      <span className="block text-muted-foreground">بأسلوب راقٍ… وبلا صداع راس.</span>
                    </h1>

                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
                      <span className="font-semibold text-foreground">Citta‑Trad</span> كنواكبك من المغرب حتى إيطاليا:
                      جمع الوثائق، تصحيح المعطيات، الأبوستيل، الترجمة المحلّفة، وترتيب الملف… ثم الإرسال الآمن.
                    </p>

                    <div className="mt-6 text-lg md:text-xl">
                      <span className="text-muted-foreground">جمل دارجة ترحيبية: </span>
                      <TypedWords
                        words={[
                          "حنا هنا غير تهنى 😉",
                          "غير ب كليك كلشي بين يديك ⚡",
                          "شبيك لبيك، الخدمة بين يديك ✨",
                        ]}
                        className="font-semibold text-foreground"
                      />
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button asChild variant="hero" size="pill" className="gap-2">
                        <a href="#contact" aria-label="تواصل معنا الآن">
                          <Sparkles className="h-4 w-4" />
                          تواصل معنا دابا
                        </a>
                      </Button>

                      <Button asChild variant="premium" size="pill" className="gap-2 surface-glass">
                        <a href="#service" aria-label="تفاصيل الخدمة">
                          شنو كنقدمّو؟
                          <span aria-hidden className="text-brand-gold">
                            •
                          </span>
                          الخدمة كاملة
                        </a>
                      </Button>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[
                        { title: "تنظيم احترافي", desc: "ترتيب الملف خطوة بخطوة" },
                        { title: "ترجمة محلفة", desc: "خالية من الأخطاء" },
                        { title: "إرسال آمن", desc: "بالبريد السريع" },
                      ].map((f) => (
                        <Card key={f.title} className="surface-glass p-4">
                          <div className="text-sm font-semibold">{f.title}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="lg:justify-self-end">
                    <Card className="surface-glass p-6">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        <div className="text-sm font-semibold">وعد Citta‑Trad</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        الخدمة ديالك بلا ما تحرك من دارك: كنراجعو الوثائق، كنصلحو المعطيات، كنجهزو الملف بحال اللي غادي
                        يتقدم لجهة رسمية… ومن بعد كنرسلوه بأمان.
                      </p>
                      <Separator className="my-4" />
                      <ul className="space-y-3 text-sm">
                        {[
                          "حنا معاك خطوة بخطوة",
                          "غير تهنى، كلشي عندنا",
                          "الوقت ديالك محفوظ، الخدمة بلا صداع",
                        ].map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <SectionShell id="about" eyebrow="ℹ️ من نحن" title="حنا فريق مختص… وخدمتنا منظمة بحال ساعة سويسرية">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6 shadow-elegant">
              <p className="text-base leading-relaxed text-muted-foreground">
                حنا فريق مختص فالمساعدة الإدارية والاستشارة، كنواكب المغاربة المقيمين بإيطاليا فإعداد ملفات الجنسية
                الإيطالية: جمع الوثائق، ترتيبها، ترجمتها ترجمة محلفة، والمصادقة عليها، مع إرسالها مباشرة إلى إيطاليا بكل
                أمان واحترافية.
              </p>
              <Separator className="my-5" />
              <div className="grid gap-3 sm:grid-cols-2">
                {["حنا معاك خطوة بخطوة", "غير تهنى، كلشي عندنا", "الخدمة ديالك بلا صداع راس", "تنسيق واضح ومواعيد محترمة"].map(
                  (s) => (
                    <div key={s} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-sm">{s}</span>
                    </div>
                  ),
                )}
              </div>
            </Card>

            <Card className="surface-glass p-6">
              <h3 className="text-lg font-semibold">علاش Citta‑Trad؟ (سيو + وضوح)</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                لأن إعداد ملف الجنسية الإيطالية كيحتاج دقة فالأسماء، التواريخ، وترتيب الوثائق. أي خطأ بسيط يقدر يضيع
                الوقت ديالك. حنا كنشتغلو بمنهج واضح: تدقيق → ملاءمة → أبوستيل → ترجمة محلفة → إعادة ترتيب → إرسال.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  { t: "تدقيق المعطيات", d: "كنطابقو المعلومات الشخصية مع الوثائق" },
                  { t: "مرافقة احترافية", d: "تواصل واضح وشفاف" },
                  { t: "نتيجة مرتبة", d: "ملف جاهز باش يمشي للمرحلة الموالية" },
                ].map((x) => (
                  <div key={x.t} className="rounded-lg border bg-card/60 p-4">
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </SectionShell>

        {/* SERVICE */}
        <SectionShell id="service" eyebrow="🗂️ الخدمة" title="إعداد ملفات الجنسية الإيطالية — الخدمة كاملة من الألف للياء">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-6 shadow-elegant">
              <h3 className="text-lg font-semibold">🔹 تشمل الخدمة:</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "جمع الوثائق المطلوبة",
                  "تصحيحها وملاءمتها للمعلومات الشخصية",
                  "المصادقة عليها بشهادة الأبوستيل لدى العمالة",
                  "ترتيب الملف",
                  "ترجمة الوثائق ترجمة محلفة خالية من الأخطاء",
                  "المصادقة على الترجمة بشهادة الأبوستيل بالمحكمة الابتدائية",
                  "إعادة ترتيب الملف",
                  "إرسال الوثائق مباشرة للزبون عبر البريد السريع",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />
              <div className="grid gap-3 sm:grid-cols-3">
                {["الخدمة ديالك بلا ما تحرك من دارك", "كلشي بين يديك غير بكليك واحد", "الوقت ديالك محفوظ، الخدمة بلا صداع"].map(
                  (t) => (
                    <div key={t} className="rounded-xl border bg-card p-4">
                      <div className="text-sm font-semibold">{t}</div>
                    </div>
                  ),
                )}
              </div>
            </Card>

            <Card className="surface-glass p-6">
              <h3 className="text-lg font-semibold">كيفاش كنخدمو؟ (روتين واضح)</h3>
              <ol className="mt-4 space-y-3">
                {[
                  { t: "التشخيص", d: "كنحددو شنو ناقص وشنو خاص يتصلّح" },
                  { t: "التجهيز", d: "ملاءمة الوثائق + ترتيب منطقي" },
                  { t: "التوثيق", d: "الأبوستيل حيث لازم" },
                  { t: "الترجمة", d: "ترجمة محلفة + مراجعة" },
                  { t: "التسليم", d: "إرسال سريع وآمن" },
                ].map((s, idx) => (
                  <li key={s.t} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{s.t}</div>
                      <div className="text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <Separator className="my-5" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                هاد الصفحة معمولة باش تعاون الناس يفهمو الخدمة، وفيها كلمات مفتاحية مرتبطة بملف الجنسية الإيطالية، الترجمة
                المحلفة، الأبوستيل، وتجهيز الوثائق للمغاربة المقيمين بإيطاليا — باش تقوّي السيو ديال الموقع بشكل طبيعي.
              </p>
            </Card>
          </div>
        </SectionShell>

        {/* CONTACT */}
        <SectionShell id="contact" eyebrow="📞 تواصل معنا" title="تواصل معنا — واتساب سريع وواضح">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6 shadow-elegant">
              <h3 className="text-lg font-semibold">زر واتساب كبير وواضح</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                منين كتضغط، كيتحل واتساب مباشرة برسالة جاهزة. (الرقم ما كنكتبوهش فواجهة الصفحة للزوار).
              </p>
              <div className="mt-5">
                <Button
                  asChild
                  variant="hero"
                  size="pill"
                  className="w-full justify-center gap-2 md:w-auto"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="فتح واتساب للتواصل"
                  >
                    <Send className="h-4 w-4" />
                    فتح واتساب الآن
                  </a>
                </Button>
              </div>
            </Card>

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
    </div>
  );
};

export default Index;
