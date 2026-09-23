import React from 'react';
import { MapPin, ArrowRight, Calendar, Leaf, Sparkles } from 'lucide-react';
import { VENUE_DATA } from '../data/venueData';

interface HeroProps {
  onExploreVenue: () => void;
  onCheckAvailability: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVenue, onCheckAvailability }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-20 md:py-0">
      {/* Full-Bleed Organic Mandapam Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={VENUE_DATA.heroImages.mainHall}
          alt={`${VENUE_DATA.brand.name} Eco-Luxury Pavilion`}
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        {/* Soft Botanical & Earth Scrim for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16261A] via-[#16261A]/55 to-[#16261A]/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Organic Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/90 border border-[#E2DACD] backdrop-blur-md mb-6 shadow-sm">
          <Leaf className="w-3.5 h-3.5 text-[#2D4C36]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#16261A] uppercase">
            ECO-LUXURY WEDDING SANCTUARY
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF7F2] tracking-tight leading-[1.12] max-w-4xl [text-wrap:balance]">
          Where Sacred Traditions <br className="hidden sm:inline" />
          <span className="italic font-light text-[#EFE7DA]">Blossom in Nature's Grace.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#EFE7DA] max-w-2xl font-light leading-relaxed [text-wrap:balance]">
          An architectural eco-sanctuary with lush tropical groves, open courtyards, teakwood pavilions, and authentic South Indian wedding hospitality.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreVenue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF7F2] text-[#16261A] hover:bg-white font-medium text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-organic-md"
          >
            <span>Explore Botanical Venue</span>
            <ArrowRight className="w-4 h-4 text-[#2D4C36]" />
          </button>

          <button
            onClick={onCheckAvailability}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] border border-[#507159]/40 font-medium text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-organic-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability</span>
          </button>
        </div>

        {/* Location & Trust Marker */}
        <div className="mt-12 sm:mt-16 inline-flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm tracking-[0.15em] text-[#EFE7DA]/90 uppercase">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C99E4A]" />
            {VENUE_DATA.brand.locationDisplay}
          </span>
          <span className="text-[#C99E4A]">•</span>
          <span>5 Mins from Chennai Airport (MAA)</span>
          <span className="text-[#C99E4A]">•</span>
          <span className="text-[#A4C4A8]">100% Eco-Friendly Grounds</span>
        </div>
      </div>

      {/* Gentle transition to body */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
};
