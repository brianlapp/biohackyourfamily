
interface GalleryImageProps {
  url: string;
  alt: string;
}

const GalleryImage = ({ url, alt }: GalleryImageProps) => {
  return (
    <div className="relative overflow-hidden group rounded-lg shadow-lg transition-transform hover:scale-105">
      <img
        src={url}
        alt={alt}
        className="w-full h-48 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <p className="text-white text-center px-4">{alt}</p>
      </div>
    </div>
  );
};

export default GalleryImage;
