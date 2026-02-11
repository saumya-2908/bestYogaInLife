import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';
import { aboutUsPhoto, why1Img } from '../assets/images';
import heroBanner from '../assets/images/slider/8.jpg';

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
      'Our team is the brainchild a trained & experienced Yoga instructor who believes in Yogic wisdom and sharing the knowledge with people who wish to walk into the path of this ancient practice of spiritual and physical wellbeing.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section
          className="relative bg-top bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${heroBanner})`,
            minHeight: '340px',
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative container mx-auto px-4 pt-40 pb-24 md:pt-48 md:pb-28 flex flex-col items-start gap-4">
            <h1 className="text-3xl md:text-6xl font-bold text-white uppercase drop-shadow-lg">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="flex items-center text-white/80 gap-2 text-sm md:text-base">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li className="text-white">About Us</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ffac30] py-20">
          <div className="absolute inset-0 bg-[url('https://www.bestyogainlife.com/images/top_ar.png')] opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <RevealOnScroll className="space-y-6 text-white leading-relaxed">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Practice A Timeless Tradition
                </h2>
                <p>
                  This was launched with the objective to provide a comprehensive resource for Yoga online.
                  Whether you are a novice in Yoga practice or an expert, we provide you the opportunity to
                  learn, explore, and expand your knowledge and gain Yogic wisdom. We strive to bring to you the
                  best, continuously refining and expanding our website’s offering of Yoga postures, therapies,
                  sequences, and articles covering a wide spectrum of services. We believe that Yoga is the
                  secret to good health &amp; wellbeing, and unravels the path to spirituality and inner peace &amp;
                  harmony. We hope that you would appreciate our initiative and find valuable information to help
                  you deepen and enhance your Yoga practice.
                </p>
                <p>
                  Yoga is an ancient practice of learning that focuses on improving physical, mental, emotional
                  and spiritual wellbeing of an individual, maintaining inner peace and harmony. Yogic practice
                  and wisdom enhances the quality of life, and eliminates stress, sorrow and unhappiness. At
                  Best Yoga In Life, our objective is to spread the knowledge and wisdom of Yoga around the
                  world. Therefore, we bring to you comprehensive information about this ancient practice, right
                  from its history to fundamentals, types of Yoga, Asanas &amp; postures, forms of Yoga,
                  Pranayama, latest news, articles and more. Yoga is a vast field of learning and we wish to
                  bring the knowledge to you in the most convenient form via the Internet.
                </p>
                <Link
                  to="/contact-us"
                  className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-50 transition"
                >
                  Know More
                </Link>
              </RevealOnScroll>
              <RevealOnScroll delay={120} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_25px_55px_rgba(0,0,0,0.35)] ring-4 ring-white/20">
                  <img src={aboutUsPhoto} alt="Best Yoga In Life" className="w-full object-cover" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 bg-[#29140a]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.bestyogainlife.com/images/choose_col_bg.png')] bg-cover bg-center" />
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
              <RevealOnScroll className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_25px_55px_rgba(0,0,0,0.45)] ring-4 ring-orange-300/50">
                  <img src={why1Img} alt="Yoga teachings" className="w-full object-cover" />
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={120} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-white/10 rounded-xl p-6 md:p-8 border border-orange-400/30 text-white shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
                  >
                    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white text-opacity-90 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="container mx-auto px-4 max-w-6xl">
            <RevealOnScroll className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-white/10 rounded-lg p-8 backdrop-blur">
                  <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </RevealOnScroll>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <RevealOnScroll className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                If you have any queries
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with us to explore personalised programmes, workshops and yogic consultations designed
                to support your journey.
              </p>
              <Link
                to="/contact-us"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition"
              >
                Contact Us
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
