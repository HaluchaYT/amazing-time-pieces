import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import { CheckoutProvider } from '@/components/CheckoutContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Amazing Time Pieces — Luxury & Rare Watches, Curated',
    template: '%s | Amazing Time Pieces',
  },
  description:
    'Amazing Time Pieces is a curated dealer of luxury, vintage, and rare timepieces. Sourcing, authentication, and worldwide delivery from Rolex to Patek Philippe.',
  keywords: [
    'luxury watches',
    'rare watches',
    'watch sourcing',
    'Rolex',
    'Patek Philippe',
    'Audemars Piguet',
    'pre-owned watches',
    'vintage watches',
  ],
  metadataBase: new URL('https://amazingtimepieces.com'),
  openGraph: {
    title: 'Amazing Time Pieces — Luxury & Rare Watches, Curated',
    description:
      'Curated luxury and rare timepieces with concierge sourcing worldwide.',
    type: 'website',
    siteName: 'Amazing Time Pieces',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <CheckoutProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CheckoutProvider>
        </CartProvider>
      </body>
    </html>
  );
}
