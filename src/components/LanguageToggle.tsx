import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import './LanguageToggle.css';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle-container">
      <Globe size={14} className="globe-icon" />
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider">/</span>
      <button 
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`} 
        onClick={() => setLanguage('fr')}
        aria-label="Changer en Français"
      >
        FR
      </button>
    </div>
  );
};
