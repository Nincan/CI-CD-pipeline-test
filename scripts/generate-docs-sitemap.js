/* eslint-disable @typescript-eslint/no-var-requires */
const bytes = require('bytes');
const path = require('path');
const globby = require('globby');

const fileUtils = require('../utils/fileUtils');
const emoji = require('../utils/emoji');
const colors = require('../utils/colors');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'packages/docs');
const PAGES_DIR = path.join(DOCS_DIR, 'pages');
const SITEMAP_FILE_PATH = path.join(DOCS_DIR, 'public/sitemap.xml');

const PATHS_TO_EXCLUDE = ['api', '_app.tsx', '_document.tsx'];

(async () => {
  try {
    fileUtils.log(emoji.hourglass, 'Generating sitemap.xml...');
    const pages = await globby([PAGES_DIR, ...PATHS_TO_EXCLUDE.map(_path => `!${path.join(PAGES_DIR, _path)}`)]);

    const sitemapContent = `\
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .sort()
  .map(page => {
    const route = page.replace(PAGES_DIR, '').replace('.tsx', '').replace('.mdx', '').replace('/index', '');

    return `\
  <url>
    <loc>${`https://frontend.sprinklr.com/spaceweb${route}`}</loc>
  </url>`;
  })
  .join('\n')}
</urlset>`;

    fileUtils.writeFile(SITEMAP_FILE_PATH, sitemapContent);
    fileUtils.log(
      emoji.disk,
      'Saved sitemap.xml to',
      colors.file(path.relative(ROOT_DIR, SITEMAP_FILE_PATH)),
      'Size:',
      colors.info(bytes(sitemapContent.length))
    );
    fileUtils.log(emoji.yes, 'Finished!');
  } catch (error) {
    fileUtils.error(error);
  }
})();
