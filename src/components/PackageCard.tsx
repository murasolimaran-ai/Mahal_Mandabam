import React from 'react';
import { Check, Sparkles, ArrowRight, Leaf } from 'lucide-react';
import { PackageItem } from '../data/venueData';

interface PackageCardProps {
  pkg: PackageItem;
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelectPackage }) => {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 ${
        pkg.isPopular
          ? 'bg-white border-2 border-[#2D4C36] shadow-organic-md lg:-translate-y-2'
          : 'bg-white border border-[#E2DACD] shadow-organic-sm hover:border-[#2D4C36]'
      } p-6 sm:p-8`}
    >
      {/* Most Popular Organic Badge */}
      {pkg.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2D4C36] text-[#FAF7F2] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] shadow-sm flex items-center gap-1.5">
          <Leaf className="w-3 h-3 text-[#A4C4A8]" />
          <span>Most Preferred Eco Package</span>
        </div>
      )}

      <div>
        {/* Package Header */}
        <div className="border-b border-[#E2DACD] pb-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#16261A] font-normal leading-tight">
            {pkg.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#58655A] font-light leading-relaxed">
            {pkg.tagline}
          </p>

          <div className="mt-5">
            <span className="text-[11px] text-[#7E8C80] uppercase tracking-wider block">
              Estimated Venue Rental
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-serif text-3xl sm:text-4xl text-[#16261A] font-normal">
                {pkg.startingPrice}
              </span>
              <span className="text-xs text-[#7E8C80] font-light">
                {pkg.priceNote}
              </span>
            </div>
          </div>
        </div>

        {/* Ideal For */}
        <div className="py-4 border-b border-[#E2DACD]">
          <span className="text-[11px] text-[#2D4C36] font-semibold uppercase tracking-wider block">
            Ideal For:
          </span>
          <p className="text-xs text-[#16261A] font-medium mt-1">
            {pkg.idealFor}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="pt-6">
          <span className="text-[11px] text-[#7E8C80] font-semibold uppercase tracking-widest block mb-4">
            Included Privileges:
          </span>
          <ul className="space-y-3 text-xs sm:text-sm text-[#58655A]">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 pt-6 border-t border-[#E2DACD]">
        <button
          onClick={() => onSelectPackage(pkg)}
          className={`w-full py-3.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
            pkg.isPopular
              ? 'bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] shadow-organic-sm'
              : 'bg-[#F3EEE4] hover:bg-[#EAE4D7] text-[#16261A] border border-[#E2DACD]'
          }`}
        >
          <span>Select & Check Dates</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
