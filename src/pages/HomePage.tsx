import React from 'react';
import { Hero } from '../components/Hero';
import { VenueIntro } from '../components/VenueIntro';
import { VenueStats } from '../components/VenueStats';
import { EventsSection } from '../components/EventsSection';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { Gallery } from '../components/Gallery';
import { PackagesSection } from '../components/PackagesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LocationSection } from '../components/LocationSection';
import { EnquiryForm } from '../components/EnquiryForm';
import { PackageItem } from '../data/venueData';

interface HomePageProps {
  onCheckAvailability: (eventType?: string) => void;
  onNavigate: (path: string) => void;
  onRequestPackage: (pkg: PackageItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onCheckAvailability,
  onNavigate,
  onRequestPackage,
}) => {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero
        onExploreVenue={() => {
          const el = document.getElementById('about');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            onNavigate('/venue');
          }
        }}
        onCheckAvailability={() => onCheckAvailability()}
      />

      {/* 2. Architectural Introduction */}
      <VenueIntro onLearnMore={() => onNavigate('/venue')} />

      {/* 3. Highlights / Statistics */}
      <VenueStats />

      {/* 4. Event Types */}
      <EventsSection onCheckAvailabilityForEvent={(evt) => onCheckAvailability(evt)} />

      {/* 5. Facilities & Amenities */}
      <FacilitiesSection />

      {/* 6. Asymmetric Editorial Gallery */}
      <Gallery />

      {/* 7. Packages & Pricing */}
      <PackagesSection onSelectPackage={(pkgName) => onCheckAvailability(`Package: ${pkgName}`)} />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Location & Proximity */}
      <LocationSection />

      {/* 10. Enquiry / Booking Form */}
      <EnquiryForm />
    </main>
  );
};
