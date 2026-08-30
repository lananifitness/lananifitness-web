import { Instagram, Youtube, Facebook, Music2, AtSign } from 'lucide-react';
import { REDES_SOCIALES } from '../data';
import type { RedSocial } from '../types';
import { useReveal } from '../hooks/useReveal';
import styles from './RedesSociales.module.css';

const ICONOS: Record<RedSocial['icono'], typeof Instagram> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  tiktok: Music2,
  threads: AtSign,
};

function parseSeguidores(texto: string): number {
  const match = texto.match(/^([\d.,]+)\s*(mil|millones?)?$/i);
  if (!match) return 0;
  const numero = parseFloat(match[1].replace(/\./g, '').replace(',', '.'));
  const unidad = (match[2] ?? '').toLowerCase();
  if (unidad.startsWith('mill')) return numero * 1_000_000;
  if (unidad.startsWith('mil')) return numero * 1_000;
  return numero;
}

function formatearTotal(total: number): string {
  if (total >= 1_000_000) {
    return `${(total / 1_000_000).toFixed(2).replace('.', ',')} millones`;
  }
  return `${(total / 1_000).toFixed(1).replace('.', ',')} mil`;
}

export default function RedesSociales() {
  const ref = useReveal<HTMLDivElement>();
  const total = REDES_SOCIALES.reduce((suma, red) => suma + parseSeguidores(red.seguidores), 0);

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <p className={`reveal ${styles.eyebrow}`}>Una comunidad que crece cada día</p>
        <p className={`reveal ${styles.total}`}>
          +{formatearTotal(total)} personas siguiéndome en redes
        </p>
        <div className={styles.grid}>
          {REDES_SOCIALES.map((red) => {
            const Icono = ICONOS[red.icono];
            return (
              <a
                key={red.id}
                href={red.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal ${styles.card}`}
              >
                <Icono size={26} />
                <span className={styles.numero}>{red.seguidores}</span>
                <span className={styles.nombre}>{red.nombre}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
