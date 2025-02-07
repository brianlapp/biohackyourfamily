
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from './sections/Hero';
import RetreatInfo from './sections/RetreatInfo';
import Activities from './sections/Activities';
import AboutUs from './sections/AboutUs';
import Gallery from './sections/Gallery';
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
        <title>Family Detox Adventure - Screen Detox Family Weekend Retreat</title>
        <meta name="description" content="Join our transformative family retreat featuring cabin camping, family bonding, digital detox, and holistic wellness activities. Experience nature walks, meditation, yoga, and more in Windsor-Essex County, Point Pelee National Park. Perfect for families, teens, seniors, and homeschooling groups." />
        <meta name="keywords" content="Cabin camping, Family Bonding, Digital Detox, Screen Detox, Mental Health, Life Skills, Youth, Teens, Seniors, Parents, Homeschooling, Meditation, Story Telling, Biohacking, Holistic Wellness, Windsor-Essex County, Point Pelee National Park, Southern Ontario" />
      </Helmet>

      <Hero />
      <RetreatInfo />
      <Activities />
      <AboutUs />
      <BookingSection />
      <Contact />
    </div>
  );
};

export default Index;
