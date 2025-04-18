
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from './sections/Hero';
import WhyBiohack from './sections/WhyBiohack';
import Workshops from './sections/Workshops';
import ServicesSection from './sections/ServicesSection';
import Faq from './sections/Faq';
import BookingSection from './sections/BookingSection';
import Contact from './sections/Contact';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>BioHack Your Family - Spring 2025 Workshops</title>
        <meta name="description" content="Discover upcoming workshops, day retreats, and personalized treatments focused on hacking your wellness journey for youth, teens, adults and seniors." />
        <meta name="keywords" content="Biohacking, Family Wellness, Fascia Release, Workshops, Retreats, Windsor-Essex, Holistic Health, Wellness Journey" />
      </Helmet>

      <Hero />
      <WhyBiohack />
      <Workshops />
      <ServicesSection />
      <Faq />
      <BookingSection />
      <Contact />
    </div>
  );
};

export default Index;
