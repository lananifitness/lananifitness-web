import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { BLOG_POSTS, SEO_PAGINAS } from './data';
import { canonicalUrl, metaTags, organization } from './seo';
import type { SeoMeta } from './types';

export const pages: SeoMeta[] = [
  ...Object.values(SEO_PAGINAS),
  ...BLOG_POSTS.map(post => ({
    title: `${post.titulo} — La Nani Fitness`,
    description: post.resumen,
    path: `/blog/${post.slug}`,
  })),
  { title: 'Página no encontrada — La Nani Fitness', description: 'La página que buscas no existe.', path: '/404', noindex: true },
];

const escape = (value: string) => value.replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]!));

export function renderPage(meta: SeoMeta) {
  return {
    body: renderToString(<StaticRouter location={meta.path}><App /></StaticRouter>),
    head: [
      `<title>${escape(meta.title)}</title>`,
      `<link rel="canonical" href="${escape(canonicalUrl(meta.path))}" />`,
      ...metaTags(meta).map(([attr, key, value]) => `<meta ${attr}="${key}" content="${escape(value)}" />`),
      `<script id="ld-json-page" type="application/ld+json">${JSON.stringify(organization).replace(/</g, '\\u003c')}</script>`,
    ].join('\n    '),
  };
}
