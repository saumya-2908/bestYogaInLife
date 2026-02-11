import { why1Img } from '../assets/images';
import RevealOnScroll from './RevealOnScroll';

const teachings = [
  {
    title: 'PROPER EXERCISE (ASANAS)',
    description: 'Enhances the flexibility of the joints, muscles, tendons and ligaments and stimulates circulation. Flexibility and strength of the spine keep the body youthful.'
  },
  {
    title: 'PROPER DIET (Vegetarian)',
    description: 'Promotes health and has a positive effect on body and mind. It is natural, simple to prepare, easy to digest and absorb.'
  },
  {
    title: 'PROPER BREATHING (PRANAYAMA)',
    description: 'Connects the body to its battery, the solar plexus, which is an storehouse of energy. Stress and depression can be overcome by breathing more deeply with increased awareness.'
  },
  {
    title: 'POSITIVE THINKING AND MEDITATION',
    description: 'Eliminates negative thought patterns and provides an experience of inner peace by controlling the mind through meditation. This is the key to peace of mind.'
  }
];

export default function Teachings() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          OUR TEACHINGS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <RevealOnScroll className="relative">
            <img
              src={why1Img}
              alt="Our teachings"
              className="rounded-xl shadow-[0_25px_55px_rgba(0,0,0,0.35)] w-full object-cover"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-orange-600 font-bold text-3xl">ॐ</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="space-y-8">
            {teachings.map((teaching) => (
              <div key={teaching.title} className="text-white">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-white/90">
                  {teaching.title}
                </h3>
                <p className="text-white text-opacity-95 leading-relaxed">
                  {teaching.description}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
