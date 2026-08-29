import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function NotFoundPage() {
  useSEO({
    title: 'Página no encontrada — La Nani Fitness',
    description: 'La página que buscas no existe.',
    path: '/404',
  });

  return (
    <section style={{ padding: '96px 0', textAlign: 'center' }}>
      <div className="container">
        <h1>Uy, esta página no existe</h1>
        <p style={{ marginTop: 16, fontSize: 19 }}>
          <Link to="/">Volver al inicio →</Link>
        </p>
      </div>
    </section>
  );
}
