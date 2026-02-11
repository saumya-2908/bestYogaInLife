import { Link } from 'react-router-dom';
import { indiaImg } from '../assets/images';
import RevealOnScroll from './RevealOnScroll';

export default function IndiaYoga() {
  return (
    <section id="india-yoga" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <RevealOnScroll className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              INDIA &amp; YOGA
            </h2>
            <p className="text-white text-opacity-95 leading-relaxed">
              In an age filled with constant competition, we often forget to pause and look inward. Yoga may not
              give the answers outright, but it illuminates the path—helping us discover purpose, harmony and the
              union of body, mind and soul.
            </p>
            <p className="text-white text-opacity-95 leading-relaxed">
              From the Vedic sages to contemporary practitioners, India’s yogic heritage continues to inspire
              seekers around the world. Journey with us through authentic teachings that honour these timeless
              roots.
            </p>
            <Link
              to="/yoga"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-bold px-8 py-3 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition transform hover:scale-105"
            >
              Know More
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] ring-4 ring-white/10">
              <img
                src={indiaImg}
                alt="India Yoga gathering"
                className="w-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
