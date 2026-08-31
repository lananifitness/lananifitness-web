import { Youtube } from 'lucide-react';
import { REELS_INSTAGRAM } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './ReelsInstagram.module.css';

function extraerId(url: string): string {
  const watch = url.match(/[?&]v=([^&]+)/);
  if (watch) return watch[1];
  const corto = url.match(/youtu\.be\/([^?&]+)/);
  if (corto) return corto[1];
  const shorts = url.match(/\/shorts\/([^?&]+)/);
  if (shorts) return shorts[1];
  return '';
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
          {REELS_INSTAGRAM.map((video, i) => {
            const colorClass = styles[`color${i % 4}`];
            return (
              <div key={video.id} className={`reveal ${styles.tarjeta} ${colorClass}`}>
                <div className={styles.marco}>
                  <iframe
                    src={`https://www.youtube.com/embed/${extraerId(video.url)}`}
                    title="Video de La Nani Fitness"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.iframe}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="https://www.youtube.com/@lananifitness"
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal ${styles.verMas}`}
        >
          <Youtube size={20} />
          Ver más en YouTube
        </a>
      </div>
    </section>
  );
}
