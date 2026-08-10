export const posts = [
  {
    slug: 'buying-your-first-rolex-guide',
    title: 'Buying Your First Rolex: A Complete Guide for 2026',
    excerpt:
      'Everything you need to know before dropping five figures on the crown — from authentication to which references hold value.',
    author: 'The Amazing Time Pieces Team',
    date: '2026-07-14',
    readTime: '9 min',
    category: 'Buying Guides',
    cover:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1600&q=80',
    tags: ['Rolex', 'Buying Guide', 'Investment'],
    content: [
      'The Rolex market has matured. Where five years ago you could walk into an authorized dealer and, with patience, secure a Submariner at retail, today the reality is a mixed landscape of authorized allocations, secondary market premiums, and — for the disciplined buyer — genuine opportunity.',
      'Before you spend a dollar, decide what you are actually buying. Are you buying a watch to wear? To resell? To hand down? Each answer changes which reference you should chase and what condition you should accept.',
      'Start with the pillars: box, papers, service history, and condition. A complete set — the watch, the original box, the guarantee card, all links, hang tags, and any original receipt — commands a premium of 10–25% over a naked example in most references. Do not shortcut this.',
      'Authentication is the single most important step. Look at the caseback, the crown logo, the dial printing under 10x magnification, and the movement stamps. If you are not sure, work with a dealer who is willing to be inspected in return — every reputable dealer welcomes a third-party authentication.',
      'Finally, buy the watch, not the story. Marketing narratives push prices; craftsmanship and condition preserve them. A good rule: if you would be happy to wear it for ten years without ever selling, you have bought correctly.',
    ],
  },
  {
    slug: 'nautilus-vs-royal-oak',
    title: 'Nautilus vs Royal Oak: Which Integrated Sports Watch Wins?',
    excerpt:
      'Two icons designed by the same man. We compare wearability, movement, resale, and long-term appeal side by side.',
    author: 'The Amazing Time Pieces Team',
    date: '2026-06-22',
    readTime: '7 min',
    category: 'Comparisons',
    cover:
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1600&q=80',
    tags: ['Patek Philippe', 'Audemars Piguet', 'Comparisons'],
    content: [
      'Gerald Genta designed both — the Royal Oak in 1972 and the Nautilus in 1976. Both broke conventions with integrated bracelets, exposed screws, and porthole-inspired case profiles. Half a century later, both dominate the sport-luxury conversation.',
      'The Royal Oak wears sharper. Its octagonal bezel and Grande Tapisserie dial are unmistakable across a room. The Nautilus wears softer, with rounded flanks and horizontal grooves that catch light rather than throw it.',
      'On the wrist, the 41mm Royal Oak 15500 measures thick but sits close, while the 5711 Nautilus is thinner and lower-profile — a genuinely elegant sports watch. Both use in-house movements: Caliber 4302 in the Royal Oak, Caliber 26-330 in the Nautilus.',
      'For resale, the 5711 has historically outperformed — but that gap has narrowed since production ended in 2021. For long-term wearability, most collectors we work with keep the Royal Oak in the rotation longer.',
    ],
  },
  {
    slug: 'watch-sourcing-explained',
    title: 'What Is Watch Sourcing — And Why It Beats the Waitlist',
    excerpt:
      'Behind the scenes of how a private dealer locates a discontinued reference for a client in under 72 hours.',
    author: 'The Amazing Time Pieces Team',
    date: '2026-05-30',
    readTime: '6 min',
    category: 'Insider',
    cover:
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1600&q=80',
    tags: ['Sourcing', 'Concierge'],
    content: [
      'The wait for an in-demand steel Rolex or a discontinued Nautilus can stretch into years at an authorized dealer. A specialist sourcing service exists to compress that timeline — often to days.',
      'How does it work? A brief. The client tells us the reference, the acceptable condition band, whether papers are required, and the maximum they will pay. From there, we run the request through our network of authenticated dealers, private collectors, and estate sources.',
      'Every candidate is physically inspected, authenticated, and photographed against our standard reference points before it is offered to the client. If the piece does not clear inspection, the client never hears about it.',
      'Sourcing is not a markup game — it is a time and trust game. The client pays for the network, the diligence, and the guarantee that what arrives is exactly what was agreed.',
    ],
  },
  {
    slug: 'how-to-authenticate-a-daytona',
    title: 'How to Authenticate a Rolex Daytona in 60 Seconds',
    excerpt:
      'The three details a professional checks first before opening the caseback — and what a red flag looks like.',
    author: 'The Amazing Time Pieces Team',
    date: '2026-04-11',
    readTime: '5 min',
    category: 'Education',
    cover:
      'https://images.unsplash.com/photo-1548171245-6d3e2a5c0d21?auto=format&fit=crop&w=1600&q=80',
    tags: ['Rolex', 'Daytona', 'Authentication'],
    content: [
      'Counterfeit Daytonas have improved dramatically. The days of misspelled dials and misaligned subdials are largely over. Today, authentication is about consistency — every element must agree with every other element for the reference and the production year.',
      'First, check the crown alignment against the "6" position. Rolex crowns sit at a specific angle relative to the case flanks and the coronet applies uniformly. A crown that reads soft or slightly off-center is a red flag.',
      'Second, look at the Cerachrom bezel insert under angled light. Genuine ceramic has a specific depth; PVD-coated fakes read flat and reflect harshly.',
      'Third, examine the subdial rings. On genuine Daytonas the concentric machining is crisp to the naked eye — on replicas it softens under a 10x loupe.',
      'These are starting points, not endpoints. Always finish an authentication with a movement inspection by a qualified watchmaker before any transaction closes.',
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 3) {
  return posts.slice(0, limit);
}
