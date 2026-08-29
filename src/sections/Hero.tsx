import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CAMINO } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.top}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Ejercicio en casa, pensado para ti</p>
          <h1 className={styles.title}>
            Nunca es tarde para <span>volver a moverte</span>
          </h1>
          <p className={styles.lead}>
            Soy Nani. Te acompaño con rutinas seguras, pensadas para fortalecer tus piernas,
            cuidar tu equilibrio y devolverte la energía — sin importar por dónde empieces.
          </p>
          <div className={styles.actions}>
            <Link to="/retos" className={styles.primaryCta}>
              Quiero empezar mi reto
              <ArrowRight size={20} />
            </Link>
            <Link to="/sobre" className={styles.secondaryCta}>
              Conóceme
            </Link>
          </div>
        </div>
      </div>

      <div ref={ref} className={`container ${styles.camino}`}>
        <p className={`reveal ${styles.caminoLabel}`}>Así es nuestro camino juntas</p>
        <ol className={styles.pasos}>
          {CAMINO.map((paso, i) => (
            <li
              key={paso.id}
              className={`reveal ${styles.paso}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className={styles.numero}>{paso.numero}</span>
              <h3>{paso.verbo}</h3>
              <p>{paso.titulo}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
