import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ArrowDownCircle, CheckCircle2, Stars, ArrowRight } from "lucide-react";
const WhyBiohack = () => {
  return <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-8 text-primary">
          Why Biohack Your Family?
        </h2>
        
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-8 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-amber-600">
              <Stars size={24} className="text-amber-500" /> Our Modern Digital Challenge
            </h3>
            
            <p>
              Today, everyone young or old carries their dose of stress and health concerns. We live in a digitalized world where everyday we hold a screen in our hands to communicate, to learn and even to de-stress ourselves or occupy our children.
            </p>
            
            <div className="pl-4 border-l-2 border-primary/20 italic text-gray-700">
              Not too long ago, we recognized where the kids were playing by the voices of laughter outside, the pile of bicycles, cartoons came on Saturday mornings and somehow life was more balanced.
            </div>
            
            <p>
              We had more REM sleep, more exercise, more fresh air and regular meal times undistracted by devices. Our future will be even more digitized, some have already created a smart hub under their roofs.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Our dopamine and serotonin levels are irregulated</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Free radicals are continuously being absorbed on a daily basis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>People have less time, more stress, even with all the technologies and screen support</span>
              </li>
            </ul>
          </div>
          
          <Separator className="my-8 bg-primary/20" />
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-amber-600">
              <Stars size={24} className="text-amber-500" /> Our Solution: Biohack Your Family
            </h3>
            
            <p>
              Here at Biohack your family, we are here to support your wellness journey in navigating all of the imbalances in our world and providing you skills, techniques, new habits, new discoveries that can create a healthier space in your home.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-amber-100/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">For Youth & Teens</h4>
                <p className="text-sm">We will teach the youth life skills and mindfulness tools that will equip them to navigate their teenage journeys.</p>
              </div>
              <div className="bg-amber-100/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">For Parents</h4>
                <p className="text-sm">We will equip parents with tools to alleviate their stress and help boost their family wellness paths.</p>
              </div>
              <div className="bg-amber-100/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">For Body & Mind</h4>
                <p className="text-sm">We will rejuvenate the body through fascia release maneuvers and create healthier spaces to live and sleep in.</p>
              </div>
              <div className="bg-amber-100/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">For Special Needs</h4>
                <p className="text-sm">Help new couples on their fertility journey, equip postpartum moms with tools to heal their bodies and mind and so much more.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="#workshops" className="inline-block bg-amber-400 hover:bg-amber-500/90 text-white px-6 py-3 rounded-lg transition-all mb-4">
              Check out our upcoming workshops
            </a>
            
            <a href="#booking" className="inline-block text-primary hover:text-primary/90 underline flex items-center gap-1 justify-center">
              Contact us for a discovery call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyBiohack;