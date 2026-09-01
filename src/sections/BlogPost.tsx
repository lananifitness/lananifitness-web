import { Link, useParams } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { useReveal } from '../hooks/useReveal';
import { useSEO } from '../hooks/useSEO';
import styles from './BlogPost.module.css';

const DIAS_SEMANA = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function renderParrafo(parrafo: string, key: number) {
  const dia = DIAS_SEMANA.find((d) => parrafo.startsWith(`${d}:`));
  if (dia) {
    const resto = parrafo.slice(dia.length + 1);
    return (
      <p key={key} className={styles.parrafoDia}>
        <span className={styles.etiquetaDia}>{dia}</span>
        {resto}
      </p>
    );
  }
  return <p key={key}>{parrafo}</p>;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const ref = useReveal<HTMLDivElement>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useSEO({
    title: post ? `${post.titulo} — La Nani Fitness` : 'Artículo no encontrado — La Nani Fitness',
    description: post ? post.resumen : 'Este artículo no existe o fue movido.',
    path: `/blog/${slug ?? ''}`,
  });

  if (!post) {
    return (
      <section className={styles.section}>
        <div className="container">
          <h1>No encontré este artículo</h1>
          <p>
            Puede que se haya movido. <Link to="/blog">Vuelve al blog →</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.wrap}`}>
        <p className={`reveal ${styles.categoria}`}>{post.categoria}</p>
        <h1 className={`reveal ${styles.title}`}>{post.titulo}</h1>
        <div className={`reveal ${styles.meta}`}>
          <span>
            {new Date(post.fecha).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className={styles.lectura}>
            <Clock size={16} /> {post.minutosLectura} min de lectura
          </span>
        </div>

        <div className={`reveal ${styles.cuerpo}`}>
          {post.contenido.map((parrafo, i) => renderParrafo(parrafo, i))}
        </div>

        <div className={`reveal ${styles.volver}`}>
          <Link to="/blog">← Ver más artículos</Link>
        </div>
      </div>
    </section>
  );
}
