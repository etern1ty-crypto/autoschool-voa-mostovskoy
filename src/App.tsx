import React, { useState } from 'react';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { AccessibilityBar } from './components/AccessibilityBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FleetShowroom } from './components/FleetShowroom';
import { PricingSection } from './components/PricingSection';
import { AutodromeSection } from './components/AutodromeSection';
import { ClassroomSection } from './components/ClassroomSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactsSection } from './components/ContactsSection';
import { RosobrnadzorSection } from './components/RosobrnadzorSection';
import { BookingModal } from './components/BookingModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState<string>('Категория «В»');

  const handleOpenBooking = (tariffTitle?: string) => {
    if (tariffTitle) {
      setSelectedTariff(tariffTitle);
    }
    setBookingOpen(true);
  };

  const handleScrollToFleet = () => {
    const el = document.getElementById('fleet');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateRosobrnadzor = () => {
    const el = document.getElementById('rosobrnadzor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-[#080A0F] text-[#dfe2ee] flex flex-col selection:bg-national-red selection:text-white">
        {/* Sticky Header & Accessibility Bar Container (Zero Conflict) */}
        <div className="sticky top-0 z-50 w-full shadow-lg">
          {/* Top Accessibility Bar for Visually Impaired (ГОСТ Р 52872-2012) */}
          <AccessibilityBar />

          {/* Precision Navigation Header */}
          <Header
            onOpenBooking={() => handleOpenBooking()}
            onNavigateRosobrnadzor={handleNavigateRosobrnadzor}
          />
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          {/* 1. Hero Slideshow with Kinetic Red Gradient Divider */}
          <HeroSection
            onOpenBooking={() => handleOpenBooking()}
            onNavigateRosobrnadzor={handleNavigateRosobrnadzor}
          />

          {/* 2. Fleet Showroom: Center Stage with Dashboard Cards and 3D Tilt Selector */}
          <FleetShowroom
            onSelectCar={(carName) => handleOpenBooking(`Автомобиль: ${carName}`)}
          />

          {/* 3. Official Prices & Tariffs */}
          <PricingSection
            onSelectTariff={(tariffName) => handleOpenBooking(tariffName)}
          />

          {/* 4. Autodrome & Real-layout Training Ground */}
          <AutodromeSection
            onOpenBooking={() => handleOpenBooking('Пробное занятие на автодроме')}
          />

          {/* 5. Real Classroom & Educational Base */}
          <ClassroomSection />

          {/* 6. Verified Reviews (Infinite Marquee) */}
          <ReviewsSection />

          {/* 7. Contacts, Office, Map & Messengers */}
          <ContactsSection
            onOpenBooking={() => handleOpenBooking('Консультация')}
          />

          {/* 8. Mandatory Rosobrnadzor Section */}
          <RosobrnadzorSection />
        </main>

        {/* Footer */}
        <Footer
          onNavigateRosobrnadzor={handleNavigateRosobrnadzor}
          onOpenBooking={() => handleOpenBooking()}
          onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)}
        />

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          initialTariff={selectedTariff}
          onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)}
        />

        {/* Privacy Policy Modal (152-FZ) */}
        <PrivacyPolicyModal
          isOpen={privacyPolicyOpen}
          onClose={() => setPrivacyPolicyOpen(false)}
        />
      </div>
    </AccessibilityProvider>
  );
};

export default App;
