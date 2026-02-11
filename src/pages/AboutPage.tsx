import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { aboutUsPhoto } from '../assets/images';

const pillars = [
  {
    title: 'Our Vision',
    description:
      'We envision bringing to you the latest and most reliable information and inspiration about Yoga, emerging as the best online resource to help everyone who wishes to walk on the path of the ancient practice of Yoga.',
  },
  {
    title: 'Our Mission',
    description:
      'Our deepest aspiration is to make the world a better place to live in. Our objective is to eliminate unhappiness, sorrow and suffering of the people and to purge the cause of this misery.',
  },
  {
    title: 'Our Values',
    description:
      'We are not here for business; we operate on the Yogic wisdom of Yamas and Niyamas. We believe in Ahimsa, Asteya and Samtosha, whereby we practice generosity in every field of our operations.',
  },
  {
    title: 'Our Team',
    description:
      'Our team is the brainchild of a trained & experienced Yoga instructor who believes in Yogic wisdom and sharing the knowledge with people who wish to walk into the path of this ancient practice of spiritual and physical wellbeing.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader
          title="About Us"
          background="orange"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us' },
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Discover the Path to Yogic Wisdom, Good Health & Wellbeing
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Best Yoga In Life was launched with the objective to provide a comprehensive resource for
                    Yoga online. Whether you are a novice in Yoga practice or an expert, we provide you the
                    opportunity to learn, explore, and expand your knowledge and gain Yogic wisdom. We strive
                    to bring to you the best, continuously refining and expanding our website’s offering of
                    Yoga postures, therapies, sequences, and articles covering a wide spectrum of services.
                  </p>
                  <p>
                    We believe that Yoga is the secret to good health & wellbeing, and unravels the path to
                    spirituality and inner peace & harmony. We hope that you would appreciate our initiative
                    and find valuable information to help you deepen and enhance your Yoga practice.
                  </p>
                  <p>
                    Yoga is an ancient practice of learning that focuses on improving physical, mental,
                    emotional and spiritual wellbeing of an individual, maintaining inner peace and harmony.
                    Yogic practice and wisdom enhances the quality of life, and eliminates stress, sorrow and
                    unhappiness.
                  </p>
                  <p>
                    Our objective is to spread the knowledge and wisdom of Yoga around the world. We bring to
                    you comprehensive information about this ancient practice—from its history to fundamentals,
                    types of Yoga, Asanas, therapies, Pranayama, news, articles and more—so that you can access
                    authentic Yogic wisdom with ease.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src={aboutUsPhoto} alt="Yoga practice" className="w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-white/10 backdrop-blur rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">{pillar.description}</p>
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
