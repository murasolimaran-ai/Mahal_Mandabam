import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PackageCard } from '../components/PackageCard';
import { VENUE_DATA, PackageItem } from '../data/venueData';
import { Check, HelpCircle, ShieldCheck, Leaf } from 'lucide-react';

interface PackagesPageProps {
  onRequestPackage: (pkg: PackageItem) => void;
  onCheckAvailability: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onRequestPackage,
  onCheckAvailability,
}) => {
  const comparisonRows = [
    { feature: 'Duration / Slot', essential: '12 Hours', signature: '24 Hours (Full Day)', grand: '48 Hours (Two Days)' },
    { feature: 'Guest Capacity', essential: 'Up to 300 Guests', signature: 'Up to 800 Guests', grand: 'Up to 1,500 Guests' },
    { feature: 'Air Conditioning (Solar Assisted HVAC)', essential: 'Included', signature: 'Included', grand: 'Included' },
    { feature: 'Organic Linen Suites', essential: '2 Suites (Bridal & Groom)', signature: '2 Suites + 4 Guest Rooms', grand: '2 Suites + 12 Guest Rooms' },
    { feature: 'Banana Leaf Banquet Hall (400 per batch)', essential: 'Included', signature: 'Included', grand: 'Included' },
    { feature: 'Commercial Kitchen & Steam Vessels', essential: 'Standard access', signature: 'Full access + steam plant', grand: 'Dedicated chef support team' },
    { feature: 'Tree-Shaded Valet Parking', essential: '150 Vehicles', signature: '300 Vehicles', grand: 'Full Valet + VIP Lanes' },
    { feature: 'Acoustic Stage & Rigging', essential: 'Standard', signature: 'Line Array + Truss Rigging', grand: 'Concert Grade + Spotlights' },
    { feature: '100% Eco Generator Backup', essential: 'Included', signature: 'Included', grand: 'Included' },
    { feature: 'Sanctuary Manager & Concierge', essential: 'Dedicated', signature: 'Dedicated Team', grand: 'Personal Event Concierge' },
  ];

  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
            <Leaf className="w-3 h-3 text-[#2D4C36]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2D4C36] uppercase">
              RENTAL TIERS & PRICING
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Transparent Celebration Packages
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            All-inclusive eco-sanctuary rental tariffs without hidden electricity surcharges or mandatory vendor markups.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {VENUE_DATA.packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectPackage={onRequestPackage}
            />
          ))}
        </div>

        {/* Detailed Side-by-Side Comparison Table */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="DETAILED INCLUSIONS"
            title="Compare Package Amenities"
            description="A comprehensive side-by-side view to help your family select the ideal celebration arrangement."
          />

          <div className="overflow-x-auto rounded-2xl border border-[#E2DACD] bg-white shadow-organic-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E2DACD] bg-[#F3EEE4]">
                  <th className="p-4 sm:p-5 text-sm font-serif font-normal text-[#16261A] w-1/3">
                    Feature & Inclusion
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-[#58655A]">
                    Essential
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-[#2D4C36] bg-[#E9F0EA]">
                    Signature (Popular)
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-[#16261A]">
                    Grand Royal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DACD] font-light">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                    <td className="p-4 sm:p-5 text-[#16261A] font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-[#58655A]">
                      {row.essential}
                    </td>
                    <td className="p-4 sm:p-5 text-[#16261A] bg-[#E9F0EA]/40 font-normal">
                      {row.signature}
                    </td>
                    <td className="p-4 sm:p-5 text-[#16261A]">
                      {row.grand}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Booking Notice */}
        <div className="p-8 rounded-2xl bg-[#F3EEE4] border border-[#E2DACD] text-center max-w-3xl mx-auto shadow-organic-sm">
          <ShieldCheck className="w-8 h-8 text-[#2D4C36] mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-[#16261A]">
            Booking Deposit & Terms
          </h3>
          <p className="text-xs sm:text-sm text-[#58655A] mt-2 font-light leading-relaxed">
            Dates are reserved upon payment of a 25% initial advance. Flexible rescheduling options are provided in the event of unforeseen family exigencies subject to calendar availability.
          </p>
          <div className="mt-6">
            <button
              onClick={onCheckAvailability}
              className="px-6 py-3 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase transition-colors shadow-organic-sm"
            >
              Check Date Availability
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
