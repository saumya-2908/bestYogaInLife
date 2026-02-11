import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: 'Need to discuss 1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            REQUEST A <span className="text-orange-500">CALL BACK</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your details and our team will reach out to guide you through personalised programmes,
            class schedules and yogic consultations.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="max-w-5xl mx-auto mt-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <select
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              >
                <option>Need to discuss 1</option>
                <option>Need to discuss 2</option>
                <option>Need to discuss 3</option>
                <option>Need to discuss 4</option>
              </select>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-md hover:from-orange-600 hover:to-orange-700 transition transform hover:scale-105"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
