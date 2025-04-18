
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(springRetreatImages.length / imagesPerPage);
  
  const currentImages = springRetreatImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentImages.map((image, index) => (
          <Dialog key={index}>
            <div className="relative group aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Spring Retreat ${currentPage * imagesPerPage + index + 1}`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <DialogTrigger asChild>
                <button 
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  onClick={() => setSelectedImage(image)}
                >
                  <Expand className="text-white h-8 w-8" />
                </button>
              </DialogTrigger>
            </div>
            
            <DialogContent className="sm:max-w-[80vw] max-h-[90vh] p-0 bg-black/90 border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={image} 
                  alt={`Spring Retreat ${currentPage * imagesPerPage + index + 1}`} 
                  className="max-h-[80vh] max-w-full object-contain" 
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Button
              key={idx}
              variant={idx === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(idx)}
            >
              {idx + 1}
            </Button>
          ))}
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
