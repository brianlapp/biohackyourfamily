
import React from 'react';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Windsor - Essex County</span>
            </div>
            <div className="text-center">
              <span>© BioHack Your Family 2025. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
