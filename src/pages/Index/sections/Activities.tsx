
import React from 'react';
import GalleryImage from '../components/GalleryImage';

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
          <div className="bg-[#9b87f5]/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#9b87f5]/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#7E69AB]">Weekend Retreat with Cabin Experience</h3>
            <p className="text-[#9b87f5] font-medium mb-4">Limited cabins available!</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>2 nights in a heated cabin (up to 2 adults and 2 children)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>2 dinners, 1 lunch, 2 breakfasts, snacks & unlimited warm beverages</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Arrival Welcome Package</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Indoor workshops including all supplies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Family cooking class</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Planned outdoor activities</span>
              </li>
            </ul>
            <p className="text-sm mb-6 text-gray-600">
              Heated cabin includes sleeping accommodations with mattresses (bring your own sleeping bags),
              table with 4 chairs, cooking accessories, gas BBQ, outdoor picnic table with campfire pit.
              Heated private showers and washrooms available.
            </p>
            <div className="text-center">
              <a
                href="#booking"
                className="inline-block bg-[#7E69AB] text-white px-8 py-3 rounded-lg hover:bg-[#7E69AB]/90 transition-all"
              >
                Book Weekend Package
              </a>
            </div>
          </div>

          {/* One Day Retreat Package */}
          <div className="bg-[#D6BCFA]/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#D6BCFA]/30">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#7E69AB]">1 Full Day Retreat</h3>
            <p className="text-[#9b87f5] font-medium mb-4">Perfect for day visitors!</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Full day of indoor workshops</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Outdoor activities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Family cooking class</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Lunch and dinner included</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Unlimited warm beverages</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#7E69AB]">•</span>
                <span>Evening campfire access</span>
              </li>
            </ul>
            <p className="text-sm mb-6 text-gray-600">
              Join us for a full day of activities and workshops without the overnight stay.
              Perfect for those who want to experience the retreat atmosphere while returning home in the evening.
            </p>
            <div className="text-center">
              <a
                href="#booking"
                className="inline-block bg-[#7E69AB] text-white px-8 py-3 rounded-lg hover:bg-[#7E69AB]/90 transition-all"
              >
                Book Day Package
              </a>
            </div>
          </div>
        </div>

        {/* Gallery section moved here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-12 scroll-animate">
          {[
            {
              url: "https://static.wixstatic.com/media/aac7344b980d4e0eb6353b1304f5ebd0.jpg/v1/fill/w_2380,h_1854,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/aac7344b980d4e0eb6353b1304f5ebd0.jpg",
              alt: "Family activities"
            },
            {
              url: "https://static.wixstatic.com/media/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png/v1/fill/w_1231,h_2131,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png",
              alt: "Outdoor activities"
            },
            {
              url: "https://static.wixstatic.com/media/7f2eb6_a4275b9fefe14dba85a5c056ecdacab3~mv2.jpg/v1/fill/w_1478,h_776,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/7f2eb6_a4275b9fefe14dba85a5c056ecdacab3~mv2.jpg",
              alt: "Nature experience"
            },
            {
              url: "https://static.wixstatic.com/media/11062b_d578b9d4ffba48c68d086ec29fe9e6f0f000.jpg/v1/fill/w_727,h_1030,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_d578b9d4ffba48c68d086ec29fe9e6f0f000.jpg",
              alt: "Family bonding"
            }
          ].map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#booking"
            className="inline-block bg-[rgb(79,30,114)] hover:bg-[rgb(79,30,114)]/90 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg transition-all"
          >
            Join Our Next Retreat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;

