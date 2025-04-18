import React from 'react';
import { Badge } from '@/components/ui/badge';
import GalleryImage from '../components/GalleryImage';

const Activities = () => {
  const retreatImages = [
    "/spring-retreat/IMG-20250316-WA0001.jpg",
    "/spring-retreat/IMG-20250316-WA0002.jpg",
    "/spring-retreat/IMG-20250316-WA0003.jpg",
    "/spring-retreat/IMG-20250316-WA0006.jpg",
    "/spring-retreat/IMG-20250316-WA0008.jpg",
    "/spring-retreat/IMG-20250316-WA0011.jpg",
    "/spring-retreat/IMG-20250410-WA0000.jpg",
    "/spring-retreat/IMG-20250410-WA0001.jpg"
  ];

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
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-primary/20 flex flex-col">
            <div className="h-48 relative">
              <img 
                src="/lovable-uploads/79e84c88-cfd7-400a-92d8-4ba34792518d.png"
                alt="Cozy cabin with purple chairs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Weekend Retreat with Cabin Experience</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4 w-fit">Limited cabins available!</Badge>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>2 nights in a heated cabin (up to 2 adults and 2 children)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>2 dinners, 1 lunch, 2 breakfasts, snacks & unlimited warm beverages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Arrival Welcome Package</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Indoor workshops including all supplies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Family cooking class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Planned outdoor activities</span>
                </li>
              </ul>
              <p className="text-sm mb-6 text-gray-600">
                Heated cabin includes sleeping accommodations with mattresses (bring your own sleeping bags),
                table with 4 chairs, cooking accessories, gas BBQ, outdoor picnic table with campfire pit.
                Heated private showers and washrooms available.
              </p>
              <div className="text-center mt-auto">
                <a
                  href="#booking"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all"
                >
                  Book Weekend Package
                </a>
              </div>
            </div>
          </div>

          {/* One Day Retreat Package */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-primary/20 flex flex-col">
            <div className="h-48 relative">
              <img 
                src="/lovable-uploads/b0b8adf0-0b94-4af4-b460-232735a103d9.png"
                alt="Beautiful forest view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">1 Full Day Retreat</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4 w-fit">Perfect for day visitors!</Badge>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Full day of indoor workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Outdoor activities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Family cooking class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Lunch and dinner included</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Unlimited warm beverages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Evening campfire access</span>
                </li>
              </ul>
              <p className="text-sm mb-6 text-gray-600">
                Join us for a full day of activities and workshops without the overnight stay.
                Perfect for those who want to experience the retreat atmosphere while returning home in the evening.
              </p>
              <div className="text-center mt-auto">
                <a
                  href="#booking"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all"
                >
                  Book Day Package
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-12 scroll-animate">
          {retreatImages.map((url, index) => (
            <GalleryImage
              key={index}
              url={url}
              alt={`Retreat activity ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center">
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
