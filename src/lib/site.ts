export function getSiteUrl(): string {
  const fromEnv = (import.meta as any).env?.VITE_SITE_URL as string | undefined;
  const cleaned = fromEnv?.trim().replace(/\/$/, "");
  if (cleaned) return cleaned;
  if (typeof window !== "undefined") return window.location.origin;
  return "https://citta-trad.com";
}

export function absoluteUrl(pathname: string): string {
  const site = getSiteUrl();
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${site}${p}`;
}
