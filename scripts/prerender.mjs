import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { pages, renderPage } from '../.prerender/entry-server.js';

const template = (await readFile('dist/index.html', 'utf8'))
  .replace(/<title>[\s\S]*?<\/title>/, '')
  .replace(/<meta\s+name="description"[\s\S]*?\/>/, '');
for (const page of pages) {
  const { head, body } = renderPage(page);
  const path = page.path === '/404' ? 'dist/404.html' : `dist${page.path === '/' ? '' : page.path}/index.html`;
  await mkdir(dirname(path), { recursive: true });
  // 404 uses client rendering so unknown URLs do not hydrate against a different route.
  const html = template.replace('</head>', `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"${page.path === '/404' ? '' : ' data-prerendered="true"'}>${body}</div>`);
  await writeFile(path, html);
}
const urls = pages.filter(page => !page.noindex && page.path !== '/gracias-reto').map(page =>
  `  <url><loc>https://lananifitness.com${page.path === '/' ? '/' : `${page.path}/`}</loc></url>`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`Prerendered ${pages.length} pages with unique metadata and a generated sitemap.`);
