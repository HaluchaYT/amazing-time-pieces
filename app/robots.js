export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout', '/cart'],
      },
    ],
    sitemap: 'https://amazingtimepieces.com/sitemap.xml',
  };
}
