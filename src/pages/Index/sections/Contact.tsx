
import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <a href="mailto:BioHackYourFamily@gmail.com" className="flex items-center gap-2 hover:text-[rgb(79,30,114)] transition-colors break-all md:break-normal">
              <Mail size={20} />
              <span>BioHackYourFamily@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Windsor - Essex County</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
