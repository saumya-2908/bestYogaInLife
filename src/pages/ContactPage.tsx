import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader
          title="Contact Us"
          background="orange"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact Us' },
          ]}
        />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin size={24} className="flex-shrink-0 text-orange-500" />
                  <div>
                    <strong>SHRI OM PRAKASH ASHREM RUPAHELI DHAM</strong>
                    <p>Agoocha Mines Rd, Roopaheli, Rajasthan 311030, India.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={24} className="flex-shrink-0 text-orange-500" />
                  <a href="tel:+919950452554" className="hover:text-orange-500 transition">
                    +91 99504 52554
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={24} className="flex-shrink-0 text-orange-500" />
                  <a href="mailto:bestyogainlife1992@gmail.com" className="hover:text-orange-500 transition break-all">
                    bestyogainlife1992@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8!2d75.2!3d25.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ4JzAwLjAiTiA3NcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-md hover:from-orange-600 hover:to-orange-700 transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
