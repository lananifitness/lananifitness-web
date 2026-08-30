import { Heart, Users, Sparkles, Shield } from 'lucide-react';
import { VALORES, TESTIMONIOS } from '../data';
import type { Valor } from '../types';
import { useReveal } from '../hooks/useReveal';
import styles from './Sobre.module.css';

interface Props {
  variant?: 'preview' | 'full';
}

const ICONOS: Record<Valor['icono'], typeof Heart> = {
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
  shield: Shield,
};

export default function Sobre({ variant = 'full' }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const testimonios = variant === 'preview' ? TESTIMONIOS.slice(0, 2) : TESTIMONIOS;

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        {variant === 'full' ? (
          <>
            <div className={`reveal ${styles.headerConFoto}`}>
              <img
                src="/img_4499.jpg"
                alt="La Nani"
                className={styles.foto}
              />
              <header className={styles.header}>
                <p className={styles.eyebrow}>Mi historia</p>
                <h1>Tengo 65 años y esta es mi forma de ayudarte a vivir mejor</h1>
                <p className={styles.lead}>
                  No busco un cuerpo de revista, y el tuyo tampoco tiene que serlo. Busco que
                  subas las escaleras sin quedarte sin aire, que juegues con tus nietos sin miedo
                  a caerte, que tengas la energía para disfrutar cada día. Empecé grabando rutinas
                  cortas para mi propia familia, en Venezuela. Hoy, desde España, acompaño a una
                  comunidad enorme de mujeres +60 que decidieron que la edad no define lo que
                  pueden hacer con su cuerpo.
                </p>
              </header>
            </div>

            <div className={styles.valores}>
              {VALORES.map((valor, i) => {
                const Icono = ICONOS[valor.icono];
                const chipClass = i % 2 === 0 ? styles.chipRosa : styles.chipNaranja;
                return (
                  <div key={valor.id} className={`reveal ${styles.valor}`}>
                    <span className={`${styles.iconChip} ${chipClass}`}>
                      <Icono size={24} />
                    </span>
                    <h3>{valor.titulo}</h3>
                    <p>{valor.descripcion}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className={`reveal ${styles.eyebrow}`}>Historias que me emocionan</p>
        )}

        <div className={styles.testimonios}>
          {testimonios.map((t) => (
            <blockquote key={t.id} className={`reveal ${styles.cita}`}>
              <p>&ldquo;{t.cita}&rdquo;</p>
              <footer>
                <strong>{t.nombre}</strong>, {t.edad} años — {t.ciudad}
                <span className={styles.logro}>{t.logro}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
