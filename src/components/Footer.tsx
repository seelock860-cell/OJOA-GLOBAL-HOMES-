import { COMPANY_INFO } from '../data/realEstateData';

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071428] text-slate-300 pt-12 pb-24 md:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-semibold text-white mb-2">
              {COMPANY_INFO.name}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Verified residential estates, luxury homes, and strategic land investments across
              Lagos and Abuja.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#home');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#about');
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Company
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#properties');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#posts');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Market Posts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-3">
              Offices
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{COMPANY_INFO.lagosOffice}</li>
              <li>{COMPANY_INFO.abujaOffice}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-3">
              Direct Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={COMPANY_INFO.phoneHref} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.rcNumber}). All rights
            reserved.
          </p>
          <p>Mon – Sat · 8:30 AM – 6:00 PM WAT</p>
        </div>
      </div>
    </footer>
  );
}
