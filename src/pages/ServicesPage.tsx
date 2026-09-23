import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { VENUE_DATA } from '../data/venueData';
import { Sparkles, Utensils, Car, Shield, Music, Camera, Check, Leaf } from 'lucide-react';

interface ServicesPageProps {
  onCheckAvailability: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onCheckAvailability }) => {
  const servicePillars = [
    {
      icon: Sparkles,
      title: "Artisanal Floral & Botanical Decoration",
      description: "Our high-clearance timber structures allow elaborate South Indian temple floral mandapams, fragrant lotus urlis, palm leaf woven ceilings, and fresh jasmine entrance pathways. We welcome your appointed decorator or can connect you with our accredited artisanal eco-florists.",
      inclusions: ["Motorized overhead stage truss", "Dedicated overnight rigging window", "Separate botanical floral prep yard", "Zero-damage eco mounting points"]
    },
    {
      icon: Utensils,
      title: "Banana Leaf Catering & Kitchen Facilities",
      description: "A chef's sanctuary equipped with heavy industrial steam cauldrons, pure vegetarian sanitization stations, deep freeze refrigeration, and separate wash bays. Caterers enjoy dedicated service elevators directly opening into the dining hall.",
      inclusions: ["Steam generation boiling battery", "High-capacity commercial gas banks", "Walk-in cold storage (4°C)", "Terracotta water dispensers"]
    },
    {
      icon: Car,
      title: "Valet Logistics & Tree-Shaded Bays",
      description: "Conveniently fronting the multi-lane GST Road, our traffic management squad directs arriving family sedans and coaches straight to shaded landscaped bays. Guests are greeted under an expansive covered portico with valet ticketing.",
      inclusions: ["300+ tree-shaded vehicle bays", "400 two-wheeler covered parking", "Covered drop-off portico", "Professional uniformed marshals"]
    },
    {
      icon: Music,
      title: "Acoustics & Audiovisual Infrastructure",
      description: "Architectural acoustic stone wall paneling engineered specifically for traditional live concerts, Nadaswaram ensembles, and speech clarity. Integrated ceiling audio distribution prevents uncomfortably loud hotspots.",
      inclusions: ["Digital sound mixing consoles", "Wireless UHF lapel & hand mics", "Dual laser projection screens", "Performer acoustic floor monitors"]
    },
    {
      icon: Camera,
      title: "Photography & Drone Readiness",
      description: "Concealed electrical lines and 24-foot clearance accommodate crane cameras, 360-degree photo booths, and drone cinematic fly-throughs. Our warm 3000K ambient illumination guarantees natural skin tones on camera.",
      inclusions: ["3000K CRI 95+ natural stage illumination", "Unobstructed crane swing radius", "High-speed wired LAN for live-streaming", "Dedicated photographer equipment locker"]
    },
    {
      icon: Shield,
      title: "Round-the-Clock Security & Eco-Sanitation",
      description: "Full-sanctuary perimeter patrol, continuous housekeeping of restrooms, electronic digital safe boxes in suites for family jewelry, and zero-plastic eco-protocol management.",
      inclusions: ["Continuous restroom cleaning attendants", "64 IP security cameras", "Heavy electronic safe in bridal suite", "100% biodegradable waste composting"]
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
              HOSPITALITY SERVICES & ECO-MANAGEMENT
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Comprehensive Sanctuary Services
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            Every service is tailored to remove operational burdens from the host family, leaving you completely free to cherish each sacred rite.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicePillars.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#E2DACD] flex flex-col justify-between hover:border-[#2D4C36] transition-all duration-300 shadow-organic-sm hover:shadow-organic-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E9F0EA] border border-[#D0DFD2] flex items-center justify-center text-[#2D4C36] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#16261A] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#58655A] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DACD] space-y-2">
                  {service.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#16261A] font-light">
                      <Check className="w-3.5 h-3.5 text-[#2D4C36] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onCheckAvailability}
            className="px-8 py-4 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase transition-colors shadow-organic-sm"
          >
            Check Venue & Service Availability
          </button>
        </div>
      </div>
    </main>
  );
};
