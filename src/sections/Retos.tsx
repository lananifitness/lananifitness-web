import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, Flame } from 'lucide-react';
import { RETOS } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './Retos.module.css';

interface Props {
  variant?: 'preview' | 'full';
}

export default function Retos({ variant = 'full' }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const retos = variant === 'preview' ? RETOS.slice(0, 1) : RETOS;

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        {variant === 'full' && (
          <header className={`reveal ${styles.header}`}>
            <p className={styles.eyebrow}>Mis retos</p>
            <h1>Elige por dónde quieres empezar</h1>
            <p className={styles.lead}>
              Cada reto está pensado para un problema real: piernas débiles, falta de equilibrio o
              esa energía que sientes que ya no tienes. Tú decides tu punto de partida.
            </p>
          </header>
        )}

        {variant === 'preview' && (
          <p className={`reveal ${styles.eyebrow}`}>Empieza aquí</p>
        )}

        <div className={styles.grid}>
          {retos.map((reto) => (
            <article key={reto.id} className={`reveal ${styles.card}`}>
              <div className={styles.cardHeader}>
                <Flame className={styles.iconFondo} />
                {reto.destacado && <span className={styles.badge}>El más elegido</span>}
                <h3>{reto.nombre}</h3>
                <p className={styles.problema}>Para ti si sientes: {reto.problema}</p>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.beneficios}>
                  {reto.beneficios.map((b) => (
                    <li key={b}>
                      <CheckCircle2 size={20} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {reto.diasIncluidos && (
                  <details className={styles.diasAcordeon}>
                    <summary>
                      Ver los {reto.diasIncluidos.length} días del reto
                      <ChevronDown size={18} />
                    </summary>
                    <ol className={styles.diasLista}>
                      {reto.diasIncluidos.map((dia) => (
                        <li key={dia.dia}>
                          <span className={styles.diaNumero}>Día {dia.dia}</span>
                          <span>{dia.titulo}</span>
                        </li>
                      ))}
                    </ol>
                  </details>
                )}

                <div className={styles.footer}>
                  <div>
                    <span className={styles.precio}>{reto.precio.toFixed(2)}€</span>
                    <span className={styles.duracion}> · {reto.duracionDias} días</span>
                  </div>
                  {reto.paypalLink ? (
                    <a
                      href={reto.paypalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cta}
                    >
                      Quiero este reto
                    </a>
                  ) : (
                    <Link to="/contacto" className={styles.cta}>
                      Quiero este reto
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {variant === 'preview' && (
          <div className={`reveal ${styles.verMas}`}>
            <Link to="/retos">Ver todos los retos →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
