import { REDES_SOCIALES } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './RedesSociales.module.css';

export default function RedesSociales() {
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
            <span className={styles.numero}>{red.seguidores}</span>
            <span className={styles.nombre}>{red.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
