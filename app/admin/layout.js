export const metadata = {
  title: 'Admin — Amazing Time Pieces',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

// The admin section has its own visual shell — plain and functional,
// not customer-facing. We intentionally do NOT render the marketing
// Header / Footer here.
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-bone-100 text-ink-800">
      {children}
    </div>
  );
}
