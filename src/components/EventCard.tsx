import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EventType, VENUE_DATA } from '../data/venueData';

interface EventCardProps {
  event: EventType;
  onSelectEvent: (event: EventType) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  return (
    <article
      onClick={() => onSelectEvent(event)}
      className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-[#E2DACD] overflow-hidden hover:border-[#2D4C36] transition-all duration-300 shadow-organic-sm hover:shadow-organic-md"
    >
      {/* 4/3 Aspect Ratio Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F3EEE4]">
        <img
          src={event.image}
          alt={`${event.title} at ${VENUE_DATA.brand.name}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16261A]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Quiet duration tag */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E2DACD]">
          <span className="text-[10px] tracking-wider uppercase font-semibold text-[#2D4C36]">
            {event.typicalDuration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl sm:text-2xl text-[#16261A] font-normal group-hover:text-[#2D4C36] transition-colors leading-snug">
              {event.title}
            </h3>
          </div>
          {event.tamilTitle && (
            <span className="text-xs text-[#B6533A] block font-medium mt-0.5">
              {event.tamilTitle}
            </span>
          )}
          <p className="mt-2.5 text-xs sm:text-sm text-[#58655A] font-light leading-relaxed line-clamp-3">
            {event.shortDesc}
          </p>
        </div>

        {/* Footer Link & Capacity */}
        <div className="mt-5 pt-4 border-t border-[#E2DACD] flex items-center justify-between text-xs">
          <span className="text-[#7E8C80] font-light">
            Capacity: <strong className="text-[#16261A] font-semibold">{event.capacity}</strong>
          </span>
          <div className="inline-flex items-center gap-1.5 text-[#2D4C36] font-semibold group-hover:text-[#16261A] transition-colors">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  );
};
