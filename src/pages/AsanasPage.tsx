import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { ASANAS } from '../data/asanas';

export default function AsanasPage() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Explore Yogic Postures</h2>
            <p className="text-gray-700 leading-relaxed">
              Yoga Asans harmonise strength, flexibility and awareness. Each posture works on specific muscles,
              organs and energetic pathways to cultivate balance in body and mind. Discover the stories, benefits
              and key actions behind some of the most loved postures from the Best Yoga In Life tradition.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {ASANAS.map((asana) => (
                <article
                  key={asana.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
                >
                  <img src={asana.image} alt={asana.name} className="h-72 w-full object-cover flex-shrink-0" />
                  <div className="p-8 space-y-4 flex flex-col flex-1">
                    <h3 className="text-2xl font-semibold text-orange-600">{asana.name}</h3>
                    <p className="text-gray-700 leading-relaxed flex-1" style={{ minHeight: '160px' }}>
                      {asana.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
