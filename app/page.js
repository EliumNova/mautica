import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionEquipo from '@/components/SectionEquipo';
import SectionServicios from '@/components/SectionServicios';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="inicio">
        <Hero />
      </div>

      <div id="nosotros">
        <SectionEquipo />
      </div>

      <div id="servicios">
        <SectionServicios />
      </div>

      {/* El Footer ya tiene id="contacto" internamente */}
      <Footer />
    </>
  );
}
