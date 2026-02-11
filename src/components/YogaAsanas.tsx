import { Link } from 'react-router-dom';
import { ASANAS } from '../data/asanas';
import RevealOnScroll from './RevealOnScroll';

export default function YogaAsanas() {
  return (
    <section id="asans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          YOGA ASANS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ASANAS.map((asana, index) => (
            <RevealOnScroll
              key={asana.name}
              delay={index * 80}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0 bg-white">
                <img
                  src={asana.image}
                  alt={asana.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.02] p-4"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">ॐ</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{asana.name}</h3>
                <p className="text-white text-opacity-95 leading-relaxed flex-1" style={{ minHeight: '150px' }}>
                  {asana.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/asanas"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-bold px-8 py-3 rounded-md hover:from-yellow-500 hover:to-yellow-600 transition transform hover:scale-105"
          >
            View All Asans
          </Link>
        </div>
      </div>
    </section>
  );
}
