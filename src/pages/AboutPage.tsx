import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { VenueStats } from '../components/VenueStats';
import { VENUE_DATA } from '../data/venueData';
import { ShieldCheck, Compass, Award, HeartHandshake, CheckCircle2, Leaf, Sun, Wind } from 'lucide-react';

interface AboutPageProps {
  onCheckAvailability: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onCheckAvailability, onNavigate }) => {
  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
            <Leaf className="w-3 h-3 text-[#2D4C36]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2D4C36] uppercase">
              ARCHITECTURAL HERITAGE & ECO-SANCTUARY
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Crafted for Sanctity, <br />
            <span className="italic text-[#2D4C36]">Rooted in Natural Splendor.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            Established on the landmark GST Road corridor, {VENUE_DATA.brand.name} is an ode to classical South Indian grandeur, designed with organic stone courtyards, teakwood pillars, and sustainable hospitality.
          </p>
        </div>

        {/* Big Dual Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="venue-image-frame aspect-[4/3] border border-[#E2DACD] shadow-organic-md">
            <img
              src={VENUE_DATA.heroImages.exterior}
              alt={`${VENUE_DATA.brand.name} Architecture`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#2D4C36] font-semibold block">
              OUR BOTANICAL FOUNDATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#16261A] font-normal leading-tight">
              Where Traditional Rituals Meet Nature's Gentle Grace
            </h2>
            <p className="text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
              Every dimension of our mandapam was conceived alongside seasoned temple vastu architects, landscape botanists, and acoustic engineers. High ceiling clearances of 24 feet ensure that the ceremonial havan smoke never burdens guests, while specialized silent extraction ducts maintain fresh air.
            </p>
            <p className="text-sm sm:text-base text-[#58655A] font-light leading-relaxed">
              Sunlit courtyards with ancient banyan roots and bronze water urlis welcome family members, while dual stretcher-sized high-speed lifts and gentle slope ramps ensure that respected elders and grandparents can participate in every milestone ritual with pure ease.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2DACD] shadow-organic-sm">
                <span className="text-xs font-semibold text-[#16261A] block">Acoustic Clarity</span>
                <span className="text-xs text-[#58655A] mt-1 block">Calibrated for Vedic chanting and live classical nadaswaram.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2DACD] shadow-organic-sm">
                <span className="text-xs font-semibold text-[#16261A] block">Eco Redundant Power</span>
                <span className="text-xs text-[#58655A] mt-1 block">Solar-assisted silent backup guarantees zero blackout during rituals.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Stats Row */}
        <div className="mb-20">
          <VenueStats />
        </div>

        {/* Pillars of Hospitality */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="CORE COMMITMENTS"
            title="The Namma Promise"
            description="Our venue operations team operates around strict ecological and hospitality covenants."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E2DACD] shadow-organic-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E9F0EA] border border-[#D0DFD2] flex items-center justify-center text-[#2D4C36] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#16261A] mb-3">Vastu & Sanctity</h3>
              <p className="text-xs sm:text-sm text-[#58655A] font-light leading-relaxed">
                The orientation of our ceremonial dais, east-facing marriage altar, and priest sanctum adheres to classical Vedic architectural guidelines.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E2DACD] shadow-organic-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E9F0EA] border border-[#D0DFD2] flex items-center justify-center text-[#2D4C36] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#16261A] mb-3">Frictionless Security</h3>
              <p className="text-xs sm:text-sm text-[#58655A] font-light leading-relaxed">
                24/7 CCTV surveillance, perimeter guards, digital lock suites for bridal gold, and dedicated tree-shaded valet dispatch for wedding guests.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E2DACD] shadow-organic-sm">
              <div className="w-12 h-12 rounded-xl bg-[#E9F0EA] border border-[#D0DFD2] flex items-center justify-center text-[#2D4C36] mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#16261A] mb-3">Single Event Exclusivity</h3>
              <p className="text-xs sm:text-sm text-[#58655A] font-light leading-relaxed">
                During your booked slot, the entire main hall, stage, suites, and banana leaf dining chambers belong solely to your family with zero overlapping crowds.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-2xl bg-[#F3EEE4] border border-[#E2DACD] text-center max-w-3xl mx-auto shadow-organic-sm">
          <h2 className="font-serif text-3xl text-[#16261A] mb-3">
            Plan a Visit to Experience the Botanical Venue
          </h2>
          <p className="text-sm text-[#58655A] mb-8 font-light">
            Our venue manager is available for personal walk-through tours of our courtyards, halls, and suites every day from 9:00 AM to 8:00 PM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onCheckAvailability}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2D4C36] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase hover:bg-[#1E3324] transition-colors shadow-organic-sm"
            >
              Check Availability
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#E2DACD] bg-white text-[#16261A] font-semibold text-xs tracking-widest uppercase hover:border-[#2D4C36] transition-colors"
            >
              Contact Front Office
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
