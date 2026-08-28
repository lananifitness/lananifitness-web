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
            <header className={`reveal ${styles.header}`}>
              <p className={styles.eyebrow}>Mi historia</p>
              <h1>De Venezuela a acompañarte desde España</h1>
              <p className={styles.lead}>
                Empecé grabando rutinas cortas para mi propia familia. Hoy somos una comunidad
                enorme de mujeres +60 que se mueven juntas, cada una a su ritmo. Este espacio nació
                de una sola idea: que nadie se quede fuera del ejercicio por su edad.
              </p>
            </header>

            <div className={styles.valores}>
              {VALORES.map((valor) => {
                const Icono = ICONOS[valor.icono];
                return (
                  <div key={valor.id} className={`reveal ${styles.valor}`}>
                    <Icono size={28} />
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
