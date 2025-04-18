
import React from 'react';
import BookingForm from '../../../components/BookingForm';
import { Separator } from '@/components/ui/separator';
import { CalendarCheck, Users, MessageSquareText, Clock } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="booking" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-up">
            Ready to Join Us?
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 text-gray-600 animate-fade-up">
            Register now to secure your spot in our transformative workshops and retreats
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-full min-h-[300px]">
              <img 
                src="/lovable-uploads/e367a7ae-7924-4b97-92d6-db29edee011e.png" 
                alt="Biohack Your Family Wellness" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Experience Transformation</h3>
                <p className="text-white/90">Join our community of wellness-focused families</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="h-5 w-5 text-amber-300" />
                    <span className="text-sm">Year-round workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-300" />
                    <span className="text-sm">All family members welcome</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-300" />
                    <span className="text-sm">Flexible schedules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquareText className="h-5 w-5 text-amber-300" />
                    <span className="text-sm">Personalized support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-200 p-8 md:p-10">
              <h3 className="text-xl font-bold mb-6 text-primary">Register for an Event</h3>
              <BookingForm />
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Need More Information?</h3>
            <p className="mb-6">Contact us directly for personalized treatments and services</p>
            <div className="inline-block bg-white rounded-xl shadow-md px-8 py-6">
              <h4 className="font-semibold text-primary mb-3">Additional Support Services</h4>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>One-on-one fascia release treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>PEMF session treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>Reiki Master Mahatma Energy treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>Culinary nutrition consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>EMF Home Inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>Healthy Home Audit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
