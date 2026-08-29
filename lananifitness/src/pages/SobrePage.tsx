import Sobre from '../sections/Sobre';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function SobrePage() {
  useSEO(SEO_PAGINAS.sobre);
  return <Sobre variant="full" />;
}
