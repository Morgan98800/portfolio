import { useState } from 'react';
import { Loader2, Mail } from 'lucide-react';
import { useGithubRepos } from './hooks/useGithubRepos';
import { RepoCard } from './components/RepoCard';
import { PhotoGallery } from './components/PhotoGallery';
import { AboutTimeline } from './components/AboutTimeline';
import { ContactDrawer } from './components/ContactDrawer';
import { Toast } from './components/Toast';
import { LanguageToggle } from './components/LanguageToggle';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import './App.css';

function MainLayout() {
  const { t, language } = useLanguage();
  const username = 'Morgan98800';
  const { repos, loading, error } = useGithubRepos(username, language);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setToastMessage(t.copiedToast);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="layout-wrapper">
      {/* Toast Notification */}
      <Toast message={toastMessage || ''} visible={!!toastMessage} />

      {/* Slide-over Contact & CV Drawer */}
      <ContactDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onCopyEmail={handleCopyEmail}
      />

      {/* Clean Minimal Header */}
      <header className="header container">
        <nav className="nav-links">
          <a href="#works" className="nav-link">{t.navCode}</a>
          <a href="#photography" className="nav-link">{t.navPhotography}</a>
          <a href="https://www.linkedin.com/in/morgan-canteri-9a3900297/" target="_blank" rel="noopener noreferrer" className="nav-link">{t.navLinkedIn}</a>
          <LanguageToggle />
          <button className="nav-link nav-btn-link" onClick={() => setIsDrawerOpen(true)}>
            {t.navContact}
          </button>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero container">
          <div className="hero-content animate-reveal">
            <h1 className="hero-title">
              MORGAN CANTERI
            </h1>
            <div className="hero-meta">
              <p className="hero-subtitle">{t.heroSubtitle}</p>
              <div className="hero-badge">{t.location}</div>
            </div>
            <p className="hero-tagline-text">{t.heroTagline}</p>
          </div>
        </section>

        {/* Academic & Professional Journey */}
        <AboutTimeline onOpenContact={() => setIsDrawerOpen(true)} />

        {/* Gallery / Projects Section */}
        <section className="gallery-section container" id="works">
          <div className="section-header">
            <h2 className="section-title">{t.featuredCodeTitle}</h2>
          </div>

          {loading && (
            <div className="state-container">
              <Loader2 size={32} className="spin" />
              <p>{t.retrievingArchives}</p>
            </div>
          )}

          {error && (
            <div className="state-container">
              <p className="error-text">{t.failedToRetrieve} {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="works-grid">
              {repos.map((repo, index) => (
                <RepoCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Photography Section */}
        <PhotoGallery />
      </main>
      
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} MORGAN CANTERI — {t.allRightsReserved}</p>
          </div>
          <div className="footer-right">
            <button className="footer-contact-btn" onClick={() => setIsDrawerOpen(true)}>
              <Mail size={14} />
              <span>{t.navContact}</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
