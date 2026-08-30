import { Shirt, Dumbbell, Activity, Sparkles, Scissors, ExternalLink } from 'lucide-react';
import { CATEGORIAS_TIENDA, AMAZON_ESCAPARATE_LINK } from '../data';
import type { CategoriaTienda } from '../types';
import { useReveal } from '../hooks/useReveal';
import styles from './Tienda.module.css';

const ICONOS: Record<CategoriaTienda['icono'], typeof Shirt> = {
  shirt: Shirt,
  dumbbell: Dumbbell,
  activity: Activity,
  sparkles: Sparkles,
  scissors: Scissors,
};

export default function Tienda() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <header className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>Lo que uso de verdad</p>
          <h1>Mi tienda recomendada</h1>
          <p className={styles.lead}>
            Aquí no vas a encontrar una lista cualquiera: son los productos que yo misma uso cada
            día para moverme con energía y cuidarme por dentro y por fuera. Si compras a través de
            estos links, gano una pequeña comisión sin que a ti te cueste nada extra — así que
            gracias de corazón si decides apoyarme por aquí.
          </p>
        </header>

        <div className={styles.grid}>
          {CATEGORIAS_TIENDA.map((cat, i) => {
            const Icono = ICONOS[cat.icono];
            const colorClass = styles[`color${i % 4}`];
            return (
              <a
                key={cat.id}
                href={AMAZON_ESCAPARATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className={`reveal ${styles.card} ${colorClass}`}
              >
                <Icono className={styles.iconFondo} />
                <Icono className={styles.icono} size={30} />
                <h3>{cat.nombre}</h3>
                <p>{cat.descripcion}</p>
                <span className={styles.verMas}>
                  Ver en Amazon <ExternalLink size={15} />
                </span>
              </a>
            );
          })}
        </div>

        <div className={`reveal ${styles.ctaFinal}`}>
          <a
            href={AMAZON_ESCAPARATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={styles.ctaBoton}
          >
            Ver todo mi escaparate en Amazon
            <ExternalLink size={18} />
          </a>
          <p className={styles.disclaimer}>
            Como afiliada de Amazon, gano por las compras que califican, sin coste adicional para
            ti.
          </p>
        </div>
      </div>
    </section>
  );
}
