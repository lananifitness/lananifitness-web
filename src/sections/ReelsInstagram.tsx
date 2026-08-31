import { Instagram } from 'lucide-react';
import { REELS_INSTAGRAM } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './ReelsInstagram.module.css';

function extraerId(url: string): string {
  const match = url.match(/\/reel\/([^/?]+)/);
  return match ? match[1] : '';
}

export default function ReelsInstagram() {
  const ref = useReveal<HTMLDivElement>();

  if (REELS_INSTAGRAM.length === 0) return null;

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <header className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>Muévete conmigo, en video</p>
          <h2>Así entrenamos juntas</h2>
        </header>

        <div className={styles.carrusel}>
          {REELS_INSTAGRAM.map((reel) => (
            <div key={reel.id} className={`reveal ${styles.tarjeta}`}>
              <iframe
                src={`https://www.instagram.com/reel/${extraerId(reel.url)}/embed`}
                title="Reel de La Nani Fitness"
                loading="lazy"
                allowTransparency
                className={styles.iframe}
              />
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/lananifitness"
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal ${styles.verMas}`}
        >
          <Instagram size={20} />
          Ver más en Instagram
        </a>
      </div>
    </section>
  );
}
