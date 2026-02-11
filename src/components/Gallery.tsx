import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../assets/images';
import RevealOnScroll from './RevealOnScroll';

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= galleryImages.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0 ? Math.max(0, galleryImages.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const visibleImages = galleryImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-16">
          GALLERY
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <RevealOnScroll className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {visibleImages.map((image, index) => (
              <div
                key={startIndex + index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${startIndex + index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </RevealOnScroll>

          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-bold px-8 py-3 rounded-md hover:from-yellow-500 hover:to-yellow-600 transition transform hover:scale-105"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
