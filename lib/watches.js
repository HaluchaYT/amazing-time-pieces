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
  },
];

export function getWatchById(id) {
  return watches.find((w) => w.id === id);
}

export function getFeaturedWatches() {
  return watches.filter((w) => w.featured);
}

export function getAllBrands() {
  return Array.from(new Set(watches.map((w) => w.brand))).sort();
}

export function formatPrice(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}
