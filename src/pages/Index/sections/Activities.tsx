
import React from 'react';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto mb-8 md:mb-12 scroll-animate">
          {[
            "Family Cooking", "Outdoor Activities",
            "Digital Detox", "Wellness Workshops",
            "Nature Walks", "Board Games",
            "Campfires", "Story Telling"
          ].map((activity) => (
            <div
              key={activity}
              className="bg-[#F2FCE2] p-4 rounded-lg shadow-sm"
            >
              <p className="font-medium text-[#7E69AB]">{activity}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#booking"
            className="inline-block bg-[#7E69AB] text-white px-8 py-3 text-lg rounded-lg hover:bg-[#7E69AB]/90 transition-all"
          >
            Join Our Next Retreat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;
