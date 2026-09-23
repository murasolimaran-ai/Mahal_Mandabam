import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Phone, Leaf } from 'lucide-react';
import { VENUE_DATA } from '../data/venueData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAvailabilityModal: () => void;
  isSinglePageMode: boolean;
  onToggleMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenAvailabilityModal,
  isSinglePageMode,
  onToggleMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', hash: '#hero' },
    { label: 'About', path: '/about', hash: '#about' },
    { label: 'Venue & Eco Spaces', path: '/venue', hash: '#facilities' },
    { label: 'Occasions', path: '/events', hash: '#events' },
    { label: 'Gallery', path: '/gallery', hash: '#gallery' },
    { label: 'Packages', path: '/packages', hash: '#packages' },
    { label: 'Location', path: '/location', hash: '#location' },
    { label: 'Contact', path: '/contact', hash: '#contact' },
  ];

  const handleLinkClick = (link: { path: string; hash: string }) => {
    setIsMobileMenuOpen(false);
    if (isSinglePageMode) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      onNavigate(link.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E2DACD] py-3.5 shadow-organic-sm text-[#1C241E]'
            : 'bg-gradient-to-b from-[#16261A]/85 via-[#16261A]/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Wordmark with Botanical Leaf Motif */}
          <button
            onClick={() => handleLinkClick(navLinks[0])}
            className="text-left group focus:outline-none flex items-center gap-2.5"
            aria-label={`${VENUE_DATA.brand.name} Home`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-[#E9F0EA] text-[#2D4C36]' : 'bg-[#2D4C36] text-[#FAF7F2]'
            }`}>
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <span className={`font-serif text-xl sm:text-2xl font-normal tracking-[0.18em] uppercase block leading-none transition-colors ${
                isScrolled ? 'text-[#16261A] group-hover:text-[#2D4C36]' : 'text-[#FAF7F2] group-hover:text-[#C99E4A]'
              }`}>
                {VENUE_DATA.brand.shortName}
              </span>
              <span className={`text-[9px] tracking-[0.22em] uppercase font-sans font-medium block mt-0.5 ${
                isScrolled ? 'text-[#2D4C36]' : 'text-[#EFE7DA]'
              }`}>
                GRAND MANDAPAM • BOTANICAL SANCTUARY
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link)}
                  className={`text-xs uppercase tracking-[0.15em] transition-colors duration-200 py-1 relative font-medium ${
                    isScrolled
                      ? isActive
                        ? 'text-[#2D4C36] font-semibold'
                        : 'text-[#58655A] hover:text-[#16261A]'
                      : isActive
                        ? 'text-[#FAF7F2] font-semibold'
                        : 'text-[#EFE7DA]/85 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isScrolled ? 'bg-[#2D4C36]' : 'bg-[#C99E4A]'
                    }`} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Mode Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View Mode Switcher */}
            <button
              onClick={onToggleMode}
              title={isSinglePageMode ? "Switch to Multi-Page View" : "Switch to Single-Page View"}
              className={`text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap ${
                isScrolled
                  ? 'border-[#E2DACD] bg-[#F3EEE4] text-[#58655A] hover:text-[#16261A] hover:border-[#2D4C36]'
                  : 'border-white/30 bg-black/20 text-white hover:bg-black/40'
              }`}
            >
              {isSinglePageMode ? 'View: Single Page' : 'View: Multi Page'}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenAvailabilityModal}
              className="inline-flex items-center gap-2 bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-medium text-xs tracking-wider uppercase px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-organic-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAvailabilityModal}
              aria-label="Check Availability"
              className="p-2 text-[#FAF7F2] bg-[#2D4C36] rounded-full hover:bg-[#1E3324]"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#16261A] hover:bg-[#F3EEE4]' : 'text-[#FAF7F2] hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF7F2] border-l border-[#E2DACD] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E2DACD]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E9F0EA] flex items-center justify-center text-[#2D4C36]">
                    <Leaf className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-serif text-lg text-[#16261A] font-normal tracking-[0.16em] uppercase block">
                      {VENUE_DATA.brand.shortName}
                    </span>
                    <span className="text-[9px] text-[#2D4C36] uppercase tracking-wider block">
                      GRAND MANDAPAM
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#58655A] hover:text-[#16261A] rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="py-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleLinkClick(link)}
                      className={`w-full text-left py-3 px-3 rounded-lg text-sm uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'bg-[#E9F0EA] text-[#2D4C36] font-semibold'
                          : 'text-[#58655A] hover:text-[#16261A] hover:bg-[#F3EEE4]'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Mode Switcher */}
              <div className="pt-2 pb-4">
                <button
                  onClick={() => {
                    onToggleMode();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 px-3 rounded-lg border border-[#E2DACD] bg-[#F3EEE4] text-[#16261A] text-xs uppercase tracking-wider font-medium"
                >
                  {isSinglePageMode ? 'Switch to Multi-Page View' : 'Switch to Single-Page View'}
                </button>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#E2DACD] space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAvailabilityModal();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-organic-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Availability</span>
              </button>

              <div className="pt-2 text-center text-xs text-[#7E8C80] space-y-1">
                <p className="flex items-center justify-center gap-1.5 text-[#58655A]">
                  <Phone className="w-3 h-3 text-[#2D4C36]" />
                  <span>{VENUE_DATA.brand.phonePrimary}</span>
                </p>
                <p className="text-[11px] text-[#7E8C80]">
                  {VENUE_DATA.brand.locationDisplay}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
