export const watches = [
  {
    id: 'omega-seamaster-aqua-terra-gmt-worldtimer',
    brand: 'Omega',
    model: 'Seamaster Aqua Terra 150m Master Chronometer GMT',
    reference: '220.12.43.22.03.001',
    price: 8500,
    condition: 'Excellent — With Box & Papers',
    box: true,
    papers: true,
    tags: ['GMT', 'Worldtimer', 'Sport'],
    image: '/watches/omega-seamaster-1.jpg',
    gallery: [
      '/watches/omega-seamaster-1.jpg',
      '/watches/omega-seamaster-2.jpg',
      '/watches/omega-seamaster-3.jpg',
    ],
    description:
      'Watch with original box and papers.',
    featured: true,
    sold: false,
  },
  {
    id: 'panerai-luminor-marina-pam00632',
    brand: 'Panerai',
    model: 'Luminor Marina Logo PAM00632',
    reference: 'PAM 00632',
    price: 4500,
    condition: 'Excellent — With Box & Papers',
    box: true,
    papers: true,
    tags: ['Boutique Edition', 'Manual Wind', 'Limited'],
    image: '/watches/panerai-luminor-1.jpg',
    gallery: [
      '/watches/panerai-luminor-1.jpg',
      '/watches/panerai-luminor-2.jpg',
      '/watches/panerai-luminor-3.jpg',
      '/watches/panerai-luminor-5.jpg',
      '/watches/panerai-luminor-6.jpg',
      '/watches/panerai-luminor-4.jpg',
    ],
    description:
      'Watch with original box and papers. This is a limited boutique production of only 300 units. A 44mm boutique-edition manual-winding watch featuring a distinctive tobacco-brown tropical dial and the historic OP logo.',
    featured: true,
    sold: false,
  },
  {
    id: 'tudor-black-bay-ceramic',
    brand: 'Tudor',
    model: 'Black Bay Ceramic',
    reference: '79210CNU-0001',
    price: 3500,
    condition: 'Excellent — With Box & Papers',
    box: true,
    papers: true,
    tags: ['Ceramic', 'Master Chronometer', 'Extra NATO Strap'],
    image: '/watches/tudor-blackbay-1.jpg',
    gallery: [
      '/watches/tudor-blackbay-1.jpg',
      '/watches/tudor-blackbay-2.jpg',
      '/watches/tudor-blackbay-3.jpg',
      '/watches/tudor-blackbay-4.jpg',
    ],
    description:
      'Watch with original box and papers. Beautiful ceramic with an extra NATO strap.',
    featured: true,
    sold: false,
  },
  {
    id: 'tag-heuer-carrera-twin-time',
    brand: 'TAG Heuer',
    model: 'Carrera Twin-Time Automatic',
    reference: 'WV2116-0',
    price: 1200,
    condition: 'Excellent — Watch Only',
    box: false,
    papers: false,
    tags: ['GMT', 'Automatic', 'Dress'],
    image: '/watches/tag-heuer-1.jpg',
    gallery: [
      '/watches/tag-heuer-1.jpg',
      '/watches/tag-heuer-2.jpg',
    ],
    description: 'Watch only.',
    featured: true,
    sold: false,
  },
];

// Recently sold watches — displayed on the Current Inventory page
// under a "Recently Sold" section so the archive looks full and shows
// range. Add or remove entries here as pieces move. Sold entries are
// not clickable and don't create detail pages.
export const soldWatches = [
  {
    id: 'sold-rolex-deepsea',
    brand: 'Rolex',
    model: 'Deepsea Sea-Dweller',
    reference: '126660',
    image: '/watches/rolex-deepsea.jpg',
    tags: ['Diver', 'Blue James Cameron'],
  },
  {
    id: 'sold-rolex-submariner',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Diver', 'Icon'],
  },
  {
    id: 'sold-patek-nautilus',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sport-Luxury', 'Grail'],
  },
  {
    id: 'sold-ap-royal-oak',
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST',
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sport-Luxury', 'Icon'],
  },
  {
    id: 'sold-omega-speedmaster',
    brand: 'Omega',
    model: 'Speedmaster Moonwatch',
    reference: '310.30.42.50.01.001',
    image: 'https://images.unsplash.com/photo-1548171245-6d3e2a5c0d21?auto=format&fit=crop&w=1200&q=80',
    tags: ['Chronograph', 'Space'],
  },
  {
    id: 'sold-cartier-santos',
    brand: 'Cartier',
    model: 'Santos de Cartier',
    reference: 'WSSA0018',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Dress-Sport', 'Design'],
  },
  {
    id: 'sold-iwc-portugieser',
    brand: 'IWC',
    model: 'Portugieser Chronograph',
    reference: 'IW371617',
    image: 'https://images.unsplash.com/photo-1595923533867-9ba30b02ae0a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Chronograph', 'Dress'],
  },
  {
    id: 'sold-tudor-blackbay58',
    brand: 'Tudor',
    model: 'Black Bay 58',
    reference: 'M79030N',
    image: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&w=1200&q=80',
    tags: ['Diver', 'Vintage-Inspired'],
  },
];

export function getWatchById(id) {
  return watches.find((w) => w.id === id);
}

export function getFeaturedWatches() {
  return watches.filter((w) => w.featured && !w.sold);
}

export function getAvailableWatches() {
  return watches.filter((w) => !w.sold);
}

export function getSoldWatches() {
  return soldWatches;
}

export function getAllBrands() {
  return Array.from(new Set(watches.filter((w) => !w.sold).map((w) => w.brand))).sort();
}

export function formatPrice(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}
