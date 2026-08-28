import Retos from '../sections/Retos';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function RetosPage() {
  useSEO(SEO_PAGINAS.retos);
  return <Retos variant="full" />;
}
