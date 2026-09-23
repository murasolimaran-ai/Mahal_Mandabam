import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { Calendar, User, Phone, Mail, Users, ArrowRight, CheckCircle2, MessageSquare, AlertCircle, Leaf } from 'lucide-react';
import { VENUE_DATA } from '../data/venueData';

interface EnquiryFormProps {
  initialEventType?: string;
  prefilledEventType?: string;
  isModalMode?: boolean;
  onSuccessClose?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialEventType,
  prefilledEventType,
  isModalMode = false,
  onSuccessClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: prefilledEventType || initialEventType || 'Weddings & Vivaham',
    eventDate: '',
    expectedGuests: '500',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    const evt = prefilledEventType || initialEventType;
    if (evt) {
      setFormData((prev) => ({ ...prev, eventType: evt }));
    }
  }, [prefilledEventType, initialEventType]);

  const eventOptions = [
    'Weddings & Vivaham',
    'Wedding Receptions',
    'Engagements / Nichayathartham',
    'Seemantham / Baby Shower',
    'Birthday Celebrations',
    'Anniversary Celebrations',
    'Corporate Conclaves & Banquets',
    'Cultural & Family Functions',
  ];

  const guestCountOptions = [
    '200 - 350 Guests',
    '350 - 500 Guests',
    '500 - 800 Guests',
    '800 - 1,200 Guests',
    '1,200 - 1,500+ Floating Guests',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s()]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid telephone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.eventDate) {
      errs.eventDate = 'Please select your target event date';
    } else {
      const selected = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.eventDate = 'Event date cannot be in the past';
      }
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const ref = `NGM-${new Date().getFullYear()}-${randomCode}`;
      setBookingRef(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className={`relative ${isModalMode ? 'py-2' : 'py-20 md:py-28 bg-[#FAF7F2]'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isModalMode && (
          <SectionHeading
            eyebrow="RESERVE YOUR AUSPICIOUS DATE"
            title="Check Mandapam Availability"
            description="Our reservation concierge will review your date requirements, check calendar availability, and provide a comprehensive proposal within 2 hours."
          />
        )}

        <div className="bg-white border border-[#E2DACD] rounded-2xl p-6 sm:p-10 shadow-organic-md">
          {isSubmitted ? (
            <div className="text-center py-8 px-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#E9F0EA] text-[#2D4C36] flex items-center justify-center mx-auto mb-5 border border-[#D0DFD2]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#2D4C36] font-semibold block">
                Enquiry Registered Successfully
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#16261A] mt-2">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm text-[#58655A] font-light max-w-md mx-auto mt-3 leading-relaxed">
                Your reservation enquiry for <strong className="text-[#16261A] font-semibold">{formData.eventType}</strong> on{' '}
                <strong className="text-[#16261A] font-semibold">{formData.eventDate}</strong> has been logged with our sanctuary desk.
              </p>

              {/* Reference Box */}
              <div className="my-6 p-4 rounded-xl bg-[#F3EEE4] border border-[#E2DACD] inline-block text-left min-w-[280px]">
                <div className="text-[11px] text-[#7E8C80] uppercase tracking-wider">
                  Enquiry Reference
                </div>
                <div className="font-mono text-xl text-[#2D4C36] font-semibold tracking-wider mt-0.5">
                  {bookingRef}
                </div>
                <div className="text-xs text-[#58655A] mt-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#2D4C36]" />
                  <span>Our desk will reach you at {formData.phone}</span>
                </div>
              </div>

              {/* Instant WhatsApp Connect */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                <a
                  href={`https://wa.me/${VENUE_DATA.brand.whatsappNumber}?text=Hi%2C%20I%20just%20submitted%20booking%20enquiry%20${bookingRef}%20for%20${encodeURIComponent(formData.eventType)}%20on%20${formData.eventDate}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#204E30] hover:bg-[#183F26] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-organic-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Fast-Track on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      eventType: 'Weddings & Vivaham',
                      eventDate: '',
                      expectedGuests: '500',
                      message: '',
                    });
                    if (onSuccessClose) onSuccessClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F3EEE4] border border-[#E2DACD] text-[#16261A] hover:bg-[#EAE4D7] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                    Full Name <span className="text-[#B6533A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="enquiry-name"
                      type="text"
                      placeholder="e.g. Sundararajan Raman"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 pl-10 rounded-xl bg-[#FAF7F2] border text-sm text-[#16261A] placeholder-[#8A9A8C] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#E2DACD]'
                      }`}
                    />
                    <User className="w-4 h-4 text-[#7E8C80] absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                    Phone Number <span className="text-[#B6533A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="enquiry-phone"
                      type="tel"
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 pl-10 rounded-xl bg-[#FAF7F2] border text-sm text-[#16261A] placeholder-[#8A9A8C] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#E2DACD]'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-[#7E8C80] absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                    Email Address <span className="text-[#B6533A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="enquiry-email"
                      type="email"
                      placeholder="sundar@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 pl-10 rounded-xl bg-[#FAF7F2] border text-sm text-[#16261A] placeholder-[#8A9A8C] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#E2DACD]'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-[#7E8C80] absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="enquiry-event-type" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                    Occasion / Event Type <span className="text-[#B6533A]">*</span>
                  </label>
                  <select
                    id="enquiry-event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2DACD] text-sm text-[#16261A] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors cursor-pointer"
                  >
                    {eventOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-[#16261A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="enquiry-date" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                    Target Event Date <span className="text-[#B6533A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="enquiry-date"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => {
                        setFormData({ ...formData, eventDate: e.target.value });
                        if (errors.eventDate) setErrors({ ...errors, eventDate: '' });
                      }}
                      className={`w-full px-4 py-3 pl-10 rounded-xl bg-[#FAF7F2] border text-sm text-[#16261A] placeholder-[#8A9A8C] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors cursor-pointer ${
                        errors.eventDate ? 'border-red-500' : 'border-[#E2DACD]'
                      }`}
                    />
                    <Calendar className="w-4 h-4 text-[#7E8C80] absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.eventDate && <p className="mt-1 text-xs text-red-600">{errors.eventDate}</p>}
                </div>

                {/* Expected Guests */}
                <div>
                  <label htmlFor="enquiry-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                    Estimated Guest Count
                  </label>
                  <div className="relative">
                    <select
                      id="enquiry-guests"
                      value={formData.expectedGuests}
                      onChange={(e) => setFormData({ ...formData, expectedGuests: e.target.value })}
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-[#FAF7F2] border border-[#E2DACD] text-sm text-[#16261A] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors cursor-pointer"
                    >
                      {guestCountOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#16261A]">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <Users className="w-4 h-4 text-[#7E8C80] absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="enquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#16261A] mb-2">
                  Special Inquiries or Session Timing (Optional)
                </label>
                <textarea
                  id="enquiry-message"
                  rows={3}
                  placeholder="e.g. Muhurtham slot required from 6:00 AM to 7:30 AM, followed by reception evening. Interested in eco-friendly banana leaf dining and floral arrangements."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2DACD] text-sm text-[#16261A] placeholder-[#8A9A8C] focus:outline-none focus:ring-1 focus:ring-[#2D4C36] transition-colors resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#2D4C36] hover:bg-[#1E3324] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-organic-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Verifying Date Availability...</span>
                  ) : (
                    <>
                      <span>Check Availability & Request Pricing</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-[11px] text-[#7E8C80] text-center font-light">
                  Direct inquiry to {VENUE_DATA.brand.name} reservations desk. Your contact information is kept strictly confidential.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
