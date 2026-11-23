import { getWhatsAppUrl } from '../data/realEstateData';

export function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl(
    'Hello OJOA GLOBAL HOMES LIMITED, I saw your homepage and would like to inquire about available properties.'
  );

  return (
    <div className="fixed bottom-20 right-4 md:bottom-7 md:right-7 z-30 flex items-center gap-3">
      {/* Desktop / Tablet subtle label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-lg bg-[#0B1D3A] text-white text-xs font-semibold shadow-lg border border-yellow-400/30 hover:bg-[#132A52] transition-colors"
      >
        Chat on WhatsApp
      </a>

      {/* Pumping WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with OJOA GLOBAL HOMES LIMITED on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 animate-whatsapp-pump"
      >
        {/* Concentric outward pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ring pointer-events-none"
        />

        {/* Crisp official WhatsApp silhouette SVG */}
        <svg
          viewBox="0 0 32 32"
          className="relative z-10 w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M16.04 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.61 4.64 1.77 6.67L2.6 29.33l6.85-1.8a13.26 13.26 0 0 0 6.59 1.75h.01c7.36 0 13.33-5.97 13.33-13.33 0-3.56-1.39-6.91-3.91-9.42a13.23 13.23 0 0 0-9.43-3.86zm7.76 18.96c-.33.93-1.93 1.78-2.67 1.89-.68.1-1.54.15-2.49-.16-.58-.18-1.32-.43-2.27-.84-3.99-1.72-6.6-5.73-6.8-6-.2-.27-1.62-2.16-1.62-4.12s1.02-2.92 1.39-3.32c.36-.4.79-.5 1.06-.5.26 0 .53 0 .76.01.24.01.57-.09.89.68.33.79 1.12 2.74 1.22 2.94.1.2.17.43.03.7-.13.27-.2.43-.4.66-.2.23-.42.51-.6.69-.2.2-.41.41-.18.81.23.4 1.04 1.71 2.23 2.77 1.53 1.36 2.82 1.78 3.22 1.98.4.2.63.17.86-.1.23-.27.99-1.15 1.25-1.55.26-.4.53-.33.89-.2.36.13 2.31 1.09 2.71 1.29.4.2.66.3.76.46.1.17.1.96-.23 1.89z" />
        </svg>
      </a>
    </div>
  );
}
