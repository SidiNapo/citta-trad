
Goal: get Citta‑Trad indexed correctly on Google, improve SEO for Morocco in Arabic/Darija + French, and prepare multiple keyword-targeted pages on your future domain https://citta-trad.com.

Important expectations (so we do this the right way)
- I can implement strong technical SEO + on-page SEO, but nobody can honestly guarantee “Rank #1 in all Morocco” because rankings depend on competitors, backlinks, domain age, reviews, and ongoing content.
- What we can do inside the app: clean indexing, proper pages, metadata, sitemap/robots, fast mobile performance, structured data, and keyword-focused content per page.

What I found in your codebase (current state)
- It’s a React SPA with only 2 routes: “/” and “*” (NotFound).
- Current SEO tags are only in index.html (Arabic/RTL). If we add more pages (/fr, /ar, /services…), we must create per-route SEO titles/descriptions/canonical/OG/hreflang.
- robots.txt exists but has no Sitemap line.
- No sitemap.xml currently.
- You asked for subpaths (example: /fr, /ar). Good for SEO and simpler than subdomains.

Implementation plan (what I will build)

Phase 1 — Technical SEO foundation (indexing + correctness)
1) Add a site URL constant (so canonical URLs are correct)
   - Add an environment variable like: VITE_SITE_URL=https://citta-trad.com
   - In dev/preview it can fallback to window.location.origin.
   - This will be used to build canonical + sitemap URLs.

2) Create a small SEO utility (no new dependency)
   - Add a reusable helper (e.g., src/lib/seo.ts + src/components/Seo.tsx) that:
     - Sets document.title
     - Ensures/updates meta tags:
       - description
       - robots (index,follow)
       - canonical link
       - og:title, og:description, og:type, og:url, og:image
       - twitter:card, twitter:image
     - Adds hreflang alternate links for language pages (ar, fr, x-default)
     - Optionally sets <html lang> and dir (rtl/ltr) dynamically per route.

3) Add sitemap.xml + improve robots.txt
   - Create public/sitemap.xml containing all routes we will expose:
     - / (homepage)
     - /ar (Arabic landing variant if we split)
     - /fr (French landing)
     - /services (general service page)
     - /traduction-assermentee (FR) and /الترجمة-المحلفة (AR) OR keep slugs Latin for simplicity
     - /apostille
     - /faq
   - Update public/robots.txt to include:
     - Sitemap: https://citta-trad.com/sitemap.xml
   - Note: this is one of the fastest ways to help Google discover all pages.

4) Add basic structured data (JSON-LD)
   - Add JSON-LD on relevant pages:
     - Organization / LocalBusiness (Citta‑Trad)
     - WebSite (with SearchAction optional)
     - FAQPage schema on the FAQ page (big SEO win)
     - Service schema on service pages
   - Implement JSON-LD injection via the SEO utility (creating a <script type="application/ld+json"> tag).

Phase 2 — Create SEO pages (subpaths) for Morocco AR/Darija + French
5) Add new routes in src/App.tsx (React Router)
   - Keep “/” as your main landing (Arabic/Darija)
   - Add:
     - /fr (French landing page optimized for Morocco)
     - /services (service overview)
     - /traduction-assermentee (priority page since you selected it)
     - /apostille
     - /faq
   - Each route will render a dedicated page component under src/pages/.

6) Build page content that ranks (not “keyword stuffing”)
   - For each page, we’ll implement:
     - One clear H1 (unique per page)
     - 2–4 H2 sections targeting variations (Arabic/Darija + French depending on page)
     - Internal links to other pages (helps Google understand the site structure)
     - “Service area” paragraphs (Morocco-wide + key cities) without spam
     - Strong image alt text related to the page topic
   - We will write content in:
     - French page(s): natural French targeting Morocco search intent
     - Arabic/Darija page(s): natural Arabic + Darija tone (already your brand)
   - We will avoid repeating the same paragraph everywhere (duplicate content hurts).

7) Add a language switcher (important for UX + SEO)
   - In header (SiteHeader), add a simple AR / FR switch:
     - From /fr -> / (or /ar if we create /ar)
     - From / -> /fr
   - Also ensure the page direction changes properly (RTL on AR/Darija, LTR on FR).

Phase 3 — Mobile performance + media SEO (helps ranking a lot)
8) Performance improvements focused on mobile (Core Web Vitals)
   - Ensure hero images are optimized (size/format). If needed later we can convert key images to WebP and use responsive sizes.
   - Add lazy-loading for below-the-fold images (you already use loading="lazy" in some places; we’ll make it consistent).
   - Make sure the header layout is stable (no layout shift) on mobile.

9) Social sharing preview (OG image)
   - Keep your current og:image or replace with a cleaner branded OG image later.
   - Ensure each page has correct og:title/description/url so WhatsApp/Facebook previews look professional (this can also increase click-through rate).

Phase 4 — Google setup (outside code, but required)
10) What you must do (I will guide the steps in UI text)
   - Connect domain citta-trad.com to hosting (SSL/HTTPS required).
   - Create Google Search Console property for citta-trad.com
   - Submit sitemap: https://citta-trad.com/sitemap.xml
   - Request indexing for the key pages (especially /fr and /traduction-assermentee)
   - Optional but recommended: Google Business Profile (if you have a service address/area) and collect reviews.

URL & content decisions (based on your answers)
- URL structure: Subpaths (/fr, etc.)
- Pages to create: Service page + Sworn translation page + Apostille page + FAQ page
- Target: Both Morocco + Moroccans in Italy
- Priority keyword topic: Sworn translation (FR/AR)
- Favicon: keep current favicon.png (no change unless you ask)

Deliverables you’ll see after implementation
- Multiple indexable pages with unique titles/descriptions and clean internal linking
- sitemap.xml + robots.txt improved
- Structured data (FAQPage + Organization + Service)
- Better multilingual handling (RTL/LTR + hreflang)
- A clear path for Google indexing via Search Console

Risks / constraints (so we plan correctly)
- Because this is a React SPA, some Google bots will index fine, but the very best SEO is SSR. We can still achieve good results, especially with strong content + sitemap + GSC, but it’s important to be aware.
- “Rank #1” depends heavily on backlinks and content consistency. We’ll build a strong base and make the site SEO-ready.

<lov-actions>
<lov-suggestion message="After we add the new SEO pages and sitemap, test everything end-to-end: open /, /fr, /services, /traduction-assermentee, /apostille, /faq on mobile + desktop and verify titles/descriptions/canonical change correctly.">Verify end-to-end on mobile</lov-suggestion>
<lov-suggestion message="Create the new SEO pages (/fr, /services, /traduction-assermentee, /apostille, /faq) with unique H1/H2 content in Arabic/Darija + French, and add internal linking between them.">Add SEO pages (AR/FR)</lov-suggestion>
<lov-suggestion message="Add sitemap.xml + update robots.txt with a Sitemap line, then prepare Google Search Console submission steps for citta-trad.com.">Add Sitemap + Search Console setup</lov-suggestion>
<lov-suggestion message="Implement structured data (JSON-LD): Organization/LocalBusiness + Service + FAQPage schema on the FAQ page.">Add structured data (JSON-LD)</lov-suggestion>
<lov-suggestion message="Optimize images for mobile (size, lazy-loading consistency, and reduce layout shift) to improve Core Web Vitals and SEO.">Improve mobile performance</lov-suggestion>
</lov-actions>
