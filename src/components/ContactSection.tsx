import { useState, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Send,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/realEstateData';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Private Site Inspection');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Please enter your full name, phone number, and inquiry details.');
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#FACC15] text-[#0B1D3A] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Social Links */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0B1D3A]/80 mb-3">
              Direct Advisory Desk
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0B1D3A] tracking-tight mb-5">
              Connect With Us
            </h2>
            <p className="text-base text-[#0B1D3A]/90 leading-relaxed mb-8 max-w-md">
              Speak directly with our Victoria Island or Maitama property advisors for verified
              title dossiers, payment plans, and private site inspections.
            </p>

            {/* Primary WhatsApp CTA Button */}
            <div className="mb-8">
              <a
                href={getWhatsAppUrl(
                  'Hello OJOA GLOBAL HOMES LIMITED, I would like to speak with an advisor.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-3.5 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132A52] font-semibold text-base shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FACC15]"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Clickable Phone, Email, Office Addresses */}
            <div className="space-y-4 pt-6 border-t border-[#0B1D3A]/15">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3.5 min-h-[44px] text-base font-semibold text-[#0B1D3A] hover:underline underline-offset-4"
              >
                <span className="w-10 h-10 rounded-lg bg-[#0B1D3A] text-yellow-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3.5 min-h-[44px] text-base font-semibold text-[#0B1D3A] hover:underline underline-offset-4 break-all"
              >
                <span className="w-10 h-10 rounded-lg bg-[#0B1D3A] text-yellow-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-3.5 pt-1 text-sm text-[#0B1D3A]/90">
                <span className="w-10 h-10 rounded-lg bg-[#0B1D3A]/10 text-[#0B1D3A] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div className="space-y-1">
                  <p className="font-semibold text-[#0B1D3A]">{COMPANY_INFO.lagosOffice}</p>
                  <p>{COMPANY_INFO.abujaOffice}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-[#0B1D3A]/15">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B1D3A]/75 mb-3">
                Follow Our Channels
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OJOA GLOBAL HOMES LIMITED on Instagram"
                  className="min-h-[44px] px-4 inline-flex items-center justify-center rounded-lg bg-[#0B1D3A]/10 hover:bg-[#0B1D3A] text-[#0B1D3A] hover:text-yellow-400 text-sm font-semibold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OJOA GLOBAL HOMES LIMITED on Facebook"
                  className="min-h-[44px] px-4 inline-flex items-center justify-center rounded-lg bg-[#0B1D3A]/10 hover:bg-[#0B1D3A] text-[#0B1D3A] hover:text-yellow-400 text-sm font-semibold transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OJOA GLOBAL HOMES LIMITED on LinkedIn"
                  className="min-h-[44px] px-4 inline-flex items-center justify-center rounded-lg bg-[#0B1D3A]/10 hover:bg-[#0B1D3A] text-[#0B1D3A] hover:text-yellow-400 text-sm font-semibold transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OJOA GLOBAL HOMES LIMITED on X"
                  className="min-h-[44px] px-4 inline-flex items-center justify-center rounded-lg bg-[#0B1D3A]/10 hover:bg-[#0B1D3A] text-[#0B1D3A] hover:text-yellow-400 text-sm font-semibold transition-colors"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Callback / Inquiry Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#0B1D3A] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#0B1D3A]/10">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-display text-2xl font-bold text-[#0B1D3A]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B1D3A]">{name}</span>. A
                    senior property advisor will reach out via phone or WhatsApp shortly regarding{' '}
                    <span className="font-semibold text-[#0B1D3A]">{interest}</span>.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(
                        `Hello OJOA GLOBAL HOMES LIMITED, my name is ${name}. I just submitted an inquiry about ${interest}: ${message}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-[#071428] font-semibold text-sm hover:bg-[#22c35e] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0B1D3A] mb-1">
                      Request a Call Back or Inspection
                    </h3>
                    <p className="text-sm text-slate-600">
                      Share your preferred location or investment goal and our team will respond
                      promptly.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700 font-medium"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Chinedu Okafor"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 803 000 0000"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-interest"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="contact-interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                      >
                        <option>Private Site Inspection</option>
                        <option>Ikoyi &amp; Victoria Island Homes</option>
                        <option>Lekki Phase 1 Terraces</option>
                        <option>Lekki-Epe Serviced Plots</option>
                        <option>Maitama Abuja Residences</option>
                        <option>Diaspora Investment Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us your preferred property, budget range, or inspection date..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0B1D3A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0B1D3A] text-white hover:bg-[#132A52] font-semibold text-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    <Send className="w-4 h-4 text-yellow-400" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
