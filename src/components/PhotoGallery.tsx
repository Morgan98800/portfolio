import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './PhotoGallery.css';

const MOCK_PHOTOS = [
  {
    id: 1,
    url: '/lake atitlan.jpg',
    title: 'Lake Atitlán',
    span: 'large'
  },
  {
    id: 7,
    url: '/foggy lake atitlan evening.jpg',
    title: 'Foggy Lake Atitlán Evening',
    span: 'large'
  },
  {
    id: 2,
    url: '/Iglesia de La Merced.jpg',
    title: 'Iglesia de La Merced',
    span: 'large'
  },
  {
    id: 3,
    url: '/el fuego.jpg',
    title: 'El Fuego Volcano',
    span: 'small'
  },
  {
    id: 4,
    url: '/View on the empire state building.jpg',
    title: 'Empire State Building',
    span: 'large'
  },
  {
    id: 5,
    url: '/golden gate bridge.jpg',
    title: 'Golden Gate Bridge',
    span: 'small'
  },
  {
    id: 6,
    url: '/Acropole des draveurs.jpg',
    title: 'Acropole des Draveurs',
    span: 'medium'
  },
  {
    id: 8,
    url: '/sunrise lake atitlan.jpg',
    title: 'Sunrise at Lake Atitlán',
    span: 'medium'
  },
  {
    id: 9,
    url: '/25 Años de Consagración de María Santísima de Soledad de la Escuela de Cristo.jpg',
    title: '25 Años de Consagración de María Santísima',
    span: 'large'
  }
];

export const PhotoGallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="photo-gallery container" id="photography">
      <div className="section-header">
        <h2 className="section-title">{t.photographyTitle}</h2>
      </div>

      <div className="gallery-grid">
        {MOCK_PHOTOS.map((photo) => (
          <div 
            key={photo.id} 
            className={`gallery-item span-${photo.span}`}
          >
            <img src={photo.url} alt={photo.title} loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-title">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
