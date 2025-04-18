
import React from 'react';
import { Helmet } from 'react-helmet';
import RetreatInfo from '../Index/sections/RetreatInfo';
import Activities from '../Index/sections/Activities';
import AboutUs from '../Index/sections/AboutUs';
import Contact from '../Index/sections/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const PastEvents = () => {
  const retreatImages = [
    '/spring-retreat/IMG-20250316-WA0001.jpg',
    '/spring-retreat/IMG-20250316-WA0002.jpg',
    '/spring-retreat/IMG-20250316-WA0003.jpg',
    '/spring-retreat/IMG-20250316-WA0006.jpg',
    '/spring-retreat/IMG-20250316-WA0008.jpg',
    '/spring-retreat/IMG-20250316-WA0011.jpg',
    '/spring-retreat/IMG-20250410-WA0000.jpg',
    '/spring-retreat/IMG-20250410-WA0001.jpg',
    '/spring-retreat/IMG-20250411-WA0004.jpg',
    '/spring-retreat/Screenshot_20250316_204559_WhatsApp.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Past Events - BioHack Your Family</title>
        <meta name="description" content="View our past family retreat events featuring cabin camping, family bonding, digital detox, and holistic wellness activities." />
      </Helmet>

      <div className="container px-4 py-8">
        <Link to="/" className="inline-flex items-center text-[#7E69AB] hover:text-[#7E69AB]/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Current Events
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Past Events Archive</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our past retreats and workshops. These events may no longer be available, 
            but they showcase the types of experiences we offer.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container px-4 py-8">
          <h2 className="text-xl font-semibold mb-4">March 2025 - Screen Detox Family Weekend Retreat</h2>
          <p className="text-gray-600 mb-6">Our flagship family retreat designed to help families reconnect without digital distractions.</p>

          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Wellness Package</CardTitle>
                  <CardDescription>Complete wellness experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>2 nights accommodation</li>
                    <li>All meals included</li>
                    <li>Access to all activities</li>
                    <li>Personal wellness consultation</li>
                    <li>Take-home wellness kit</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Family Package</CardTitle>
                  <CardDescription>Perfect for families</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>2 nights family accommodation</li>
                    <li>All meals included</li>
                    <li>Kid-friendly activities</li>
                    <li>Family bonding sessions</li>
                    <li>Digital detox guide</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Basic Package</CardTitle>
                  <CardDescription>Essential retreat experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>2 nights shared accommodation</li>
                    <li>All meals included</li>
                    <li>Group activities</li>
                    <li>Meditation sessions</li>
                    <li>Nature walks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <RetreatInfo />
            <Activities />
            <AboutUs />
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Event Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {retreatImages.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Spring Retreat ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button className="bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                See Our Current Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default PastEvents;
