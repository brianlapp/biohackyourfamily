
import React from 'react';
import BookingForm from '../../../components/BookingForm';

const BookingSection = () => {
  return (
    <section id="booking" className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[rgb(79,30,114)]">
          Registration Form
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <img 
            src="https://static.wixstatic.com/media/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png/v1/fill/w_1231,h_2131,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png" 
            alt="Registration form illustration" 
            className="w-full h-auto max-h-[300px] object-cover object-center rounded-lg shadow-lg mx-auto"
          />
        </div>

        <BookingForm />
      </div>
    </section>
  );
};

export default BookingSection;
