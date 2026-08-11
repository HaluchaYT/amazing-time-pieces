# Amazing Time Pieces

A luxury and rare watch dealer website built with Next.js 14 (App Router), React 18, and Tailwind CSS.

## Features

- **Homepage** — hero, featured watches, brand story, sourcing CTA, journal preview, newsletter
- **Watches catalog** — searchable, filterable, sortable inventory with live counts
- **Watch detail pages** — gallery, full specs, related pieces, add-to-cart + buy-now
- **Watch Sourcing** — concierge sourcing service with full request form
- **Blog / Journal** — SEO-friendly index and article template with structured metadata
- **About & Contact** — trust content, authentication standard, contact form
- **Cart** — persisted to `localStorage`, animated add-to-cart, empty state
- **Full demo checkout** — 4-step flow:
  1. Cart review
  2. Customer info (name, email, phone, full shipping address, delivery method, notes) with validation
  3. Payment selection — **Cash on Delivery**, **Bank Wire**, or **Zelle** — each with its own detailed instructions
  4. Order confirmation with unique order ID, itemized details, and next-step payment instructions per method
- **SEO** — per-page metadata, OpenGraph, sitemap.xml, robots.txt, JSON-friendly structure
- **Mobile-first** — sticky nav, hamburger menu, responsive grids, touch-friendly targets throughout

## Design

Dark luxury aesthetic (black + gold) with Cormorant Garamond serif for headings and Inter for body — a nod to Viper Watches and Exquisite Timepieces without copying either.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  page.js                       # Home
  layout.js                     # Root layout + providers
  globals.css                   # Tailwind + custom styles
  watches/
    page.js                     # Catalog
    [id]/page.js                # Detail (SSG)
    [id]/WatchDetail.js         # Client detail UI
  sourcing/                     # Sourcing service + form
  blog/                         # Journal index + posts (SSG)
  about/                        # About page
  contact/                      # Contact + form
  cart/                         # Cart
  checkout/
    page.js                     # Step 2 — customer info
    payment/page.js             # Step 3 — cash/wire/Zelle
    confirmation/page.js        # Step 4 — receipt + instructions
  sitemap.js                    # Auto sitemap
  robots.js                     # Robots.txt
  not-found.js                  # 404

components/
  Header.js                     # Sticky nav + mobile menu + cart badge
  Footer.js
  WatchCard.js                  # Product card
  NewsletterForm.js
  CartProvider.js               # Cart context (localStorage persisted)
  CheckoutContext.js            # Checkout state (sessionStorage persisted)
  CheckoutSteps.js              # Multi-step progress indicator

lib/
  watches.js                    # Product data + helpers
  blog.js                       # Blog data + helpers
```

## Notes

- The checkout flow is a fully functional demo — no real payments are processed. In production, wire it to an order-management backend and send the payment instructions email via a service like Resend, Postmark, or SES.
- Product images are served from Unsplash. Replace with your own before launch.
- All copy is placeholder — swap for actual brand voice before going live.
