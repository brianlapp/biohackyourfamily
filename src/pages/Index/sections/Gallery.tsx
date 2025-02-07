
import React from 'react';
import GalleryImage from '../components/GalleryImage';

const galleryImages = [
  {
    url: "https://static.wixstatic.com/media/aac7344b980d4e0eb6353b1304f5ebd0.jpg/v1/fill/w_2380,h_1854,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/aac7344b980d4e0eb6353b1304f5ebd0.jpg",
    alt: "Family activities"
  },
  {
    url: "https://static.wixstatic.com/media/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png/v1/fill/w_1231,h_2131,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f2eb6_fe31e0d0bddc47dcacd51c60bc55f655~mv2.png",
    alt: "Outdoor activities"
  },
  {
    url: "https://static.wixstatic.com/media/7f2eb6_a4275b9fefe14dba85a5c056ecdacab3~mv2.jpg/v1/fill/w_1478,h_776,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/7f2eb6_a4275b9fefe14dba85a5c056ecdacab3~mv2.jpg",
    alt: "Nature experience"
  },
  {
    url: "https://static.wixstatic.com/media/11062b_d578b9d4ffba48c68d086ec29fe9e6f0f000.jpg/v1/fill/w_727,h_1030,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_d578b9d4ffba48c68d086ec29fe9e6f0f000.jpg",
    alt: "Family bonding"
  }
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 scroll-animate">
      {galleryImages.map((image, index) => (
        <GalleryImage key={index} {...image} />
      ))}
    </div>
  );
};

export default Gallery;
