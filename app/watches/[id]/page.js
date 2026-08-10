import { notFound } from 'next/navigation';
import Link from 'next/link';
import { watches, getWatchById } from '@/lib/watches';
import WatchDetail from './WatchDetail';

export function generateStaticParams() {
  return watches.map((w) => ({ id: w.id }));
}

export function generateMetadata({ params }) {
  const watch = getWatchById(params.id);
  if (!watch) return {};
  return {
    title: `${watch.brand} ${watch.model} ${watch.reference}`,
    description: watch.description,
    openGraph: {
      title: `${watch.brand} ${watch.model} — ${watch.reference}`,
      description: watch.description,
      images: [watch.image],
    },
  };
}

export default function WatchDetailPage({ params }) {
  const watch = getWatchById(params.id);
  if (!watch) notFound();
  const related = watches.filter((w) => w.id !== watch.id).slice(0, 3);
  return <WatchDetail watch={watch} related={related} />;
}
