
import React from 'react';

const WhyBiohack = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">
          Why Biohack Your Family?
        </h2>
        
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Today, everyone young or old carries their dose of stress and health concerns. We live in a digitalized world where everyday we hold a screen in our hands to communicate, to learn and even to de-stress ourselves or occupy our children. Not too long ago, we recognized where the kids were playing by the voices of laughter outside, the pile of bicycles, cartoons came on Saturday mornings and somehow life was more balanced. We had more REM sleep, more exercise, more fresh air and regular meal times undistracted by devices. Our future will be even more digitized, some have already created a smart hub under their roofs. Our dopamine and serotonin levels are irregulated, free radicals are continuously being absorbed on a daily basis, people have less time, more stress, even with all the technologies and screen support. Why?
          </p>
          
          <p>
            Here at Biohack your family, we are here to support your wellness journey in navigating all of the imbalances in our world and providing you skills, techniques, new habits, new discoveries that can create a healthier space in your home, help you biohack your daily habits to elevate your family wellness through your mental health, physical body and energy fields. We will teach the youth life skills and mindfulness tools that will equip them to navigate their teenage journeys, we will equip parents with tools to alleviate their stress and help boost their family wellness paths. We will bring back joy through laughter yoga, we will rejuvenate the body through fascia release maneuvers, create healthier spaces to live and sleep in, help new couples on their fertility journey, equip postpartum moms with tools to heal their bodies and mind and so much more.
          </p>
          
          <div className="mt-8 text-center">
            <a 
              href="#workshops" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all"
            >
              Check out our upcoming workshops
            </a>
            <span className="inline-block mx-2 text-gray-400">or</span>
            <a 
              href="#booking" 
              className="inline-block text-primary hover:text-primary/90 underline"
            >
              contact us for a discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBiohack;
