import React from 'react';
import { VENUE_DATA } from '../data/venueData';

export const VenueStats: React.FC = () => {
  return (
    <section className="py-14 bg-[#F3EEE4] border-y border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DACD]">
          {VENUE_DATA.stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center px-4 ${index > 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#16261A] font-normal tracking-tight block tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#2D4C36] font-semibold block mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-[#58655A] block mt-1 font-light">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
