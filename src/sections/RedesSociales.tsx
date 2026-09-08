import { useEffect, useState } from 'react';
import { REDES_SOCIALES } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './RedesSociales.module.css';

interface Stat { count: number; updatedAt: string; approximate?: boolean }

export default function RedesSociales() {
  const [stats, setStats] = useState<Record<string, Stat>>({});
  useEffect(() => {
    const controller = new AbortController();
    const refresh = async () => {
      try {
        const response = await fetch('/social-stats.json', {cache: 'no-cache', signal: controller.signal});
        if (!response.ok) return;
        const data = await response.json();
        const valid: Record<string, Stat> = {};
        for (const red of REDES_SOCIALES) {
          const entry = data?.[red.id];
          if (entry && Number.isSafeInteger(entry.count) && entry.count >= 0 && typeof entry.updatedAt === 'string' && Number.isFinite(Date.parse(entry.updatedAt)) && Date.parse(entry.updatedAt) <= Date.now() + 60000) valid[red.id] = entry;
        }
        setStats(previous => ({...previous, ...valid}));
      } catch { /* Keep the last displayed values on a temporary network failure. */ }
    };
    void refresh();
    const interval = window.setInterval(() => { if (!document.hidden) void refresh(); }, 5 * 60 * 1000);
    return () => { controller.abort(); window.clearInterval(interval); };
  }, []);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.row}`}>
        {REDES_SOCIALES.map((red) => (
          <a
            key={red.id}
            href={red.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stat}
          >
            <span className={styles.numero}>{stats[red.id] ? `${stats[red.id].approximate ? '≈ ' : ''}${new Intl.NumberFormat('es-ES', {notation: 'compact', maximumFractionDigits: 1}).format(stats[red.id].count)}` : red.seguidores}</span>
            <span className={styles.nombre}>{red.nombre}</span>
            <span className={styles.actualizado}>
              {stats[red.id] ? <>Última consulta: <time dateTime={stats[red.id].updatedAt}>{new Date(stats[red.id].updatedAt).toLocaleString('es-ES', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'})}</time></> : 'Cifra de referencia'}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
