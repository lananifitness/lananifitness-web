import type { SeoMeta } from './types';

export const SITE_URL = 'https://lananifitness.com';
export const SITE_NAME = 'La Nani Fitness';
export const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;
export const canonicalUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`;

export function metaTags(meta: SeoMeta): Array<['name' | 'property', string, string]> {
  return [
    ['name', 'description', meta.description],
    ['name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow'],
    ['property', 'og:locale', 'es_ES'],
    ['property', 'og:title', meta.title],
    ['property', 'og:description', meta.description],
    ['property', 'og:type', 'website'],
    ['property', 'og:url', canonicalUrl(meta.path)],
    ['property', 'og:image', OG_IMAGE],
    ['property', 'og:site_name', SITE_NAME],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', meta.title],
    ['name', 'twitter:description', meta.description],
    ['name', 'twitter:image', OG_IMAGE],
  ];
}

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'Rutinas de ejercicio en casa para mujeres mayores de 60 años, con acompañamiento personal y comunidad.',
  image: OG_IMAGE,
  sameAs: ['https://www.instagram.com/lananifitness', 'https://www.youtube.com/@lananifitness'],
};
