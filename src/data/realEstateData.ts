export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  region: 'ikoyi-vi' | 'lekki' | 'abuja';
  category: string;
  priceNaira: string;
  paymentNote: string;
  beds?: number;
  baths?: number;
  size: string;
  titleDoc: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
}

export interface MarketPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const COMPANY_INFO = {
  name: 'OJOA GLOBAL HOMES LIMITED',
  shortName: 'OJOA GLOBAL HOMES LIMITED',
  tagline: 'Verified Nigerian Real Estate & Urban Estates',
  phoneDisplay: '+234 809 555 0192',
  phoneHref: 'tel:+2348095550192',
  whatsappNumber: '2348095550192',
  email: 'hello@ojoaglobalhomes.ng',
  lagosOffice: 'Plot 14, Adeola Odeku Street, Victoria Island, Lagos',
  abujaOffice: '28 Mississippi Street, Maitama, FCT Abuja',
  rcNumber: 'RC 1849204',
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const HERO_IMAGE = '/src/assets/images/hero_aerial_estate_1795439959981.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_architecture_interior_1795439959757.jpg';

export const PROPERTIES: PropertyListing[] = [
  {
    id: 'ikoyi-lagoon-villa',
    title: 'The Bourdillon Reserve Villa',
    location: 'Old Ikoyi, Lagos',
    region: 'ikoyi-vi',
    category: 'Detached Villa',
    priceNaira: '₦680,000,000',
    paymentNote: 'Outright or 6-month structured milestone plan',
    beds: 5,
    baths: 6,
    size: '650 sqm Plot',
    titleDoc: 'Governor’s Consent',
    image: '/src/assets/images/property_ikoyi_villa_1795439959197.jpg',
    summary:
      'Architect-designed 5-bedroom detached smart residence with private pool terrace, chef’s kitchen, and 2-room staff quarters.',
    description:
      'Set along a quiet tree-lined avenue in Old Ikoyi, The Bourdillon Reserve Villa blends natural limestone cladding, floor-to-ceiling thermal glass, and full home automation. Engineered for discerning homeowners seeking privacy, verified title security, and effortless entertaining.',
    features: [
      'Private infinity-edge swimming pool & timber sundeck',
      '24/7 uninterrupted estate power & treated water plant',
      'Fitted European wet & dry kitchens with Bosch appliances',
      'Smart biometric access, CCTV perimeter & cinema lounge',
      '2-room detached Boys’ Quarters & 4-car paved courtyard',
    ],
  },
  {
    id: 'lekki-phase1-terraces',
    title: 'Admiralty Courtyards Terrace',
    location: 'Lekki Phase 1, Lagos',
    region: 'lekki',
    category: '4-Bed Terrace Duplex',
    priceNaira: '₦245,000,000',
    paymentNote: '40% initial deposit · Balance spread over 12 months',
    beds: 4,
    baths: 5,
    size: '340 sqm Living Area',
    titleDoc: 'Certificate of Occupancy',
    image: '/src/assets/images/property_lekki_terrace_1795439959831.jpg',
    summary:
      'Contemporary 4-bedroom tri-level terrace duplexes minutes from the Lekki-Ikoyi Link Bridge with private rooftop lounge.',
    description:
      'Positioned inside a serene gated enclave in Lekki Phase 1, Admiralty Courtyards delivers refined family living with high ceilings, warm cedarwood soffits, and strong rental yield potential for investors targeting Victoria Island and Ikoyi executives.',
    features: [
      'All rooms en-suite with walk-in closet in master suite',
      'Spacious family lounge & private upper balcony terrace',
      'Dedicated 2-car interlocking driveway per residence',
      'Central security gatehouse with visitor access control',
      'Flood-free elevated drainage & paved estate roads',
    ],
  },
  {
    id: 'maitama-crest-residence',
    title: 'Aso Crest Diplomatic Villa',
    location: 'Maitama, FCT Abuja',
    region: 'abuja',
    category: 'Smart Mansion',
    priceNaira: '₦820,000,000',
    paymentNote: 'Outright acquisition · Title ready for immediate transfer',
    beds: 6,
    baths: 7,
    size: '1,100 sqm Corner Plot',
    titleDoc: 'FCDA Certificate of Occupancy',
    image: '/src/assets/images/property_abuja_mansion_1795439958972.jpg',
    summary:
      'Expansive 6-bedroom diplomatic residence featuring double-height glass foyer, landscaped courtyard gardens, and private study.',
    description:
      'Designed for diplomatic missions, corporate leaders, and private families in Maitama, Aso Crest offers commanding architectural presence in dark slate and warm travertine stone with serene indoor-outdoor courtyard living.',
    features: [
      'Double-height grand reception atrium with sculptural stair',
      'Dedicated executive study, private gym & guest chalet',
      'Solar-hybrid backup power array & acoustic glazing',
      'Manicured lawn gardens with automated irrigation',
      'Verified FCDA C of O ready for immediate legal search',
    ],
  },
  {
    id: 'lekki-epe-serviced-plots',
    title: 'OJOA Meridian Estate',
    location: 'Lekki-Epe Corridor, Lagos',
    region: 'lekki',
    category: 'Serviced Land & Plots',
    priceNaira: '₦48,500,000',
    paymentNote: 'Per 500 sqm plot · 18-month zero-interest plan available',
    size: '500 sqm · 1,000 sqm',
    titleDoc: 'Certificate of Occupancy',
    image: '/src/assets/images/property_epe_estate_1795439958907.jpg',
    summary:
      'Dry, perimeter-fenced serviced plots along the fast-appreciating Lekki-Epe corridor with paved roads and instant allocation.',
    description:
      'Strategically located 12 minutes from the proposed Lekki International Airport and major industrial corridors, OJOA Meridian Estate combines immediate physical allocation with full estate infrastructure—ideal for immediate residential builds or long-term land banking.',
    features: [
      '100% dry land with instant physical plot allocation upon 50% deposit',
      'Asphalt-paved internal road network & covered storm drainage',
      'Solar street lighting, green recreational park & perimeter fence',
      '24-hour uniformed estate security & CCTV gatehouse',
      'Verified Lagos State Certificate of Occupancy (C of O)',
    ],
  },
];

export const MARKET_POSTS: MarketPost[] = [
  {
    id: 'verify-c-of-o-lagos',
    category: 'Legal & Due Diligence',
    date: 'November 2026',
    readTime: '4 min read',
    title: 'How to Verify a Certificate of Occupancy (C of O) in Lagos Before Paying',
    excerpt:
      'A practical step-by-step checklist for conducting an official Alausa Land Registry charting search and avoiding encumbered titles.',
    content: [
      'Every secure property acquisition in Nigeria begins with independent title verification—long before an initial deposit leaves your account. Whether you are purchasing a completed home in Ikoyi or serviced plots along the Lekki-Epe corridor, verifying the root of title protects your capital.',
      'First, request a clear copy of the Registered Survey Plan and the Certificate of Occupancy (C of O) or Governor’s Consent. Take the survey coordinates directly to the Office of the Surveyor-General in Alausa, Ikeja (or AGIS in Abuja) to confirm the land is free from government acquisition or committed agricultural zoning.',
      'Second, instruct a licensed real estate solicitor to conduct a formal title search at the Land Registry to verify that the seller’s name matches the registered titleholder and that no mortgages, cautions, or court injunctions exist on the property.',
      'At OJOA GLOBAL HOMES LIMITED, every estate file includes a pre-verified charting dossier and certified survey coordinates so your legal team can complete due diligence within 48 hours.',
    ],
  },
  {
    id: 'lekki-epe-corridor-outlook',
    category: 'Investment Strategy',
    date: 'October 2026',
    readTime: '5 min read',
    title: 'Why the Lekki-Epe Corridor Continues to Lead Residential Capital Appreciation',
    excerpt:
      'Analyzing infrastructure catalysts, deep-sea port logistics, and residential demand driving steady multi-year land value growth.',
    content: [
      'Over the past five years, well-positioned serviced estates along the Lekki-Epe axis have consistently outperformed conventional fixed-income instruments for diaspora and local investors alike.',
      'With the operational Lekki Deep Sea Port, industrial free-zone employment hubs, and ongoing road expansion, housing and commercial demand is shifting rapidly eastward from Ajah toward Ibeju-Lekki and Epe.',
      'The crucial differentiator is infrastructure readiness: gated estates with completed asphalt roads, storm drainage, and verified C of O documentation command significantly higher resale liquidity than unserviced bush plots.',
    ],
  },
  {
    id: 'off-plan-milestone-safety',
    category: 'Buyer Guide',
    date: 'September 2026',
    readTime: '3 min read',
    title: 'Structuring Safe Off-Plan Milestone Payments in Nigerian Real Estate',
    excerpt:
      'How to evaluate developer track records, tie payments to verifiable construction stages, and protect against delivery delays.',
    content: [
      'Off-plan residential acquisitions allow buyers to lock in pre-completion pricing and spread capital across 12 to 18 months—provided the contract protects the buyer at every milestone.',
      'Always insist on a Contract of Sale that ties subsequent tranches directly to inspectable physical progress: foundation completion, structural slabbing, roofing, and MEP finishing—rather than calendar dates alone.',
      'Before committing, inspect at least two previously completed estates delivered by the developer to verify finishing standards, drainage resilience during rainy season, and post-handover facility management.',
    ],
  },
];
