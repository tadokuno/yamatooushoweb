export async function GET() {
  const pages = [
    { url: '/', lastmod: '2025-08-01', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', lastmod: '2025-08-01', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', lastmod: '2025-08-01', changefreq: 'monthly', priority: '0.8' },
    { url: '/events', lastmod: '2025-08-01', changefreq: 'weekly', priority: '0.9' },
    { url: '/access', lastmod: '2025-08-01', changefreq: 'monthly', priority: '0.7' },
    { url: '/kids-class', lastmod: '2025-08-01', changefreq: 'monthly', priority: '0.7' },
    { url: '/rules', lastmod: '2025-08-01', changefreq: 'yearly', priority: '0.5' },
    { url: '/tournament-details', lastmod: '2025-09-24', changefreq: 'monthly', priority: '0.8' }
  ];

  const siteUrl = 'https://yamatoosho.netlify.app';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
