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
          <h1 className={styles.title}>
            Nunca es tarde
            <br />
            para <span>volver a moverte</span>
          </h1>
          <p className={styles.lead}>
            Rutinas seguras en casa, pensadas para mujeres +60. No buscamos adelgazar ni un
            cuerpo perfecto: buscamos que fortalezcas tus piernas, cuides tu equilibrio y
            recuperes la energía para disfrutar cada día.
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
          {CAMINO.map((paso, i) => {
            const colorClass = styles[`color${i % 4}`];
            return (
              <li
                key={paso.id}
                className={`reveal ${styles.paso} ${colorClass}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className={styles.numeroFondo}>{paso.numero}</span>
                <h3>{paso.verbo}</h3>
                <p>{paso.titulo}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
