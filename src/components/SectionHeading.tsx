import React from 'react';
import { Leaf } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9F0EA] border border-[#D0DFD2] mb-3 ${isCenter ? 'justify-center' : ''}`}>
          <Leaf className="w-3 h-3 text-[#2D4C36]" />
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#2D4C36] uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#16261A] font-normal leading-[1.15] tracking-tight [text-wrap:balance]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#58655A] leading-relaxed font-light [text-wrap:balance]">
          {description}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-10 bg-[#C9BFB0]" />
        <Leaf className="w-3 h-3 text-[#B58A38]" />
        <div className="h-[1px] w-10 bg-[#C9BFB0]" />
      </div>
    </div>
  );
};
