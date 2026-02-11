import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import {
  kundaliniMain,
  kundaliniSecondary,
  muladharImg,
  swadhishthanImg,
  manipuraImg,
  anahataImg,
  vishuddhaImg,
  ajnaImg,
  sahasraraImg,
} from '../assets/images';

const chakras = [
  {
    title: 'Muladhara Chakra (Root)',
    description:
      'Located at the base of the spine, Muladhara is the foundation of the energy body. Awakening here creates stability, vitality and a grounded connection to the Earth element.',
    image: muladharImg,
  },
  {
    title: 'Svadhishthana Chakra (Sacral)',
    description:
      'Situated just below the navel, Svadhishthana governs creativity, emotion and the reproductive system. Balancing this chakra supports joy, sensuality and fluidity in life.',
    image: swadhishthanImg,
  },
  {
    title: 'Manipura Chakra (Solar Plexus)',
    description:
      'Placed at the solar plexus, Manipura radiates personal power, will and transformation. It fuels digestion—physical and energetic—and builds confidence and inner strength.',
    image: manipuraImg,
  },
  {
    title: 'Anahata Chakra (Heart)',
    description:
      'The heart centre resonates with unconditional love, compassion and harmony. Awakening Anahata opens us to deep connection, forgiveness and the courage to live from the heart.',
    image: anahataImg,
  },
  {
    title: 'Vishuddha Chakra (Throat)',
    description:
      'Located at the throat, Vishuddha is the purification centre. It refines our ability to speak truth, express creativity and transform experience into wisdom.',
    image: vishuddhaImg,
  },
  {
    title: 'Ajna Chakra (Third Eye)',
    description:
      'The command centre between the eyebrows, Ajna bestows clarity, intuition and insight. When activated, it harmonises the mind and prepares us for higher states of awareness.',
    image: ajnaImg,
  },
  {
    title: 'Sahasrara Chakra (Crown)',
    description:
      'Situated at the crown of the head, Sahasrara is the thousand-petalled lotus of enlightenment. It connects us to pure consciousness and the limitless flow of divine grace.',
    image: sahasraraImg,
  },
];

export default function KundaliniChakraPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader
          title="Kundalini Chakra"
          background="orange"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kundalini Chakra' },
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Awakening the Serpent Power
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Kundalini is the latent spiritual energy coiled at the base of the spine—the “serpent power”
                    that animates our physical and subtle bodies. Whether recognised or not, it sustains every
                    action we perform. Through disciplined yogic practice, this energy can be gently guided up
                    the spine, activating each chakra and elevating consciousness.
                  </p>
                  <p>
                    When Kundalini ascends through the central channel, it refines perception, unlocks intuition
                    and awakens profound spiritual insight. This journey must be undertaken with reverence,
                    guided by ethical living, selfless service and devotion to higher ideals.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={kundaliniMain} alt="Kundalini illustration" className="w-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={kundaliniSecondary} alt="Chakra alignment" className="w-full object-cover" />
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-semibold text-gray-800">
                  The Seven Chakras of Kundalini Yoga
                </h3>
                <p>
                  Chakras are subtle energy centres mapping our physical, emotional and spiritual potential. Yoga
                  provides the tools—postures, pranayama, mantra and meditation—to balance these centres, enabling
                  us to live with clarity, courage and compassion. Each chakra governs distinct qualities that, when
                  harmonised, lead to a life of empowerment and purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chakras.map((chakra) => (
                <div key={chakra.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img src={chakra.image} alt={chakra.title} className="h-48 w-full object-cover" />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-orange-600 mb-3">{chakra.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{chakra.description}</p>
                  </div>
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
