import React from 'react';
import { Mail, ArrowUpRight, FileText, Camera, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Status */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-name">MORGAN CANTERI</h3>
            <p className="footer-bio-snippet">
              Incoming LSE MSc Student in European & International Politics & Policy. Specializing in public policy formulation, international relations, and quantitative analysis.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot-pulse"></span>
              <span>Available for Policy Research & Advisory</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#journey">Parcours & Experience</a></li>
              <li><a href="#works">Research & Code Projects</a></li>
              <li><a href="#photography">Visual Photography</a></li>
              <li>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-footer-link">
                  <span>CV Document (PDF)</span>
                  <FileText size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Profiles & Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">CONNECT</h4>
            <div className="footer-social-group">
              <a 
                href="https://www.linkedin.com/in/morgan-canteri-9a3900297/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <Globe size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </a>

              <a 
                href="https://github.com/Morgan98800" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <Code2 size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </a>

              <a 
                href="https://sites.google.com/view/portfoliomorgancanteri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <Camera size={16} />
                <span>Photo Portfolio</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </a>
            </div>

            <button className="btn-cta-primary footer-cta-btn" onClick={onOpenContact}>
              <Mail size={16} />
              <span>{t.navContact}</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} MORGAN CANTERI — {t.allRightsReserved}</p>
          <div className="footer-bottom-location">
            <span>LONDON / MONTRÉAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
