import Tienda from '../sections/Tienda';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function TiendaPage() {
  useSEO(SEO_PAGINAS.tienda);
  return <Tienda />;
}
