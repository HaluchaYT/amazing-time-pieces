// ============================================================
// REVIEWS DATA
// ------------------------------------------------------------
// eBay: CONFIRMED live data from ebay.com/str/timepromoter
//   - Store name: Time Promoter
//   - 100% positive feedback
//   - 267 items sold
//   - 16 followers
//   - Tagline: "Dealer/broker for the timepiece you ever wanted"
//
//   Individual buyer comment text sits inside eBay's client-rendered
//   feedback tab which requires an authenticated session. To populate
//   `platforms.ebay.reviews`, sign into eBay and copy each row from:
//     https://www.ebay.com/fdbk/feedback_profile/timepromoter
//   into the array shape shown below.
//
// Google / Yelp: No public Business Profile or Yelp listing was
//   located for Amazing Timepieces at the San Carlos address.
//   Once the owner claims profiles, paste the URL into `url` and
//   populate `reviews[]` in the same shape as eBay.
// ============================================================

export const platforms = {
  ebay: {
    name: 'eBay',
    handle: 'Time Promoter',
    url: 'https://www.ebay.com/str/timepromoter',
    feedbackUrl: 'https://www.ebay.com/fdbk/feedback_profile/timepromoter',
    rating: 5.0,
    positive: 100,
    totalSold: 267,
    followers: 16,
    verified: true,
    tagline: 'Dealer/broker for the timepiece you ever wanted',
    // Populate this array with real buyer feedback from the eBay
    // feedback tab. Each entry: { author, date (YYYY-MM-DD), rating (1-5), body }
    reviews: [],
  },

  google: {
    name: 'Google',
    handle: 'Amazing Timepieces',
    url: null,       // paste Google Business Profile URL when live
    rating: null,
    reviewCount: null,
    verified: false,
    reviews: [],
  },

  yelp: {
    name: 'Yelp',
    handle: 'Amazing Timepieces',
    url: null,       // paste Yelp business URL when live
    rating: null,
    reviewCount: null,
    verified: false,
    reviews: [],
  },
};

export const orderedPlatforms = ['ebay', 'google', 'yelp'];
