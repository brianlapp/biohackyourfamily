
import React from 'react';
import CountdownTimer from '../../../components/CountdownTimer';

const RetreatInfo = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Bringing Back<br />the 80's!<br />
            Unplug with your family!<br />
            <span className="text-xl md:text-2xl mt-2 block">Screen Detox Family Weekend Retreat</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Mar 14, 2025, 6:00 p.m. at Camp Henry
          </p>
          <CountdownTimer />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="scroll-animate h-[320px]">
            <img
              src="https://static.wixstatic.com/media/11062b_880fd835b56744c6a0d43048a1de96f0~mv2_d_2208_1472_s_2.jpg/v1/fill/w_2208,h_1289,al_c,q_90,enc_avif,quality_auto/11062b_880fd835b56744c6a0d43048a1de96f0~mv2_d_2208_1472_s_2.jpg"
              alt="Retreat activities"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 md:space-y-6 scroll-animate">
            <p className="text-base md:text-lg">
              Join us for a transformative weekend retreat focused on reconnecting with family without the digital distractions. With both fresh air outdoor activities and indoor workshops to keep all ages busy, you'll go home rested with stories to share and remember.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#booking"
                className="inline-block bg-[rgb(79,30,114)] text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg hover:bg-[rgb(79,30,114)]/90 transition-all"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatInfo;
