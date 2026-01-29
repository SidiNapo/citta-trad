import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/citta/SiteHeader";
import { SectionShell } from "@/components/citta/SectionShell";
import { Reveal } from "@/components/citta/Reveal";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Fr() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        lang="fr"
        dir="ltr"
        title="Citta‑Trad Maroc | Traduction assermentée + Apostille (Italie)"
        description="Traduction assermentée (FR/IT), apostille et préparation de dossier de nationalité italienne pour Marocains au Maroc et en Italie. Service rapide, vérifié, et envoi sécurisé."
        canonicalPath="/fr"
        alternates={{ ar: "/ar", fr: "/fr", "x-default": "/" }}
        og={{ type: "website", imagePath: "/favicon.png" }}
      />

      <SiteHeader />

      <main>
        <SectionShell
          eyebrow="🇲🇦🇮🇹 FR"
          title="Traduction assermentée + apostille pour Marocains (Maroc & Italie)"
        >
          <Reveal>
            <Card className="p-6 shadow-elegant">
              <h1 className="headline-premium text-3xl font-semibold tracking-tight md:text-4xl">
                Traduction assermentée (traduction jurée) — dossiers Italie
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Citta‑Trad vous accompagne pour la <strong>traduction assermentée</strong>, l’<strong>apostille</strong> et
                l’organisation de documents destinés à l’Italie (nationalité italienne, démarches administratives, actes,
                certificats…).
              </p>
              <Separator className="my-6" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-4">
                  <h2 className="text-base font-semibold">Maroc → Italie</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    On prépare vos documents au Maroc (apostille / légalisation selon le cas), puis on organise le dossier
                    pour une utilisation en Italie.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-4">
                  <h2 className="text-base font-semibold">Marocains en Italie</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Service adapté aux villes italiennes (Milano, Roma, Torino…). Envoi sécurisé et suivi clair.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-sm">
                Liens utiles: <a className="text-primary underline" href="/traduction-assermentee">Traduction assermentée</a>
                {" • "}
                <a className="text-primary underline" href="/apostille">Apostille</a>
                {" • "}
                <a className="text-primary underline" href="/services">Services</a>
                {" • "}
                <a className="text-primary underline" href="/faq">FAQ</a>
              </div>
            </Card>
          </Reveal>
        </SectionShell>
      </main>
    </div>
  );
}
