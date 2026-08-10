import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
      type: 'article',
      publishedTime: post.date,
    },
    keywords: post.tags,
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <article>
        <header className="pt-24 sm:pt-32 pb-10">
          <div className="container-narrow max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-6">
              <Link href="/" className="hover:text-champagne-200">Home</Link>
              <span className="mx-3 text-champagne-300/50">·</span>
              <Link href="/blog" className="hover:text-champagne-200">Journal</Link>
              <span className="mx-3 text-champagne-300/50">·</span>
              <span className="text-champagne-200">{post.category}</span>
            </div>
            <div className="eyebrow">{post.category} · {post.readTime}</div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05] text-balance">{post.title}</h1>
            <div className="hairline-gold mt-8 w-16" />
            <div className="mt-8 flex items-center gap-4 text-sm text-white/60 italic font-serif">
              <span>{post.author}</span>
              <span className="text-champagne-300/50">·</span>
              <time>{date}</time>
            </div>
          </div>
        </header>

        <div className="container-x max-w-5xl">
          <div className="editorial-frame aspect-[16/9] overflow-hidden bg-ink-900">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container-narrow max-w-3xl py-16 sm:py-20">
          <div className="prose-content space-y-8 text-lg text-white/80 leading-[1.9] font-light">
            {post.content.map((para, i) => (
              <p key={i} className={i === 0 ? 'first-letter:font-serif first-letter:text-6xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-champagne-200' : ''}>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="eyebrow mb-4">Filed Under</div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-[0.35em] border border-champagne-300/25 text-white/70 px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 sm:py-28 border-t border-champagne-300/10 bg-black">
        <div className="container-x">
          <div className="eyebrow">Continue Reading</div>
          <h2 className="font-serif text-3xl sm:text-4xl mt-4 mb-12">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink-900 mb-5">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300 mb-2">
                  {p.category}
                </div>
                <h3 className="font-serif text-xl leading-tight group-hover:text-champagne-200 transition-colors text-balance">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
