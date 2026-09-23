import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AvailabilityModal } from './components/AvailabilityModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VenuePage } from './pages/VenuePage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { PackagesPage } from './pages/PackagesPage';
import { ServicesPage } from './pages/ServicesPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';

import { PackageItem } from './data/venueData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isSinglePageMode, setIsSinglePageMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prefilledEvent, setPrefilledEvent] = useState<string>('');

  // Synchronize browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenAvailability = (eventType?: string) => {
    if (eventType) {
      setPrefilledEvent(eventType);
    } else {
      setPrefilledEvent('Wedding / Vivaham');
    }
    setIsModalOpen(true);
  };

  const handleRequestPackage = (pkg: PackageItem) => {
    setPrefilledEvent(`Package: ${pkg.name}`);
    setIsModalOpen(true);
  };

  const toggleMode = () => {
    setIsSinglePageMode((prev) => !prev);
    if (!isSinglePageMode) {
      // Switched to single-page mode: reset path to home
      if (currentPath !== '/') {
        navigateTo('/');
      }
    }
  };

  // Render appropriate view
  const renderCurrentPage = () => {
    if (isSinglePageMode) {
      return (
        <HomePage
          onCheckAvailability={handleOpenAvailability}
          onNavigate={navigateTo}
          onRequestPackage={handleRequestPackage}
        />
      );
    }

    switch (currentPath) {
      case '/about':
        return (
          <AboutPage
            onCheckAvailability={() => handleOpenAvailability()}
            onNavigate={navigateTo}
          />
        );
      case '/venue':
        return (
          <VenuePage
            onCheckAvailability={() => handleOpenAvailability()}
          />
        );
      case '/events':
        return (
          <EventsPage
            onCheckAvailabilityForEvent={(evt) => handleOpenAvailability(evt)}
          />
        );
      case '/gallery':
        return (
          <GalleryPage
            onCheckAvailability={() => handleOpenAvailability()}
          />
        );
      case '/packages':
        return (
          <PackagesPage
            onRequestPackage={handleRequestPackage}
            onCheckAvailability={() => handleOpenAvailability()}
          />
        );
      case '/services':
        return (
          <ServicesPage
            onCheckAvailability={() => handleOpenAvailability()}
          />
        );
      case '/location':
        return <LocationPage />;
      case '/contact':
      case '/enquiry':
      case '/booking':
        return <ContactPage />;
      case '/':
      default:
        return (
          <HomePage
            onCheckAvailability={handleOpenAvailability}
            onNavigate={navigateTo}
            onRequestPackage={handleRequestPackage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#16261A] flex flex-col font-sans selection:bg-[#2D4C36]/20 selection:text-[#16261A]">
      {/* Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenAvailabilityModal={() => handleOpenAvailability()}
        isSinglePageMode={isSinglePageMode}
        onToggleMode={toggleMode}
      />

      {/* Main Content Area */}
      <div className="flex-grow">
        {renderCurrentPage()}
      </div>

      {/* Footer */}
      <Footer onNavigate={navigateTo} isSinglePageMode={isSinglePageMode} />

      {/* Persistent Floating WhatsApp CTA */}
      <WhatsAppButton />

      {/* Reservation & Date Availability Modal */}
      <AvailabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledEventType={prefilledEvent}
      />
    </div>
  );
}
