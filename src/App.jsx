import './styles/globals.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import WhyUs from './components/WhyUs/WhyUs';
import StatsBar from './components/StatsBar/StatsBar';
import Testimonials from './components/Testimonials/Testimonials';
import HowToOrder from './components/HowToOrder/HowToOrder';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MobileBottomBar from './components/MobileBottomBar/MobileBottomBar';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Products />
        <WhyUs />
        <StatsBar />
        <Testimonials />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <MobileBottomBar />
    </>
  );
}
