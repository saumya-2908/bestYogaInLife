import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';

interface AsanaEntry {
  title: string;
  imageSrc: string;
  contentHtml: string;
}

const resolveImageUrl = (relative: string) => {
  if (!relative) return '';
  const cleaned = decodeURIComponent(relative).replace(/^\.?\//, '');
  return new URL(`../assets/${cleaned}`, import.meta.url).href;
};

const parseAsanasHtml = (html: string): AsanaEntry[] => {
  if (!html || typeof window === 'undefined' || typeof window.DOMParser === 'undefined') {
    return [];
  }
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const items = Array.from(doc.querySelectorAll('.service-item'));

  return items
    .map((item) => {
      const img = item.querySelector('img');
      const text = item.querySelector('.text');
      if (!text) return null;

      const title = text.querySelector('h5')?.textContent?.trim() ?? '';
      const imageSrc = img?.getAttribute('src') ?? '';
      // Capture the original inner HTML (title + description + benefits) for faithful rendering
      const contentHtml = text.innerHTML
        .replace(/font-size:[^;"]+;?/g, '')
        .replace(/style=""/g, '');

      return {
        title,
        imageSrc: resolveImageUrl(imageSrc),
        contentHtml,
      };
    })
    .filter((entry): entry is AsanaEntry => Boolean(entry && entry.title));
};

export default function AsanasPage() {
  const [entries, setEntries] = useState<AsanaEntry[]>([]);
  const [rawHtml, setRawHtml] = useState<string>('');

  useEffect(() => {
    fetch('/data/yoga_asans_section.html')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load asans content');
        }
        return response.text();
      })
      .then((text) => setRawHtml(text))
      .catch(() => setRawHtml(''));
  }, []);

  useEffect(() => {
    if (!rawHtml) return;
    const parsed = parseAsanasHtml(rawHtml);
    setEntries(parsed);
  }, [rawHtml]);

  const content = useMemo(() => entries, [entries]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader
          title="Yoga Asans"
          background="orange"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Asans' },
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Explore Yogic Postures
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Detailed descriptions and benefits for every asana as presented on Best Yoga In Life. Browse the
              complete collection below.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-5xl md:max-w-6xl">
            <div className="space-y-16">
              {content.map((asana, index) => (
                <RevealOnScroll key={`${asana.title}-${index}`} delay={index * 40}>
                  <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                    {asana.imageSrc && (
                      <div className="relative">
                        <img
                          src={asana.imageSrc}
                          alt={asana.title}
                          className="w-full max-h-[520px] object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-8 md:p-10">
                      <div
                        className="space-y-4 [&>h5]:text-2xl [&>h5]:font-semibold [&>h5]:text-orange-600 [&>h5:nth-of-type(2)]:mt-6 [&>p]:text-gray-700 [&>p]:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: asana.contentHtml }}
                      >
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
              {content.length === 0 && (
                <div className="text-center text-gray-500 py-24">Loading asanas…</div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
