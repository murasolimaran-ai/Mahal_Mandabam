import React from 'react';
import { SectionHeading } from './SectionHeading';
import { VENUE_DATA } from '../data/venueData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GUEST EXPERIENCES"
          title="Words From Cherished Families"
          description="Memories crafted in nature's serene atmosphere with warm South Indian hospitality."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VENUE_DATA.testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-[#E2DACD] flex flex-col justify-between hover:border-[#2D4C36] transition-all duration-300 shadow-organic-sm hover:shadow-organic-md"
            >
              <div>
                <Quote className="w-8 h-8 text-[#2D4C36]/30 mb-4 stroke-[1.2]" />
                <p className="font-serif text-base sm:text-lg text-[#16261A] font-normal leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E2DACD] flex items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#16261A]">
                    {item.clientName}
                  </h3>
                  <span className="text-xs text-[#2D4C36] font-medium block mt-0.5">
                    {item.eventType}
                  </span>
                </div>
                <span className="text-[11px] text-[#7E8C80] font-light">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
