import { useEffect } from 'react';
import type { SeoMeta } from '../types';
import { useCanonical } from './useCanonical';

import { metaTags, organization } from '../seo';

function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setJsonLd(id: string, data: Record<string, unknown>): void {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Aplica title, meta description, og:tags, canonical y JSON-LD
 * estructurado (tipo LocalBusiness) para la página actual.
 */
export function useSEO(meta: SeoMeta): void {
  useCanonical(meta.path);

  useEffect(() => {
    document.title = meta.title;

    metaTags(meta).forEach(([attr, key, content]) => setMetaTag(attr, key, content));
    setJsonLd('ld-json-page', organization);
  }, [meta]);
}
