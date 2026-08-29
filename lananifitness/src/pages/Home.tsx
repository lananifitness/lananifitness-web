import Hero from '../sections/Hero';
import Retos from '../sections/Retos';
import Sobre from '../sections/Sobre';
import Blog from '../sections/Blog';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function Home() {
  useSEO(SEO_PAGINAS.home);

  return (
    <>
      <Hero />
      <Retos variant="preview" />
      <Sobre variant="preview" />
      <Blog variant="preview" />
    </>
  );
}
