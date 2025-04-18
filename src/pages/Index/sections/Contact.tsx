
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <footer className="py-12 md:py-16 bg-gray-50 border-t">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[rgb(79,30,114)]" />
                  <span>Windsor - Essex County</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[rgb(79,30,114)]" />
                  <a href="mailto:info@biohackyourfamily.com" className="hover:underline">
                    info@biohackyourfamily.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[rgb(79,30,114)]" />
                  <a href="tel:+15555551234" className="hover:underline">
                    (555) 555-1234
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#workshops" className="hover:underline">Workshops & Retreats</a>
                </li>
                <li>
                  <a href="#booking" className="hover:underline">Register for Events</a>
                </li>
                <li>
                  <Link to="/past-events" className="hover:underline">Past Events</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © BioHack Your Family {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
