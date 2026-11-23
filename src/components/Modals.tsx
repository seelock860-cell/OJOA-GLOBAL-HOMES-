import { useState, useEffect, FormEvent } from 'react';
import {
  X,
  MapPin,
  Check,
  MessageCircle,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { PropertyListing, MarketPost, getWhatsAppUrl, PROPERTIES } from '../data/realEstateData';
import { SmartImage } from './SmartImage';

/* -------------------------------------------------------------------------- */
/* Property Details Modal                                                     */
/* -------------------------------------------------------------------------- */
interface PropertyModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onBookInspection: (propertyTitle: string) => void;
}

export function PropertyModal({ property, onClose, onBookInspection }: PropertyModalProps) {
  useEffect(() => {
    if (!property) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#071428]/75 backdrop-blur-xs p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className="relative aspect-[16/10] w-full bg-slate-200">
          <SmartImage
            src={property.image}
            alt={property.title}
            fallbackLabel={property.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close property details"
            className="absolute top-3 right-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#0B1D3A]/85 text-white hover:bg-[#0B1D3A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-2">
              <span className="inline-flex items-center gap-1 text-[#0B1D3A] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-yellow-600" />
                {property.location}
              </span>
              <span aria-hidden="true">·</span>
              <span>{property.category}</span>
              <span aria-hidden="true">·</span>
              <span>{property.size}</span>
            </div>

            <h2
              id="property-modal-title"
              className="font-display text-2xl sm:text-3xl font-bold text-[#0B1D3A]"
            >
              {property.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-200">
              <p className="text-2xl sm:text-3xl font-bold text-[#0B1D3A] tabular-nums">
                {property.priceNaira}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                {property.titleDoc}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {property.description}
          </p>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1D3A] mb-3">
              Key Specifications &amp; Estate Infrastructure
            </h3>
            <ul className="space-y-2.5">
              {property.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="font-semibold text-[#0B1D3A]">Payment Plan: </span>
            {property.paymentNote}
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => onBookInspection(property.title)}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132A52] font-semibold text-sm transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-yellow-400" />
              <span>Book Inspection</span>
            </button>

            <a
              href={getWhatsAppUrl(
                `Hello OJOA GLOBAL HOMES LIMITED, I would like full details and the title dossier for "${property.title}" (${property.priceNaira}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-[#071428] hover:bg-[#22c35e] font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Inspection Booking Modal                                                   */
/* -------------------------------------------------------------------------- */
interface BookingModalProps {
  isOpen: boolean;
  initialProperty?: string;
  onClose: () => void;
}

export function BookingModal({ isOpen, initialProperty, onClose }: BookingModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyName, setPropertyName] = useState(
    initialProperty || PROPERTIES[0].title
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (initialProperty) setPropertyName(initialProperty);
  }, [initialProperty]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!fullName.trim() || !phone.trim() || !preferredDate) {
      setError('Please complete your name, phone number, and preferred inspection date.');
      return;
    }
    setConfirmed(true);
  };

  const resetAndClose = () => {
    setConfirmed(false);
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#071428]/75 backdrop-blur-xs p-0 sm:p-4"
      onClick={resetAndClose}
    >
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-600 mb-1">
              Private Viewing
            </p>
            <h2
              id="booking-modal-title"
              className="font-display text-2xl font-bold text-[#0B1D3A]"
            >
              Book a Site Inspection
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close booking dialog"
            className="min-w-[44px] min-h-[44px] -mr-2 -mt-2 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-[#0B1D3A] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-display text-xl font-bold text-[#0B1D3A]">
              Inspection Request Confirmed
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you, <span className="font-semibold text-[#0B1D3A]">{fullName}</span>. Our
              inspection coordinator will confirm your{' '}
              <span className="font-semibold text-[#0B1D3A]">{preferredDate}</span> viewing for{' '}
              <span className="font-semibold text-[#0B1D3A]">{propertyName}</span>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(
                  `Hello OJOA GLOBAL HOMES LIMITED, I just booked an inspection for "${propertyName}" on ${preferredDate}. Name: ${fullName}, Phone: ${phone}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-[#071428] font-semibold text-sm hover:bg-[#22c35e]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-[#0B1D3A] hover:bg-slate-50 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {error && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-medium"
              >
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="booking-property"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Select Property / Estate
              </label>
              <select
                id="booking-property"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
              >
                {PROPERTIES.map((prop) => (
                  <option key={prop.id} value={prop.title}>
                    {prop.title} — {prop.location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="booking-name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Full Name *
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Adebayo Adeleke"
                className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Phone / WhatsApp *
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 809 000 0000"
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-date"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Preferred Date *
                </label>
                <input
                  id="booking-date"
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full min-h-[48px] mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132A52] font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>Confirm Inspection Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Post Reader Modal                                                          */
/* -------------------------------------------------------------------------- */
interface PostModalProps {
  post: MarketPost | null;
  onClose: () => void;
}

export function PostModal({ post, onClose }: PostModalProps) {
  useEffect(() => {
    if (!post) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#071428]/75 backdrop-blur-xs p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-[#0B1D3A] font-semibold">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="min-w-[44px] min-h-[44px] -mr-2 -mt-2 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-[#0B1D3A] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h2
          id="post-modal-title"
          className="font-display text-2xl sm:text-3xl font-bold text-[#0B1D3A] leading-tight mb-5"
        >
          {post.title}
        </h2>

        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={getWhatsAppUrl(
              `Hello OJOA GLOBAL HOMES LIMITED, I just read "${post.title}" and would like to speak with an advisor.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132A52] text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ask an Advisor on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-4 py-2 text-sm font-semibold text-slate-600 hover:text-[#0B1D3A] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
