import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import { CheckoutProvider } from '@/components/CheckoutContext';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Amazing Timepieces — Rare & Luxury Watches, Curated',
    template: '%s | Amazing Timepieces',
  },
  description:
    'Amazing Timepieces is a private atelier for the collector — rare Rolex, discontinued Patek Philippe, unworn Audemars Piguet. Authenticated, insured, delivered worldwide.',
  keywords: [
    'luxury watches', 'rare watches', 'watch sourcing', 'Rolex', 'Patek Philippe',
    'Audemars Piguet', 'pre-owned watches', 'vintage watches', 'watch dealer',
    'amazing timepieces', 'authenticated watches', 'concierge watch service',
  ],
  metadataBase: new URL('https://amazingtimepieces.com'),
  openGraph: {
    title: 'Amazing Timepieces — Rare & Luxury Watches, Curated',
    description: 'A private atelier for the collector. Concierge watch sourcing worldwide.',
    type: 'website',
    siteName: 'Amazing Timepieces',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#08080a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <CheckoutProvider>
            <TopBar />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CheckoutProvider>
        </CartProvider>
      </body>
    </html>
  );
}
