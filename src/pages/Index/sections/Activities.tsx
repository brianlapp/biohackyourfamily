
import React from 'react';
import { Badge } from '@/components/ui/badge';
import EventGallery from '../components/EventGallery';

const Activities = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Retreat Packages</h2>
        
        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-base md:text-lg">
          <p>
            Experience a transformative Family Retreat designed to strengthen bonds and promote holistic
            family wellness. Unplug with your family and enjoy a digital detox weekend filled with activities
            that bring back the simplicity of fresh air, family cooking, family goal planning, music circles,
            campfires, hiking and more. Book now to elevate your family's wellness journey!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Weekend Retreat Package */}
          <div className="group relative overflow-hidden rounded-lg border border-[#9b87f5]/20 bg-white shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img 
                src="/lovable-uploads/79e84c88-cfd7-400a-92d8-4ba34792518d.png"
                alt="Cozy cabin with purple chairs"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Badge variant="secondary" className="mb-2 bg-[#9b87f5]/10 text-[#9b87f5]">Limited cabins available!</Badge>
              <h3 className="text-xl font-bold text-[#9b87f5] mb-4">Weekend Retreat with Cabin Experience</h3>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li>• 2 nights in a heated cabin (up to 2 adults and 2 children)</li>
                <li>• 2 dinners, 1 lunch, 2 breakfasts, snacks & unlimited warm beverages</li>
                <li>• Arrival Welcome Package</li>
                <li>• Indoor workshops including all supplies</li>
                <li>• Family cooking class</li>
                <li>• Planned outdoor activities</li>
              </ul>
              <p className="text-sm mb-6 text-gray-500">
                Heated cabin includes sleeping accommodations with mattresses (bring your own sleeping bags),
                table with 4 chairs, cooking accessories, gas BBQ, outdoor picnic table with campfire pit.
                Heated private showers and washrooms available.
              </p>
              <div className="mt-auto">
                <a
                  href="#booking"
                  className="inline-block bg-[#9b87f5] text-white px-6 py-3 rounded-lg hover:bg-[#9b87f5]/90 transition-all"
                >
                  Book Weekend Package
                </a>
              </div>
            </div>
          </div>

          {/* One Day Retreat Package */}
          <div className="group relative overflow-hidden rounded-lg border border-[#9b87f5]/20 bg-white shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img 
                src="/lovable-uploads/b0b8adf0-0b94-4af4-b460-232735a103d9.png"
                alt="Beautiful forest view"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <Badge variant="secondary" className="mb-2 bg-[#9b87f5]/10 text-[#9b87f5]">Perfect for day visitors!</Badge>
              <h3 className="text-xl font-bold text-[#9b87f5] mb-4">1 Full Day Retreat</h3>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li>• Full day of indoor workshops</li>
                <li>• Outdoor activities</li>
                <li>• Family cooking class</li>
                <li>• Lunch and dinner included</li>
                <li>• Unlimited warm beverages</li>
                <li>• Evening campfire access</li>
              </ul>
              <p className="text-sm mb-6 text-gray-500">
                Join us for a full day of activities and workshops without the overnight stay.
                Perfect for those who want to experience the retreat atmosphere while returning home in the evening.
              </p>
              <div className="mt-auto">
                <a
                  href="#booking"
                  className="inline-block bg-[#9b87f5] text-white px-6 py-3 rounded-lg hover:bg-[#9b87f5]/90 transition-all"
                >
                  Book Day Package
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Spring Retreat Gallery</h3>
          <EventGallery />
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg transition-all"
          >
            Join Our Next Retreat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;
