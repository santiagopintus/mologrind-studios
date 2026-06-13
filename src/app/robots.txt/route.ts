export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://santiagopintus.github.io/mologrind-studios';

  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
