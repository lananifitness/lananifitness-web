import { useEffect } from 'react';

import { canonicalUrl } from '../seo';

/**
 * Inserta/actualiza <link rel="canonical"> según la ruta actual.
 * path debe empezar con "/", ej: "/retos"
 */
export function useCanonical(path: string): void {
  useEffect(() => {
    const href = canonicalUrl(path);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', href);
  }, [path]);
}
