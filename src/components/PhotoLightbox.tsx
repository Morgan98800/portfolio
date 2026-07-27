import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './PhotoLightbox.css';

export interface PhotoItem {
  id: number;
  url: string;
  title: string;
  span?: string;
  location?: string;
}

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Controls */}
        <div className="lightbox-header">
          <div className="lightbox-counter">
            <span>{currentIndex + 1}</span> / <span>{photos.length}</span>
          </div>
          <button className="lightbox-close" onClick={onClose} aria-label="Close photo view">
            <X size={22} />
          </button>
        </div>

        {/* Main Image View */}
        <div className="lightbox-main">
          <button className="lightbox-arrow prev" onClick={handlePrev} aria-label="Previous photo">
            <ChevronLeft size={28} />
          </button>
          
          <div className="lightbox-image-wrapper">
            <img src={photo.url} alt={photo.title} className="lightbox-img" />
          </div>

          <button className="lightbox-arrow next" onClick={handleNext} aria-label="Next photo">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Footer Info */}
        <div className="lightbox-footer">
          <div className="lightbox-caption">
            <h3 className="lightbox-title">{photo.title}</h3>
            {photo.location && <span className="lightbox-location">{photo.location}</span>}
          </div>
          <div className="lightbox-badge">
            <Maximize2 size={14} />
            <span>FULL RESOLUTION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
