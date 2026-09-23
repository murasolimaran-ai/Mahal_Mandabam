/**
 * Centralized Configuration & Data File for Vaanavil Grand Mandapam
 * Enables effortless rebranding and content editing for any venue client.
 */

export interface EventType {
  id: string;
  title: string;
  tamilTitle?: string;
  shortDesc: string;
  longDesc: string;
  capacity: string;
  typicalDuration: string;
  image: string;
  highlights: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'hall' | 'comfort' | 'infrastructure' | 'services';
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  startingPrice: string;
  idealFor: string;
  isPopular?: boolean;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Mandapam & Stage' | 'Architecture' | 'Dining & Banquet' | 'Celebrations';
  image: string;
  span?: string; // CSS grid span class for masonry/editorial layouts
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  eventType: string;
  location: string;
  date: string;
}

export const VENUE_DATA = {
  brand: {
    name: "Namma Grand Mandapam",
    shortName: "NAMMA",
    tagline: "Where Sacred Traditions Blossom in Nature's Grace.",
    subheading: "An eco-luxury architectural sanctuary surrounded by lush botanical flora, natural stone courtyards, teakwood pavilions, and organic South Indian wedding hospitality.",
    established: "2018",
    locationDisplay: "Chennai • Tamil Nadu",
    locationArea: "Pallavaram Corridor, GST Road, Chennai",
    fullAddress: "142 Grand Southern Trunk (GST) Road, Pallavaram Corridor, Chennai, Tamil Nadu 600043, India",
    landmark: "5 Minutes from Chennai International Airport / Near Pallavaram Flyover",
    phonePrimary: "+91 98401 23456",
    phoneSecondary: "+91 44 2234 5678",
    whatsappNumber: "919840123456",
    whatsappDisplay: "+91 98401 23456",
    email: "enquiries@nammagrand.com",
    openingHours: "Monday to Sunday: 06:00 AM – 11:00 PM (Site Visits 09:00 AM – 08:00 PM)",
    googleMapsUrl: "https://maps.google.com/?q=12.9675,80.1491",
    social: {
      instagram: "https://instagram.com/nammagrandmandapam",
      facebook: "https://facebook.com/nammagrandmandapam",
      youtube: "https://youtube.com/@nammagrand"
    }
  },

  stats: [
    { value: "500+", label: "Seated Guests", detail: "Natural airy column-free pavilion" },
    { value: "100%", label: "Eco-Conscious", detail: "Solar supported & zero plastic protocol" },
    { value: "300+", label: "Paved Parking", detail: "Tree-shaded valet parking bays" },
    { value: "24/7", label: "Hospitality Care", detail: "Personalized concierge team" }
  ],

  heroImages: {
    mainHall: "/src/assets/images/hero_organic_mandapam_1790126596614.jpg",
    exterior: "/src/assets/images/intro_organic_courtyard_1790126610667.jpg",
    weddingCeremony: "/src/assets/images/event_traditional_wedding_1790125155681.jpg",
    receptionStage: "/src/assets/images/decor_botanical_mandapam_1790126636882.jpg",
    banquetDining: "/src/assets/images/dining_banana_leaf_organic_1790126623242.jpg"
  },

  events: [
    {
      id: "weddings",
      title: "Weddings & Vivaham",
      tamilTitle: "திருமண வைபவம்",
      shortDesc: "Sacred ceremonies surrounded by timeless floral artistry, Vedic sanctum warmth, and majestic acoustic presence.",
      longDesc: "Host your traditional Muhurtham and modern wedding with dignity. Our grand Mandapam stage is elevated for panoramic viewing, featuring dedicated havan fire ventilation, bridal procession aisles, and priest preparation quarters.",
      capacity: "500 - 1,500 Guests",
      typicalDuration: "1 to 2 Days",
      image: "/src/assets/images/event_traditional_wedding_1790125155681.jpg",
      highlights: ["Sacred Fire (Havan) ventilation system", "Grand bride & groom entry aisle", "Elevated 60-foot ceremonial stage", "Separate ritual preparation chambers"]
    },
    {
      id: "receptions",
      title: "Wedding Receptions",
      tamilTitle: "வரவேற்பு நிகழ்ச்சி",
      shortDesc: "Cinematic evening galas with atmospheric chandelier lighting, live musical stages, and curated royal dining.",
      longDesc: "Designed for high-society evening celebrations. Features contemporary stage rigging, ambient golden dimming, seamless guest reception receiving line flow, and live musical orchestra zones.",
      capacity: "600 - 1,500 Guests",
      typicalDuration: "Evening (4-6 Hours)",
      image: "/src/assets/images/event_reception_stage_1790125165549.jpg",
      highlights: ["Programmable mood lighting", "Crystal chandelier installation", "Live acoustic audio console", "Photographer crane & drone clearances"]
    },
    {
      id: "engagements",
      title: "Engagements & Nichayathartham",
      tamilTitle: "நிச்சயதார்த்தம்",
      shortDesc: "Intimate family unions celebrated with graceful warmth, auspicious decor, and joyous hospitality.",
      longDesc: "An auspicious setting for rings, vows, and reciprocal family honors. Balanced acoustics allow elder blessings to be heard clearly across every corner.",
      capacity: "250 - 600 Guests",
      typicalDuration: "Half Day / Morning",
      image: "/src/assets/images/hero_mandapam_hall_1790125130061.jpg",
      highlights: ["Auspicious backdrop styling", "Plate exchange podium area", "Traditional floral welcome arch", "Family photo lounges"]
    },
    {
      id: "seemantham",
      title: "Baby Shower & Seemantham",
      tamilTitle: "சீமந்தம் & வளைகாப்பு",
      shortDesc: "Cherished maternal rituals bathed in fragrant blooms, soothing temperatures, and maternal comfort suites.",
      longDesc: "Comfort-first facilities with private resting chambers for the mother-to-be, direct elevator access, and tailored seating arrangements.",
      capacity: "150 - 450 Guests",
      typicalDuration: "Morning / Afternoon",
      image: "/src/assets/images/intro_architecture_1790125143212.jpg",
      highlights: ["Special mother rest suite", "Bangle ceremony seating arc", "Traditional sweet distribution kiosk", "Gentle climate control"]
    },
    {
      id: "birthdays",
      title: "Birthday & Milestone Celebrations",
      tamilTitle: "பிறந்தநாள் & சஷ்டியப்தபூர்த்தி",
      shortDesc: "From joyous 1st birthdays to revered 60th (Sashtiapthapoorthi) and 80th (Sadabhishekam) jubilees.",
      longDesc: "Versatile modular staging adapts instantly from vibrant youth entertainment to serene Vedic homams and elder felicitation ceremonies.",
      capacity: "100 - 500 Guests",
      typicalDuration: "Half Day",
      image: "/src/assets/images/dining_banquet_hall_1790125176665.jpg",
      highlights: ["Flexible stage backdrop structures", "Audio/visual projection displays", "Dedicated buffet & live food stations", "Safe play zones for children"]
    },
    {
      id: "anniversaries",
      title: "Anniversary Celebrations",
      tamilTitle: "திருமண நாள் விழா",
      shortDesc: "Renew vows and honor decades of partnership with close family in a sanctuary of timeless heritage.",
      longDesc: "An intimate yet grand setting where family milestones are commemorated with multi-generational warmth and customized gourmet dining.",
      capacity: "100 - 400 Guests",
      typicalDuration: "Evening",
      image: "/src/assets/images/event_reception_stage_1790125165549.jpg",
      highlights: ["Intimate banquet seating layouts", "Memory montage projection screen", "Champagne/beverage toast service", "Personalized photo corners"]
    },
    {
      id: "corporate",
      title: "Corporate Conclaves & Galas",
      tamilTitle: "கார்ப்பரேட் கூட்டங்கள்",
      shortDesc: "Annual award nights, executive seminars, shareholder meets, and corporate celebratory dinners.",
      longDesc: "High-speed Wi-Fi, motorized projection screens, executive dais seating, break-out green rooms, and seamless business-grade catering facilities.",
      capacity: "200 - 1,000 Delegates",
      typicalDuration: "Full Day / Half Day",
      image: "/src/assets/images/intro_architecture_1790125143212.jpg",
      highlights: ["Dual 4K Laser Projectors", "Lapel & podium microphones", "High-speed optical fiber connectivity", "VIP executive green room"]
    },
    {
      id: "cultural",
      title: "Cultural & Family Functions",
      tamilTitle: "குடும்ப விழாக்கள் & கலை நிகழ்ச்சிகள்",
      shortDesc: "Upanayanam, Arangetram classical dance debuts, musical concerts, and multi-day family reunions.",
      longDesc: "Acoustically treated interior surfaces designed specifically for classical Carnatic vocalists, mridangam percussion, and classical dance performances.",
      capacity: "250 - 900 Guests",
      typicalDuration: "Morning or Evening",
      image: "/src/assets/images/hero_mandapam_hall_1790125130061.jpg",
      highlights: ["Tuned wooden acoustic flooring", "Instrumentalist sound monitors", "Performer dressing green rooms", "Grand auditorium seating sightlines"]
    }
  ],

  facilities: [
    {
      id: "main-hall",
      title: "Grand Main Mandapam",
      description: "Column-free grand hall featuring 24-foot soaring ceilings, hand-crafted acoustic ceiling baffles, and royal polished stone flooring.",
      iconName: "Building2",
      category: "hall"
    },
    {
      id: "dining-hall",
      title: "Banquet & Traditional Dining",
      description: "Dedicated dining hall seating 400 guests per batch with both traditional plantain leaf layout and contemporary buffet tables.",
      iconName: "Utensils",
      category: "hall"
    },
    {
      id: "air-conditioning",
      title: "Central Chilled-Water HVAC",
      description: "State-of-the-art silent climate conditioning system maintaining optimal 22°C comfort regardless of external Chennai tropical heat.",
      iconName: "Wind",
      category: "comfort"
    },
    {
      id: "bridal-suite",
      title: "Luxury Bridal Suite",
      description: "Private air-conditioned suite with full vanity mirror lighting, private ensuite bathroom, digital safe, and attire steamer.",
      iconName: "Crown",
      category: "comfort"
    },
    {
      id: "groom-suite",
      title: "Executive Groom Suite",
      description: "Dedicated executive suite designed for the groom and immediate family with private changing quarters and lounge seating.",
      iconName: "Gem",
      category: "comfort"
    },
    {
      id: "guest-rooms",
      title: "Furnished Guest Rooms",
      description: "12 fully furnished guest bedrooms with attached hot-water bathrooms for outstation relatives and close family staying overnight.",
      iconName: "BedDouble",
      category: "comfort"
    },
    {
      id: "parking",
      title: "300+ Valet Parking Bays",
      description: "Dedicated on-premises paved vehicle parking with marked two-way driveways, traffic marshals, and seamless valet retrieval.",
      iconName: "Car",
      category: "infrastructure"
    },
    {
      id: "generator",
      title: "100% Acoustic Generator Backup",
      description: "Dual synchronized Caterpillar diesel generators ensuring instantaneous zero-flicker power backup across the entire facility.",
      iconName: "Zap",
      category: "infrastructure"
    },
    {
      id: "stage",
      title: "60-Foot Acoustic Grand Stage",
      description: "Deep, elevated ceremonial stage designed for panoramic 180° sightlines, professional truss rigging, and flexible flower installations.",
      iconName: "Sparkles",
      category: "infrastructure"
    },
    {
      id: "kitchen",
      title: "Industrial Commercial Kitchen",
      description: "Stainless steel commercial cooking facility with dedicated steam boilers, walk-in cold storage, and separate pure-vegetarian preparation zones.",
      iconName: "Flame",
      category: "infrastructure"
    },
    {
      id: "security",
      title: "24/7 Security & CCTV Shield",
      description: "Round-the-clock trained security guards, perimeter security, baggage inspection counters, and 64 high-resolution IP cameras.",
      iconName: "ShieldCheck",
      category: "services"
    },
    {
      id: "accessibility",
      title: "Accessibility & Dual Elevators",
      description: "High-capacity stretcher elevators, gentle gradient wheelchair ramps, and barrier-free restrooms supporting senior family members.",
      iconName: "CheckCircle2",
      category: "services"
    }
  ] as FacilityItem[],

  packages: [
    {
      id: "essential",
      name: "Essential Celebration",
      tagline: "Ideal for intimate engagements, seemantham rituals, and birthday jubilees.",
      startingPrice: "₹1,25,000*",
      priceNote: "Starting from • Half-Day or 12-Hour Slot",
      idealFor: "Engagements, Seemantham, Intimate Gatherings (Up to 300 Guests)",
      features: [
        "Access to Grand Main Hall & Dining Area (12 Hours)",
        "Central Air Conditioning throughout the duration",
        "2 Luxury Air-Conditioned Dressing Suites (Bridal & Groom)",
        "100% Generator Power Backup with diesel inclusions",
        "Standard stage ambient warm illumination",
        "Paved parking for 150+ vehicles with attendant",
        "Post-event comprehensive housekeeping and waste management"
      ]
    },
    {
      id: "signature",
      name: "Signature Vivaham",
      tagline: "Our most chosen package for single-day wedding & evening reception celebrations.",
      startingPrice: "₹2,75,000*",
      priceNote: "Starting from • 24-Hour Complete Day Slot",
      idealFor: "Traditional Weddings & Receptions (Up to 800 Guests)",
      isPopular: true,
      features: [
        "Full 24-Hour exclusive venue occupancy",
        "Both Grand Mandapam Hall & Banquet Dining Hall",
        "4 Luxury Air-Conditioned Guest Rooms + 2 Premium Bridal Suites",
        "Full commercial kitchen access with refrigeration units",
        "Stage lighting truss system & acoustic line-array audio setup",
        "Dedicated on-site Operations & Electrical Engineer",
        "Full valet parking management for 300+ vehicles",
        "Bridal green room refreshments & personal butler"
      ]
    },
    {
      id: "grand-royal",
      name: "Grand Royal Muhurtham",
      tagline: "The complete two-day celebration experience with complete venue exclusivity and royal suites.",
      startingPrice: "₹4,50,000*",
      priceNote: "Starting from • Full 48-Hour Two-Day Extravaganza",
      idealFor: "Grand Multi-Ritual Weddings, Sangeet & Reception (Up to 1,500 Guests)",
      features: [
        "Full 48-Hour uninterrupted venue access (Reception Eve + Muhurtham)",
        "All 12 Furnished Air-Conditioned Guest Rooms for outstation family",
        "Complete 2-day valet parking team & security detail",
        "Full stage rigging, moving head spotlights & ambient uplighting",
        "Dual diesel generator fail-safe synchronized operation",
        "Complimentary floral welcome arch styling consultation",
        "Dedicated VIP dining lounge & executive service attendants",
        "Direct coordination with client's catering & decor teams"
      ]
    }
  ],

  gallery: [
    {
      id: "g1",
      title: "Eco-Luxury Wedding Mandapam Pavilion",
      category: "Mandapam & Stage",
      image: "/src/assets/images/hero_organic_mandapam_1790126596614.jpg",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: "g2",
      title: "Natural Courtyard with Heritage Urli",
      category: "Architecture",
      image: "/src/assets/images/intro_organic_courtyard_1790126610667.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "g3",
      title: "Authentic Banana Leaf Wedding Feast",
      category: "Dining & Banquet",
      image: "/src/assets/images/dining_banana_leaf_organic_1790126623242.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "g4",
      title: "Sustainable Botanical Floral Styling",
      category: "Mandapam & Stage",
      image: "/src/assets/images/decor_botanical_mandapam_1790126636882.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "g5",
      title: "Traditional Sacred Vivaham Ceremony",
      category: "Celebrations",
      image: "/src/assets/images/event_traditional_wedding_1790125155681.jpg",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: "g6",
      title: "Twilight Architectural Heritage Facade",
      category: "Architecture",
      image: "/src/assets/images/intro_architecture_1790125143212.jpg",
      span: "md:col-span-1 md:row-span-1"
    }
  ] as GalleryItem[],

  testimonials: [
    {
      id: "t1",
      quote: "Namma Grand Mandapam exceeded every single expectation for our daughter's wedding. The acoustics during the Nadhaswaram and the Vedic mantras were crystal clear, the central air conditioning was extraordinarily comfortable for 900 guests, and the parking arrangements eliminated all traffic hassles on GST Road.",
      clientName: "R. Sundararaman & Kalyani",
      eventType: "Muhurtham & Reception",
      location: "Chennai",
      date: "February 2026"
    },
    {
      id: "t2",
      quote: "As an event decorator working across South India, this venue has one of the cleanest structural foundations I have worked with. The 60-foot stage has generous rigging heights, the green rooms are spacious, and the venue management team is courteous and prompt.",
      clientName: "M. Jayaprakash",
      eventType: "Wedding Event Designer",
      location: "Coimbatore",
      date: "January 2026"
    },
    {
      id: "t3",
      quote: "We conducted my father's 80th Sadabhishekam celebration here. The ground-level access, gentle ramps, and high-speed elevators made it exceptionally comfortable for our senior family members. The dining hall service was spotless.",
      clientName: "Dr. Ananya Venkatesh",
      eventType: "Sadabhishekam Jubilee",
      location: "Bengaluru",
      date: "December 2025"
    }
  ],

  faqs: [
    {
      q: "What is the total guest capacity of Namma Grand Mandapam?",
      a: "Our Grand Main Hall comfortably seats over 500 guests in theatre style with clear sightlines to the stage, accommodating up to 1,500 floating attendees. Our dedicated dining hall can seat 400 guests simultaneously per batch."
    },
    {
      q: "Are outside caterers and decor specialists permitted?",
      a: "Yes. While we can recommend our trusted panel of traditional chefs and decor specialists, you have full flexibility to bring your preferred catering company and floral decorators. Our commercial kitchen is fully equipped for professional catering teams."
    },
    {
      q: "What are the standard booking slots and check-in times?",
      a: "We offer both 12-hour slots (Morning: 6:00 AM – 3:00 PM or Evening: 3:00 PM – 11:00 PM), 24-hour full-day slots (typically 2:00 PM to 2:00 PM next day), and 48-hour multi-day wedding packages."
    },
    {
      q: "Is there sufficient parking for large wedding crowds?",
      a: "Yes. We feature dedicated on-premises paved parking for over 300 cars and 400 two-wheelers, along with a dedicated valet drop-off portico and traffic marshals to ensure zero congestion."
    },
    {
      q: "How can we check date availability and schedule a venue tour?",
      a: "You can click 'Check Availability' on this website to submit an instant enquiry, call our front office at +91 98401 23456, or message us directly on WhatsApp. We conduct guided site walkthroughs 7 days a week from 9:00 AM to 8:00 PM."
    }
  ]
};
