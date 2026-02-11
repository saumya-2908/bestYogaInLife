import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import {
  pranayamaDiagram,
  pranayamaPractice,
  yogaAsanaImages,
} from '../assets/images';

const benefitsColumns = [
  {
    title: 'Physical Effects',
    points: [
      'Preserves the health of the body',
      'Detoxifies the blood and improves oxygen absorption',
      'Strengthens lungs and heart while regulating blood pressure',
      'Balances the nervous system and supports healing therapies',
      'Builds resistance to infection',
    ],
  },
  {
    title: 'Mental Effects',
    points: [
      'Eliminates stress, nervousness and depression',
      'Quiets thoughts and emotions to create inner balance',
      'Releases blockages so prana can flow freely',
      'Heightens clarity, focus and emotional stability',
    ],
  },
  {
    title: 'Spiritual Effects',
    points: [
      'Deepens meditation and awakens the chakras',
      'Purifies subtle channels and expands consciousness',
      'Supports the journey toward inner peace and self-realisation',
    ],
  },
];

const pranayamaTechniques = [
  {
    title: 'Anulom Vilom',
    description:
      'Alternate nostril breathing that balances the left and right energy channels. The practice detoxifies the system, improves circulation, calms the mind and supports cardiovascular health.',
    benefits: [
      'Controls obesity and aids digestion',
      'Beneficial for arthritis and respiratory health',
      'Enhances muscular system and regulates blood pressure',
      'Transfers negative thoughts into positive energy',
    ],
    image: yogaAsanaImages.anulomVilom,
  },
  {
    title: 'Kapalbhati',
    description:
      'Known as “Skull Shining Breath”, Kapalbhati uses powerful exhalations to cleanse the respiratory system, energise the body and sharpen the intellect.',
    benefits: [
      'Stimulates abdominal organs and metabolism',
      'Detoxifies, improves digestion and increases lung capacity',
      'Tones abdominal muscles and calms the nervous system',
      'Invigorates the mind and uplifts energy levels',
    ],
    image: pranayamaPractice,
  },
];

export default function PranayamaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader
          title="Pranayama"
          background="orange"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Pranayama' },
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Science of Breath</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Pranayama is the conscious guidance and regulation of the breath. With each breath we absorb
                    oxygen and prana—the cosmic life force that sustains creation. When prana flows freely,
                    vitality increases, the body detoxifies and the mind becomes steady.
                  </p>
                  <p>
                    The ancient yogis recognised that the length of life is linked to the number of breaths we
                    take. By slowing and refining the breath, we conserve energy, extend longevity and cultivate
                    deep inner peace. Patanjali describes Pranayama as the gateway from physical practice to the
                    higher limbs of Yoga.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={pranayamaDiagram} alt="Pranayama diagram" className="w-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={pranayamaPractice} alt="Pranayama practice" className="w-full object-cover" />
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Pranayama techniques focus on four aspects of the breath—puraka (inhalation), antara-khumbaka
                  (internal retention), rechaka (exhalation) and bahya-khumbaka (external retention). Practice is
                  gradual and steady, beginning with breath awareness and progressing to gentle retention under
                  guidance.
                </p>
                <p>
                  Most techniques are practised seated with an upright spine in Sukhasana, Virasana or Padmasana.
                  Certain kriyas involving strong abdominal work are not recommended during pregnancy, menses or
                  for individuals with cardiovascular conditions. When in doubt, consult a qualified teacher or
                  medical professional.
                </p>
                <p>
                  Explore Pranayama in daily life by combining mindful breathing with meditation, mantra and
                  gentle asana. Even a few minutes of conscious breathing can transform stress into equanimity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Benefits of a Regular Pranayama Practice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsColumns.map((column) => (
                <div key={column.title} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">{column.title}</h3>
                  <ul className="space-y-3 text-gray-700">
                    {column.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-16">
            {pranayamaTechniques.map((technique, index) => (
              <div
                key={technique.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src={technique.image} alt={technique.title} className="w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{technique.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{technique.description}</p>
                  <h4 className="text-lg font-semibold text-orange-600 mb-3">Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    {technique.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" aria-hidden />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Explore More Yogic Practices?
            </h2>
            <p className="text-white text-opacity-90 mb-6">
              Continue your journey with our in-depth guides on kundalini, asanas and meditation.
            </p>
            <Link
              to="/kundalini-chakra"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition"
            >
              Explore Kundalini Chakra
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
