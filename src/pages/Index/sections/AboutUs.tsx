
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F2FCE2]">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto scroll-animate">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                A passionate traveler, lifelong learner, and dedicated mompreneur on a mission to help families reconnect in an increasingly digital world. With over 20 years in customer service management, event management, corporate training, and teaching both youth and adults, the journey has spanned diverse environments—from living in the jungle and on the beach to managing resorts and guiding international teens in European summer abroad camps.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                My journey into wellness began while living in Asia, where I focused on nutrition and mindful living. Over the years, I've earned certifications in culinary nutrition, energy work, geobiology, fascia release, and more—all with the goal of creating a thriving environment for my family. But as my kids grew, I saw firsthand how screens started replacing outdoor adventures and quality time.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Mental health is just as important as physical health, especially in today's fast-paced, screen-heavy world. By integrating wellness practices, mindfulness, and holistic approaches, these retreats are designed to help families, parents, and individuals build resilience, reconnect, and rediscover the joy of being present together. Let's bring back the best of the past while thriving in the digital age!
              </p>
            </div>

            <div className="relative grid grid-cols-2 gap-3 md:gap-4">
              <img 
                src="/lovable-uploads/76aaad3f-a5fc-484e-9501-adb47387c79b.png" 
                alt="Collage of outdoor adventures and family activities"
                className="col-span-2 w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
