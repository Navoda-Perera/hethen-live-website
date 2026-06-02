import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import ShowsSection from './components/ShowsSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <ShowsSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
