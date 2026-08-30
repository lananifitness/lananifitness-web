import GraciasReto from '../sections/GraciasReto';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function GraciasRetoPage() {
  useSEO(SEO_PAGINAS.gracias);
  return <GraciasReto />;
}
