import Link from 'next/link';
import { platforms, orderedPlatforms } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews — What Clients Say',
  description:
    'Verified feedback from Amazing Time Pieces buyers across eBay, Google, and Yelp — a 100% positive record from over two hundred sixty completed transactions.',
};

const ICONS = {
  ebay: (
    <svg viewBox="0 0 100 40" className="h-8 w-auto" aria-label="eBay">
      <text x="0" y="30" fontFamily="Arial" fontWeight="700" fontSize="30" fill="#E53238">e</text>
      <text x="19" y="30" fontFamily="Arial" fontWeight="700" fontSize="30" fill="#0064D2">b</text>
      <text x="38" y="30" fontFamily="Arial" fontWeight="700" fontSize="30" fill="#F5AF02">a</text>
      <text x="57" y="30" fontFamily="Arial" fontWeight="700" fontSize="30" fill="#86B817">y</text>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 100 40" className="h-7 w-auto" aria-label="Google">
      <text x="0" y="30" fontFamily="Arial" fontWeight="500" fontSize="28" fill="#4285F4">G</text>
      <text x="20" y="30" fontFamily="Arial" fontWeight="500" fontSize="28" fill="#EA4335">o</text>
      <text x="38" y="30" fontFamily="Arial" fontWeight="500" fontSize="28" fill="#FBBC05">o</text>
      <text x="56" y="30" fontFamily="Arial" fontWeight="500" fontSize="28" fill="#4285F4">g</text>
      <text x="74" y="30" fontFamily="Arial" fontWeight="500" fontSize="28" fill="#34A853">l</text>
      <text x="82" y="30" fontFamily="Arial" fontWeight="500" fontSize="28" fill="#EA4335">e</text>
    </svg>
  ),
  yelp: (
    <svg viewBox="0 0 60 40" className="h-7 w-auto" aria-label="Yelp">
      <text x="0" y="30" fontFamily="Arial" fontWeight="700" fontSize="26" fill="#D32323">yelp</text>
    </svg>
  ),
};

function Stars({ value = 5, size = 16 }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" className={i < value ? 'text-oxblood-600' : 'text-ink-200'}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
      </svg>
    );
  }
  return <div className="flex gap-0.5">{stars}</div>;
}

export default function ReviewsPage() {
  const ebay = platforms.ebay;

  return (
    <>
      {/* HERO */}
      <section className="pt-20 sm:pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600">Home</Link>
          </div>
          <div className="eyebrow">In the Words of Our Clients</div>
          <div className="hairline-gold mt-8 w-16" />
          <p className="mt-8 max-w-2xl text-ink-600 leading-relaxed text-lg font-light">
            A decade of transactions on eBay — a perfect record from over two hundred sixty completed sales. Read every buyer comment on our eBay store, or write your own.
          </p>
        </div>
      </section>

      {/* AGGREGATE STATS */}
      <section className="border-y border-oxblood-600/15 bg-bone-50">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-100">
          <div className="py-10 sm:py-14 text-center px-4">
            <div className="font-serif text-4xl sm:text-5xl text-oxblood-600">100%</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-ink-600">Positive Feedback</div>
            <div className="mt-1 text-[10px] italic text-ink-400 font-serif">eBay verified</div>
          </div>
          <div className="py-10 sm:py-14 text-center px-4">
            <div className="font-serif text-4xl sm:text-5xl text-oxblood-600">{ebay.totalSold}+</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-ink-600">Verified Transactions</div>
            <div className="mt-1 text-[10px] italic text-ink-400 font-serif">eBay to date</div>
          </div>
          <div className="py-10 sm:py-14 text-center px-4">
            <div className="font-serif text-4xl sm:text-5xl text-oxblood-600">2019</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-ink-600">Established</div>
            <div className="mt-1 text-[10px] italic text-ink-400 font-serif">Buying · Selling · Trading for over a decade</div>
          </div>
          <div className="py-10 sm:py-14 text-center px-4">
            <div className="font-serif text-4xl sm:text-5xl text-oxblood-600">5.0</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-ink-600">Average Rating</div>
            <div className="mt-1 text-[10px] italic text-ink-400 font-serif">eBay verified</div>
          </div>
        </div>
      </section>

      {/* EBAY FEEDBACK — moved above platform cards per owner */}
      <section className="py-20 sm:py-28 bg-bone-100">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="eyebrow">Verified · eBay</div>
              <h2 className="section-title mt-6 text-balance">
                From <span className="italic text-oxblood-600">Amazing Timepieces LLC</span>.
              </h2>
              <div className="hairline-gold mt-6 w-16" />
              <p className="mt-6 text-ink-600 max-w-xl leading-relaxed">
                Buyer feedback from our eBay store, where {ebay.totalSold}+ timepieces have shipped worldwide with a perfect {ebay.positive}% positive record.
              </p>
            </div>
            <a
              href={ebay.feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.4em] text-oxblood-600 link-underline self-start md:self-end"
            >
              All feedback on eBay ↗
            </a>
          </div>

          {ebay.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {ebay.reviews.map((r, i) => (
                <article
                  key={i}
                  className="bg-bone-50 border border-ink-100 p-8 hover:border-oxblood-600/30 transition-all duration-500"
                >
                  <div className="flex items-center justify-between">
                    <Stars value={r.rating} />
                    <time className="text-[10px] uppercase tracking-[0.35em] text-ink-400">
                      {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </time>
                  </div>
                  {r.title && (
                    <h3 className="font-serif text-xl sm:text-2xl mt-5 leading-tight text-ink-800">
                      "{r.title}"
                    </h3>
                  )}
                  <p className={`text-ink-600 leading-relaxed ${r.title ? 'mt-4' : 'mt-5 font-serif italic text-lg'}`}>
                    {r.body}
                  </p>
                  <div className="mt-6 pt-5 border-t border-ink-100 flex items-center justify-between">
                    <span className="text-sm text-ink-500 italic font-serif">— {r.author}</span>
                    <span className="text-[9px] uppercase tracking-[0.4em] text-oxblood-600">Verified Buyer</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-bone-50 border border-ink-100 p-10 sm:p-14 text-center">
              <div className="flex items-center justify-center gap-3">
                <Stars value={5} size={20} />
                <span className="font-serif text-3xl text-ink-800">5.0</span>
              </div>
              <p className="mt-6 font-serif italic text-2xl text-ink-800 max-w-xl mx-auto leading-tight text-balance">
                "{ebay.tagline}"
              </p>
              <p className="mt-6 text-ink-600 max-w-lg mx-auto leading-relaxed">
                Individual buyer comments live on eBay's verified feedback page. Read every review from every one of our {ebay.totalSold}+ buyers — signed, dated, and independent.
              </p>
              <a
                href={ebay.feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oxblood mt-10 inline-flex"
              >
                Read All Feedback on eBay ↗
              </a>
              <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-ink-400">
                Store · {ebay.handle} · {ebay.followers} followers
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PLATFORM SUMMARY CARDS — now below eBay section */}
      <section className="py-20 sm:py-28 bg-bone-50 border-t border-ink-100">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow">Across the Platforms</div>
            <h2 className="section-title mt-6">What our clients say.</h2>
            <div className="hairline-gold mt-6 mx-auto w-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {orderedPlatforms.map((key) => {
              const p = platforms[key];
              const isLive = p.verified && p.url;
              return (
                <div key={key} className={`p-8 bg-bone-100 border transition-all duration-500 ${
                  isLive ? 'border-oxblood-600/40 hover:border-oxblood-600 hover:shadow-card' : 'border-ink-100'
                }`}>
                  <div className="flex items-center justify-between mb-6 h-8">
                    {ICONS[key]}
                    {isLive && (
                      <span className="text-[9px] uppercase tracking-[0.35em] text-oxblood-600 border border-oxblood-600/40 px-2.5 py-1">
                        Verified
                      </span>
                    )}
                  </div>

                  {isLive ? (
                    <>
                      <div className="flex items-baseline gap-3">
                        <div className="font-serif text-5xl text-ink-800">{p.rating.toFixed(1)}</div>
                        <Stars value={Math.round(p.rating)} size={18} />
                      </div>
                      <div className="mt-2 text-sm text-ink-500">
                        {p.positive === 100
                          ? `${p.positive}% positive feedback`
                          : `${p.reviewCount ?? p.totalSold} verified transactions`}
                      </div>
                      <div className="hairline-gold my-6 w-10" />
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-ink-600">
                          <span>Store name</span>
                          <span className="text-ink-800 font-serif">{p.handle}</span>
                        </div>
                        {p.totalSold != null && (
                          <div className="flex justify-between text-ink-600">
                            <span>Items sold</span>
                            <span className="text-ink-800 font-serif">{p.totalSold}</span>
                          </div>
                        )}
                        {p.followers != null && (
                          <div className="flex justify-between text-ink-600">
                            <span>Followers</span>
                            <span className="text-ink-800 font-serif">{p.followers}</span>
                          </div>
                        )}
                      </div>
                      <a
                        href={p.feedbackUrl || p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-oxblood-600 link-underline"
                      >
                        Read Buyer Feedback ↗
                      </a>
                    </>
                  ) : (
                    <>
                      <div className="font-serif text-3xl text-ink-500 italic">
                        Profile coming
                      </div>
                      <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                        Our {p.name} profile is being set up. Client feedback will appear here once verified.
                      </p>
                      <div className="hairline-gold my-6 w-10" />
                      <p className="text-xs text-ink-400 italic font-serif">
                        Have you purchased with us? We would be honored if you shared your experience on {p.name} once our profile goes live.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-oxblood-600 link-underline"
                      >
                        Notify Me When Live →
                      </Link>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="relative py-24 sm:py-32 bg-ink-800 text-bone-50 overflow-hidden border-t-2 border-oxblood-600">
        <div className="absolute inset-0 bg-radial-fade opacity-60" />
        <div className="relative container-narrow text-center">
          <div className="uppercase tracking-[0.4em] text-[10px] text-oxblood-300 font-medium">
            Bought with us?
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6 text-bone-50 text-balance">
            Your words <span className="italic text-oxblood-300">matter.</span>
          </h2>
          <div className="hairline-gold mt-6 mx-auto w-16" />
          <p className="mt-8 text-bone-100/80 leading-relaxed max-w-xl mx-auto">
            If we have earned it, a short honest review on the platform of your choice helps future collectors find us. If we have missed the mark, we would rather hear it from you directly — before anywhere else.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={ebay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-oxblood-600 text-bone-50 font-medium tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:bg-oxblood-500"
            >
              Leave eBay Feedback
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-bone-100/40 text-bone-50 font-medium tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:bg-bone-50 hover:text-ink-800"
            >
              Contact Us Directly
            </Link>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-bone-100/40">
            Every review — good or otherwise — is read personally by the owner.
          </p>
        </div>
      </section>
    </>
  );
}
