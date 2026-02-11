import { Link } from 'react-router-dom';
import { aboutImg } from '../assets/images';
import RevealOnScroll from './RevealOnScroll';

export default function Practice() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#ffac30] py-20 md:py-24 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <RevealOnScroll className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Practice A <span className="text-white/90">Timeless Tradition</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              Whether you are a novice in Yoga practice or an expert, we provide you the opportunity to learn,
              explore and expand your knowledge. Our ever-growing library of postures, therapies and yogic
              wisdom is designed to guide you towards wellbeing, inner peace and spiritual harmony.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              Discover curated practices, immersive learning resources and inspirational teachings rooted in the
              classical yogic tradition.
            </p>
            <Link
              to="/about-us"
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-50 transition"
            >
              Know More
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={120} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)] ring-4 ring-white/20">
              <img
                src={aboutImg}
                alt="Yoga practice"
                className="w-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
