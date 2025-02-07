
import React from 'react';
import BookingForm from '../../../components/BookingForm';

const BookingSection = () => {
  return (
    <section id="booking" className="py-12 md:py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Book Your Spot</h2>
        <BookingForm />
      </div>
    </section>
  );
};

export default BookingSection;
