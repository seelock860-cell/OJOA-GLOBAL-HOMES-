import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PROPERTIES, PropertyListing } from '../data/realEstateData';
import { SmartImage } from './SmartImage';

interface PropertiesSectionProps {
  onSelectProperty: (property: PropertyListing) => void;
}

type FilterOption = 'all' | 'ikoyi-vi' | 'lekki' | 'abuja';

const FILTER_TABS: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'All Properties' },
  { id: 'ikoyi-vi', label: 'Ikoyi & VI' },
  { id: 'lekki', label: 'Lekki' },
  { id: 'abuja', label: 'Abuja' },
];

export function PropertiesSection({ onSelectProperty }: PropertiesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredProperties =
    activeFilter === 'all'
      ? PROPERTIES
      : PROPERTIES.filter((item) => item.region === activeFilter);

  return (
    <section id="properties" className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0B1D3A]/70 mb-2">
              Featured Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1D3A] tracking-tight text-balance">
              Signature Properties &amp; Verified Estates
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter properties by location"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg self-start md:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[40px] px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D3A] ${
                    isActive
                      ? 'bg-[#0B1D3A] text-yellow-400'
                      : 'text-slate-600 hover:text-[#0B1D3A] hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                {/* 4:3 Property Photography */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <SmartImage
                    src={property.image}
                    alt={`${property.title} in ${property.location}`}
                    fallbackLabel={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  {/* Unboxed Metadata Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                    <span className="inline-flex items-center gap-1 text-[#0B1D3A] font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-yellow-600" aria-hidden="true" />
                      {property.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{property.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{property.titleDoc}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B1D3A] mb-2">
                    {property.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {property.summary}
                  </p>
                </div>
              </div>

              {/* Price & View Details Footer */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#0B1D3A] tabular-nums">
                    {property.priceNaira}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{property.size}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProperty(property)}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132A52] text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-yellow-400" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
