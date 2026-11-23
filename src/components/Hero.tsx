import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE, COMPANY_INFO } from '../data/realEstateData';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[78vh] md:min-h-[84vh] w-full flex items-center justify-center overflow-hidden bg-[#071428]"
    >
      {/* Full-width Aerial Estate Background */}
      <div className="absolute inset-0">
        <SmartImage
          src={HERO_IMAGE}
          alt="Aerial view of OJOA GLOBAL HOMES LIMITED luxury residential estate in Lagos, Nigeria"
          loading="eager"
          fallbackLabel="OJOA GLOBAL HOMES LIMITED Luxury Residential Estate"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured contrast scrim for crisp readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#071428]/80 via-[#0B1D3A]/65 to-[#071428]/85"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-4">
            Lagos &amp; Abuja · Verified C of O Estates
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-white text-balance mb-6">
            Welcome to {COMPANY_INFO.name}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed mb-9">
            Nigeria’s trusted real estate development and property advisory firm. We deliver
            architect-designed luxury residences and serviced estates with verified titles across
            Ikoyi, Lekki, Victoria Island, and Maitama.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onBookNow}
              className="group inline-flex items-center justify-center gap-3 min-h-[52px] px-9 py-3.5 border-2 border-yellow-400 bg-[#0B1D3A]/40 backdrop-blur-xs text-white hover:bg-yellow-400 hover:text-[#0B1D3A] font-semibold text-sm sm:text-base tracking-[0.14em] uppercase transition-all duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071428] cursor-pointer"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
