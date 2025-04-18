
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src="/hero-bg.png" alt="BioHack Your Family retreat - person meditating in nature" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10 text-center px-4 sm:px-6">
        <img src="/updated-logo.png" alt="BioHack Your Family Logo" className="w-48 md:w-56 h-auto mx-auto mb-6 md:mb-8 animate-fade-in" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up text-white leading-tight">
          Spring 2025 Biohack Your Family Workshops
        </h1>
        <p className="inline-block bg-primary text-white px-4 py-2 rounded-md text-xl md:text-2xl mb-4 animate-fade-up max-w-3xl mx-auto font-thin">
          Discover upcoming workshops, day retreats, and personalized treatments focused on hacking your wellness journey for youth, teens, adults and seniors.
        </p>
        <div className="mt-8">
          <a href="#booking">
            <Button className="bg-amber-200 hover:bg-amber-300 text-black font-bold text-lg px-8 py-6 rounded-lg animate-fade-up shadow-lg flex items-center gap-2">
              Register Now <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;
