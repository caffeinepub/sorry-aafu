import { useState } from 'react';

const photos = [
  { src: '/assets/Snapchat-1302406921.jpg', alt: 'Memory 1' },
  { src: '/assets/Snapchat-818160405.jpg', alt: 'Memory 2' },
  { src: '/assets/Snapchat-1302406921-1.jpg', alt: 'Memory 3' },
  { src: '/assets/Snapchat-818160405-1.jpg', alt: 'Memory 4' },
  { src: '/assets/Snapchat-818160405-2.jpg', alt: 'Memory 5' },
  { src: '/assets/Snapchat-1302406921-2.jpg', alt: 'Memory 6' },
  { src: '/assets/Snapchat-1302406921-3.jpg', alt: 'Memory 7' },
  { src: '/assets/Snapchat-818160405-3.jpg', alt: 'Memory 8' },
];

export default function PhotoGallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <div className="w-full space-y-6">
      {/* Gallery Title */}
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-apology-deep">
          Our Memories Together
        </h2>
        <div className="h-1 w-16 mx-auto bg-gradient-to-r from-apology-rose via-apology-coral to-apology-peach rounded-full" />
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            {/* Loading placeholder */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gradient-to-br from-apology-rose/20 to-apology-peach/20 animate-pulse" />
            )}
            
            {/* Image */}
            <img
              src={photo.src}
              alt={photo.alt}
              onLoad={() => handleImageLoad(index)}
              className={`h-full w-full object-cover transition-all duration-500 ${
                loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-apology-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
