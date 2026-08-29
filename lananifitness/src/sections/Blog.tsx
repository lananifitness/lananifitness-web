import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './Blog.module.css';

interface Props {
  variant?: 'preview' | 'full';
}

function formatearFecha(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Blog({ variant = 'full' }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const posts = variant === 'preview' ? BLOG_POSTS.slice(0, 3) : BLOG_POSTS;

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <header className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>{variant === 'full' ? 'Mi blog' : 'Últimos consejos'}</p>
          {variant === 'full' && <h1>Consejos para moverte con seguridad</h1>}
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={`reveal ${styles.card}`}>
              <span className={styles.categoria}>{post.categoria}</span>
              <h3>{post.titulo}</h3>
              <p className={styles.resumen}>{post.resumen}</p>
              <div className={styles.meta}>
                <span>{formatearFecha(post.fecha)}</span>
                <span className={styles.lectura}>
                  <Clock size={16} /> {post.minutosLectura} min
                </span>
              </div>
              <Link to={`/blog/${post.slug}`} className={styles.leer}>
                Leer artículo →
              </Link>
            </article>
          ))}
        </div>

        {variant === 'preview' && (
          <div className={`reveal ${styles.verMas}`}>
            <Link to="/blog">Ver todos los artículos →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
