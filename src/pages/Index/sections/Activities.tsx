
import React from 'react';

const Activities = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What to Expect</h2>
        
        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-base md:text-lg">
          <p>
            Time to unwind, rest and relax with your family while enriching the weekend experience with ample fresh air, nature walks, old fashioned activities like cooking with the kids, nature crafts, board games, music circles, time out to nap or read or stretch by the lake and of course campfires.
          </p>
          <p>
            Open for all ages, no strict attendance, participate in your chosen interests and relax on your own if you need a break. It's time to show our kids how we grew up, lots of laughter and play without the digital distractions.
          </p>
          <p>
            There will be a special workshop on discovering, sharing and setting your family values and goals, helping to deepen the bond among your most cherished loved ones.
          </p>
          <p>
            Nourishing, simple meals will be offered, but for those spending the weekend in their own cabin, you will have access to your own BBQ and your personal campfire pit with a handful of cooking utensils to cater to any further culinary family needs. For those joining for the 1 day pass on Saturday, lunch and dinner will be included.
          </p>
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
              <p className="font-medium">{activity}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="#booking"
            className="inline-block bg-[rgb(79,30,114)] text-white px-8 py-3 text-lg rounded-lg hover:bg-[rgb(79,30,114)]/90 transition-all"
          >
            Join Our Next Retreat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;
