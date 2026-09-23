import React from 'react';
import { Gallery } from '../components/Gallery';

interface GalleryPageProps {
  onCheckAvailability: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onCheckAvailability }) => {
  return (
    <main className="pt-24 bg-[#FAF7F2]">
      <Gallery />
    </main>
  );
};
