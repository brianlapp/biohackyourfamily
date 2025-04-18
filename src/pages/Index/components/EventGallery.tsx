
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const springRetreatImages = [
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

const EventGallery = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent>
          {springRetreatImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Spring Retreat ${index + 1}`}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default EventGallery;
