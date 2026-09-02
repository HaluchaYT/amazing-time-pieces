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
// range. Sold entries are not clickable and don't create detail pages.
// All photos are real, provided by the owner. Add or remove as pieces move.
export const soldWatches = [
  {
    id: 'sold-rolex-deepsea-james-cameron',
    brand: 'Rolex',
    model: 'Deepsea Sea-Dweller "James Cameron"',
    reference: '126660',
    image: '/watches/sold/rolex-deepsea-cameron.jpg',
    tags: ['Diver', 'Blue Gradient'],
  },
  {
    id: 'sold-rolex-sea-dweller-43',
    brand: 'Rolex',
    model: 'Sea-Dweller 43mm "Red"',
    reference: '126600',
    image: '/watches/sold/rolex-seadweller-red.png',
    tags: ['Diver', '43mm'],
  },
  {
    id: 'sold-rolex-sea-dweller-two-tone',
    brand: 'Rolex',
    model: 'Sea-Dweller Rolesor',
    reference: '126603',
    image: '/watches/sold/rolex-seadweller-two-tone.jpg',
    tags: ['Diver', 'Two-Tone', 'Yellow Gold'],
  },
  {
    id: 'sold-rolex-submariner-bluesy',
    brand: 'Rolex',
    model: 'Submariner Date "Bluesy"',
    reference: '126613LB',
    image: '/watches/sold/rolex-submariner-bluesy.jpg',
    tags: ['Diver', 'Two-Tone', 'Blue Dial'],
  },
  {
    id: 'sold-rolex-oyster-perpetual-blue',
    brand: 'Rolex',
    model: 'Oyster Perpetual (Blue Dial)',
    reference: '114300',
    image: '/watches/sold/rolex-op-blue.jpg',
    tags: ['Dress', 'Blue Dial'],
  },
  {
    id: 'sold-rolex-datejust-twotone',
    brand: 'Rolex',
    model: 'Datejust',
    reference: '16233',
    image: '/watches/sold/s06.jpg',
    tags: ['Dress', 'Two-Tone', 'Jubilee'],
  },
  {
    id: 'sold-rolex-oyster-perpetual-date',
    brand: 'Rolex',
    model: 'Oyster Perpetual Date',
    reference: '15053',
    image: '/watches/sold/rolex-op-date-vintage-twotone.jpg',
    tags: ['Vintage', 'Two-Tone'],
  },
  {
    id: 'sold-rolex-oyster-vintage',
    brand: 'Rolex',
    model: 'Oyster (Vintage)',
    reference: 'c. 1930s',
    image: '/watches/sold/rolex-oyster-vintage-1930s.jpg',
    tags: ['Vintage', 'Manual Wind', 'Rare'],
  },
  {
    id: 'sold-panerai-submersible-luna-rossa',
    brand: 'Panerai',
    model: 'Submersible Luna Rossa',
    reference: 'PAM01039',
    image: '/watches/sold/panerai-submersible-luna-rossa.jpg',
    tags: ['Diver', 'Titanium', 'Luna Rossa'],
  },
  {
    id: 'sold-panerai-submersible-black',
    brand: 'Panerai',
    model: 'Submersible Automatic 42mm',
    reference: 'PAM00683',
    image: '/watches/sold/panerai-submersible-black.jpg',
    tags: ['Diver', 'Automatic', 'Black Dial'],
  },
  {
    id: 'sold-panerai-luminor-gmt',
    brand: 'Panerai',
    model: 'Luminor GMT Automatic',
    reference: 'PAM00029',
    image: '/watches/sold/panerai-luminor-gmt-pam29.jpg',
    tags: ['GMT', 'Automatic'],
  },
  {
    id: 'sold-panerai-luminor-gmt-44',
    brand: 'Panerai',
    model: 'Luminor GMT 44mm',
    reference: 'PAM00088',
    image: '/watches/sold/panerai-luminor-gmt-black.jpg',
    tags: ['GMT', 'Automatic', '44mm'],
  },
  {
    id: 'sold-panerai-luminor-8-giorni',
    brand: 'Panerai',
    model: 'Luminor 8 Giorni',
    reference: 'PAM00915',
    image: '/watches/sold/s13.jpg',
    tags: ['Manual Wind', '8-Day Reserve'],
  },
  {
    id: 'sold-iwc-pilot-mark-xviii-topgun',
    brand: 'IWC',
    model: 'Pilot\'s Mark XVIII TOPGUN',
    reference: 'IW324712',
    image: '/watches/sold/iwc-pilot-topgun.jpg',
    tags: ['Pilot', 'Ceramic', 'TOPGUN'],
  },
  {
    id: 'sold-iwc-pilot-chronograph-bronze',
    brand: 'IWC',
    model: 'Pilot\'s Chronograph (Bronze)',
    reference: 'IW387902',
    image: '/watches/sold/iwc-pilot-chrono-bronze.jpg',
    tags: ['Chronograph', 'Bronze', 'Blue Dial'],
  },
  {
    id: 'sold-tudor-black-bay-gmt',
    brand: 'Tudor',
    model: 'Black Bay GMT "Coke"',
    reference: 'M79830RB',
    image: '/watches/sold/tudor-blackbay-gmt-coke.jpg',
    tags: ['GMT', 'Diver', 'Pepsi/Coke'],
  },
  {
    id: 'sold-tag-heuer-monaco',
    brand: 'TAG Heuer',
    model: 'Monaco Automatic Chronograph',
    reference: 'CAW211P',
    image: '/watches/sold/tag-heuer-monaco.jpg',
    tags: ['Chronograph', 'Blue Dial', 'McQueen'],
  },
  {
    id: 'sold-breitling-navitimer-blue',
    brand: 'Breitling',
    model: 'Navitimer Chronograph',
    reference: 'A24322',
    image: '/watches/sold/breitling-navitimer-blue.jpg',
    tags: ['Chronograph', 'Pilot', 'Blue Dial'],
  },
  {
    id: 'sold-breitling-chronomat-rose-gold',
    brand: 'Breitling',
    model: 'Chronomat B01 Two-Tone',
    reference: 'CB0110',
    image: '/watches/sold/breitling-chronomat-rose-gold.jpg',
    tags: ['Chronograph', 'Rose Gold', 'Two-Tone'],
  },
  {
    id: 'sold-omega-aqua-terra-grey',
    brand: 'Omega',
    model: 'Seamaster Aqua Terra 150m',
    reference: '220.10.41.21.06.001',
    image: '/watches/sold/omega-aqua-terra-grey.jpg',
    tags: ['Master Chronometer', 'Grey Dial'],
  },
  {
    id: 'sold-cartier-roadster-chrono',
    brand: 'Cartier',
    model: 'Roadster Chronograph XL',
    reference: 'W62019X6',
    image: '/watches/sold/cartier-roadster-chrono.png',
    tags: ['Chronograph', 'Automatic'],
  },
  {
    id: 'sold-franck-muller-vanguard',
    brand: 'Franck Muller',
    model: 'Vanguard',
    reference: 'V45 SC DT',
    image: '/watches/sold/franck-muller-vanguard.jpg',
    tags: ['Tonneau', 'Automatic'],
  },
  {
    id: 'sold-jlc-master-compressor-diving-chrono',
    brand: 'Jaeger-LeCoultre',
    model: 'Master Compressor Diving Chronograph',
    reference: 'Q1868470',
    image: '/watches/sold/jlc-master-compressor.webp',
    tags: ['Chronograph', 'Diver'],
  },
  {
    id: 'sold-bell-ross-br03-92-skeleton',
    brand: 'Bell & Ross',
    model: 'BR 03-92 Aero GT Skeleton',
    reference: 'BR0392-SK',
    image: '/watches/sold/bell-ross-br03-92-skeleton.jpg',
    tags: ['Skeleton', 'Automatic', 'Aviation'],
  },
  {
    id: 'sold-bell-ross-brx1-skeleton',
    brand: 'Bell & Ross',
    model: 'BR-X1 Skeleton',
    reference: 'BRX1-CE',
    image: '/watches/sold/bell-ross-brx1-skeleton.jpg',
    tags: ['Skeleton', 'Chronograph', 'Limited'],
  },
  {
    id: 'sold-bell-ross-br03-92-radar',
    brand: 'Bell & Ross',
    model: 'BR 03-92 Radar Ceramic',
    reference: 'BR0392-RADAR-CE',
    image: '/watches/sold/bell-ross-br03-92-radar.jpg',
    tags: ['Ceramic', 'Limited Edition', 'Aviation'],
  },
  {
    id: 'sold-bell-ross-br01-94-red',
    brand: 'Bell & Ross',
    model: 'BR 01-94 Chronograph Red',
    reference: 'BR01-94-RED',
    image: '/watches/sold/bell-ross-br01-94-red.jpg',
    tags: ['Chronograph', 'Limited', 'Red Dial'],
  },
  {
    id: 'sold-norqain-wild-one-burgundy',
    brand: 'Norqain',
    model: 'Wild One (Burgundy)',
    reference: 'NN2000SF01A/NB201/2S1BR.20B',
    image: '/watches/sold/norqain-wild-one-burgundy.jpg',
    tags: ['Chronometer', 'Titanium', 'Bold'],
  },
  {
    id: 'sold-norqain-wild-one-black',
    brand: 'Norqain',
    model: 'Wild One (Black)',
    reference: 'NN2000S02A/B221/2S1BK.20B',
    image: '/watches/sold/norqain-wild-one-black.jpg',
    tags: ['Titanium', 'Sport', 'Automatic'],
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
