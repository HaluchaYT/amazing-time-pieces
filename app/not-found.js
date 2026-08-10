import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container-x text-center max-w-md">
        <div className="font-serif text-8xl text-champagne-200">404</div>
        <h1 className="font-serif text-3xl mt-4">Off the dial.</h1>
        <p className="mt-4 text-white/70">
          The page you're looking for doesn't exist — or has been moved into the vault.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/" className="btn-gold">Return Home</Link>
          <Link href="/watches" className="btn-ghost">Browse Watches</Link>
        </div>
      </div>
    </section>
  );
}
