import { useEffect } from 'react';
import type { SeoMeta } from '../types';
import { useCanonical } from './useCanonical';

const SITE_URL = 'https://lananifitness.github.io';
const SITE_NAME = 'La Nani Fitness';
const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

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

    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', `${SITE_URL}${meta.path}`);
    setMetaTag('property', 'og:image', OG_IMAGE);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);

    setJsonLd('ld-json-page', {
      '@context': 'https://schema.org',
      '@type': 'HealthAndBeautyBusiness',
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'Rutinas de ejercicio en casa para mujeres mayores de 60 años, con acompañamiento personal y comunidad.',
      image: OG_IMAGE,
      sameAs: [
        'https://www.instagram.com/lananifitness',
        'https://www.youtube.com/@lananifitness',
      ],
    });
  }, [meta]);
}
