import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './AboutTimeline.css';

interface AboutTimelineProps {
  onOpenContact?: () => void;
}

export const AboutTimeline: React.FC<AboutTimelineProps> = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? t.timelineItems 
    : t.timelineItems.filter(item => item.category === activeCategory);

  return (
    <section className="about-section container" id="journey">
      <div className="journey-header">
        <div className="journey-title-block">
          <span className="journey-eyebrow">{t.aboutBadge}</span>
          <h2 className="journey-title">{t.timelineTitle}</h2>
        </div>

        {/* Filter Tabs */}
        <div className="journey-tabs">
          <button 
            className={`tab-link ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            ALL
          </button>
          <button 
            className={`tab-link ${activeCategory === 'education' ? 'active' : ''}`}
            onClick={() => setActiveCategory('education')}
          >
            {t.categoryEducation}
          </button>
          <button 
            className={`tab-link ${activeCategory === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveCategory('experience')}
          >
            {t.categoryExperience}
          </button>
        </div>
      </div>

      {/* Chronological Vertical List */}
      <div className="chronological-list">
        {filteredItems.map((item, idx) => {
          const hasLogo = 'logo' in item && item.logo;
          const isEducation = item.category === 'education';

          return (
            <div key={item.id} className="list-row animate-reveal" style={{ animationDelay: `${idx * 0.08}s` }}>
              {/* Left Column: Date & Uniform Category Badge */}
              <div className="list-col-date">
                <span className="date-text">
                  <Calendar size={13} className="date-icon" />
                  {item.period}
                </span>
                <span className={`category-tag ${item.category}`}>
                  {isEducation ? <GraduationCap size={12} /> : <Briefcase size={12} />}
                  <span>{isEducation ? t.categoryEducation : 'EXPERIENCE'}</span>
                </span>
              </div>

              {/* Middle Column: Institution Logo & Main Info */}
              <div className="list-col-info">
                <div className="institution-row">
                  {hasLogo ? (
                    <div className="logo-badge-container">
                      <img src={item.logo as string} alt={item.institution} className="logo-badge-img" />
                    </div>
                  ) : (
                    <div className="logo-badge-placeholder">
                      {isEducation ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                    </div>
                  )}
                  <div>
                    <h3 className="list-role">{item.role}</h3>
                    <span className="list-institution">{item.institution}</span>
                  </div>
                </div>
                <p className="list-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
