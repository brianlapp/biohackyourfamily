import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../Index/sections/Hero';
import RetreatInfo from '../Index/sections/RetreatInfo';
import Activities from '../Index/sections/Activities';
import AboutUs from '../Index/sections/AboutUs';
import BookingSection from '../Index/sections/BookingSection';
import Contact from '../Index/sections/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const PastEvents = () => {
  return <div className="min-h-screen bg-white">
      <Helmet>
        <title>Past Events - BioHack Your Family</title>
        <meta name="description" content="View our past family retreat events featuring cabin camping, family bonding, digital detox, and holistic wellness activities." />
      </Helmet>

      <div className="container px-4 py-8">
        <Link to="/" className="inline-flex items-center text-[#333333] hover:text-[#333333]/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Current Events
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Past Events Archive</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our past retreats and workshops. These events may no longer be available, 
            but they showcase the types of experiences we offer.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container px-4 py-8">
          <h2 className="text-xl font-semibold mb-4">March 2025 - Screen Detox Family Weekend Retreat</h2>
          <p className="text-gray-600 mb-6">Our flagship family retreat designed to help families reconnect without digital distractions.</p>

          <div className="border rounded-lg p-6 bg-gray-50">
            <Hero />
            <RetreatInfo />
            <Activities />
            <AboutUs />
          </div>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button className="bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                See Our Current Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Contact />
    </div>;
};
export default PastEvents;