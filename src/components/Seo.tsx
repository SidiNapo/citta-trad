import * as React from "react";
import { absoluteUrl } from "@/lib/site";
import { removeManagedTags, upsertLinkTag, upsertMetaTag } from "@/lib/seo";

type Alternates = Record<string, string>; // hreflang -> path

type Og = {
  type?: string;
  imagePath?: string;
};

type Props = {
  title: string;
  description: string;
  canonicalPath: string;
  lang?: string;
  dir?: "rtl" | "ltr";
  alternates?: Alternates;
  og?: Og;
  jsonLd?: Array<Record<string, any>>;
};

export function Seo({
  title,
  description,
  canonicalPath,
  lang,
  dir,
  alternates,
  og,
  jsonLd,
}: Props) {
  React.useEffect(() => {
    document.title = title;

    if (lang) document.documentElement.lang = lang;
    if (dir) document.documentElement.dir = dir;

    // Clean only our managed tags to avoid fighting other libs.
    removeManagedTags("data-seo");

    // Basic
    upsertMetaTag({ name: "description", content: description });
    upsertMetaTag({ name: "robots", content: "index,follow" });

    // Canonical
    const canonicalHref = absoluteUrl(canonicalPath);
    const canonical = document.head.querySelector<HTMLLinkElement>(`link[rel="canonical"]`) ?? document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", canonicalHref);
    canonical.setAttribute("data-seo", "true");
    if (!canonical.parentNode) document.head.appendChild(canonical);

    // OpenGraph + Twitter
    upsertMetaTag({ property: "og:title", content: title });
    upsertMetaTag({ property: "og:description", content: description });
    upsertMetaTag({ property: "og:type", content: og?.type ?? "website" });
    upsertMetaTag({ property: "og:url", content: canonicalHref });
    if (og?.imagePath) {
      upsertMetaTag({ property: "og:image", content: absoluteUrl(og.imagePath) });
      upsertMetaTag({ name: "twitter:card", content: "summary_large_image" });
      upsertMetaTag({ name: "twitter:image", content: absoluteUrl(og.imagePath) });
    }

    // hreflang
    if (alternates) {
      for (const [hreflang, path] of Object.entries(alternates)) {
        const link = upsertLinkTag("alternate", {
          hreflang,
          href: absoluteUrl(path),
        });
        link.setAttribute("data-seo", "true");
      }
    }

    // JSON-LD
    if (jsonLd?.length) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd);
      script.setAttribute("data-seo", "true");
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, lang, dir, JSON.stringify(alternates), JSON.stringify(og), JSON.stringify(jsonLd)]);

  return null;
}
