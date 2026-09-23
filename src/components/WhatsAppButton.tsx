import React from 'react';
import { MessageSquare } from 'lucide-react';
import { VENUE_DATA } from '../data/venueData';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent('Hi, I would like to enquire about booking Namma Grand Mandapam for my event.');
  const whatsappUrl = `https://wa.me/${VENUE_DATA.brand.whatsappNumber}?text=${message}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire via WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#204E30] hover:bg-[#163B23] border border-[#2D4C36] text-[#FAF7F2] shadow-organic-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute w-full h-full rounded-full bg-[#25D366]/30 animate-ping opacity-60" />
          <MessageSquare className="w-5 h-5 text-[#4EED87] shrink-0" />
        </div>
        <span className="text-xs font-semibold tracking-wide text-[#FAF7F2] pr-1 hidden sm:inline">
          WhatsApp Enquiry
        </span>
      </a>
    </aside>
  );
};
