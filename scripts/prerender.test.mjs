import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { pages } from '../.prerender/entry-server.js';

for (const page of pages) {
  test(`HTML and metadata: ${page.path}`, async () => {
    const file = page.path === '/404' ? 'dist/404.html' : `dist${page.path === '/' ? '' : page.path}/index.html`;
    const html = await readFile(file, 'utf8');
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.equal((html.match(/<title>/g) || []).length, 1);
    assert.equal((html.match(/name="description"/g) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(page.title.replace(/&/g, '&amp;')));
    assert.ok(html.includes('property="og:image"'));
    assert.ok(html.includes('name="twitter:image"'));
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)) await access(`dist${asset}`);
    if (page.noindex) assert.ok(html.includes('content="noindex, follow"'));
    for (const [, href] of html.matchAll(/<a[^>]* href="(\/[^"#?]*)"/g)) {
      await access(`dist${href === '/' ? '' : href.replace(/\/$/, '')}/index.html`);
    }
  });
}
test('home does not preload YouTube players', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  assert.ok(!html.includes('<iframe'));
  assert.equal((html.match(/aria-label="Reproducir video/g) || []).length, 5);
});
test('sitemap contains every public page and excludes access/error pages', async () => {
  const xml = await readFile('dist/sitemap.xml', 'utf8');
  assert.equal((xml.match(/<loc>/g) || []).length, pages.length - 2);
  assert.ok(!xml.includes('/gracias-reto'));
  assert.ok(!xml.includes('/404'));
});
