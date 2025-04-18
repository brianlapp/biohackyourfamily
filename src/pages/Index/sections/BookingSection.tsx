import React from 'react';
import BookingForm from '../../../components/BookingForm';
const BookingSection = () => {
  return <section id="booking" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-up">
            Ready to Join Us?
          </h2>
          <p className="text-lg md:text-xl text-center mb-12 text-gray-600 animate-fade-up">
            Register now to secure your spot in our transformative workshops and retreats
          </p>
          
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl animate-fade-up">
            <img src="/lovable-uploads/e367a7ae-7924-4b97-92d6-db29edee011e.png" alt="Biohack Your Family Wellness" className="w-full h-[300px] object-cover" />
          </div>

          <div className="rounded-2xl shadow-xl p-8 md:p-12 animate-fade-up bg-amber-200">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>;
};
export default BookingSection;