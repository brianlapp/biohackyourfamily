import { useEffect, useRef } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import BookingForm from '../components/BookingForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Index = () => {
  const activitiesRef = useRef<HTMLDivElement>(null);

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

  const galleryImages = [
    {
      url: "https://static.wixstatic.com/media/aac7344b980d4e0eb6353b1304f5ebd0.jpg/v1/fill/w_2380,h_1854,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/aac7344b980d4e0eb6353b1304f5ebd0.jpg",
      alt: "Family activities"
    },
    {
      url: "https://static.wixstatic.com/media/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png/v1/fill/w_1231,h_2131,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png",
      alt: "Outdoor activities"
    },
    {
      url: "https://static.wixstatic.com/media/7f2eb6_a4275b9fefe14dba85a5c056ecdacab3~mv2.jpg/v1/fill/w_1478,h_776,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/7f2eb6_a4275b9fefe14dba85a5c056ecdacab3~mv2.jpg",
      alt: "Nature experience"
    },
    {
      url: "https://static.wixstatic.com/media/11062b_d578b9d4ffba48c68d086ec29fe9e6f0f000.jpg/v1/fill/w_727,h_1030,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_d578b9d4ffba48c68d086ec29fe9e6f0f000.jpg",
      alt: "Family bonding"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Family Detox Adventure - Screen Detox Family Weekend Retreat</title>
        <meta name="description" content="Join our transformative family retreat featuring cabin camping, family bonding, digital detox, and holistic wellness activities. Experience nature walks, meditation, yoga, and more in Windsor-Essex County, Point Pelee National Park. Perfect for families, teens, seniors, and homeschooling groups." />
        <meta name="keywords" content="Cabin camping, Family Bonding, Digital Detox, Screen Detox, Mental Health, Life Skills, Youth, Teens, Seniors, Parents, Homeschooling, Meditation, Story Telling, Biohacking, Holistic Wellness, Windsor-Essex County, Point Pelee National Park, Southern Ontario" />
      </Helmet>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img
            src="/lovable-uploads/b4b1b086-211d-495e-a164-838ce3be6c7c.png"
            alt="A person sitting with a lantern in the dark, creating a cozy camping atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center px-4 sm:px-6">
          <img
            src="https://static.wixstatic.com/media/7f2eb6_cd793477863a4f3a8b17fcabe8cfb8f2~mv2.png/v1/fill/w_590,h_484,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f2eb6_cd793477863a4f3a8b17fcabe8cfb8f2~mv2.png"
            alt="Logo"
            className="w-32 md:w-40 h-32 md:h-40 mx-auto mb-6 md:mb-8 animate-fade-in"
          />
          <h1 className="text-3xl md:text-6xl font-bold mb-4 animate-fade-up text-white leading-tight">
            Elevating your family&nbsp;life,<br />one experience at a&nbsp;time.
          </h1>
          <p className="inline-block bg-[#F97316] px-4 py-2 rounded-full text-lg md:text-xl mb-8 animate-fade-up text-secondary-foreground whitespace-nowrap">
            EXPLORE WELLNESS at Our Retreats
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Bringing Back<br />the 80's!<br />
              Unplug with your family!<br />
              <span className="text-xl md:text-2xl mt-2 block">Screen Detox Family Weekend Retreat</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Mar 14, 2025, 6:00 p.m. at Camp Henry
            </p>
            <CountdownTimer />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="scroll-animate h-[320px]">
              <img
                src="https://static.wixstatic.com/media/11062b_880fd835b56744c6a0d43048a1de96f0~mv2_d_2208_1472_s_2.jpg/v1/fill/w_2208,h_1289,al_c,q_90,enc_avif,quality_auto/11062b_880fd835b56744c6a0d43048a1de96f0~mv2_d_2208_1472_s_2.jpg"
                alt="Retreat activities"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 md:space-y-6 scroll-animate">
              <p className="text-base md:text-lg">
                Join us for a transformative weekend retreat focused on reconnecting with family without the digital distractions. With both fresh air outdoor activities and indoor workshops to keep all ages busy, you'll go home rested with stories to share and remember.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="#booking"
                  className="inline-block bg-[rgb(79,30,114)] text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg hover:bg-[rgb(79,30,114)]/90 transition-all"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What to Expect</h2>
          
          <div className="max-w-4xl mx-auto mb-12 space-y-6 text-base md:text-lg">
            <p>
              Time to unwind, rest and relax with your family while enriching the weekend experience with ample fresh air, nature walks, old fashioned activities like cooking with the kids, nature crafts, board games, music circles, time out to nap or read or stretch by the lake and of course campfires.
            </p>
            <p>
              Open for all ages, no strict attendance, participate in your chosen interests and relax on your own if you need a break. It's time to show our kids how we grew up, lots of laughter and play without the digital distractions.
            </p>
            <p>
              There will be a special workshop on discovering, sharing and setting your family values and goals, helping to deepen the bond among your most cherished loved ones.
            </p>
            <p>
              Nourishing, simple meals will be offered, but for those spending the weekend in their own cabin, you will have access to your own BBQ and your personal campfire pit with a handful of cooking utensils to cater to any further culinary family needs. For those joining for the 1 day pass on Saturday, lunch and dinner will be included.
            </p>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">Schedule</h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="font-medium">4:30 p.m. - 6:00 p.m.</div>
                  <div className="text-muted-foreground">(1 hour 30 minutes)</div>
                  <div>Check into your cabin and unpack</div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="font-medium">6:00 p.m. - 7:00 p.m.</div>
                  <div className="text-muted-foreground">(1 hour)</div>
                  <div>Self-serve Dinner at Retreat Center</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto mb-8 md:mb-12 scroll-animate">
            {[
              "Family Bonding", "Outdoor Activities",
              "Digital Detox", "Wellness Workshops",
              "Nature Walks", "Board Games",
              "Campfires", "Story Telling"
            ].map((activity) => (
              <div
                key={activity}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <p className="font-medium">{activity}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-12">
            <a
              href="#booking"
              className="inline-block bg-[rgb(79,30,114)] text-white px-8 py-3 text-lg rounded-lg hover:bg-[rgb(79,30,114)]/90 transition-all"
            >
              Join Our Next Retreat
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 scroll-animate">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden group rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">About Us</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              After over 25 years of acquiring experiences around the globe, in the ocean, up the mountains, deep in the forests, on organic farms, immersing across Europe, Asia and South America, with a collection of modalities to offer you a taste to escape in your own mini adventure on one of our upcoming workshops or retreats!
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-12 md:py-20">
        <div className="container px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Book Your Spot</h2>
          <BookingForm />
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
              <a href="tel:226-246-7411" className="flex items-center gap-2 hover:text-[rgb(79,30,114)] transition-colors">
                <Phone size={20} />
                <span>226-246-7411</span>
              </a>
              <a href="mailto:BioHackYourFamily@gmail.com" className="flex items-center gap-2 hover:text-[rgb(79,30,114)] transition-colors break-all md:break-normal">
                <Mail size={20} />
                <span>BioHackYourFamily@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Windsor - Essex County</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
