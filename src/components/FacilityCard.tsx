import React from 'react';
import { 
  Building2, 
  Utensils, 
  Wind, 
  Crown, 
  Gem, 
  BedDouble, 
  Car, 
  Zap, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  LucideIcon 
} from 'lucide-react';
import { FacilityItem } from '../data/venueData';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Utensils,
  Wind,
  Crown,
  Gem,
  BedDouble,
  Car,
  Zap,
  Sparkles,
  Flame,
  ShieldCheck,
  CheckCircle2,
};

interface FacilityCardProps {
  facility: FacilityItem;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const IconComponent = iconMap[facility.iconName] || Building2;

  return (
    <div className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E2DACD] hover:border-[#2D4C36] transition-all duration-300 flex flex-col justify-between shadow-organic-sm hover:shadow-organic-md">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#E9F0EA] border border-[#D0DFD2] flex items-center justify-center text-[#2D4C36] mb-5 group-hover:scale-105 transition-transform duration-200">
          <IconComponent className="w-6 h-6 stroke-[1.6]" />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-[#16261A] font-normal leading-tight group-hover:text-[#2D4C36] transition-colors">
          {facility.title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm text-[#58655A] font-light leading-relaxed">
          {facility.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E2DACD] flex items-center justify-between text-[11px] text-[#2D4C36] font-semibold tracking-widest uppercase">
        <span>Verified Natural Facility</span>
        <span className="w-2 h-2 rounded-full bg-[#2D4C36]" />
      </div>
    </div>
  );
};
