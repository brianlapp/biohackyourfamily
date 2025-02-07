
import React from 'react';

const Hero = () => {
  return (
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
        <p className="inline-block bg-[rgb(79,30,114)] text-white px-4 py-2 rounded-full text-lg md:text-xl mb-8 animate-fade-up whitespace-nowrap">
          EXPLORE WELLNESS at Our Retreats
        </p>
      </div>
    </section>
  );
};

export default Hero;
