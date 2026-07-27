import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhotoLightbox, type PhotoItem } from './PhotoLightbox';
import { Maximize2, Camera } from 'lucide-react';
import './PhotoGallery.css';

const MOCK_PHOTOS: PhotoItem[] = [
  {
    id: 1,
    url: '/lake atitlan.jpg',
    title: 'Lake Atitlán',
    location: 'Sololá, Guatemala',
    span: 'large'
  },
  {
    id: 7,
    url: '/foggy lake atitlan evening.jpg',
    title: 'Foggy Lake Atitlán Evening',
    location: 'Guatemala',
    span: 'medium'
  },
  {
    id: 2,
    url: '/Iglesia de La Merced.jpg',
    title: 'Iglesia de La Merced',
    location: 'Antigua Guatemala',
    span: 'large'
  },
  {
    id: 3,
    url: '/el fuego.jpg',
    title: 'El Fuego Volcano',
    location: 'Sacatepéquez, Guatemala',
    span: 'small'
  },
  {
    id: 4,
    url: '/View on the empire state building.jpg',
    title: 'Empire State Building',
    location: 'New York City, USA',
    span: 'large'
  },
  {
    id: 5,
    url: '/golden gate bridge.jpg',
    title: 'Golden Gate Bridge',
    location: 'San Francisco, CA',
    span: 'small'
  },
  {
    id: 6,
    url: '/Acropole des draveurs.jpg',
    title: 'Acropole des Draveurs',
    location: 'Charlevoix, Québec',
    span: 'medium'
  },
  {
    id: 8,
    url: '/sunrise lake atitlan.jpg',
    title: 'Sunrise at Lake Atitlán',
    location: 'Guatemala',
    span: 'medium'
  },
  {
    id: 9,
    url: '/25 Años de Consagración de María Santísima de Soledad de la Escuela de Cristo.jpg',
    title: '25 Años de Consagración',
    location: 'Antigua Guatemala',
    span: 'large'
  }
];

export const PhotoGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section className="photo-gallery container" id="photography">
      <PhotoLightbox 
        photo={selectedPhoto} 
        photos={MOCK_PHOTOS} 
        onClose={() => setSelectedPhoto(null)} 
        onSelectPhoto={(p) => setSelectedPhoto(p)}
      />

      <div className="section-header">
        <div>
          <span className="section-eyebrow">
            <Camera size={14} />
            <span>VISUAL PORTFOLIO</span>
          </span>
          <h2 className="section-title">{t.photographyTitle}</h2>
        </div>
        <p className="section-hint">Click any photo for full resolution viewer</p>
      </div>

      <div className="gallery-grid">
        {MOCK_PHOTOS.map((photo) => (
          <div 
            key={photo.id} 
            className={`gallery-item span-${photo.span}`}
            onClick={() => setSelectedPhoto(photo)}
            tabIndex={0}
            role="button"
            aria-label={`View ${photo.title}`}
          >
            <img src={photo.url} alt={photo.title} loading="lazy" className="gallery-img" />
            <div className="gallery-overlay">
              <div className="overlay-info">
                <span className="gallery-title">{photo.title}</span>
                {photo.location && <span className="gallery-location">{photo.location}</span>}
              </div>
              <div className="expand-icon">
                <Maximize2 size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
