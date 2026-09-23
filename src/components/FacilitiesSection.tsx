import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { FacilityCard } from './FacilityCard';
import { VENUE_DATA, FacilityItem } from '../data/venueData';

export const FacilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hall' | 'comfort' | 'infrastructure' | 'services'>('all');

  const categories = [
    { key: 'all', label: 'All Eco Spaces' },
    { key: 'hall', label: 'Ceremonial Pavilions' },
    { key: 'comfort', label: 'Suites & Comfort' },
    { key: 'infrastructure', label: 'Sustainable Infrastructure' },
    { key: 'services', label: 'Hospitality & Dining' },
  ];

  const filteredFacilities = activeCategory === 'all'
    ? VENUE_DATA.facilities
    : VENUE_DATA.facilities.filter((item) => item.category === activeCategory);

  return (
    <section id="facilities" className="py-20 md:py-28 bg-[#F3EEE4] border-t border-[#E2DACD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WORLD-CLASS SUSTAINABLE AMENITIES"
          title="Engineered For Natural Distinction"
          description={`Every square foot of ${VENUE_DATA.brand.name} is thoughtfully crafted to unite sacred South Indian rituals with organic hospitality and eco-friendly standards.`}
        />

        {/* Filter Controls (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2D4C36] text-[#FAF7F2] shadow-organic-sm'
                    : 'bg-white text-[#58655A] hover:text-[#16261A] border border-[#E2DACD] hover:border-[#2D4C36]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
};
