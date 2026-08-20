export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout', '/cart', '/admin', '/api'],
      },
    ],
    sitemap: 'https://amazingtimepieces.com/sitemap.xml',
  };
}
