import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="py-12 border-b border-orange-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-bold">If You Have Any Queries</h3>
            <Link
              to="/contact-us"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-full transition transform hover:scale-105 inline-block"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <p className="text-white text-opacity-95 leading-relaxed">
                Whether you are a novice in Yoga practice or an expert, we provide you the opportunity to
                learn, explore, and expand your knowledge and gain Yogic wisdom. We strive to bring to you
                the best, continuously refining and expanding our website's offering of Yoga postures,
                therapies, sequences, and articles covering a wide spectrum of services.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/Rashtriya-Sant-SPJi-Maharaj-110026687089055/" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com/best_yoga_in_life?igshid=m7lllp6b0czl" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-400 pb-2 inline-block">
                Usefull Links
              </h4>
              <ul className="space-y-3">
                <li><Link to="/about-us" className="hover:text-orange-200 transition">About Us</Link></li>
                <li><Link to="/yoga" className="hover:text-orange-200 transition">India &amp; Yoga</Link></li>
                <li><Link to="/asanas" className="hover:text-orange-200 transition">Yoga Asans</Link></li>
                <li><Link to="/gallery" className="hover:text-orange-200 transition">Gallery</Link></li>
                <li><Link to="/contact-us" className="hover:text-orange-200 transition">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-400 pb-2 inline-block">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    <strong>SHRI OM PRAKASH ASHREM RUPAHELI DHAM</strong><br />
                    Agoocha Mines Rd, Roopaheli, Rajasthan 311030, India.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="flex-shrink-0" />
                  <a href="tel:+919950452554" className="hover:text-orange-200 transition">
                    +91 99504 52554
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="flex-shrink-0" />
                  <a href="mailto:bestyogainlife1992@gmail.com" className="hover:text-orange-200 transition break-all">
                    Bestyogainlife1992@Gmail.Com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-400 pb-2 inline-block">
                Our Location
              </h4>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8!2d75.2!3d25.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ4JzAwLjAiTiA3NcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-700 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Copyright © 2026 By <span className="font-semibold">Gleeknot</span>. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
