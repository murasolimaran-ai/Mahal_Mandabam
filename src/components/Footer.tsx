import React from 'react';
import { VENUE_DATA } from '../data/venueData';
import { MapPin, Phone, Mail, MessageSquare, ArrowUp, Instagram, Facebook, Youtube, Leaf } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  isSinglePageMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isSinglePageMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (path: string, hash: string) => {
    if (isSinglePageMode) {
      if (window.location.pathname !== '/') {
        onNavigate('/');
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#142217] border-t border-[#233827] text-[#A6BAAB] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#233827]">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#2D4C36] flex items-center justify-center text-[#C99E4A]">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-2xl text-[#FAF7F2] tracking-[0.16em] uppercase block leading-none">
                  {VENUE_DATA.brand.shortName}
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#C99E4A] uppercase block mt-1">
                  GRAND MANDAPAM • BOTANICAL SANCTUARY
                </span>
              </div>
            </div>
            <p className="text-xs text-[#A6BAAB] font-light leading-relaxed max-w-sm">
              {VENUE_DATA.brand.subheading}
            </p>
            <div className="pt-2 flex items-center gap-3 text-[#FAF7F2]">
              <a
                href={VENUE_DATA.brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#1E3324] border border-[#2D4C36] flex items-center justify-center hover:border-[#C99E4A] hover:text-[#C99E4A] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={VENUE_DATA.brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1E3324] border border-[#2D4C36] flex items-center justify-center hover:border-[#C99E4A] hover:text-[#C99E4A] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={VENUE_DATA.brand.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#1E3324] border border-[#2D4C36] flex items-center justify-center hover:border-[#C99E4A] hover:text-[#C99E4A] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]">
              Sanctuary
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLink('/', '#hero')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/about', '#about')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  About the Mandapam
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/venue', '#facilities')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Venue & Eco Spaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/events', '#events')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Celebration Types
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/gallery', '#gallery')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Visual Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/packages', '#packages')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Rental Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Occasions */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]">
              Occasions
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-[#FAF7F2] cursor-pointer" onClick={() => handleLink('/events', '#events')}>
                  Traditional Weddings & Vivaham
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] cursor-pointer" onClick={() => handleLink('/events', '#events')}>
                  Evening Receptions
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] cursor-pointer" onClick={() => handleLink('/events', '#events')}>
                  Engagements & Nichayathartham
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] cursor-pointer" onClick={() => handleLink('/events', '#events')}>
                  Seemantham & Baby Showers
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] cursor-pointer" onClick={() => handleLink('/events', '#events')}>
                  60th & 80th Milestone Jubilees
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] cursor-pointer" onClick={() => handleLink('/events', '#events')}>
                  Corporate Summits & Conclaves
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2]">
              Concierge
            </h4>
            <div className="space-y-2.5 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C99E4A] shrink-0 mt-0.5" />
                <span>GST Road, Pallavaram, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C99E4A] shrink-0" />
                <a href={`tel:${VENUE_DATA.brand.phonePrimary.replace(/[^0-9+]/g, '')}`} className="hover:text-[#FAF7F2]">
                  {VENUE_DATA.brand.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${VENUE_DATA.brand.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2]"
                >
                  WhatsApp Reservations
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C99E4A] shrink-0" />
                <span className="text-[#FAF7F2] truncate">{VENUE_DATA.brand.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability pledge banner */}
        <div className="py-4 my-4 rounded-xl bg-[#1A2E20] border border-[#2B4632] px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#A4C4A8]">
            <Leaf className="w-4 h-4 text-[#C99E4A]" />
            <span>Eco-Sanctuary Pledge: 100% Biodegradable Banana Leaf Catering & Rainwater Harvested Grounds</span>
          </div>
          <span className="text-[#C99E4A] uppercase tracking-widest text-[10px] font-semibold">Green Wedding Certified</span>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 {VENUE_DATA.brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#6D8372]">Tamil Nadu Marriage Venue Registration</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C99E4A] hover:text-[#FAF7F2] transition-colors uppercase tracking-widest text-[10px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
