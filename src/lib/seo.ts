type MetaInput = {
  name?: string;
  property?: string;
  content: string;
};

export function upsertMetaTag(meta: MetaInput) {
  const selector = meta.name
    ? `meta[name="${cssEscape(meta.name)}"]`
    : `meta[property="${cssEscape(meta.property ?? "")}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (meta.name) el.setAttribute("name", meta.name);
    if (meta.property) el.setAttribute("property", meta.property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", meta.content);
}

export function upsertLinkTag(rel: string, attrs: Record<string, string>) {
  const selectorParts = [`link[rel="${cssEscape(rel)}"]`];
  for (const [k, v] of Object.entries(attrs)) {
    selectorParts.push(`[${k}="${cssEscape(v)}"]`);
  }
  const selector = selectorParts.join("");

  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    document.head.appendChild(el);
  } else {
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  }
  return el;
}

export function removeManagedTags(managedAttr = "data-seo") {
  document.head.querySelectorAll(`[${managedAttr}="true"]`).forEach((n) => n.remove());
}

function cssEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\"/g, '\\"');
}
