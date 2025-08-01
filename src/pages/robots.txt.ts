export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# サイトマップ
Sitemap: https://yamatoosho.netlify.app/sitemap.xml

# クロール頻度の調整
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
