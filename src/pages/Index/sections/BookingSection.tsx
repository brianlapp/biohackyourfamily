
import React from 'react';
import BookingForm from '../../../components/BookingForm';

const BookingSection = () => {
  return (
    <section id="booking" className="py-12 md:py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Book Your Spot</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <img 
            src="https://i.imgur.com/AVYdBgJ.jpeg" 
            alt="Booking section illustration" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <BookingForm />
      </div>
    </section>
  );
};

export default BookingSection;
