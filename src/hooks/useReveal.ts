import { useEffect, useRef } from 'react';

/**
 * Devuelve un ref a asignar a un contenedor. Todos los elementos hijos
 * con la clase "reveal" recibirán "is-visible" cuando entren en viewport.
 * Pensado para ser sutil: una sola aparición, sin parpadeos ni retrigger.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.classList.contains('reveal')
      ? [root, ...Array.from(root.querySelectorAll<HTMLElement>('.reveal'))]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
