import { SitemapStream, streamToPromise } from 'sitemap';

import fs from 'fs';

const sitemapStream = new SitemapStream({
    hostname: 'https://www.notariafonseca.cl' // Reemplaza con tu dominio
});

sitemapStream.write({ url: '/', changefreq: 'weekly', priority: 0.8 });

sitemapStream.write({ url: '/Notaria-express', changefreq: 'weekly', priority: 0.6 });

sitemapStream.write({ url: '/Contacto', changefreq: 'weekly', priority: 0.5 });

sitemapStream.write({ url: '/Nosotros', changefreq: 'weekly', priority: 0.4 });

sitemapStream.end();

// Guardar la sitemap en un archivo
streamToPromise(sitemapStream).then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
});