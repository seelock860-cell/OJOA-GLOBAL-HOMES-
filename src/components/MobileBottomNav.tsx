import { Home, FileText, PhoneCall, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/realEstateData';

interface MobileBottomNavProps {
  activeSection: 'home' | 'posts' | 'contact';
  onNavigate: (section: 'home' | 'posts' | 'contact') => void;
}

export function MobileBottomNav({ activeSection, onNavigate }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-14 bg-[#0B1D3A]/95 backdrop-blur-md border-t border-white/15 text-white shadow-lg"
    >
      <div className="grid grid-cols-4 h-full">
        {/* Home */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className={`flex flex-col items-center justify-center min-h-[44px] gap-0.5 transition-colors ${
            activeSection === 'home' ? 'text-yellow-400' : 'text-slate-300 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-medium leading-none tracking-tight">Home</span>
        </a>

        {/* Posts */}
        <a
          href="#posts"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('posts');
          }}
          className={`flex flex-col items-center justify-center min-h-[44px] gap-0.5 transition-colors ${
            activeSection === 'posts' ? 'text-yellow-400' : 'text-slate-300 hover:text-white'
          }`}
        >
          <FileText className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-medium leading-none tracking-tight">Posts</span>
        </a>

        {/* Call Us */}
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex flex-col items-center justify-center min-h-[44px] gap-0.5 text-slate-300 hover:text-yellow-400 transition-colors"
        >
          <PhoneCall className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-medium leading-none tracking-tight">Call Us</span>
        </a>

        {/* Contact */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('contact');
          }}
          className={`flex flex-col items-center justify-center min-h-[44px] gap-0.5 transition-colors ${
            activeSection === 'contact' ? 'text-yellow-400' : 'text-slate-300 hover:text-white'
          }`}
        >
          <MessageSquare className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-medium leading-none tracking-tight">Contact</span>
        </a>
      </div>
    </nav>
  );
}
