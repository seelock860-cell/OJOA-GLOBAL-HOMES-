import { ABOUT_IMAGE, COMPANY_INFO } from '../data/realEstateData';
import { SmartImage } from './SmartImage';

const PROOF_METRICS = [
  { value: '18+', label: 'Completed Estates Delivered' },
  { value: '100%', label: 'Verified C of O & Consent' },
  { value: '₦14.5B+', label: 'Managed Asset Portfolio' },
  { value: '1,200+', label: 'Satisfied Homeowners' },
];

const CORE_SERVICES = [
  {
    index: '01.',
    title: 'Luxury Residential Development',
    description:
      'Turnkey detached villas, waterfront duplexes, and contemporary terrace homes built to international structural and finishing standards.',
  },
  {
    index: '02.',
    title: 'Verified Land Banking & Estates',
    description:
      'Dry, perimeter-fenced serviced plots along Nigeria’s fastest-growing corridors with instant physical allocation and clean titles.',
  },
  {
    index: '03.',
    title: 'Diaspora Advisory & Asset Management',
    description:
      'Transparent end-to-end acquisition support, independent solicitor charting, and post-handover facility management for local and diaspora clients.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Top 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: About + Mission & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0B1D3A]/70 mb-3">
                About {COMPANY_INFO.name}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1D3A] tracking-tight leading-tight text-balance mb-5">
                Building Lasting Wealth Through Transparent Nigerian Real Estate
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Headquartered in Victoria Island, Lagos with operations in Maitama, Abuja,{' '}
                {COMPANY_INFO.name} was founded to eliminate title uncertainty and construction
                compromises in the Nigerian property market. Every estate we develop undergoes
                rigorous land registry charting, geotechnical testing, and full municipal approval
                before launch.
              </p>

              {/* Mission & Vision — clean whitespace and hairline borders, no thick accent bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#0B1D3A] mb-2">
                    Our Mission
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To make verified, architecturally distinguished homes and high-yield land
                    accessible through honest pricing, strict documentation integrity, and on-time
                    project delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#0B1D3A] mb-2">
                    Our Vision
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To set the benchmark for institutional trust and sustainable urban community
                    development across West Africa’s premier residential corridors.
                  </p>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="mt-10 pt-8 border-t border-slate-200 space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0B1D3A]/70">
                Core Services
              </p>
              <div className="grid grid-cols-1 gap-5">
                {CORE_SERVICES.map((service) => (
                  <div key={service.index} className="flex gap-4 items-start">
                    <span className="font-display text-lg font-bold text-yellow-500 shrink-0 tabular-nums">
                      {service.index}
                    </span>
                    <div>
                      <h4 className="font-sans text-base font-semibold text-[#0B1D3A] mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Architectural Image */}
          <div className="lg:col-span-5">
            <div className="h-72 sm:h-96 lg:h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <SmartImage
                src={ABOUT_IMAGE}
                alt="Luxury Victoria Island private client lounge and contemporary residential interior"
                fallbackLabel="OJOA GLOBAL HOMES LIMITED Private Client Gallery, Victoria Island"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Proof Strip */}
        <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.label} className="py-2">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#0B1D3A] tabular-nums mb-1">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
