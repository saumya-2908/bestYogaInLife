import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import {
  indiaPhoto1,
  indiaPhoto2,
  indiaPhoto3,
} from '../assets/images';

const yogaTypes = [
  {
    title: 'Hatha Yoga',
    description:
      'Introduced by Yogi Swatmarama in the 15th century, Hatha focuses on balancing positive and negative energies through postures such as Bikram, Ashtanga and Kundalini Yoga.',
  },
  {
    title: 'Kundalini Yoga',
    description:
      'A spiritual practice combining postures, dynamic breathing, meditative focus and mantra to awaken the root chakra and increase awareness.',
  },
  {
    title: 'Raja Yoga',
    description:
      'One of the six traditional schools of Hindu philosophy, Raja Yoga develops mastery over the mind so that thoughts can be directed toward higher consciousness.',
  },
  {
    title: 'Karma Yoga',
    description:
      'The yoga of selfless action, teaching us to serve without attachment to results, as illustrated in the dialogue between Lord Krishna and Arjuna in the Bhagavad Gita.',
  },
  {
    title: 'Bhakti Yoga',
    description:
      'The devotional path that cultivates love for the divine, aiming for liberation through complete surrender and unity with God.',
  },
];

const historyPeriods = [
  {
    title: 'Vedic Period',
    description:
      'The Vedas contain the oldest known Yogic teachings. Rituals and ceremonies were practiced to transcend the limitations of the mind under the guidance of rishis.',
  },
  {
    title: 'Pre-Classical Period',
    description:
      'Marked by the Upanishads, this period saw the integration of Yoga philosophy into Hinduism and Buddhism, with meditation and tapas central to the practice.',
  },
  {
    title: 'Classical Period',
    description:
      'Patanjali’s Yoga Sutras codified the eight limbs of Raja Yoga, emphasizing ethical observances, postures, breath control, concentration and meditation.',
  },
  {
    title: 'Post-Classical Period',
    description:
      'Yoga opened to the world, focusing on living fully in the present. Masters like Swami Vivekananda introduced Yoga to the West, inspiring global adoption.',
  },
];

export default function YogaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader
          title="Yoga"
          background="orange"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Yoga' },
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">India & Yoga</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    In an age where we are constantly competing with someone or something, we generally fail to
                    see the ultimate bigger picture. Yoga may not directly provide the answers, but it equips us
                    with the means to explore and discover them for ourselves.
                  </p>
                  <p>
                    Yoga in Sanskrit means “to join” — the union of body, mind and soul. From a spiritual
                    perspective, Yoga dissolves the ego into the higher self through disciplined practice, paving
                    the path to liberation from the cycle of birth and death.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={indiaPhoto1} alt="Yoga heritage 1" className="rounded-lg shadow-lg object-cover" />
                <img src={indiaPhoto2} alt="Yoga heritage 2" className="rounded-lg shadow-lg object-cover" />
                <img
                  src={indiaPhoto3}
                  alt="Ancient yoga history"
                  className="rounded-lg shadow-lg object-cover col-span-2"
                />
              </div>
            </div>

            <div className="mt-16 space-y-6 text-gray-700 leading-relaxed max-w-5xl">
              <h3 className="text-2xl font-semibold text-gray-800">Ancient History of Yoga in India</h3>
              <p>
                Archaeological discoveries in the Indus Valley unearthed seals depicting yogic postures, pointing
                to the practice’s ancient roots. Sacred texts like the Rig Veda, Yajur Veda and Bhagavad Gita
                refer to meditation, pranayama and the quest for self-realisation. Patanjali later codified these
                teachings in the Yoga Sutras, outlining Yoga as the path for the soul to know its true nature.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800">Yoga in the Modern Era</h3>
              <p>
                Swami Vivekananda’s address at the World Parliament of Religions in 1893 introduced Yoga to the
                world stage. Throughout the 19th and 20th centuries, Indian masters travelled widely, sharing
                Yoga’s profound benefits for body, mind and soul. Today, Yoga continues to evolve while staying
                rooted in timeless wisdom.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Types of Yoga</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yogaTypes.map((type) => (
                <div key={type.title} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-orange-600 mb-3">{type.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">History of Yoga</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {historyPeriods.map((period) => (
                <div key={period.title} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{period.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{period.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
