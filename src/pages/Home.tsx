import Hero from '../sections/Hero';
import RedesSociales from '../sections/RedesSociales';
import Retos from '../sections/Retos';
import ReelsInstagram from '../sections/ReelsInstagram';
import Sobre from '../sections/Sobre';
import Blog from '../sections/Blog';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function Home() {
  useSEO(SEO_PAGINAS.home);

  return (
    <>
      <Hero />
      <RedesSociales />
      <Retos variant="preview" />
      <ReelsInstagram />
      <Sobre variant="preview" />
      <Blog variant="preview" />
    </>
  );
}
