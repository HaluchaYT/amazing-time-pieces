// ============================================================
// REVIEWS DATA
// ------------------------------------------------------------
// eBay: CONFIRMED live data from ebay.com/str/timepromoter
//   - 100% positive feedback
//   - 267 items sold
//   - 16 followers
//   - Tagline: "Dealer/broker for the timepiece you ever wanted"
//   Individual buyer comments are inside eBay's SPA feedback tab
//   which required a captcha, so the samples below are illustrative
//   placeholders. Replace `platforms.ebay.reviews` with the real
//   comments you copy from the eBay feedback page.
//
// Google: No public Google Business Profile was found for
//   Amazing Timepieces at the San Carlos address. Placeholders below.
//   Replace `platforms.google.*` once the owner claims / provides the profile URL.
//
// Yelp: Same — no public Yelp page located. Update `platforms.yelp.*`
//   when a URL is provided.
// ============================================================

export const platforms = {
  ebay: {
    name: 'eBay',
    handle: 'Time Promoter',
    url: 'https://www.ebay.com/str/timepromoter',
    rating: 5.0,
    positive: 100,
    totalSold: 267,
    followers: 16,
    verified: true,
    tagline: 'Dealer/broker for the timepiece you ever wanted',
    reviews: [
      {
        author: 'p***a',
        date: '2026-06-14',
        rating: 5,
        title: 'Exactly as described — arrived in 3 days',
        body: 'Watch arrived exactly as photographed, in original packaging with all papers. Seller communicated at every step. Would purchase from again without hesitation.',
      },
      {
        author: 'j***h',
        date: '2026-05-02',
        rating: 5,
        title: 'Fast shipping, perfect condition',
        body: 'Beautiful timepiece, perfectly authenticated. Packaging was thorough and shipping was quick. Great communication throughout.',
      },
      {
        author: 'm***n',
        date: '2026-03-21',
        rating: 5,
        title: 'Real dealer, real watch',
        body: 'Was nervous buying a five-figure watch on eBay. Time Promoter made it painless — answered every question, sent extra photos, and the piece arrived exactly as promised.',
      },
      {
        author: 'r***s',
        date: '2026-02-10',
        rating: 5,
        title: 'A+ transaction',
        body: 'Second watch I have bought from this seller. Both arrived in mint condition. Trusted dealer.',
      },
    ],
  },

  google: {
    name: 'Google',
    handle: 'Amazing Timepieces',
    url: null, // TODO: paste Google Business Profile / Maps URL here
    rating: null,
    reviewCount: null,
    verified: false,
    reviews: [], // TODO: populate with real Google reviews when URL is provided
  },

  yelp: {
    name: 'Yelp',
    handle: 'Amazing Timepieces',
    url: null, // TODO: paste Yelp business URL here
    rating: null,
    reviewCount: null,
    verified: false,
    reviews: [], // TODO: populate with real Yelp reviews when URL is provided
  },
};

export const orderedPlatforms = ['ebay', 'google', 'yelp'];
