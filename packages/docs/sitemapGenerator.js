const path = require('path');
const globby = require('globby');
const fs = require('fs');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const PAGES_DIR = path.join(DOCS_DIR, 'pages');
const SITEMAP_FILE_PATH = path.join(DOCS_DIR, './public/sitemap.xml');

const PATHS_TO_EXCLUDE = ['api', '_app.tsx', '_document.tsx'];

(async () => {
  try {
    const pages = await globby([
      `${PAGES_DIR}/**/*.tsx`,
      `${PAGES_DIR}/**/*.mdx`,
      ...PATHS_TO_EXCLUDE.map(_path => `!${path.join(PAGES_DIR, _path)}`)
    ]);

    const sitemapContent = `\
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .sort()
  .map(page => {
    const route = page.replace(PAGES_DIR, '').replace('.tsx', '').replace('.mdx', '').replace('/index', '');

    return `\
  <url>
    <loc>${`http://localhost:8080${route}`}</loc>
  </url>`;
  })
  .join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_FILE_PATH, sitemapContent);
    console.log('Finished!');
  } catch (error) {
    console.error(error);
  }
})();
