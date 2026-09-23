import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { EventCard } from './EventCard';
import { VENUE_DATA, EventType } from '../data/venueData';
import { X, Check, Calendar, ArrowRight, Leaf } from 'lucide-react';

interface EventsSectionProps {
  onCheckAvailabilityForEvent?: (eventName: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  onCheckAvailabilityForEvent,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  return (
    <section id="events" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TAILORED BOTANICAL OCCASIONS"
          title="Designed For Every Sacred Celebration"
          description="From traditional dawn Vivaham rituals in sunlit courtyards to evening receptions and joyous family jubilees, our versatile spaces embrace your traditions."
        />

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {VENUE_DATA.events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelectEvent={(evt) => setSelectedEvent(evt)}
            />
          ))}
        </div>
      </div>

      {/* Selected Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E2DACD] rounded-2xl overflow-hidden shadow-2xl">
            {/* Header Image */}
            <div className="relative h-60 sm:h-68 w-full bg-[#F3EEE4]">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16261A] via-[#16261A]/40 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF7F2]/90 text-[#16261A] hover:bg-white transition-colors border border-[#E2DACD]"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs text-[#EFE7DA] uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
                  <Leaf className="w-3 h-3 text-[#A4C4A8]" />
                  {selectedEvent.typicalDuration} • Capacity: {selectedEvent.capacity}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  {selectedEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-5">
              <p className="text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
                {selectedEvent.longDesc}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2D4C36] mb-3">
                  Eco-Sanctuary Inclusions for {selectedEvent.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E2DACD] text-xs text-[#16261A]"
                    >
                      <Check className="w-4 h-4 text-[#2D4C36] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#E2DACD] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#7E8C80]">
                  Auspicious dates fill up fast. Reserve your preferred slot with our concierge.
                </div>
                <button
                  onClick={() => {
                    const evt = selectedEvent;
                    setSelectedEvent(null);
                    if (onCheckAvailabilityForEvent) {
                      onCheckAvailabilityForEvent(evt.title);
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase transition-colors shadow-organic-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire for {selectedEvent.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
