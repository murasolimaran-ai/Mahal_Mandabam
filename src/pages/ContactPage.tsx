import React, { useState } from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { VENUE_DATA } from '../data/venueData';
import { ChevronDown, Leaf } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3">
            <Leaf className="w-3 h-3 text-[#2D4C36]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2D4C36] uppercase">
              RESERVATIONS & ECO-SANCTUARY ENQUIRIES
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#16261A] font-normal leading-[1.15] [text-wrap:balance]">
            Connect With Our Concierge
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#58655A] font-light leading-relaxed">
            Schedule a personalized walkthrough of our courtyards and pavilions, or check date availability for your family's upcoming celebration.
          </p>
        </div>

        {/* Form */}
        <div className="mb-24">
          <EnquiryForm />
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl text-[#16261A] text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {VENUE_DATA.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E2DACD] overflow-hidden transition-all shadow-organic-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-medium text-sm sm:text-base text-[#16261A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#2D4C36] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#58655A] font-light leading-relaxed border-t border-[#E2DACD]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
