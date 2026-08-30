import { useState } from 'react';
import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { VIDEOS_RETO_VUELVO_A_MOVERME } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './GraciasReto.module.css';

export default function GraciasReto() {
  const ref = useReveal<HTMLDivElement>();
  const [completados, setCompletados] = useState<Set<number>>(new Set());

  const toggleCompletado = (dia: number) => {
    setCompletados((prev) => {
      const next = new Set(prev);
      if (next.has(dia)) {
        next.delete(dia);
      } else {
        next.add(dia);
      }
      return next;
    });
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <header className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>¡Gracias por confiar en mí!</p>
          <h1>Bienvenida al Reto Vuelvo a Moverme</h1>
          <p className={styles.lead}>
            Ya tienes acceso a tus 21 días de rutinas. Guarda esta página o el correo de
            confirmación: aquí siempre vas a encontrar tus videos. Empieza por el Día 1 y avanza a
            tu ritmo, no hay prisa.
          </p>
        </header>

        <div className={`reveal ${styles.grid}`}>
          {VIDEOS_RETO_VUELVO_A_MOVERME.map((video) => {
            const listo = video.youtubeId !== 'PENDIENTE';
            const hecho = completados.has(video.dia);
            return (
              <div key={video.dia} className={`${styles.card} ${hecho ? styles.cardHecho : ''}`}>
                <button
                  className={styles.check}
                  onClick={() => toggleCompletado(video.dia)}
                  aria-label={hecho ? `Marcar día ${video.dia} como pendiente` : `Marcar día ${video.dia} como completado`}
                >
                  <CheckCircle2 size={22} />
                </button>

                <span className={styles.diaLabel}>Día {video.dia}</span>
                {listo && <p className={styles.tituloVideo}>{video.titulo}</p>}

                {listo ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <PlayCircle size={20} />
                    Ver rutina
                  </a>
                ) : (
                  <span className={styles.proximamente}>Muy pronto</span>
                )}
              </div>
            );
          })}
        </div>

        <div className={`reveal ${styles.ayuda}`}>
          <h2>¿Tienes alguna duda?</h2>
          <p>
            Escríbeme por WhatsApp o Instagram, estoy aquí para acompañarte en cada paso de este
            reto.
          </p>
        </div>
      </div>
    </section>
  );
}
