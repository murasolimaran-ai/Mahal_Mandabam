import React from 'react';
import { LocationSection } from '../components/LocationSection';
import { Plane, Train, Car, Navigation, MapPin, Leaf } from 'lucide-react';
import { VENUE_DATA } from '../data/venueData';

export const LocationPage: React.FC = () => {
  const travelModes = [
    {
      icon: Plane,
      title: "From Chennai Airport (MAA)",
      time: "5 - 7 Minutes (3.2 km)",
      desc: "Head south along GST Road towards Tambaram. Take the tree-shaded service lane before Pallavaram Flyover. Sanctuary entrance on left."
    },
    {
      icon: Train,
      title: "From Airport / Pallavaram Metro",
      time: "3 - 5 Minutes (1.5 km)",
      desc: "Chennai Metro Blue Line connects directly to Chennai Central and Wimco Nagar. Auto and taxi stands right outside stations."
    },
    {
      icon: Train,
      title: "From Tambaram Railway Junction",
      time: "10 Minutes (6.8 km)",
      desc: "Direct arterial drive along Grand Southern Trunk Road heading north towards Guindy / Airport."
    },
    {
      icon: Car,
      title: "From Chennai Central Railway Station",
      time: "35 - 45 Minutes (19 km)",
      desc: "Via Anna Salai (Mount Road) and Kathipara Junction straight into GST Road."
    }
  ];

  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
            <Leaf className="w-3 h-3 text-[#2D4C36]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2D4C36] uppercase">
              STRATEGIC LOCATION & ACCESS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Location & Travel Directions
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            Unbeatable accessibility on the primary Chennai southern arterial corridor with landscaped arrival drives.
          </p>
        </div>

        {/* Location Section Embedded */}
        <LocationSection />

        {/* Transit Routes Grid */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#16261A] text-center mb-10">
            Convenient Transit For Outstation & Local Guests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelModes.map((mode, idx) => {
              const Icon = mode.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E2DACD] shadow-organic-sm hover:border-[#2D4C36] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E9F0EA] border border-[#D0DFD2] flex items-center justify-center text-[#2D4C36] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#16261A]">
                    {mode.title}
                  </h3>
                  <span className="text-xs text-[#2D4C36] font-semibold block mt-1">
                    {mode.time}
                  </span>
                  <p className="text-xs text-[#58655A] font-light leading-relaxed mt-2">
                    {mode.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
