import Contacto from '../sections/Contacto';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function ContactoPage() {
  useSEO(SEO_PAGINAS.contacto);
  return <Contacto />;
}
