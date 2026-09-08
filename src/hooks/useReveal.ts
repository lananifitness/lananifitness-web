import { useEffect, useRef } from 'react';

/**
 * Devuelve un ref a asignar a un contenedor. Todos los elementos hijos
 * con la clase "reveal" recibirán "is-visible" cuando entren en viewport.
 * Pensado para ser sutil: una sola aparición, sin parpadeos ni retrigger.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(key?: string) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.classList.contains('reveal')
      ? [root, ...Array.from(root.querySelectorAll<HTMLElement>('.reveal'))]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    if (targets.length === 0) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' }
    );

    targets.forEach((el) => {
      // Leave already visible server-rendered content in place to avoid a flash.
      if (el.getBoundingClientRect().top >= window.innerHeight) {
        el.classList.add('reveal-pending');
      } else {
        el.classList.add('is-visible');
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      targets.forEach(el => el.classList.remove('reveal-pending'));
    };
  }, [key]);

  return containerRef;
}
