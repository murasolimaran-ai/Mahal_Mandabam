import React from 'react';
import { 
  Users, 
  Car, 
  Wind, 
  Utensils, 
  Sparkles, 
  BedDouble, 
  Sun, 
  Leaf, 
  ArrowUpRight 
} from 'lucide-react';
import { VENUE_DATA } from '../data/venueData';

interface VenueIntroProps {
  onLearnMore?: () => void;
}

export const VenueIntro: React.FC<VenueIntroProps> = ({ onLearnMore }) => {
  const introFeatures = [
    { label: '500+ Seated Capacity', icon: Users, desc: 'High-clearance column-free hall' },
    { label: 'Tree-Shaded Valet Parking', icon: Car, desc: '300+ vehicles in landscaped bays' },
    { label: 'Solar-Assisted Eco HVAC', icon: Wind, desc: 'Whisper-quiet filtered climate' },
    { label: 'Banana Leaf Banquet Hall', icon: Utensils, desc: '400 seated guests per batch' },
    { label: '12 Organic Linen Suites', icon: BedDouble, desc: 'Teakwood bridal & guest suites' },
    { label: 'Open-Air Heritage Courtyard', icon: Sun, desc: 'Sun-dappled urli & banyan trees' },
    { label: 'Zero-Plastic Protocol', icon: Leaf, desc: 'Eco-conscious ceremonial standards' },
    { label: 'Artisanal Floral Rigging', icon: Sparkles, desc: 'Fresh jasmine, lotus & palm crafts' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Architectural Courtyard Image (48%) */}
          <div className="w-full lg:w-[48%]">
            <div className="venue-image-frame shadow-organic-md border border-[#E2DACD] group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={VENUE_DATA.heroImages.exterior}
                alt={`${VENUE_DATA.brand.name} Natural Heritage Courtyard`}
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16261A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-sm border border-[#E2DACD]">
                <p className="font-serif text-sm sm:text-base text-[#16261A] italic">
                  "Traditional architectural symmetry enveloped by lush banyan and palm groves."
                </p>
                <span className="text-[11px] text-[#2D4C36] font-semibold tracking-widest uppercase block mt-1">
                  GST Road Corridor • Chennai
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content (52%) */}
          <div className="w-full lg:w-[52%]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
              <Leaf className="w-3 h-3 text-[#2D4C36]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#2D4C36] uppercase">
                THE BOTANICAL SANCTUARY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16261A] leading-[1.15] tracking-tight [text-wrap:balance]">
              A Grand Setting Rooted in <br />
              <span className="italic text-[#2D4C36]">Nature & Sacred Heritage.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
              Situated on Chennai's landmark GST Road corridor just minutes from the international airport, {VENUE_DATA.brand.name} was envisioned as an architectural retreat where the purity of nature harmonizes with sacred matrimonial ceremonies.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
              From open-air central courtyards with floating bronze lotus urlis to expansive teakwood mandapam stages and authentic banana leaf dining chambers, every corner embraces organic textures, earthen clay, and verdant South Indian flora.
            </p>

            {/* Grid of 8 Features */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-3.5">
              {introFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E2DACD] hover:border-[#2D4C36] shadow-organic-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#16261A] leading-tight">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-[11px] text-[#7E8C80] mt-1.5 pl-9 font-light line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Link to venue details */}
            {onLearnMore && (
              <div className="mt-8">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#2D4C36] hover:text-[#16261A] font-semibold transition-colors group"
                >
                  <span>Explore All Botanical Venue Facilities</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
