import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/realEstateData';

interface HeaderProps {
  onOpenBooking: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Posts', href: '#posts' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onOpenBooking }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B1D3A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* Left Zone: Hamburger menu on mobile/tablet + desktop nav links */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden min-w-[44px] min-h-[44px] -ml-2 flex items-center justify-center rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-slate-200 hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Center Zone: Company Logo centered at top */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="justify-self-center flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-md px-2 py-1"
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M4 26V13L16 5L28 13V26"
              stroke="#FACC15"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 26V17H21V26"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2 26H30" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-display text-xs sm:text-base md:text-lg font-semibold tracking-wide text-white">
            {COMPANY_INFO.name}
          </span>
        </a>

        {/* Right Zone: Mobile symmetry spacer + Desktop Contact & Primary Action */}
        <div className="flex items-center justify-end gap-5">
          <div className="w-11 lg:hidden" aria-hidden="true" />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden lg:inline-block text-sm font-medium text-slate-200 hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0B1D3A] text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Responsive Hamburger Menu Drawer */}
      {menuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#071428] border-t border-white/10 shadow-xl"
        >
          <nav aria-label="Mobile menu" className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center justify-between min-h-[44px] px-3 rounded-lg text-base font-medium text-slate-100 hover:bg-white/10 hover:text-yellow-400 transition-colors"
              >
                <span>{item.label}</span>
              </a>
            ))}

            <div className="pt-3 mt-3 border-t border-white/10 grid grid-cols-1 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-400 text-[#0B1D3A] font-semibold text-sm hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Private Inspection</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>Call Office</span>
                </a>
                <a
                  href={getWhatsAppUrl('Hello OJOA GLOBAL HOMES LIMITED, I would like to make an inquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366] text-[#071428] text-sm font-semibold hover:bg-[#22c35e] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
