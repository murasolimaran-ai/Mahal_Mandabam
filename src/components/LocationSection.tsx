import React from 'react';
import { SectionHeading } from './SectionHeading';
import { VENUE_DATA } from '../data/venueData';
import { MapPin, Clock, Phone, MessageSquare, Mail, Navigation, ExternalLink, Plane, Train, Leaf } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LANDMARK ACCESSIBILITY"
          title="Prime GST Road Botanical Location"
          description="Centrally located along Chennai's primary arterial corridor, offering effortless transit for both local and outstation guests."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Stylized Interactive Map Area (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#E2DACD] bg-[#F3EEE4] shadow-organic-sm flex flex-col justify-between p-6">
              {/* Natural Organic Map Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{
                  backgroundImage: `radial-gradient(#2D4C36 1px, transparent 1px), radial-gradient(#C9BFB0 1px, #F3EEE4 1px)`,
                  backgroundSize: '36px 36px',
                  backgroundPosition: '0 0, 18px 18px'
                }}
              />

              {/* Map UI Elements */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-white/95 border border-[#E2DACD] backdrop-blur-sm text-xs">
                  <span className="text-[#7E8C80]">Coordinates: </span>
                  <span className="text-[#16261A] font-mono font-medium">12.9675° N, 80.1491° E</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] text-xs font-semibold text-[#2D4C36] flex items-center gap-1">
                  <Leaf className="w-3 h-3" />
                  <span>Tree-Shaded Valet Entry</span>
                </div>
              </div>

              {/* Center Landmark Pin */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#2D4C36]/15 animate-ping absolute inset-0" />
                  <div className="w-14 h-14 rounded-full bg-[#2D4C36] border-2 border-white flex items-center justify-center text-white relative shadow-organic-md">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-[#16261A] mt-3 font-normal">
                  {VENUE_DATA.brand.name}
                </h3>
                <p className="text-xs text-[#58655A] max-w-sm mt-1">
                  142 GST Road, Pallavaram Corridor, Chennai
                </p>
                <a
                  href={VENUE_DATA.brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-all shadow-organic-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>

              {/* Nearby Transit Proximity Indicators */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-[#E2DACD]">
                <div className="flex items-center gap-2 text-xs text-[#16261A] font-medium">
                  <Plane className="w-4 h-4 text-[#2D4C36] shrink-0" />
                  <span>5 Mins from Chennai Airport (MAA)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#16261A] font-medium">
                  <Train className="w-4 h-4 text-[#2D4C36] shrink-0" />
                  <span>3 Mins from Pallavaram / Airport Metro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address & Direct Contact Buttons (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E2DACD] shadow-organic-sm space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#2D4C36] block">
                    Physical Address
                  </span>
                  <p className="text-sm text-[#16261A] font-light leading-relaxed mt-1">
                    {VENUE_DATA.brand.fullAddress}
                  </p>
                  <span className="text-xs text-[#7E8C80] block mt-1 font-light">
                    Landmark: {VENUE_DATA.brand.landmark}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E2DACD]">
                <div className="w-9 h-9 rounded-xl bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#2D4C36] block">
                    Operating & Visiting Hours
                  </span>
                  <p className="text-sm text-[#16261A] font-light leading-relaxed mt-1">
                    {VENUE_DATA.brand.openingHours}
                  </p>
                </div>
              </div>

              {/* Direct Telephones */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E2DACD]">
                <div className="w-9 h-9 rounded-xl bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#2D4C36] block">
                    Telephone Concierge
                  </span>
                  <p className="text-sm text-[#16261A] font-semibold mt-1">
                    {VENUE_DATA.brand.phonePrimary}
                  </p>
                  <span className="text-xs text-[#7E8C80] block font-light">
                    Alternative: {VENUE_DATA.brand.phoneSecondary}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E2DACD]">
                <div className="w-9 h-9 rounded-xl bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#2D4C36] block">
                    Official Email
                  </span>
                  <p className="text-sm text-[#16261A] font-light mt-1">
                    {VENUE_DATA.brand.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={VENUE_DATA.brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-white border border-[#E2DACD] hover:border-[#2D4C36] text-[#16261A] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-organic-sm text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-[#2D4C36]" />
                <span>Directions</span>
              </a>

              <a
                href={`tel:${VENUE_DATA.brand.phonePrimary.replace(/[^0-9+]/g, '')}`}
                className="py-3 px-4 rounded-full bg-white border border-[#E2DACD] hover:border-[#2D4C36] text-[#16261A] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-organic-sm text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#2D4C36]" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${VENUE_DATA.brand.whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20Mandapam%20for%20my%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-[#204E30] hover:bg-[#183F26] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-organic-sm text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
