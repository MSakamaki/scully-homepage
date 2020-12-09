import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { get } from 'https';

interface articles {
  data: {
    articles: { id: string }[];
  };
}

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://scully-homepage-5df8c.web.app/',
  sitemapFilename: 'sitemap.xml',
  merge: false,
  trailingSlash: true,
  changeFreq: 'monthly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404'],
  routes: {},
});

export const extraRoutes = new Promise((resolve, reject) => {
  get(
    'https://api-ap-northeast-1.graphcms.com/v2/ckgioul2y9kcd01zb36y9ffqg/master?query=query MyQuery {   articles {     id   } }',
    (res) => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', (d) => (data += d));
      res.on('end', () => resolve(JSON.parse(data || '[]')));
      res.on('error', reject);
    }
  );
}).then((articles: articles) => {
  return articles.data.articles.map((article) => `/article/${article.id}`);
});

export const config: ScullyConfig = {
  projectRoot: './apps/homepage/src',
  projectName: 'homepage',
  outDir: './dist/static',
  routes: {},
  extraRoutes: extraRoutes,
};
