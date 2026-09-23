import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { VENUE_DATA, EventType } from '../data/venueData';
import { Calendar, Users, Clock, Check, ArrowRight, Leaf } from 'lucide-react';

interface EventsPageProps {
  onCheckAvailabilityForEvent: (eventName: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onCheckAvailabilityForEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'weddings', label: 'Weddings & Receptions' },
    { id: 'family', label: 'Family Rituals' },
    { id: 'milestones', label: 'Milestones & Birthdays' },
    { id: 'corporate', label: 'Corporate & Cultural' },
  ];

  const getFilteredEvents = () => {
    if (selectedCategory === 'all') return VENUE_DATA.events;
    if (selectedCategory === 'weddings') {
      return VENUE_DATA.events.filter((e) => ['weddings', 'receptions', 'engagements'].includes(e.id));
    }
    if (selectedCategory === 'family') {
      return VENUE_DATA.events.filter((e) => ['seemantham', 'cultural'].includes(e.id));
    }
    if (selectedCategory === 'milestones') {
      return VENUE_DATA.events.filter((e) => ['birthdays', 'anniversaries'].includes(e.id));
    }
    if (selectedCategory === 'corporate') {
      return VENUE_DATA.events.filter((e) => ['corporate', 'cultural'].includes(e.id));
    }
    return VENUE_DATA.events;
  };

  const filtered = getFilteredEvents();

  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
            <Leaf className="w-3 h-3 text-[#2D4C36]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2D4C36] uppercase">
              EVENTS & SACRED CEREMONIES
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Curated For Every Milestone
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            From intimate morning Vedic rituals in breezy courtyards to evening banquets, our botanical sanctuary adapts to your family's exact traditions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#E2DACD] shadow-organic-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#2D4C36] text-[#FAF7F2] shadow-organic-sm'
                    : 'text-[#58655A] hover:text-[#16261A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* In-Depth Event Cards List */}
        <div className="space-y-10">
          {filtered.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E2DACD] rounded-2xl p-6 sm:p-8 hover:border-[#2D4C36] transition-all duration-300 shadow-organic-sm hover:shadow-organic-md"
            >
              {/* Event Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="venue-image-frame aspect-[4/3] border border-[#E2DACD]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FAF7F2]/90 border border-[#E2DACD] text-[10px] uppercase tracking-wider font-semibold text-[#2D4C36]">
                    {event.typicalDuration}
                  </div>
                </div>
              </div>

              {/* Event Content (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#16261A]">
                      {event.title}
                    </h2>
                    {event.tamilTitle && (
                      <span className="text-xs text-[#B6533A] font-semibold">
                        {event.tamilTitle}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#58655A] font-light leading-relaxed">
                    {event.longDesc}
                  </p>
                </div>

                {/* Inclusions */}
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2D4C36] block mb-2">
                    Eco-Sanctuary Capabilities & Inclusions:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#16261A]">
                        <Check className="w-3.5 h-3.5 text-[#2D4C36] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capacity & Action */}
                <div className="pt-4 border-t border-[#E2DACD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#58655A]">
                    Capacity: <strong className="text-[#16261A] font-semibold">{event.capacity}</strong>
                  </div>
                  <button
                    onClick={() => onCheckAvailabilityForEvent(event.title)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase transition-colors shadow-organic-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Check Availability</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
