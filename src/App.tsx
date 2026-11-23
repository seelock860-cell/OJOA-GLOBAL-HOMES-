import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PropertiesSection } from './components/PropertiesSection';
import { PostsSection } from './components/PostsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PropertyModal, BookingModal, PostModal } from './components/Modals';
import { PropertyListing, MarketPost } from './data/realEstateData';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [selectedPost, setSelectedPost] = useState<MarketPost | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingProperty, setBookingProperty] = useState<string | undefined>(undefined);
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'posts' | 'contact'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const postsEl = document.getElementById('posts');
      const contactEl = document.getElementById('contact');
      const scrollY = window.scrollY + 220;

      if (contactEl && scrollY >= contactEl.offsetTop) {
        setActiveBottomTab('contact');
      } else if (postsEl && scrollY >= postsEl.offsetTop) {
        setActiveBottomTab('posts');
      } else {
        setActiveBottomTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (propertyTitle?: string) => {
    setSelectedProperty(null);
    setBookingProperty(propertyTitle);
    setBookingOpen(true);
  };

  const handleBottomNavigate = (section: 'home' | 'posts' | 'contact') => {
    setActiveBottomTab(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#0B1D3A]">
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        <Hero onBookNow={() => handleOpenBooking()} />
        <AboutSection />
        <PropertiesSection onSelectProperty={(prop) => setSelectedProperty(prop)} />
        <PostsSection onSelectPost={(post) => setSelectedPost(post)} />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating Pumping WhatsApp Button */}
      <WhatsAppButton />

      {/* Fixed Mobile Bottom Navigation */}
      <MobileBottomNav activeSection={activeBottomTab} onNavigate={handleBottomNavigate} />

      {/* Interactive Modals */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookInspection={(title) => handleOpenBooking(title)}
      />

      <BookingModal
        isOpen={bookingOpen}
        initialProperty={bookingProperty}
        onClose={() => setBookingOpen(false)}
      />

      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
}
