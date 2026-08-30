import { Instagram, Youtube, Facebook } from 'lucide-react';
import { REDES_SOCIALES } from '../data';
import type { RedSocial } from '../types';
import { useReveal } from '../hooks/useReveal';
import styles from './RedesSociales.module.css';

const ICONOS: Record<RedSocial['icono'], typeof Instagram> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
};

export default function RedesSociales() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <p className={`reveal ${styles.eyebrow}`}>Una comunidad que crece cada día</p>
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
