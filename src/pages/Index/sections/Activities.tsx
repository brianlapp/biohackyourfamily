import React from 'react';
import { Badge } from '@/components/ui/badge';
import EventGallery from '../components/EventGallery';
const Activities = () => {
  return <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        
        
        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-base md:text-lg">
          
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Spring Retreat Gallery</h3>
          <EventGallery />
        </div>

        <div className="text-center mt-12">
          <a href="#booking" className="inline-block bg-primary hover:bg-primary/90 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg transition-all">
            Join Our Next Retreat
          </a>
        </div>
      </div>
    </section>;
};
export default Activities;