const Sitemap = require('sitemap');
const fs = require('fs');

const sitemap = Sitemap.createSitemap({
    hostname: 'https://www.notariafonseca.cl', // Reemplaza con tu dominio
    urls: [
        { url: '/', changefreq: 'weekly', priority: 0.8 },
        { url: '/', changefreq: 'weekly', priority: 0.7 },
        { url: '/Notaria-express', changefreq: 'weekly', priority: 0.6 },
        { url: '/Contacto', changefreq: 'weekly', priority: 0.5 },
        { url: '/Nosotros', changefreq: 'weekly', priority: 0.4 },
        // Agrega más URLs aquí
    ]
});

// Guardar la sitemap en un archivo
fs.writeFileSync('./public/sitemap.xml', sitemap.toString());