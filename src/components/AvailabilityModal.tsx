import React from 'react';
import { X, Leaf } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { VENUE_DATA } from '../data/venueData';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEventType?: string;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  isOpen,
  onClose,
  prefilledEventType = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E2DACD] rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#E2DACD] flex items-center justify-between bg-[#F3EEE4]">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2D4C36] mb-1">
              <Leaf className="w-3 h-3" />
              <span>RESERVATION ENQUIRY</span>
            </div>
            <h3 className="font-serif text-2xl text-[#16261A]">
              Check Mandapam Availability
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full bg-white text-[#58655A] hover:text-[#16261A] hover:bg-[#FAF7F2] transition-colors border border-[#E2DACD]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6 overflow-y-auto">
          <EnquiryForm
            isModalMode={true}
            prefilledEventType={prefilledEventType}
            onSuccessClose={() => {
              // optional callback after submission
            }}
          />
        </div>
      </div>
    </div>
  );
};
