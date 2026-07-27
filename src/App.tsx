import { useState } from 'react';
import { Loader2, Code2 } from 'lucide-react';
import { useGithubRepos } from './hooks/useGithubRepos';
import { RepoCard } from './components/RepoCard';
import { PhotoGallery } from './components/PhotoGallery';
import { AboutTimeline } from './components/AboutTimeline';
import { ContactDrawer } from './components/ContactDrawer';
import { Toast } from './components/Toast';
import { LanguageToggle } from './components/LanguageToggle';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';
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

      {/* Header Bar */}
      <header className="header container">
        <nav className="nav-links">
          <a href="#works" className="nav-link">{t.navCode}</a>
          <a href="#photography" className="nav-link">{t.navPhotography}</a>
          <a href="https://www.linkedin.com/in/morgan-canteri-9a3900297/" target="_blank" rel="noopener noreferrer" className="nav-link">{t.navLinkedIn}</a>
          <LanguageToggle />
          <ThemeToggle />
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
            <div>
              <span className="section-eyebrow">
                <Code2 size={14} />
                <span>OPEN SOURCE & RESEARCH</span>
              </span>
              <h2 className="section-title">{t.featuredCodeTitle}</h2>
            </div>
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
      
      {/* High-End Site Footer */}
      <Footer onOpenContact={() => setIsDrawerOpen(true)} />
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
