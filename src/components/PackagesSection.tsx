import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PackageCard } from './PackageCard';
import { VENUE_DATA, PackageItem } from '../data/venueData';
import { ShieldCheck, Clock, Award, Sparkles, Leaf } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage?: (pkgName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const handleSelect = (pkg: PackageItem) => {
    if (onSelectPackage) {
      onSelectPackage(pkg.name);
    }
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#F3EEE4] border-t border-[#E2DACD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSPARENT RESERVATION TIERS"
          title="Rental Packages & Inclusions"
          description="Transparent, all-inclusive venue rental packages designed for sacred wedding ceremonies, evening celebrations, and multi-day family milestones."
        />

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {VENUE_DATA.packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onSelectPackage={handleSelect} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#E2DACD] shadow-organic-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#16261A]">
                  Zero Plastic Protocol
                </h4>
                <p className="text-[11px] text-[#7E8C80] mt-0.5">
                  Eco-friendly wedding standard
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#16261A]">
                  Flexible Setup Hours
                </h4>
                <p className="text-[11px] text-[#7E8C80] mt-0.5">
                  Decor team early access window
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#16261A]">
                  100% Power Redundancy
                </h4>
                <p className="text-[11px] text-[#7E8C80] mt-0.5">
                  Seamless generator fail-safe
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#16261A]">
                  Dedicated Event Manager
                </h4>
                <p className="text-[11px] text-[#7E8C80] mt-0.5">
                  On-site coordination throughout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing disclaimer */}
        <p className="mt-6 text-[11px] text-[#7E8C80] text-center font-light">
          *Rates indicated are indicative base seasonal tariffs and vary for peak auspicious Muhurtham dates. Government taxes applicable. Catering and decor services can be coordinated with your preferred partners.
        </p>
      </div>
    </section>
  );
};
