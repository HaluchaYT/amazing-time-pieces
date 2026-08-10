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
        <header className="pt-32 sm:pt-40 pb-8">
          <div className="container-x max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
              <Link href="/" className="hover:text-gold-400">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-gold-400">Journal</Link>
              <span className="mx-2">/</span>
              <span className="text-gold-400">{post.category}</span>
            </div>
            <div className="eyebrow">{post.category} · {post.readTime}</div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight">{post.title}</h1>
            <div className="mt-8 flex items-center gap-4 text-sm text-white/60">
              <span>{post.author}</span>
              <span>·</span>
              <time>{date}</time>
            </div>
          </div>
        </header>

        <div className="container-x max-w-4xl">
          <div className="aspect-[16/9] overflow-hidden bg-ink-900">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container-x max-w-3xl py-12 sm:py-16">
          <div className="prose-content space-y-6 text-lg text-white/80 leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-widest border border-white/15 text-white/70 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 border-t border-white/5 bg-ink-900">
        <div className="container-x">
          <div className="eyebrow">Keep Reading</div>
          <h2 className="font-serif text-3xl mt-4 mb-10">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block bg-ink-950 border border-white/5 hover:border-gold-400/30 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-400 mb-2">
                    {p.category}
                  </div>
                  <h3 className="font-serif text-lg leading-tight group-hover:text-gold-300 transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
