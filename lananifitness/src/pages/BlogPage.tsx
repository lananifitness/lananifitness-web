import Blog from '../sections/Blog';
import { useSEO } from '../hooks/useSEO';
import { SEO_PAGINAS } from '../data';

export default function BlogPage() {
  useSEO(SEO_PAGINAS.blog);
  return <Blog variant="full" />;
}
