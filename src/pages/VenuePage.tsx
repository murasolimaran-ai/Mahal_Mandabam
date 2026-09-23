import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { VENUE_DATA } from '../data/venueData';
import { Leaf } from 'lucide-react';

interface VenuePageProps {
  onCheckAvailability: () => void;
}

export const VenuePage: React.FC<VenuePageProps> = ({ onCheckAvailability }) => {
  const specs = [
    { label: 'Main Mandapam Area', val: '12,500 sq.ft column-free' },
    { label: 'Ceiling Height', val: '24 Feet clear natural clearance' },
    { label: 'Stage Dimensions', val: '60 ft width x 28 ft depth' },
    { label: 'Dining Hall Area', val: '8,000 sq.ft (Seats 400 at once)' },
    { label: 'AC Technology', val: 'Solar-Assisted Chilled-Water Central HVAC' },
    { label: 'Power Backup', val: 'Eco-silent backup synchronized gensets' },
    { label: 'Dedicated Parking', val: '300+ Cars & 400 Two-Wheelers' },
    { label: 'Guest Accommodations', val: '12 Organic Linen Suites with ensuite bathrooms' },
  ];

  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
            <Leaf className="w-3 h-3 text-[#2D4C36]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2D4C36] uppercase">
              ARCHITECTURAL SPECIFICATIONS & ECO-SPACES
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Venue & Natural Facilities
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            Engineered for seamless guest flows, organic banana leaf banquet turnaround, and uninterrupted ceremonial sanctity.
          </p>
        </div>

        {/* Feature Showcase 1: The Main Mandapam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="venue-image-frame aspect-[16/10] border border-[#E2DACD] shadow-organic-md">
            <img
              src={VENUE_DATA.heroImages.mainHall}
              alt="Eco-Luxury Main Mandapam Hall"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="space-y-5">
            <span className="text-xs font-semibold tracking-widest text-[#2D4C36] uppercase">
              THE CEREMONIAL SANCTUM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#16261A]">
              Eco-Luxury Main Mandapam Pavilion
            </h2>
            <p className="text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
              Our centerpiece pavilion accommodates 500 seated guests with unhindered sightlines to the elevated 60-foot dais. Crafted with natural stone wall acoustics, the hall ensures that the Vedic chants, classical instrumentals, and celebratory cheers remain richly audible without harsh echo.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Havan sacred fire smoke extraction
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Pure natural acoustic reverberation
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Organic floral rigging & jasmine drapery
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Gentle natural light ventilation
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase 2: Dining & Hospitality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 lg:flex-row-reverse">
          <div className="space-y-5 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-widest text-[#2D4C36] uppercase">
              CULINARY COMMUNION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#16261A]">
              Authentic Banana Leaf Banquet Hall
            </h2>
            <p className="text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
              Feeding hundreds of beloved guests on freshly harvested banana leaves is the sacred heart of any South Indian celebration. Our banquet hall seats 400 individuals per batch, supported by an ultra-hygienic stainless steel commercial kitchen equipped with heavy steam vessels, separate pure-veg zones, and pure RO mineral water.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Traditional plantain leaf setup
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Contemporary brass buffet counters
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ 100% biodegradable waste processing
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2DACD] text-xs text-[#16261A]">
                ✓ Clay terracotta drinking water stations
              </div>
            </div>
          </div>

          <div className="venue-image-frame aspect-[16/10] border border-[#E2DACD] shadow-organic-md order-1 lg:order-2">
            <img
              src={VENUE_DATA.heroImages.banquetDining}
              alt="Authentic Banana Leaf Dining Facilities"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="FACILITY METRICS"
            title="Technical Venue Dimensions"
            description="Clear architectural numbers for families, wedding planners, and decor committees."
          />

          <div className="max-w-4xl mx-auto rounded-2xl border border-[#E2DACD] bg-white shadow-organic-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DACD]">
              <div className="divide-y divide-[#E2DACD]">
                {specs.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between">
                    <span className="text-xs text-[#58655A] font-light">{item.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#16261A] tabular-nums">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-[#E2DACD]">
                {specs.slice(4).map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between">
                    <span className="text-xs text-[#58655A] font-light">{item.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#16261A] tabular-nums">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section Embedded */}
        <div className="mb-16">
          <FacilitiesSection />
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={onCheckAvailability}
            className="px-8 py-4 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase transition-colors shadow-organic-sm"
          >
            Check Dates For Your Occasion
          </button>
        </div>
      </div>
    </main>
  );
};
