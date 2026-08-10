import { watches } from '@/lib/watches';
import { posts } from '@/lib/blog';

export default function sitemap() {
  const base = 'https://amazingtimepieces.com';
  const now = new Date();
  const staticRoutes = ['', '/watches', '/sourcing', '/blog', '/reviews', '/about', '/contact', '/cart', '/checkout'];

  const routes = staticRoutes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.7,
  }));

  const watchRoutes = watches.map((w) => ({
    url: `${base}/watches/${w.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...watchRoutes, ...blogRoutes];
}
