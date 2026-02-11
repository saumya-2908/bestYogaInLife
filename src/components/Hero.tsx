import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { heroSlides as slides } from '../assets/images';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[85vh] lg:h-screen mt-32 md:mt-28">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Yoga slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-left space-y-6">
            <span className="inline-block text-sm md:text-base uppercase tracking-[0.35em] text-white/80">
              Best Yoga In Life
            </span>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
              {slides[currentSlide].text}
            </h1>
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Discover authentic yogic teachings, guided practices and timeless wisdom to elevate your body, mind
              and soul.
            </p>
            <a
              href="#about"
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-50 transition"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition backdrop-blur-sm"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition backdrop-blur-sm"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
