import React from 'react';
import { Badge } from '@/components/ui/badge';
import EventGallery from '../components/EventGallery';
import { Separator } from '@/components/ui/separator';
const Activities = () => {
  return <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-8 space-y-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            Spring Retreat Activities
          </h2>
          <p className="text-lg text-gray-700">
            Our spring retreat featured a variety of engaging activities designed to reconnect families and promote wellness through nature, movement, and mindfulness.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Nature Walks</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Meditation</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Family Cooking</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Fascia Release</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Mindfulness</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">Sound Therapy</Badge>
          </div>
        </div>

        <Separator className="my-8 bg-primary/20 max-w-4xl mx-auto" />

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Spring Retreat Gallery</h3>
          <EventGallery />
        </div>

        <div className="text-center mt-12">
          <a href="#booking" className="inline-block bg-amber-500 hover:bg-amber-500 text-white px-6 md:px-10 py-3 md:py-4 text-xl md:text-2xl rounded-lg transition-all">
            Join Our Next Retreat
          </a>
        </div>
      </div>
    </section>;
};
export default Activities;