import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT US', to: '/about-us' },
    { label: 'YOGA', to: '/yoga' },
    { label: 'PRANAYAMA', to: '/pranayama' },
    { label: 'KUNDALINI CHAKRA', to: '/kundalini-chakra' },
    { label: 'ASANS', to: '/asanas' },
    { label: 'GALLERY', to: '/gallery' },
    { label: 'CONTACT US', to: '/contact-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919950452554" className="flex items-center gap-2 hover:text-orange-100 transition">
              <Phone size={16} />
              <span>+91 99504 52554</span>
            </a>
            <a href="mailto:bestyogainlife1992@gmail.com" className="flex items-center gap-2 hover:text-orange-100 transition">
              <Mail size={16} />
              <span>bestyogainlife1992@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.facebook.com/Rashtriya-Sant-SPJi-Maharaj-110026687089055/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100 transition" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/best_yoga_in_life?igshid=m7lllp6b0czl" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100 transition" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ॐ</span>
              </div>
              <div>
                <h1 className="text-orange-600 font-bold text-lg">BEST YOGA IN LIFE</h1>
                <p className="text-xs text-gray-600">Path To Self Discovery</p>
              </div>
            </Link>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-orange-500 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-orange-500 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
