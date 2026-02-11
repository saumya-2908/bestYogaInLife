import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Practice from './components/Practice';
import YogaAsanas from './components/YogaAsanas';
import Teachings from './components/Teachings';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import IndiaYoga from './components/IndiaYoga';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import YogaPage from './pages/YogaPage';
import PranayamaPage from './pages/PranayamaPage';
import KundaliniChakraPage from './pages/KundaliniChakraPage';
import AsanasPage from './pages/AsanasPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Practice />
      <YogaAsanas />
      <Teachings />
      <Gallery />
      <ContactForm />
      <IndiaYoga />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/pranayama" element={<PranayamaPage />} />
        <Route path="/kundalini-chakra" element={<KundaliniChakraPage />} />
        <Route path="/asanas" element={<AsanasPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
