import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { VENUE_DATA, GalleryItem } from '../data/venueData';
import { X, ZoomIn, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Mandapam & Stage', 'Architecture', 'Dining & Banquet', 'Celebrations'];

  const filteredItems = activeFilter === 'All'
    ? VENUE_DATA.gallery
    : VENUE_DATA.gallery.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NATURAL VISUAL CHRONICLES"
          title="The Sanctuary in Pictures"
          description="Immerse yourself in our sun-drenched courtyards, teakwood floral mandapams, authentic banana leaf banquets, and serene architectural corners."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2D4C36] text-[#FAF7F2] shadow-organic-sm'
                    : 'bg-white text-[#58655A] hover:text-[#16261A] border border-[#E2DACD] hover:border-[#2D4C36]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Responsive Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl bg-[#F3EEE4] border border-[#E2DACD] cursor-pointer shadow-organic-sm hover:shadow-organic-md transition-all duration-300 ${
                item.span || 'col-span-1 row-span-1'
              }`}
            >
              <div className="w-full h-full min-h-[280px] sm:min-h-[320px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16261A]/80 via-[#16261A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-[#A4C4A8] uppercase tracking-widest font-semibold flex items-center gap-1 mb-1">
                    <Leaf className="w-3 h-3" />
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#EFE7DA]">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C99E4A]" />
                    <span>View High-Res Photo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Resolution Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={handleCloseLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <span className="text-xs text-[#C99E4A] uppercase tracking-widest font-semibold block">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-xl text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
