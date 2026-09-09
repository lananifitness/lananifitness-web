import { useEffect, useRef, useState } from 'react';
import { REDES_SOCIALES } from '../data';
import styles from './RedesSociales.module.css';

function contarHasta(label: string, progress: number): string {
  if (progress >= 1) return label;
  const match = label.match(/^(\d+(?:,\d+)?)(.*)$/);
  if (!match) return label;
  const decimals = match[1].includes(',') ? 1 : 0;
  const value = Number(match[1].replace(',', '.')) * progress;
  return `${value.toFixed(decimals).replace('.', ',')}${match[2]}`;
}

export default function RedesSociales() {
  const ref = useRef<HTMLElement>(null);
  // Keep the real figures in the initial HTML and for reduced-motion users.
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const section = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!section || !('IntersectionObserver' in window) || motion.matches) return;
    let frame = 0;
    let started = false;
    let start: number | undefined;
    setProgress(0);
    const tick = (now: number) => {
      start ??= now;
      const elapsed = Math.min((now - start) / 1200, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(entries => {
      if (started || !entries.some(entry => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    observer.observe(section);
    const finish = () => {
      if (!motion.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      setProgress(1);
    };
    motion.addEventListener('change', finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', finish);
    };
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.row}`}>
        {REDES_SOCIALES.map(red => (
          <a
            key={red.id}
            href={red.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stat}
            aria-label={`${red.nombre}: ${red.seguidores} ${red.id === 'youtube' ? 'suscriptores' : 'seguidores'}`}
          >
            <span className={styles.numero} aria-hidden="true">
              <span className={styles.reserva}>{red.seguidores}</span>
              <span className={styles.valor}>{contarHasta(red.seguidores, progress)}</span>
            </span>
            <span className={styles.nombre}>{red.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
