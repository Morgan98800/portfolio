import React from 'react';
import { X, Copy, FileText, Mail, Phone, ArrowUpRight, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './ContactDrawer.css';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: (email: string) => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  onCopyEmail,
}) => {
  const { t } = useLanguage();
  const email = 'morgan.canteri@mail.mcgill.ca';
  const phone = '+33 7 49 12 41 65';
  const linkedinUrl = 'https://www.linkedin.com/in/morgan-canteri-9a3900297/';
  const githubUrl = 'https://github.com/Morgan98800';
  const portfolioUrl = 'https://sites.google.com/view/portfoliomorgancanteri';

  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div 
        className="drawer-content animate-drawer" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <span className="drawer-subtitle">{t.drawerSubtitle}</span>
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <h2 className="drawer-title">{t.drawerTitle}</h2>
          <p className="drawer-description">
            {t.drawerDescription}
          </p>

          <div className="contact-action-box">
            <div className="contact-email-row">
              <Mail size={18} className="contact-icon" />
              <span className="contact-email-text">{email}</span>
            </div>
            <div className="contact-phone-row">
              <Phone size={16} className="contact-icon" />
              <span className="contact-phone-text">{phone}</span>
            </div>
            <button 
              className="copy-btn" 
              onClick={() => onCopyEmail(email)}
              title="Copy email address"
            >
              <Copy size={16} />
              <span>{t.copyEmail}</span>
            </button>
          </div>

          <div className="drawer-section">
            <h3 className="section-label">{t.curriculumVitae}</h3>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-download-card"
            >
              <div className="cv-info">
                <FileText size={22} />
                <div>
                  <span className="cv-title">Morgan_Canteri_Resume.pdf</span>
                  <span className="cv-meta">{t.resumeSubtitle}</span>
                </div>
              </div>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="drawer-section">
            <h3 className="section-label">{t.socialProfiles}</h3>
            <div className="social-links-grid">
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LINKEDIN</span>
                <ArrowUpRight size={14} className="corner-icon" />
              </a>

              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span>GITHUB</span>
                <ArrowUpRight size={14} className="corner-icon" />
              </a>

              <a 
                href={portfolioUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn full-span-btn"
              >
                <Camera size={18} />
                <span>PHOTO PORTFOLIO</span>
                <ArrowUpRight size={14} className="corner-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <p>© {new Date().getFullYear()} MORGAN CANTERI</p>
        </div>
      </div>
    </div>
  );
};
